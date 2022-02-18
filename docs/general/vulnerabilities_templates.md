---
id: vulnerabilities_templates
title: Vulnerabilities Templates
sidebar_label: Vulnerabilities Templates
---

Customers who have a Flow subscription have access to all our vulnerability templates created and used by Conviso daily, but it is also possible to create your own templates.

Important: To create templates, a user with company access permissions (admin) is required.

To create a new template, access AppSec Flow and click on Intelligence located in the lower left corner, then click on Vulnerability Templates.

Click New.

Now just fill in the necessary information.

Title: Is the title of the vulnerability.

Impact: Select the impact this vulnerability could have.

Likelihood: Select how likely this vulnerability is to occur.

Category: Select which CWE this vulnerability belongs to.

Standards: Select which currently used standard (OWASP, SANS, etc.) this vulnerability belongs to.

Vulnerability: Description of the vulnerability.

Reference: Place the sources where the information regarding this vulnerability was taken.

Solution: Description of how to fix the vulnerability.

Notification: By checking this box, the template will be changed from Vulnerability to Notification. By doing this, only the Title, Vulnerability (description), Reference and Solution fields will appear.

This is because it's just a notification, so there's no need to have Impact, Probability, Categories and Standards.

What is the difference between vulnerability and notification?
We always make revisions to all our templates. In a technical forum held internally, the conclusion was reached that vulnerability is what actually allows the application to be exploited. Many headers and some good practices do not allow direct exploration when performed, but their implementation makes exploration difficult, so we adopted the process of calling these cases of notifications.