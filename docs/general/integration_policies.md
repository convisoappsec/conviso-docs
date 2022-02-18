---
id: integration_policies
title: Integration Policies
sidebar_label: Integration Policies
---

The "Integration Policy" feature aims to send Appsec - Flow vulnerabilities automatically to the integrated Defect Tracking tools such as:

bitbucket

Github

Jira

redmine

ServiceNow

Trello

With this setting enabled, the user will not need to send issues manually whenever a new vulnerability is identified and registered in Appsec - Flow. The issue will be automatically created in the defect tracking tool.

Setup - 1
To configure the "Integration Policy", first you must have integrated the "Defect Tracker" tool with Appsec - Flow. If you don't have any integrated tools yet, please read the documentation regarding the integration of the Defect Tracker tool you use.

Setup - 2
In the upper right corner click on "Gear" and then on "Policies"

After clicking on Integration Policy, we will have the options:

Automatically send vulnerabilities to Defect Tracker tools: This field must be activated. It will automatically send selected vulnerability classes from Appsec - Flow to the Detect Tracker tool built into your platform. Then it is mandatory that you select at least 1 vulnerability severity level from those listed below.

All Vulnerabilities: If you activate this option (it is optional), all vulnerabilities will be automatically sent to the Defect Tracker tool.

Low: Selecting this option (it is optional) only vulnerabilities with low severity will be sent to the Detect Tracker tool.

Medium: By selecting this option (optional) only vulnerabilities with medium severityy will be sent to the Detect Tracker tool.

High: Selecting this option (it is optional to fill in) only vulnerabilities with high severity will be sent to the Detect Tracker tool.

Critical: By selecting this option (it is optional to fill) only vulnerabilities with critical severity will be sent to the Detect Tracker tool.

When selecting the desired options, click on the "Save" button so that the integration policy is successfully made between Appsec-Flow and your Defect Tracker tool.