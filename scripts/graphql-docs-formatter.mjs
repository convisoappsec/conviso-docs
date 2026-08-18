import { readFile, writeFile } from 'node:fs/promises';
import { sep } from 'node:path';
import {
  getNamedType,
  isEnumType,
  isInputObjectType,
  isLeafType,
  isListType,
  isNonNullType,
} from 'graphql';
import * as docusaurusFormatter from '@graphql-markdown/docusaurus/mdx';
import { operationExampleOverrides } from './api-operation-example-overrides.mjs';

const OPERATION_PATH = `${sep}operations${sep}`;
const EXAMPLES_IMPORT =
  "import ApiOperationExamples from '@site/src/components/ApiOperationExamples';";
const FIELD_PRIORITY = ['id', 'uuid', 'name', 'label', 'title', 'status'];

let schema;

function exampleScalarValue(type, fieldName) {
  switch (type.name) {
    case 'Boolean':
      return true;
    case 'Float':
      return 1.5;
    case 'ID':
      return fieldName?.endsWith('Id')
        ? `<${fieldName.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}>`
        : 'example-id';
    case 'Int':
      return 1;
    case 'String':
      return 'example';
    default:
      return `<${type.name}>`;
  }
}

function exampleInputValue(type, fieldName, depth = 0, seen = new Set()) {
  if (isNonNullType(type)) {
    return exampleInputValue(type.ofType, fieldName, depth, seen);
  }

  if (isListType(type)) {
    return [exampleInputValue(type.ofType, fieldName, depth + 1, seen)];
  }

  if (isEnumType(type)) {
    return type.getValues()[0]?.name;
  }

  if (!isInputObjectType(type) || depth >= 3 || seen.has(type.name)) {
    return isInputObjectType(type) ? {} : exampleScalarValue(type, fieldName);
  }

  const nextSeen = new Set(seen).add(type.name);
  return Object.fromEntries(
    Object.values(type.getFields())
      .filter((field) => isNonNullType(field.type) && field.defaultValue === undefined)
      .map((field) => [
        field.name,
        exampleInputValue(field.type, field.name, depth + 1, nextSeen),
      ]),
  );
}

function inputReferences(type, fieldName, references = []) {
  if (isNonNullType(type) || isListType(type)) {
    return inputReferences(type.ofType, fieldName, references);
  }

  if (!isInputObjectType(type)) {
    if (fieldName?.endsWith('Id')) {
      references.push(fieldName);
    }
    return references;
  }

  Object.values(type.getFields())
    .filter((field) => isNonNullType(field.type) && field.defaultValue === undefined)
    .forEach((field) => inputReferences(field.type, field.name, references));
  return references;
}

function automaticPrerequisite(field) {
  const reference = field.args
    .filter((argument) => isNonNullType(argument.type) && argument.defaultValue === undefined)
    .flatMap((argument) => inputReferences(argument.type, argument.name))
    .find((name) => {
      const resourceName = name.slice(0, -2);
      return schema?.getQueryType()?.getFields()[pluralize(resourceName)];
    });

  if (!reference) {
    return undefined;
  }

  const resourceName = reference.slice(0, -2);
  const lookupOperation = pluralize(resourceName);
  return `Run the ${lookupOperation} query first and use data.${lookupOperation}.collection[].id as ${reference}.`;
}

function pluralize(resourceName) {
  return resourceName.endsWith('y')
    ? `${resourceName.slice(0, -1)}ies`
    : `${resourceName}s`;
}

function selectionSet(type, depth = 0, seen = new Set()) {
  const namedType = getNamedType(type);
  if (isLeafType(namedType)) {
    return '';
  }

  if (depth >= 2 || seen.has(namedType.name) || !('getFields' in namedType)) {
    return '__typename';
  }

  const fields = Object.values(namedType.getFields())
    .filter((field) =>
      field.args.every(
        (argument) => !isNonNullType(argument.type) || argument.defaultValue !== undefined,
      ),
    )
    .sort(
      (left, right) => {
        const leftPriority = FIELD_PRIORITY.indexOf(left.name);
        const rightPriority = FIELD_PRIORITY.indexOf(right.name);
        const leftRank = leftPriority === -1 ? FIELD_PRIORITY.length : leftPriority;
        const rightRank = rightPriority === -1 ? FIELD_PRIORITY.length : rightPriority;
        return leftRank - rightRank || left.name.localeCompare(right.name);
      },
    )
    .slice(0, 3);

  if (fields.length === 0) {
    return '__typename';
  }

  const nextSeen = new Set(seen).add(namedType.name);
  return fields
    .map((field) => {
      const childSelection = selectionSet(field.type, depth + 1, nextSeen);
      return childSelection ? `${field.name} { ${childSelection} }` : field.name;
    })
    .join(' ');
}

