---
id: sast
title: SAST
sidebar_label: SAST
---


## Static Application Security Testing (SAST)
Using the CLI is very simple to execute a SAST at your source code repository.
The results will be sent to your AppSec Flow application by using the *project code identifier*.

Assuming that my_source_code_repository is a git repository, you can:

```sh
$ export FLOW_API_KEY='your-api-key'
$ export FLOW_PROJECT_CODE='your-project-code'
$ cd my_source_code_repository
$ flow sast run
```

The following instructions has the same effect.

```sh
$ cd my_source_code_repository
$ flow --api-key 'your-api-key' sast run --project-code 'your-project-code'
```

## Output

* [`report`](#reference-report) (root object)
* [`summary`](#reference-summary)
    * [`issues count`](#reference-issues_count)


---------------------------------------
<a name="reference-issue"></a>

### issues

Issue description TODO

**`issues` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**title**|`string`|| &#10003; Yes|
|**description**|`string`||No|
|**references**|`string` `[]`||No|
|**filename**|`string`||No|
|**line**|`integer`||No|
|**reporter**|`string`||No|
|**evidence**|`string`|| &#10003; Yes|
|**hash_evidence_line**|`string`||No|
|**hash_evidence_full**|`string`||No|
|**id**|`string`|| &#10003; Yes|
|**hash_issue**|`string`||No|
|**severity**|`any`|| &#10003; Yes|

Additional properties are allowed.

* **JSON schema**: [issue.schema.json](pathname:///schemas/cli/sast/issue.schema.json)

#### issue.title

* **Type**: `string`
* **Required**:  &#10003; Yes
* **Minimum Length**`: >= 1`

#### issue.description

* **Type**: `string`
* **Required**: No
* **Minimum Length**`: >= 1`

#### issue.references

* **Type**: `string` `[]`
    * Each element in the array must have length greater than or equal to `1`.
* **Required**: No

#### issue.filename

* **Type**: `string`
* **Required**: No
* **Minimum Length**`: >= 1`

#### issue.line

* **Type**: `integer`
* **Required**: No
* **Allowed values**:

#### issue.reporter

* **Type**: `string`
* **Required**: No
* **Minimum Length**`: >= 1`

#### issue.evidence

* **Type**: `string`
* **Required**:  &#10003; Yes
* **Minimum Length**`: >= 1`

#### issue.hash_evidence_line

* **Type**: `string`
* **Required**: No

#### issue.hash_evidence_full

* **Type**: `string`
* **Required**: No

#### issue.id

* **Type**: `string`
* **Required**:  &#10003; Yes
* **Minimum Length**`: >= 1`

#### issue.hash_issue

* **Type**: `string`
* **Required**: No
* **Minimum Length**`: >= 1`

#### issue.severity

* **Type**: `any`
* **Required**:  &#10003; Yes
* **Allowed values**:
    * `undefined`
    * `critical`
    * `high`
    * `medium`
    * `low`
    * `info`




---------------------------------------
<a name="reference-issues_count"></a>

### issues count

Issues count description TODO

**`issues count` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**technologies**|`string` `[]`|| &#10003; Yes|
|**issues_count**|`object`|| &#10003; Yes|

Additional properties are allowed.

* **JSON schema**: [issues_count.schema.json](pathname:///schemas/cli/sast/issues_count.schema.json)

#### issues_count.technologies

* **Type**: `string` `[]`
    * Each element in the array must have length greater than or equal to `1`.
* **Required**:  &#10003; Yes

#### issues_count.issues_count

* **Type**: `object`
* **Required**:  &#10003; Yes
* **Type of each property**: `integer`




---------------------------------------
<a name="reference-report"></a>

### report

Sastbox report description TODO

**`report` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**summary**|`summary`|Summary description TODO| &#10003; Yes|
|**issues**|`issue` `[]`|TODO| &#10003; Yes|

Additional properties are allowed.

* **JSON schema**: [report.schema.json](pathname:///schemas/cli/sast/report.schema.json)

#### report.summary

Summary description TODO

* **Type**: `summary`
* **Required**:  &#10003; Yes

#### report.issues

TODO

* **Type**: `issue` `[]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-summary"></a>

### summary

Summary description TODO

**`summary` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**technologies**|`string` `[]`|| &#10003; Yes|
|**issues_count**|`issues_count`|Issues count description TODO| &#10003; Yes|
|**additionalProperties**|`integer`||No|

Additional properties are allowed.

* **JSON schema**: [summary.schema.json](pathname:///schemas/cli/sast/summary.schema.json)

#### summary.technologies

* **Type**: `string` `[]`
    * Each element in the array must have length greater than or equal to `1`.
* **Required**:  &#10003; Yes

#### summary.issues_count

Issues count description TODO

* **Type**: `issues_count`
* **Required**:  &#10003; Yes

#### summary.additionalProperties

* **Type**: `integer`
* **Required**: No
* **Minimum**: ` >= 0`
