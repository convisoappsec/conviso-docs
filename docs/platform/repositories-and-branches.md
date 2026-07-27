---
id: repositories-and-branches
title: Repositories and Branches
sidebar_label: Repositories and Branches
description: Understand the repository model in Conviso Platform, where one asset represents one repository and every branch is tracked inside it, with vulnerabilities, scans and integrations attributed per branch.
keywords: [Repositories, Branches, multibranch, asset management, monorepo, default branch, branch vulnerabilities, Conviso Platform]
---

## Overview

In the **repository model**, one asset represents **one repository**, and every branch of that
repository is tracked **inside** it.

Previously, each branch, fork or subproject of the same codebase was registered as a **separate
asset**. Three branches of the same service meant three assets, three risk scores and three
independent vulnerability lists, with no built-in way to tell that they were the same
application.

With the repository model:

* **One asset = one repository.** The asset carries the repository identity (URL and canonical
  key).
* **Every branch is a record inside the asset.** Branches are listed, filtered and managed in
  the repository itself.
* **Vulnerabilities, scans and deploys belong to a branch.** You can tell exactly which branch a
  finding came from.
* **The repository's risk score reflects its default branch**, so the number you track is the
  risk of the code you actually ship.

:::info
This model is enabled **per account** by the Conviso team. Until it is enabled, Asset Management
behaves exactly as described in [Asset Management](./asset-management.md) — nothing changes in
your screens, filters or integrations.
:::

## Repositories List

Once the repository model is enabled, the **Assets** area in the left menu becomes
**Repositories**, and the list shows **one row per repository** instead of one row per branch.

Each row displays:

* The **repository name** and its **default branch**, marked with a `default` pill.
* The **Git URL** of the repository.
* The **risk score**, **open vulnerabilities**, **business impact**, **integrations**, **teams**
  and **last updated** columns you already know — all computed for the repository.
* A **`N branches`** badge when the repository has more than one branch.

### Expanding branches

Click the **`N branches`** badge to expand the row and see the repository's other branches. Each
branch shows its name and its **open vulnerabilities**, broken down by severity.

The expansion is read-only, and clicking anywhere else on the row opens the repository detail
page as usual.

### Filtering by branch

Open **More filters** to filter the list by **branch name**. This narrows the list to
repositories that contain a branch matching the name you typed, alongside all the existing asset
filters.

## Repository Detail

Opening a repository shows the same detail page you already use, with repository-specific
information added.

The header displays the repository name, creation and update dates, and a link to the
repository **Git URL**. The URL shown is always sanitized — credentials are never displayed or
stored in a visible link.

The page is organized into tabs:

| Tab | Content |
| --- | --- |
| **Details** | Risk score, risk parameters, open vulnerabilities, repository details, tags, description, developers and accesses |
| **Branches** | The repository's branches and the actions available on them |
| **CI/CD** | Scan configuration and recent scans |
| **Projects** | Projects linked to the repository |

:::note
The **risk score** shown on the Details tab is the risk of the **default branch**, not an average
across branches. A note under the score makes this explicit.
:::

## Branches Tab

The **Branches** tab lists every branch of the repository with:

* **Branch** — the branch name, with a `default` pill on the default branch.
* **Open Vulnerabilities** — the open findings of that branch, broken down by severity.
* **Actions** — the actions available for the branch.

Use the **All / Default only / Non-default** filters above the table to narrow the list.

### Creating a branch

Click **New Branch** next to the table title and enter the branch name. This is useful when you
want to track a branch before any scan or deploy has reported it.

Creating a branch that already exists does not duplicate it — the existing branch is kept.

### Setting the default branch

Select **Set as default** in a branch's actions menu, then provide a **reason** — the field is
required.

:::caution
Changing the default branch **recalculates the repository's risk score** and affects the
notifications derived from it, because the repository's risk always follows the default branch.
The change and its reason are recorded in the audit trail.
:::

### Renaming a branch

Select **Rename branch** to change a branch's label. Renaming only changes the display name — it
does not recalculate risk and does not move any finding.

