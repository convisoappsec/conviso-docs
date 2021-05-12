module.exports = {
  schemaSidebar: [
    { type: "doc", id: "api/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "api/queries/occurrence",
        "api/queries/occurrences",
        "api/queries/occurrences-web",
        "api/queries/project",
        "api/queries/projects",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: ["api/mutations/create-occurrence-web"],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "api/directives/deprecated",
        "api/directives/include",
        "api/directives/skip",
        "api/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "api/objects/collection-metadata",
        "api/objects/create-occurrence-web-payload",
        "api/objects/occurrence",
        "api/objects/occurrence-collection",
        "api/objects/project",
        "api/objects/project-collection",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: ["api/inputs/create-occurrence-web-input"],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "api/scalars/boolean",
        "api/scalars/id",
        "api/scalars/int",
        "api/scalars/iso-8601-date-time",
        "api/scalars/string",
      ],
    },
  ],
};