function createOperationExample(operationType, field, override = {}) {
  const requiredArguments = field.args.filter(
    (argument) => isNonNullType(argument.type) && argument.defaultValue === undefined,
  );
  const argumentsByName = new Map(field.args.map((argument) => [argument.name, argument]));
  let overrideArgumentNames = Object.keys(override.variables ?? {});
  const unknownOverrideArguments = overrideArgumentNames.filter(
    (name) => !argumentsByName.has(name),
  );
  if (unknownOverrideArguments.length > 0) {
    console.warn(
      `[graphql-docs] Context for ${field.name} references unknown argument(s): ${unknownOverrideArguments.join(', ')}. Ignoring that context; update scripts/api-operation-contexts.mjs to match the schema.`,
    );
    override = {};
    overrideArgumentNames = [];
  }
  const variableNames = [
    ...new Set([
      ...requiredArguments.map((argument) => argument.name),
      ...overrideArgumentNames,
    ]),
  ];
  const variables = Object.fromEntries(
    variableNames.map((name) => [
      name,
      override.variables?.[name] ?? exampleInputValue(argumentsByName.get(name).type, name),
    ]),
  );
  const variableDefinitions = variableNames
    .map((name) => argumentsByName.get(name))
    .map((argument) => `$${argument.name}: ${argument.type}`)
    .join(', ');
  const argumentsCall = variableNames
    .map((name) => `${name}: $${name}`)
    .join(', ');
  const selection = selectionSet(field.type);
  const operationName = `${operationType === 'mutation' ? 'Mutate' : 'Get'}${field.name[0].toUpperCase()}${field.name.slice(1)}`;
  const call = `${field.name}${argumentsCall ? `(${argumentsCall})` : ''}`;
  const body = selection ? `${call} { ${selection} }` : call;

  return {
    operationName,
    query: `${operationType} ${operationName}${variableDefinitions ? `(${variableDefinitions})` : ''} {\n  ${body}\n}`,
    variables,
    prerequisite: override.prerequisite ?? automaticPrerequisite(field),
  };
}

function isOperationPage(filePath) {
  return filePath.includes(OPERATION_PATH);
}

function rootTypeFor(filePath) {
  if (filePath.includes(`${sep}mutations${sep}`)) {
    return { operationType: 'mutation', rootType: schema?.getMutationType() };
  }

  if (filePath.includes(`${sep}queries${sep}`)) {
    return { operationType: 'query', rootType: schema?.getQueryType() };
  }

  return {};
}

export async function afterLoadSchemaHook(event) {
  schema = event.data.schema;
}

export async function afterRenderTypeEntitiesHook(event) {
  const { filePath, name } = event.data;
  if (!schema || !isOperationPage(filePath)) {
    return;
  }

  const { operationType, rootType } = rootTypeFor(filePath);
  const field = rootType?.getFields()[name];
  if (!operationType || !field) {
    return;
  }

  const content = await readFile(filePath, 'utf8');
  const example = createOperationExample(
    operationType,
    field,
    operationExampleOverrides[name],
  );
  const component = `\n\n<ApiOperationExamples\n  operationName=${JSON.stringify(example.operationName)}\n  operationType=${JSON.stringify(operationType)}\n  query={${JSON.stringify(example.query)}}\n  variables={${JSON.stringify(example.variables)}}\n  prerequisite={${JSON.stringify(example.prerequisite ?? '')}}\n/>\n`;
  const withoutExistingExample = content
    .replace(new RegExp(`^${EXAMPLES_IMPORT.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\r?\\n`, 'm'), '')
    .replace(/\n*<ApiOperationExamples[\s\S]*?\/>\r?\n?/g, '\n');
  const withImport = withoutExistingExample.replace(
    /^(---\r?\n[\s\S]*?\r?\n---\r?\n)/,
    `$1\n${EXAMPLES_IMPORT}\n`,
  );

  await writeFile(filePath, `${withImport}${component}`);
}

export const {
  createMDXFormatter,
  formatMDXAdmonition,
  formatMDXBadge,
  formatMDXBullet,
  formatMDXDetails,
  formatMDXFrontmatter,
  formatMDXLink,
  formatMDXNameEntity,
  formatMDXSpecifiedByLink,
  mdxDeclaration,
} = docusaurusFormatter;
