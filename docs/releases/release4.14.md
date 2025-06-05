---
id: release4.14
title: Release 4.14
sidebar_label: Release 4.14
---

Release date: June 4th, 2025

## Key Benefits

*   [Vulnerability Management Improvements](#vulnerability-management-improvements);
*   [JetBrains IDE Plugin Support](#jetbrains-ide-plugin-support);
*   [Automatic Image Scan Closure](#automatic-image-scan-closure);
*   [Other Platform Improvements](#other-platform-improvements);

## Introduction

This release marks the end of a dedicated cycle of improvements focused on enhancing the Vulnerability Management experience. From increased visibility and better usability to automation and flexibility, these updates reinforce our commitment to delivering a platform that supports more effective and intelligent AppSec operations.

---

**_Improvements_**
## Vulnerability Management Improvements

💡 **Value Proposition**  
Improve the experience across vulnerability management workflows, making them more intuitive, efficient, and aligned with real-world security needs. Additionally, deliver a clearer and more contextualized view of identified risks within each organization, enabling a deeper understanding of their security posture in relation to business impact.

🎯 **Expected Outcome**  
Enhance risk management and support more informed decision-making regarding the maturity of each organization’s application security (AppSec), by providing more accessible, structured, and actionable insights.

- Add RESP to the list of network protocols on the vulnerability creation/edition;
- Adapt Select component to support infinite scroll;
- Share asset search filters and results;
- Display recent SCANS information for each asset;
- SBOM inventory view;
- Enable vulnerability deletion;
- Allow editing of the template for reported vulnerabilities;
- Display status in the vulnerability listing;
- Rename “Failure Type” filter to “Analysis Type”;
- Attach vulnerability evidence during creation;
- Save filters in the vulnerability screen;
- Update source select to display active company integrations;
- List GitHub integration in the asset list;
- Add asset to vulnerability detail;
- Allow customizing displayed columns in vulnerability table;
- Show vulnerability ID in the list;
- UI/UX adjustments on vulnerability details.

---

**_New Feature_**
## JetBrains IDE Plugin Support

Conviso Secure Code Mentor is now also available on JetBrains IDEs. With intelligent suggestions, technical explanations, and resources linked directly to your code, the plugin continues to support your AppSec learning journey — now within the development environment you already use.

**Compatible with**: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, RubyMine, GoLand, CLion, Rider, DataSpell, DataGrip, and more.

---

**_New Feature_**
## Automatic Image Scan Closure

Enable automatic closure of container-type vulnerabilities by adapting the existing process to support this specific execution context outside traditional AST workflows. This reduces manual effort, improves accuracy in vulnerability status management, and ensures timely updates on container security posture.

---

**_Improvements_**
## Other Platform Improvements

- Add attachment name on requirement timeline upload;
- Round the "days" values displayed on the dashboard for improved readability.
