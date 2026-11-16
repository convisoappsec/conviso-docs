---
id: aspm-coverage
title: ASPM Coverage
sidebar_label: ASPM Coverage
description: Understand the ASPM Coverage dashboard and evaluate scan coverage, classification, security gate distribution, and which assets the security gate blocks most.
keywords: [Dashboard, ASPM, coverage, asset classification, security gate, block rate, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Overview

The **ASPM Coverage** dashboard helps you assess how much of your environment is being covered by security monitoring and how assets are classified.

It is useful for:

* understanding asset coverage by scans;
* monitoring asset classification progress;
* reviewing security gate distribution;
* following security gate behavior over time;
* finding the assets the security gate blocks most often.

## Main Metrics

The dashboard includes the following key views:

1. **Asset Risk Parametrization**: classification breakdown of assets such as classified, partially classified, and not classified.
2. **Asset Scan Coverage**: proportion of assets covered and not covered by scans.
3. **Security Gate Status Breakdown**: current distribution of gate results such as pass, warning, and failure.
4. **Security Gates Over Time**: trend view of security gate results across the selected period.
5. **Security Gate Block Rate by Asset**: the assets whose security gate runs failed most often in the selected period, ranked by block rate.

The security gate charts appear only for companies with [Security Gate](../platform/security-gate.md).

### Security Gate Block Rate by Asset

The **block rate** of an asset is the share of its security gate runs in the selected period that failed and blocked the delivery. A run that ends with a warning counts as a run but not as a block. Every run counts, whether it came from a pull request scan, an integration sync, or a manual or CLI run, on any branch.

The chart ranks up to 10 assets by block rate, and assets with the same rate by their number of blocked runs. Each bar shows the rate and the blocked runs out of all runs, for example **75% (6/8)**. Read the rate together with the number of runs: an asset with a single failed run reaches 100%.

* **See the blocked runs**: click a bar or an asset name to open the [Security Gate](../platform/security-gate.md) list filtered by that asset, its failed runs, and the dashboard period.
* **See every asset**: when more than 10 assets ran the security gate in the period, **See all assets** at the bottom of the card opens a side panel with all of them. Search by asset name, sort by any column, and click a row to open that asset's blocked runs.
* **Filters**: the chart follows the dashboard's date, asset, asset tag, and archived asset filters.
* **Access**: users with access restricted to some assets only see those assets in the ranking.

The metric is also available in the dashboard's executive report, as a chart and a table of the same 10 assets.

## Filters

Use the dashboard filters to refine the analysis by:

* date range;
* assets;
* vulnerability status;
* severity;
* asset tags.

## Example

<div style={{textAlign: 'center'}}>

![ASPM Coverage Dashboard](../../static/img/platform/dashboard-coverage.png "ASPM Coverage Dashboard.")

</div>
