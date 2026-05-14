---
id: index
title: Home
sidebar_label: Home
description:   Here you will find all the details related to our tools, integrations and better usability of the Conviso Platform, an ASPM platform. Welcome!
keywords: [ASPM platform, Conviso Platform]
slug: /
---

import LatestReleaseHighlight from '@site/src/components/LatestReleaseHighlight';

# Conviso Platform

Application security with clarity, context, and scale

The Conviso Platform is a comprehensive Application Security Posture Management (ASPM) solution designed to help organizations understand, prioritize, and reduce application security risk across the entire software development lifecycle.

By centralizing data from multiple security tools and development pipelines, the platform provides a clear and actionable view of application risk, connecting technical findings with real business impact. It enables security and engineering teams to work from the same source of truth, with less noise and more focus.

Built for modern development environments, the Conviso Platform integrates seamlessly with CI/CD pipelines, code repositories, cloud environments, and security scanners, supporting SAST, DAST, SCA, IaC, container, and cloud security use cases.

<LatestReleaseHighlight />

## What the platform enables

**Unified application security visibility**  
Aggregate findings from different tools and environments into a single, consistent view, enriched with context about applications, teams, and assets.

**Risk-based prioritization**  
Focus remediation efforts on what truly matters by correlating vulnerability data with exploitability, asset criticality, and deployment context.

**Security workflows that fit engineering teams**  
Automate ingestion, triage, and tracking of findings through native integrations with development and collaboration tools.

**Program-level insight and governance**  
Measure application security posture over time, track maturity, and support informed decision-making with reliable metrics and dashboards.

**Role-oriented adoption paths**  
Use the [Role-Based Guides](./general/role-based-guide-devsecops) to follow practical journeys by profile (Developer, DevSecOps, AppSec Engineer, Penetration Tester, and managers), with focused workflows and priorities.

## AI capabilities applied to AppSec

The Conviso Platform applies artificial intelligence to reduce operational overhead and support better security decisions.

**Automated normalization and deduplication**  
Reduce noise by intelligently grouping and standardizing findings from multiple sources.

**Assisted risk prioritization**  
Support security teams in identifying high-impact issues by learning from historical data and contextual signals.

**Remediation support**  
Help teams understand vulnerabilities faster with contextual insights that shorten investigation and fix cycles.

**Actionable insights at scale**  
Turn large volumes of security data into clear, usable information for both technical teams and leadership.

## Navigate the documentation

Explore the main areas below according to the current documentation structure.

