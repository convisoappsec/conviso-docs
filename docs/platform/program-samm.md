---
id: program-samm
title: Program (OWASP SAMM)
sidebar_label: Program (SAMM)
description: Manage AppSec programs in the Conviso Platform using OWASP SAMM v2 — charter, assessments, initiatives, roadmap, and PDF reports.
keywords: [Program, OWASP SAMM, SAMM v2, AppSec program, maturity, charter, roadmap, risk appetite, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Overview

The **Program** module in the Conviso Platform structures your Application Security program around **OWASP SAMM v2**. It lets teams define program scope, run maturity assessments, plan initiatives, track roadmap progress, and generate executive PDF reports.

Use it to:

* declare the program **charter** (scope, current/target maturity, risk appetite, review cycle);
* associate **assets** that belong to the program scope;
* run **SAMM assessments** manually or by importing the official OWASP SAMM spreadsheet;
* visualize maturity through **dual radar charts** (Business Function and Practice level);
* build a **roadmap** with gap analysis, priority, and initiative mapping;
* track **initiatives** linked to specific SAMM practices and Conviso projects;
* generate a **PDF program report** in English or Portuguese.

## OWASP SAMM in a Nutshell

OWASP SAMM (Software Assurance Maturity Model) organizes AppSec activities across:

* **5 Business Functions** — Governance, Design, Implementation, Verification, Operations.
* **15 Practices** — three per Business Function (e.g. Strategy & Metrics, Threat Assessment, Secure Build).
* **2 Streams per practice** — **Stream A** and **Stream B** measure complementary aspects of the same practice.
* **Maturity levels 0 → 3** — each stream is scored independently and averaged.

The platform follows this structure end-to-end: scoring, charts, and roadmap are all aligned to SAMM v2 practices and streams.

## Access the Feature

In the left-hand menu, open **Program**. The program workspace exposes the following tabs:

* **Charter** — program identity, scope, and targets.
* **Assets** — assets included in the program scope.
* **Assessments** — SAMM v2 maturity assessments (manual or imported).
* **Initiatives** — practice-level improvement initiatives.
* **Roadmap** — gap analysis and prioritized actions.
* **Report** — PDF report generation.

<div style={{textAlign: 'center'}}>

![Program Overview](../../static/img/platform/program-overview.png "Program workspace overview.")

</div>

## Program Charter

The **Charter** defines the identity and targets of your AppSec program. It is the reference for all subsequent assessments and roadmap calculations.

Editable fields:

* **Scope** — free-text description of what the program covers (e.g. "Customer-facing web platform", "All payment-processing services").
* **Current Maturity** — current overall maturity (0.0 – 3.0, float). Auto-suggested from the latest assessment but editable.
* **Target Maturity** — the maturity level the program aims to reach. Displayed with SAMM level badges.
* **Risk Appetite** — slider from `0` to `100`, mapped to a label:
  * `0 – 25` → **Low**
  * `26 – 50` → **Moderate**
  * `51 – 75` → **High**
  * `76 – 100` → **Critical**
* **Review Cycle (months)** — how often the program is reassessed.
* **Reference Assessment** — the assessment used as the program's baseline for reporting.

<div style={{textAlign: 'center'}}>

![Program Charter](../../static/img/platform/program-charter.png "Program Charter form with maturity badges and risk appetite slider.")

</div>

### Risk Appetite Slider

The risk appetite slider is animated and shows the four zones (Low / Moderate / High / Critical) with color indicators. The label updates as the slider moves.

<div style={{textAlign: 'center'}}>

![Risk Appetite Slider](../../static/img/platform/program-risk-appetite.png "Risk Appetite slider with zone indicators.")

</div>

## Program Assets

The **Assets** tab lets you associate existing platform assets with the program scope. This is what ties SAMM maturity to the actual systems being measured.

You can:

* search and associate assets via the **Associate Asset** dialog (search and pagination supported);
* remove an asset from the program scope at any time.

<div style={{textAlign: 'center'}}>

![Program Assets](../../static/img/platform/program-assets.png "Program scope assets list and Associate Asset dialog.")

</div>

For asset definitions and management outside the program context, see [Asset Management](./asset-management.md).

## SAMM Assessments

The **Assessments** tab is where maturity is measured. You can create assessments in two ways:

### 1. Manual Assessment

Create a new assessment and answer the SAMM v2 questionnaire directly in the platform. Each of the 15 practices is split into Stream A and Stream B questions; answers feed the score calculator.

### 2. Import from Spreadsheet

If you already use the official OWASP SAMM toolbox spreadsheet, import answers directly:

1. Open the **Assessments** tab.
2. Click **Import SAMM Spreadsheet**.
3. Upload the `.xlsx` (or compatible CSV) file.
4. The platform parses the answers, runs the score calculator, and creates the assessment with the `imported` flag set.

<div style={{textAlign: 'center'}}>

![Import SAMM Spreadsheet](../../static/img/platform/program-import-samm.png "Import SAMM assessment from Excel/CSV spreadsheet.")

</div>

### Assessment Panel

Once created, the assessment opens with a dual-radar visualization:

* **Business Function Radar** — 5-axis radar showing the average maturity for each of Governance, Design, Implementation, Verification, Operations.
* **Practice Radar** — 15-axis radar showing the average maturity for each individual practice.

A scores table below the charts breaks every practice down by **Stream A** (dark bar) and **Stream B** (gold bar), making partial progress immediately visible — instead of a single number, each practice shows two mini progress bars.

<div style={{textAlign: 'center'}}>

![SAMM Assessment Panel](../../static/img/platform/program-assessment-panel.png "Dual radar (Business Function + Practice) with Stream A/B progress bars.")

</div>

### Viewing Answers

The assessment view page exposes the full answer payload, so reviewers can audit which option was selected for each Stream A / Stream B question.

<div style={{textAlign: 'center'}}>

![Assessment Answers](../../static/img/platform/program-assessment-answers.png "Per-question answer view for an imported assessment.")

</div>

## Initiatives

**Initiatives** are improvement actions tied to a specific SAMM practice. Each initiative can be associated with one or more Conviso **projects** to drive execution.

Key behaviors:

* initiatives are created **per practice** and enforce the **Stream A** scope on creation/deletion;
* the **Practice Initiative Card** lists initiatives grouped by practice;
* the **Associate Project** dialog binds a Conviso project to an initiative so requirement work and vulnerability data flow into the program view.

<div style={{textAlign: 'center'}}>

![Initiatives Panel](../../static/img/platform/program-initiatives.png "Initiatives grouped by SAMM practice with associated projects.")

</div>

For project workflow details, see [Projects](./projects.md) and [Project Management / Process](../project-management/process.md).

## Roadmap

The **Roadmap** is generated from the reference assessment and the charter target. It identifies practices that fall **below** the target maturity and ranks them.

For each practice in the gap, the roadmap shows:

* **Current** vs **Target** maturity;
* **Gap** size;
* **Priority badge** — `Critical` / `High` / `Medium` / `Low`, derived from gap size and risk appetite;
* **Initiatives** mapped to that practice (with associated projects).

<div style={{textAlign: 'center'}}>

![Roadmap Panel](../../static/img/platform/program-roadmap.png "Security roadmap with gap analysis, priority badges, and initiative mapping.")

</div>

### Relative Scoring (PTT and PTD)

The roadmap and report use two relative metrics:

* **PTT — Percent to Target** — how far the current maturity is from the program target.
* **PTD — Progress to Date** — how much progress has been made from the baseline toward the target.

Each metric drives a 4-segment bar with pre-computed widths so the report renders identically to the in-platform view.

## Program Report (PDF)

The **Report** dialog triggers PDF generation through the `generateProgramReport` mutation. The worker:

1. Computes practice scores (15 practices × Stream A + B).
2. Aggregates Business Function averages and total program maturity.
3. Calculates PTT and PTD plus 4-segment bar widths.
4. Pre-computes SVG coordinates for the BF (5-axis) and Practice (15-axis) radars.
5. Builds the roadmap (practices below target, gap, priority, initiative mapping).
6. Resolves the risk appetite label from the 0–100 slider value.
7. Sends the full payload to `go-report`, which renders the final PDF.

You can choose the report language: **English** or **Portuguese**.

<div style={{textAlign: 'center'}}>

![Program Report Dialog](../../static/img/platform/program-report-dialog.png "Program Report generation dialog with EN/PT language selection.")

</div>

## Typical Workflow

1. **Create the program** and fill the **Charter** (scope, current/target maturity, risk appetite, review cycle).
2. **Associate assets** that fall under the program scope.
3. **Run a SAMM assessment** — manually or by importing the OWASP SAMM spreadsheet.
4. **Set the assessment as the reference** in the charter.
5. **Review the dual-radar** in the assessment panel to spot weak Business Functions and Practices.
6. **Create initiatives** for each practice you want to improve, and **associate projects** to drive execution.
7. **Open the Roadmap** to see prioritized gaps and track PTT / PTD.
8. **Generate the PDF report** at each review cycle to share progress with leadership.

## Related Areas

* [Asset Management](./asset-management.md) — assets associated with program scope.
* [Projects](./projects.md) — projects linked to initiatives.
* [Requirements](./requirements.md) — actionable items inside projects.
* [Risk and Posture Management](../posture-management/posture.md) — operational risk view that complements SAMM maturity.
* [AppSec Manager Guide](../general/role-based-guide-appsec-manager.md) — role-based guidance for program owners.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.