Branches whose names were reported by an integration (a scanner or CI/CD pipeline) **cannot be
renamed**, because future syncs rely on the reported name. For those branches the option is not
offered.

### Deleting a branch

Select **Delete branch** and confirm.

:::danger
Deleting a branch also deletes the **vulnerabilities and scans that belong to that branch**. Use
it to remove branches that no longer exist in your repository, not to clean up the list view.
The **default branch cannot be deleted** — set another branch as default first.
:::

## Creating and Editing a Repository

When you create an asset, the form asks for the **Repository URL** (for example
`github.com/org/repo`). The asset name is **suggested automatically** from the URL as `org/repo`,
including for Azure DevOps URLs, and you can still adjust it.

Creating a repository that already exists in your account does not create a duplicate — you are
working with the same repository.

When editing, the **Repository URL** can be updated. Legacy assets that have no repository URL
yet keep showing the asset name field as well.

## Vulnerabilities by Branch

### Branch column in the vulnerability list

The vulnerability list has a **Branch** column, placed right after **Asset**, showing the branch
each finding belongs to.

The column is **hidden by default** — enable it in the table's column settings. Findings from
assets that are not repositories (cloud, domain or API assets, or assets not yet migrated) show
a dash.

### Filtering by branch

Open the vulnerability filters and use the **branch** field to filter findings by branch name.
The filter is global: it works across all repositories, not only inside one.

:::note
Filtering by branch returns **only findings attributed to that branch**. Older findings recorded
before the repository model was enabled have no branch, so they are excluded from the result.
Clear the filter to see them again.
:::

### Branch on the vulnerability detail

On a vulnerability's detail page, the **Affected Assets** card shows the branch next to the
asset, so the origin of the finding is visible without going back to the list.

### Reporting a vulnerability on a specific branch

When you create a **source code** vulnerability manually, a **Branch** field lets you choose
which branch of the selected asset the finding belongs to. The field is enabled once an asset is
selected and lists that asset's branches.

## Integrations and Branches

### Scanner sync status per branch

In a repository's **integrations** panel, scanner synchronizations are **grouped by branch**:
each scanner shows one row per branch, with that branch's sync status and last sync date. This
makes it clear which branches a scanner is actually covering.

### Adding projects from a scanner integration

When importing projects from a scanner integration ("Add Project"), each project row asks for the
**Repository** it maps to, so imported findings land on the right repository. Scanners that
already let you pick the tool's branches keep that selection unchanged.

### Defect trackers

In the **Add new Project** modal of supported defect trackers, the asset field is labeled
**Repository**, and an optional **Branch** field lets you route the configuration to a single
branch.

Leaving the Branch field empty keeps the configuration at repository level, applying to **all**
branches.

## Migrating Existing Assets to Repositories

Accounts that already used the platform before the repository model have assets representing
individual branches. Consolidating them into repositories is performed by the **Conviso team**,
not from your account, and it is not a destructive operation:

* Assets that represent the same codebase are combined into a single repository, and each of them
  becomes a **branch** of it.
* **Vulnerabilities, scans, integrations and history are preserved** and moved under the
  corresponding branch.
* **Existing links keep working.** Bookmarks and deep links to a former asset resolve to the
  repository it became — they do not break.
* If a consolidation was not what you expected, the Conviso team can split the repository back
  into separate assets.

If you want your account consolidated, or a specific grouping reviewed, contact Conviso Support.

## Current Limitations

* The **scan list** does not yet display a branch column. Scans are still listed per asset.
* **SBOM** inventory is presented at repository level and is not split per branch yet.

## Related Areas

* [Asset Management](./asset-management.md) — the asset list, filters, creation and export flows
  that also apply to repositories.
* [Vulnerabilities](./vulnerabilities.md) — the vulnerability list, filters and detail page.
* [Risk Score](./risk-score.md) — how the risk score of a repository is computed.
* [SBOM Management](./sbom-management.md) — component inventory for your repositories.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.
