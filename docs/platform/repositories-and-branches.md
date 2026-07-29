---
id: repositories-and-branches
title: Repositories and Branches
sidebar_label: Repositories and Branches
description: Understand the repository model in Conviso Platform, where one asset represents one repository and every branch is tracked inside it, with vulnerabilities, scans and integrations attributed per branch.
keywords: [Repositories, Branches, multibranch, asset management, default branch, branch vulnerabilities, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Overview

In the **repository model**, one asset represents **one repository**, and every branch of that
repository is tracked **inside** it.

Previously, each branch of the same codebase was registered as a **separate asset**. Three
branches of the same service meant three assets, three risk scores and three independent
vulnerability lists, with no built-in way to tell that they were the same application.

With the repository model:

* **One asset = one repository**, registered with the address you use to clone it.
* **Every branch is listed inside the repository**, with its own open vulnerabilities.
* **Vulnerabilities, scans and deploys show which branch they came from.**
* **The repository's risk score reflects its default branch**, so the number you track is the
  risk of the code you actually ship.

:::info
This model is enabled **per account** by the Conviso team. Until it is enabled, Asset Management
behaves exactly as described in [Asset Management](./asset-management.md) — nothing changes in
your screens, filters or integrations.
:::

:::note
Enabling the model does not, by itself, group your existing assets. Assets that already represent
individual branches keep a row of their own until they are consolidated — see
[When Conviso Consolidates Your Assets](#when-conviso-consolidates-your-assets).
:::

## Finding Your Repositories

You will find the list under **Assets > Repositories** in the left menu — the same place as
before. Enabling the repository model does not rename anything in the menu; what changes is the
list itself, where each row can now hold branches.

Each row displays:

* The **repository name**, with the **default branch** shown as a chip below it, and the
  repository's **Git URL** when one is recorded.
* The **risk score**, **open vulnerabilities**, **business impact**, **scanners**,
  **integrations**, **teams** and **last updated** columns you already know. **Tags** is
  available too, hidden by default — turn it on in the table's column settings.
* A **`N branches`** badge when the repository has more than one branch. The count includes the
  default branch.

:::caution
The **risk score** and **open vulnerabilities** on the row are those of the repository's **default
branch**, not the sum of all its branches — the other columns describe the repository as a whole.

This is why a repository row can show 12 open vulnerabilities while the Vulnerabilities list
filtered by that repository returns 30: the other 18 are on non-default branches, fully visible
but not part of the headline number. See [What Each Screen Shows](#what-each-screen-shows).
:::

### Seeing a repository's branches

Click the **`N branches`** badge to expand the row and see the repository's **other** branches —
the default branch is not repeated in the expansion. Each branch shows its name and its **open
vulnerabilities**, broken down by severity.

The expansion is read-only, and clicking anywhere else on the row opens the repository as usual.

### Filtering by branch

Open **Advanced filters** above the list. There are two branch filters and they do different
things:

* On the **Basic** tab, the **Branch** field does **not** change which repositories are listed.
  It filters the branches you see when you **expand** a row: type `release` and each expanded
  repository shows only its branches whose name contains `release`. Upper and lower case are
  ignored here.
* On the **Advanced** tab, add a rule on **Branch** to narrow the **list itself** — only
  repositories that have a branch matching the rule are returned. Use `contains` to match part of
  a name, or `is` / `is not` to match it exactly, and combine the rule with the other asset
  filters. This match is case-sensitive.

## Inside a Repository

Opening a repository shows the same detail page you already use, with repository-specific
information added. The header displays the repository name and its creation and update dates, and
the page is organized into tabs:

| Tab | Content |
| --- | --- |
| **Details** | Risk score, risk parameters, open vulnerabilities, a **Details** card (integrations, scanners, technology, SBOM and the repository's Git URL), tags, description, developers and accesses |
| **Branches** | The repository's branches and the actions available on them |
| **CI/CD** | Scan configuration and recent scans |
| **Projects** | Projects linked to the repository |

:::note
The **Branches** tab is shown for repositories only. An asset that has not become a repository yet
keeps the Details, CI/CD and Projects tabs.
:::

The repository's **Git URL** appears on the **Details** tab, inside the **Details** card, as a
link that opens the repository in a new tab. When no URL is recorded the field shows
**Not Defined**.

:::caution
Credentials placed before the host — for example `https://user:token@github.com/org/repo` — are
removed from the link before it is displayed, so a token is never shown or clickable on screen.
That protects the display only: **register your repositories with a clean URL**, without any
personal access token.
:::

The **risk score** and the **open vulnerabilities** on the Details tab are those of the
repository's **default branch** — the same numbers shown on the default branch's row in the
**Branches** tab. **Manage your vulnerabilities** opens the vulnerability list already filtered by
the default branch, so the two views agree.

### The Branches tab

The **Branches** tab lists every branch of the repository with:

* **Branch** — the branch name, with a `default` pill on the default branch.
* **Open Vulnerabilities** — the open findings of that branch, broken down by severity.
* **Actions** — the actions available for the branch.

Use the **All / Default only / Non-default** filters above the table to narrow the list.

Branches appear on their own the first time a scan or a deploy reports them, so the tab fills up
as your pipelines run. **New Branch**, next to the table title, is there for when you want to
track a branch before anything has reported it.

:::note
Branch names are **case-sensitive**, exactly as in Git: `main` and `Main` are two different
branches. Adding a branch that is already listed does not duplicate it.
:::

## Registering a Repository

When you create a repository, the form asks for the **Repository URL** — the address you use to
clone it, for example `https://github.com/org/repo`. The field is **required** and only accepts a
complete `http(s)` address: `github.com/org/repo`, without `https://`, is rejected as an invalid
URL.

The **Asset Name** is suggested automatically from the URL as `org/repo`, including for Azure
DevOps addresses. The field is required — the suggestion simply fills it in for you, and you can
replace it with any name you prefer. Repository names do not have to be unique in your account.

:::danger Use the clone URL, not your browser's address bar
The address in your browser usually carries extra segments — `.../tree/main`, `.../-/tree/main`,
`.../pull/42`, `.../blob/main/README.md`. An address like that registers a **separate entry** that
your scans will never reach: it stays at risk score 0 with no findings, while your real results go
somewhere else.

The quickest tell is the **Asset Name** the form suggests while you type: for a correct URL it
reads `org/repo`. If it reads something like `tree/main`, you pasted a browser URL.
:::

Pick one address per repository and use it everywhere — when you create the asset, when you import
projects from a scanner and when you configure a defect tracker. Some Git servers publish an HTTPS
address and an SSH address that do not look alike, Azure DevOps being the common case; registering
both leaves you with two separate entries for the same codebase.

:::caution
If the Repository URL you entered already belongs to a repository in your account, the repository
is **not** created — the form fails to save and nothing is stored. The screen reports a generic
save error, so if you see one right after entering a Repository URL, the most likely cause is that
the repository is already registered. Search the Repositories list for its name or its Git URL and
open the existing entry.
:::

The **Asset Name** field is always shown, for repositories and for older assets alike. Once the
repository model is enabled, the **Repository URL** field also appears when you edit any asset,
including older assets that do not have one yet.

When editing, the Repository URL can be updated: the repository then follows the new address, and
future scans are matched to it. If that URL already belongs to another repository in your account,
the change is refused and nothing is saved.

:::note
Recording a URL on an older asset stores the address, but it does not by itself turn that asset
into a repository with branches. That conversion is done by the Conviso team — see
[When Conviso Consolidates Your Assets](#when-conviso-consolidates-your-assets).
:::

### If you already have duplicates

If the same codebase ended up registered twice — for example one entry created from a browser URL
and another from the clone URL — the entries can be consolidated into a single repository, each
becoming a branch of it. Contact Conviso Support with both repository names.

## Setting the Branch That Represents Production

The repository's risk score follows its **default branch**, so the default branch should be the
branch you actually ship.

A repository you create by hand starts with a single branch named `main`. If your production
branch has another name, adjust it before or right after the first scan:

| Situation | What to do |
| --- | --- |
| Nothing has been scanned yet and only `main` is listed | **Rename** it to your real branch name, so your scans report to that branch instead of creating a second one |
| Your real branch is already listed because a scan reported it | Open its actions menu and choose **Set as default** |

### Setting the default branch

Select **Set as default** in a branch's actions menu, then provide a **reason** — the field is
required.

:::caution
Changing the default branch **recalculates the repository's risk score** and affects the
notifications derived from it, because the repository's risk always follows the default branch.

The open-vulnerability counters switch immediately; the recalculated score appears on the Details
tab a few minutes later, so do not repeat the change if the number has not moved yet.

A default-branch change can move the score **without your security posture having changed** — you
changed *which code* is being measured. Take note of the score before the change if you report it
upward.
:::

If you need the history of default-branch changes for a repository, ask Conviso Support.

### Renaming a branch

Select **Rename branch** to change a branch's name. Renaming does not move any finding, does not
change which branch is the default, and does not change the risk score.

A branch can only be renamed while no scan and no deploy has been recorded on it — after that,
scanners and pipelines rely on the name to report to the right branch, and the option is no longer
offered in its actions menu. The branch the platform starts you with is the exception: you can
always rename it to your real branch name.

### Deleting a branch

Select **Delete branch** and confirm.

:::danger
Deleting a branch also deletes the **vulnerabilities, the scans and the scan history that belong
to that branch** — including a scan still running on it, which is cancelled. Deploys recorded on
the branch are kept.

The effect goes beyond the branch: those findings disappear from the vulnerability list, from the
exports and retroactively from the dashboard charts. This cannot be undone from your account.

Use it to remove branches that no longer exist in your repository, not to tidy up the list view.
The **default branch cannot be deleted** — set another branch as default first.
:::

## Vulnerabilities by Branch

### Which branch a finding appears on

Findings appear under the branch your scan reported, whether they came from the Conviso CLI, a
CI/CD pipeline, a scanner integration or a file upload. A branch that is not listed yet appears
the first time it is reported.

:::caution
When a scan does not report a branch, its findings appear on the repository's **default branch** —
where they do count towards the risk score you report upward. If findings keep landing on the
default branch whatever branch you built, your scan is not reporting a branch.
:::

The same issue detected on `main` and on `release/2.0` is tracked as **two findings**, one per
branch, so each branch keeps its own list, its own status and its own history. A finding stays on
its branch: fixing it on a feature branch closes it there, and the one on the default branch
closes when the default branch is scanned after the merge.

Findings on assets that are not repositories — cloud, domain or API assets — have no branch.

### The Branch column

The vulnerability list has a **Branch** column, placed right after **Asset**. The column is
**hidden by default** — enable it in the table's column settings.

A dash appears when the finding has no branch: assets that are not repositories, and assets that
have not been consolidated into a repository yet. On a repository, findings recorded **before** the
repository model was enabled are shown under the repository's **default branch**.

### Filtering by branch

Open the vulnerability filters and use the **branch** field to filter findings by branch name. The
filter is global: it works across all repositories, so a branch name that exists in several
repositories returns the findings of all of them.

The name must match **exactly**: the match is case-sensitive (`Main` is not `main`), it matches
the whole name (`release` does not match `release/2.0`), it takes one name at a time, and a name
that matches no branch returns an **empty list** rather than the unfiltered one.

:::note
Findings recorded before the repository model was enabled are shown under the default branch, but
filtering by that same branch name does **not** return them, and they are not counted in the
default branch's risk score either.

Clear the branch filter to see them again, or ask Conviso Support to attribute your older findings
to the default branch. Once that is done they behave like any other finding of that branch, in the
filter and in the risk score alike.
:::

### Branch on the vulnerability detail

On a vulnerability's detail page, the **Affected Assets** card shows the branch next to the asset,
so the origin of the finding is visible without going back to the list.

### Reporting a vulnerability on a specific branch

When you create a **source code** vulnerability manually, a **Branch** field lets you choose which
branch of the selected asset the finding belongs to. The field is enabled once an asset is
selected, lists that asset's branches, and comes already filled in with the repository's default
branch — change it only when the finding is on another branch.

**Web** and **network** vulnerabilities do not have a Branch field. When you report one on a
repository it is recorded on that repository's **default branch**, so it counts towards the
repository's risk score like any other finding.

## What Each Screen Shows

The same repository can legitimately show different vulnerability totals on different screens.
This table is the reference:

| Screen | What it shows |
| --- | --- |
| **Risk score** of a repository | The **default branch** |
| **Open vulnerabilities** column in the Repositories list | The default branch |
| **Open vulnerabilities** card on the repository's Details tab | The default branch |
| Counts in the **Branches** tab and in the expanded `N branches` row | That branch |
| **Repositories CSV export** | The default branch |
| **SBOM** inventory | The default branch |
| **Vulnerabilities** list, its counters and the vulnerabilities CSV export | **All branches**, unless you apply the branch filter |
| **Dashboards** and the reports exported from them | **All branches** |
| **Security Gate** result | The branch your pipeline reported, or the default branch when it reports none |

:::info
The rule of thumb: everything that summarizes a repository as **one number** shows the default
branch; everything that **lists findings** shows every branch. Opening the Vulnerabilities list
from the repository's card applies the default-branch filter for you, so the list and the card
agree — clear the branch filter to see the other branches.
:::

Assets that are not repositories are unaffected: all of their open vulnerabilities keep counting,
exactly as before.

## Scanners and Defect Trackers

### Scanner sync status per branch

On a repository's **Details** tab, click **Show Syncs** next to **Scanners** to open the
**Scanner Synchronizations** panel. Each scanner appears as a single card listing **one row per
branch**, with that branch's status, its progress and a button to synchronize that branch on its
own.

The **Last Sync** date is shown once per scanner and is the most recent synchronization across the
repository's branches — it is not a date per branch. Fortify, Checkmarx, Dependency Track and
Conviso DAST report it; the other scanners show status only. Scanners that report without a branch
keep the single card you already know.

### Importing projects from a scanner integration

When you import projects from a scanner integration, each project row gains a **Repository**
column where you enter the repository the project maps to, so imported findings land on the right
repository. This applies to Checkmarx, Snyk, SonarCloud, SonarQube, Fortify, Veracode, Dependency
Track and Salt Security; Tenable is unchanged and does not ask for a repository.

For Snyk, SonarCloud and SonarQube the repository is filled in and locked automatically whenever
the scanner already reports it. Except on Fortify, you cannot add the selected projects until
every one of them has a repository.

Branch selection depends on the scanner:

* **Checkmarx** and **Fortify** keep their existing multi-select, so you can still import several
  branches — or, for Fortify, several application versions — at once.
* **SonarCloud** and **SonarQube** now import **one branch per project**: the branch list becomes
  a single choice, and when the project reports no branches you type the branch name.
* **Snyk**, **Veracode**, **Dependency Track** and **Salt Security** gain a **Branch** field where
  you pick or type the single branch to import. On Snyk, importing every project at once is no
  longer offered, since each project needs its own repository.

The branch you choose here is where that project's findings appear from then on.

### Defect trackers

Once the repository model is enabled, the configuration form of **Jira V2**, **ServiceNow**,
**Azure Boards** and **Business Map** labels the asset field **Repository** and offers an optional
**Branch** field, so you can route a configuration to a single branch. **ClickUp** and the first
version of the Jira integration do not offer it yet.

Leaving the Branch field empty keeps the configuration at repository level: it applies to every
branch that does not have a configuration of its own. You can keep a repository-level
configuration and add branch-specific ones alongside it — a finding on a branch that has its own
configuration goes there, and everything else uses the repository-level one.

## When Conviso Consolidates Your Assets

Accounts that already used the platform before the repository model have assets representing
individual branches. Combining them into repositories is done by the **Conviso team**, not from
your account. Contact Conviso Support if you want your account consolidated, or a specific
grouping reviewed.

Your vulnerabilities, scans and history are not deleted: they move under the branch they came
from, keeping their status, comments, assignees and defect-tracker links. Existing links keep
working — bookmarks and deep links to a former asset open the repository it became, and your
pipelines and scanner integrations keep reporting without being edited.

### What you will see afterwards

| What you had | What you see afterwards |
| --- | --- |
| One row per branch in the asset list | One repository row, with a `N branches` badge |
| The name you gave to each asset | The repository name taken from the Git URL, as `org/repo` |
| Tags, technologies and environments per asset | All of them together, on the repository |
| Access lists per asset | Everyone who could see any of the assets can see the repository |
| Projects and scanner integrations per asset | All of them on the repository |

The asset that tracked `develop` becomes the `develop` branch, so nothing is lost from view — it
moves inside the repository.

:::caution
The totals you report upward will move on the day of the consolidation, without your security
posture having changed:

* The repository's **risk score** and **open vulnerabilities** show the **default branch only**,
  so findings that used to be counted on separate branch assets no longer feed the headline number.
* The **Vulnerabilities list and the dashboards keep showing every branch**, so those totals stay
  the same. A gap between the repository card and the vulnerability list after a consolidation is
  expected, not a loss of data.

Take a snapshot of the numbers you track before the consolidation.
:::

:::caution
**Saved filters pinned to a former asset return an empty list.** A saved or bookmarked
vulnerability filter that names the old asset does not follow it to the repository — rebuild the
filter against the repository. Links to the asset page itself do keep working.
:::

Cloud, API and domain assets are never turned into repositories, and archived assets are left out
— unarchive them first if you want them included. Risk parameters such as business impact and data
classification are not combined automatically, so tell Conviso Support which values should apply to
the repository if the assets differ.

If a consolidation was not what you expected, talk to Conviso Support: a repository can be split
back into separate assets. It is worth reviewing the case with the team before requesting it.

## If Something Looks Wrong

| What you see | What to do |
| --- | --- |
| Findings land on the default branch whatever branch you built | Your scan is not reporting a branch. Update the Conviso CLI and confirm the pipeline runs on a real checkout; for scanner integrations, check the branch chosen when the project was imported |
| The Branch column shows a dash | The asset is not a repository, or the finding is older than the repository model. Add the Repository URL to the asset; for older findings, contact Conviso Support |
| The repository shows risk `0` while findings keep arriving | The findings are on a branch that is not the default. Open the Branches tab and use **Set as default** on your production branch |
| The same branch appears twice with slightly different names | Branch names are case-sensitive, so each spelling is a separate branch. Standardize the name your pipeline reports, then delete the one created by mistake — this deletes its findings and scans |
| A branch you never scanned appeared on its own | A deploy or an integration reported it. Delete it if the branch no longer exists in your repository |
| Filtering by branch returns nothing for findings you can see | Check capitalization and the full branch name. Findings older than the repository model are not returned by the filter |
| A repository you registered stays at risk score 0 with no findings | Its Repository URL may not be the clone URL. Open the repository and compare the Git URL on the Details tab with the address your pipeline reports |

## Current Limitations

* The **scan list** shows a Branch column, but scans cannot yet be **filtered** by branch.
* The **SBOM** screens show the components of the **default branch** only. An SBOM sent for
  another branch is recorded, but is not displayed yet.
* The **vulnerabilities CSV export** does not carry a Branch column, so two findings for the same
  vulnerability on two branches are indistinguishable in the spreadsheet. Filter by branch before
  exporting if you need a single branch.
* **Dashboards** have no branch filter — they show every branch.
* The branch list **grows on its own** as scanners and deploys report new names, and there is no
  bulk cleanup.
* **Notifications** identify the repository, not the branch.

## Related Areas

* [Asset Management](./asset-management.md) — the asset list, filters, creation and export flows
  that also apply to repositories.
* [Vulnerabilities](./vulnerabilities.md) — the vulnerability list, filters and detail page.
* [Risk Score](./risk-score.md) — how the risk score of a repository is computed.
* [SBOM Management](./sbom-management.md) — component inventory for your repositories.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.