<div className="landing-grid">
  <a className="landing-card" href="./posture-management/posture">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4.5v5.25c0 4.142-2.72 7.964-7.5 9.75-4.78-1.786-7.5-5.608-7.5-9.75V7.5L12 3z" />
        </svg>
      </span>
      <div className="landing-card__title">Risk and Posture Management</div>
    </div>
    <div className="landing-card__body">
      Understand risk score, posture indicators, contextual prioritization, and the dashboard views used to guide remediation.
    </div>
    <div className="landing-card__cta">Open posture workflows</div>
  </a>

  <a className="landing-card" href="./vulnerability-management/workflow-status">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4.5h12M6 9h12M6 13.5h8M6 18h8M17 13l2.5 2.5L22 13" />
        </svg>
      </span>
      <div className="landing-card__title">Vulnerability Management</div>
    </div>
    <div className="landing-card__body">
      Learn the vulnerability lifecycle, status definitions, and the operational process for triage, remediation, and validation.
    </div>
    <div className="landing-card__cta">Open vulnerability workflows</div>
  </a>

  <a className="landing-card" href="./project-management/process">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M7 4v6m10-6v6M6 20h12a2 2 0 002-2V8H4v10a2 2 0 002 2z" />
        </svg>
      </span>
      <div className="landing-card__title">Project Management</div>
    </div>
    <div className="landing-card__body">
      Follow project statuses, execution flow, requirements, and project-level coordination in the platform.
    </div>
    <div className="landing-card__cta">Open project workflows</div>
  </a>

  <a className="landing-card" href="./security-scans/conviso-ast/conviso-ast">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75M12 3l7.5 4.5v5.25c0 4.142-2.72 7.964-7.5 9.75-4.78-1.786-7.5-5.608-7.5-9.75V7.5L12 3z" />
        </svg>
      </span>
      <div className="landing-card__title">Scanning your Application</div>
    </div>
    <div className="landing-card__body">
      Run AST, DAST, SBOM, container, pull request, and Security Gate workflows across your delivery pipeline.
    </div>
    <div className="landing-card__cta">Open scanning guides</div>
  </a>

  <a className="landing-card" href="./platform/appsec-ai-agent">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8.5-7 9.5C8.5 20.5 5 17 5 12V7l7-4zM9.5 12.5l1.8 1.8L14.5 11" />
        </svg>
      </span>
      <div className="landing-card__title">AI Capabilities</div>
    </div>
    <div className="landing-card__body">
      Explore AI-driven workflows such as false positive analysis, how-to-fix guidance, autofix, MCP server, and skills.
    </div>
    <div className="landing-card__cta">Open AI capabilities</div>
  </a>

  <a className="landing-card" href="./platform/security-feed">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
        </svg>
      </span>
      <div className="landing-card__title">Platform User Guide</div>
    </div>
    <div className="landing-card__body">
      Learn where to access features, what each screen does, and how the main platform areas are organized.
    </div>
    <div className="landing-card__cta">Open platform guide</div>
  </a>

  <a className="landing-card" href="./general/role-based-guide-devsecops">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M10 7a4 4 0 100-8 4 4 0 000 8zm10 14v-2a4 4 0 00-3-3.87M15 3.13a4 4 0 010 7.75" />
        </svg>
      </span>
      <div className="landing-card__title">Guides and Operations</div>
    </div>
    <div className="landing-card__body">
      Use the role-based guides to follow practical paths for developers, AppSec, DevSecOps, managers, and PCI-focused teams.
    </div>
    <div className="landing-card__cta">Open role-based guides</div>
  </a>

  <a className="landing-card" href="./integrations/integrations_intro">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6m-6 0v-3m6 3v-3M6 7.5V6a6 6 0 1112 0v1.5M9 18h6a3 3 0 003-3V9a3 3 0 00-3-3H9a3 3 0 00-3 3v6a3 3 0 003 3z" />
        </svg>
      </span>
      <div className="landing-card__title">Integration and Automations</div>
    </div>
    <div className="landing-card__body">
      Connect integrations, use the CLI, automate workflows, and extend the platform through API-based operations.
    </div>
    <div className="landing-card__cta">Open integrations and automation</div>
  </a>

  <a className="landing-card" href="./api/api-overview">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75L17.25 12l-3 5.25M9.75 17.25L6.75 12l3-5.25" />
        </svg>
      </span>
      <div className="landing-card__title">API</div>
    </div>
    <div className="landing-card__body">
      Use the GraphQL API to automate and extend platform workflows.
    </div>
    <div className="landing-card__cta">Go to API docs</div>
  </a>
</div>

<style>{`
  .landing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin: 24px 0 8px;
  }

  .release-highlight {
    border-radius: 12px;
    padding: 18px 20px;
    margin: 16px 0 28px;
    background: linear-gradient(180deg, #eef4ff 0%, #f6f9ff 100%);
    border-left: 4px solid #2b5fd9;
    box-shadow: 0 10px 22px rgba(43, 95, 217, 0.08);
  }

  .release-highlight__badge {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #1f4ec4;
    margin-bottom: 6px;
  }

  .release-highlight__title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .release-highlight__summary {
    color: #334155;
    margin-bottom: 10px;
  }

  .release-highlight__content {
    margin-bottom: 12px;
    color: #334155;
  }

  .release-highlight__list {
    margin: 0 0 12px;
    padding-left: 18px;
    color: #334155;
  }

  .release-highlight__list li {
    margin: 6px 0;
  }

  .release-highlight__cta {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #2b5fd9;
    text-decoration: none;
  }

  .release-highlight__cta:hover {
    text-decoration: underline;
  }

  .landing-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border: 1px solid #e0e4ea;
    border-radius: 12px;
    background: linear-gradient(160deg, #ffffff 0%, #f6f8fb 100%);
    color: inherit;
    text-decoration: none;
    transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
  }

  .landing-card:hover {
    transform: translateY(-2px);
    border-color: #c5d2e6;
    box-shadow: 0 6px 18px rgba(20, 40, 80, 0.12);
  }

  .landing-card__heading {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .landing-card__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: #eef2f7;
    color: #23395d;
  }

  .landing-card__icon svg {
    width: 18px;
    height: 18px;
  }

  .landing-card__title {
    font-size: 1.05rem;
    font-weight: 600;
  }

  .landing-card__body {
    font-size: 0.95rem;
    color: #4a5568;
  }

  .landing-card__cta {
    margin-top: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #2b5fd9;
  }
`}</style>
