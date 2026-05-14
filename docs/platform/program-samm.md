---
id: program-samm
title: Program (OWASP SAMM)
sidebar_label: Program (SAMM)
description: Build, validate, and monitor your AppSec program in the Conviso Platform using OWASP SAMM v2 — charter, assessments, initiatives, automated roadmap, and executive PDF reports.
keywords: [Program, OWASP SAMM, SAMM v2, AppSec program, maturity, charter, roadmap, risk appetite, initiatives, executive report, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Overview

The **Program** module is a complete solution for the entire lifecycle of building, validating, and monitoring an Application Security program, structured around **OWASP SAMM v2**.

Instead of relying on static spreadsheets, it provides an automated governance environment where strategy directly drives action. By linking SAMM maturity gaps and a quantitative risk appetite to an automated roadmap, teams gain immediate visibility into critical risks and what to prioritize. As Conviso projects are associated with initiatives, the platform tracks progress and **dynamically reduces program risk**, producing ready-to-present executive reports for leadership.

Use the Program module to:

* declare the program **charter** — scope, current/target maturity, risk appetite, and review cycle;
* associate **assets** that belong to the program scope;
* run **SAMM v2 assessments** manually (with automatic draft saving) or by importing the official OWASP SAMM spreadsheet;
* visualize maturity through **dual radar charts** (Business Function and Practice level);
* let the platform build an **automated roadmap** with gap analysis, priority, and initiative mapping;
* manage **initiatives** linked to SAMM practices and Conviso projects to dynamically reduce risk;
* generate an **executive PDF report** in English or Portuguese.

## OWASP SAMM in a Nutshell

OWASP SAMM (Software Assurance Maturity Model) organizes AppSec activities across:

* **5 Business Functions** — Governance, Design, Implementation, Verification, Operations.
* **15 Practices** — three per Business Function (e.g. Strategy & Metrics, Threat Assessment, Secure Build).
* **2 Streams per practice** — **Stream A** and **Stream B** measure complementary aspects of the same practice.
* **Maturity levels 0 → 3** — each stream is scored independently and averaged.

The Program module follows this structure end-to-end: scoring, charts, and roadmap are all aligned to SAMM v2 practices and streams.

## Access the Feature

In the left-hand menu, open **Program**. The program workspace exposes the following tabs:

* **Charter** — program identity, scope, and targets.
* **Assets** — assets included in the program scope.
* **Assessments** — SAMM v2 maturity assessments (manual or imported).
* **Initiatives** — practice-level improvement initiatives.
* **Roadmap** — gap analysis and prioritized actions.
* **Report** — executive PDF report generation.

<div style={{textAlign: 'center'}}>

![Program Overview](../../static/img/platform/program-overview.png "Program workspace overview.")

</div>

## Typical Workflow

The Program module connects strategy to execution. A typical cycle:

1. **Define program strategy & charter.** Set the target maturity level, choose a review cycle (e.g. every 3 months), and configure risk appetite quantitatively with the slider. This is the baseline the platform uses to flag gaps.
2. **Establish the scope.** Associate the assets and projects that fall under this specific AppSec program — analogous to an ISO statement of applicability.
3. **Execute or import assessments.** Fill the SAMM v2 questionnaire directly in the platform (with automatic draft saving so progress is never lost) or import an existing OWASP SAMM spreadsheet.
4. **Let the roadmap generate itself.** When an assessment is set as the reference, the platform calculates the gap between current and target maturity and ranks practices, surfacing those that exceed the defined risk appetite as critical priorities.
5. **Build the program through initiatives.** Create initiatives to address roadmap gaps (e.g. introducing a SAST tool, configuring pipelines). Associate real Conviso projects to prove execution — as projects are linked, the roadmap reflects the reduced risk level in real time.
6. **Monitor and compare progress.** Compare assessments over time — practice by practice, domain by domain, or stream by stream — to validate that the program is moving in the right direction.
7. **Share results with leadership.** Generate an asynchronous executive PDF report consolidating practices, scoped assets, and in-flight initiatives.

## Program Charter

The **Charter** defines the identity and targets of the AppSec program. It is the reference for every subsequent assessment and roadmap calculation.

Editable fields:

* **Scope** — free-text description of what the program covers (e.g. "Customer-facing web platform", "All payment-processing services").
* **Current Maturity** — current overall maturity (0.0 – 3.0). Auto-suggested from the latest assessment but editable.
* **Target Maturity** — the maturity level the program aims to reach, displayed with SAMM level badges.
* **Risk Appetite** — quantitative slider from `0` to `100`, mapped to a label that directly drives roadmap priorities:
  * `0 – 25` → **Low**
  * `26 – 50` → **Moderate**
  * `51 – 75` → **High**
  * `76 – 100` → **Critical**
* **Review Cycle (months)** — how often the program is reassessed.
* **Reference Assessment** — the assessment used as the program's baseline for reporting and roadmap generation.

<div style={{textAlign: 'center'}}>

![Program Charter](../../static/img/platform/program-charter.png "Program Charter form with maturity badges and risk appetite slider.")

</div>

### Risk Appetite Slider

The risk appetite slider exposes the four zones (Low / Moderate / High / Critical) with color indicators, and the label updates live as the slider moves. This value is not cosmetic — it is the threshold the platform uses to decide which gaps are surfaced as critical in the roadmap.

<div style={{textAlign: 'center'}}>

![Risk Appetite Slider](../../static/img/platform/program-risk-appetite.png "Risk Appetite slider with zone indicators.")

</div>

## Program Assets

The **Assets** tab associates existing platform assets with the program scope. This is what ties SAMM maturity to the actual systems being measured, so improvements are anchored to real software rather than abstract scores.

You can:

* search and associate assets via the **Associate Asset** dialog (search and pagination supported);
* remove an asset from the program scope at any time.

<div style={{textAlign: 'center'}}>

![Program Assets](../../static/img/platform/program-assets.png "Program scope assets list and Associate Asset dialog.")

</div>

For asset definitions and management outside the program context, see [Asset Management](./asset-management.md).

## SAMM Assessments

The **Assessments** tab is where maturity is measured. Assessments can be created in two ways.

### 1. Manual Assessment

Create a new assessment and answer the SAMM v2 questionnaire directly in the platform. Each of the 15 practices is split into Stream A and Stream B questions that feed the score calculator.

The form has **automatic draft saving (state control)**, so progress is preserved across page navigation and long sessions — partial answers are never lost.

### 2. Import from Spreadsheet

If your team already uses the official OWASP SAMM toolbox spreadsheet, past executions can be imported directly without re-keying answers:

1. Open the **Assessments** tab.
2. Click **Import SAMM Spreadsheet**.
3. Upload the `.xlsx` (or compatible CSV) file.
4. The platform parses the answers, runs the score calculator, and creates the assessment with the `imported` flag set.

<div style={{textAlign: 'center'}}>

![Import SAMM Spreadsheet](../../static/img/platform/program-import-samm.png "Import SAMM assessment from Excel/CSV spreadsheet.")

</div>

### Assessment Panel

Once created, the assessment opens with a dual-radar visualization:

* **Business Function Radar** — 5-axis radar showing the average maturity for each of Governance, Design, Implementation, Verification, and Operations.
* **Practice Radar** — 15-axis radar showing the average maturity for each individual practice.

A scores table below the charts breaks every practice down by **Stream A** (dark bar) and **Stream B** (gold bar). Instead of a single number per practice, each row shows two mini progress bars, making partial progress immediately visible.

<div style={{textAlign: 'center'}}>

![SAMM Assessment Panel](../../static/img/platform/program-assessment-panel.png "Dual radar (Business Function + Practice) with Stream A/B progress bars.")

</div>

### Comparing Assessments

Assessments can be compared over time to demonstrate evolution and validate that investments are paying off. Comparisons are available at three granularities:

* **Practice by practice** — drill into where a specific practice moved up or down between two assessments;
* **Domain by domain** — compare the five Business Functions side-by-side;
* **Stream by stream** — see whether Stream A or Stream B drove the change in a given practice.

### Viewing Answers

The assessment view page exposes the full answer payload, so reviewers can audit which option was selected for each Stream A / Stream B question.

<div style={{textAlign: 'center'}}>

![Assessment Answers](../../static/img/platform/program-assessment-answers.png "Per-question answer view for an imported assessment.")

</div>

## Initiatives

**Initiatives** are the actionable work items that move the program forward. Each initiative is tied to a specific SAMM practice (e.g. "Roll out SAST across customer-facing repos" under *Secure Build*) and can be associated with one or more Conviso **projects** to drive and prove execution.

Key behaviors:

* initiatives are created **per practice** and enforce the **Stream A** scope on creation/deletion;
* the **Practice Initiative Card** lists initiatives grouped by practice;
* the **Associate Project** dialog binds a Conviso project to an initiative, so requirement work and vulnerability data flow into the program view;
* as projects are linked and executed, the platform **dynamically reduces the risk level** reflected in the roadmap — turning operational delivery into measurable program progress.

<div style={{textAlign: 'center'}}>

![Initiatives Panel](../../static/img/platform/program-initiatives.png "Initiatives grouped by SAMM practice with associated projects.")

</div>

For project workflow details, see [Projects](./projects.md) and [Project Management / Process](../project-management/process.md).

## Roadmap

The **Roadmap** is **automatically generated** from the reference assessment and the charter target — there is no manual roadmap editor. The platform identifies every practice that falls **below** the target maturity, ranks them, and uses the configured risk appetite to highlight the most critical gaps.

For each practice in the gap, the roadmap shows:

* **Current** vs **Target** maturity;
* **Gap** size;
* **Priority badge** — `Critical` / `High` / `Medium` / `Low`, derived from gap size and risk appetite;
* **Initiatives** mapped to that practice, with their associated projects.

Because the roadmap is recomputed from the reference assessment and active initiatives, the view stays in sync with the program's real state: linking projects to initiatives reduces risk immediately on screen.

<div style={{textAlign: 'center'}}>

![Roadmap Panel](../../static/img/platform/program-roadmap.png "Security roadmap with gap analysis, priority badges, and initiative mapping.")

</div>

### Relative Scoring (PTT and PTD)

Two relative metrics summarize roadmap progress and are used identically by the in-platform view and the PDF report:

* **PTT — Percent to Target** — how far current maturity is from the program target.
* **PTD — Progress to Date** — how much progress has been made from the baseline toward the target.

Each metric drives a 4-segment bar with pre-computed widths, so the rendered report matches the platform exactly.

## Program Report (PDF)

The **Report** dialog triggers asynchronous PDF generation through the `generateProgramReport` mutation. The output is a **complete executive report** — a single document that includes practice-level scores, the dual radars, the gap-based roadmap, the count of initiatives and scoped assets, and the program's overall posture — designed to be presented directly to leadership without further editing.

The worker:

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

## Related Areas

* [Asset Management](./asset-management.md) — assets associated with program scope.
* [Projects](./projects.md) — projects linked to initiatives.
* [Requirements](./requirements.md) — actionable items inside projects.
* [Risk and Posture Management](../posture-management/posture.md) — operational risk view that complements SAMM maturity.
* [AppSec Manager Guide](../general/role-based-guide-appsec-manager.md) — role-based guidance for program owners.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.
