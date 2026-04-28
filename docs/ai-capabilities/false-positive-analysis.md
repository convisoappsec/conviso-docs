---
id: false-positive-analysis
title: False Positive Analysis
sidebar_label: False Positive Analysis
description: Use AI-assisted false positive analysis in Conviso Platform to validate vulnerabilities faster and with full traceability.
keywords: [AI Capabilities, False Positive Analysis, AppSec AI Agent, vulnerabilities]
image: '/static/img/securityfeedseo.png'
---

## Overview

**False Positive Analysis** uses the **AppSec AI Agent** to help validate whether a reported vulnerability should remain actionable or be treated as a false positive.

When enabled through **Policies**, the capability can:

* analyze vulnerabilities using AI;
* update the status to **False Positive** or **Identified**;
* record the decision and justification in the **Timeline**.

All AI-driven decisions remain visible and auditable.

## Where to Find It

When the capability is enabled, the AI indicator appears above the filtered vulnerability list in the **Vulnerabilities** area.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/vulnerabilities-img11.png "False Positive Analysis Enabled")

</div>

## Reviewing the Analysis

When the agent classifies a vulnerability as a false positive, the result is recorded in the vulnerability timeline together with the justification used in the analysis.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/vulnerabilities-img12.png "False Positive Analysis Result")

</div>

The same applies when the outcome is **Identified** instead of **False Positive**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/vulnerabilities-img13.png "Identified Status Result")

</div>

## Requirement

To use **False Positive Analysis**, enable it first in **Policies**.
