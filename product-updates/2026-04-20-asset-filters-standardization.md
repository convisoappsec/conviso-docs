---
title: Asset Filters Standardization
date: 2026-04-20
slug: 2026-04-20-asset-filters-standardization
authors: [daniel_guedes]
tags: ["Improved", "Web and API Scan", "Vuln Intelligence", "Risk-Based Vulnerability Management", "Analytics"]
---

Standardized how Conviso DAST and other scans are handled within the platform's filtering and metrics engine.

- DAST is now fully standardized as a scanner source, removing distinct data paths that could cause discrepancies in "scan coverage" metrics.
- Assets covered by dynamic analysis are accurately reflected in dashboard KPIs, and filtering by integration type returns consistent, cross-platform results.
