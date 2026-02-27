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

Explore the main areas below to learn how to use the platform, set up scanning, connect integrations, and work with the API.

<div className="landing-grid">
  <a className="landing-card" href="./platform/appsec-ai-agent">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8.5-7 9.5C8.5 20.5 5 17 5 12V7l7-4zM9.5 12.5l1.8 1.8L14.5 11" />
        </svg>
      </span>
      <div className="landing-card__title">AppSec AI Agent</div>
    </div>
    <div className="landing-card__body">
      Explore the AI Agent capabilities, workflows, and how to use them in the platform.
    </div>
    <div className="landing-card__cta">Open AI Agent docs</div>
  </a>

  <a className="landing-card" href="./platform/asset-management">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
        </svg>
      </span>
      <div className="landing-card__title">Platform User Guide</div>
    </div>
    <div className="landing-card__body">
      Learn the core features, navigation, and day-to-day workflows inside the platform.
    </div>
    <div className="landing-card__cta">Open platform docs</div>
  </a>

  <a className="landing-card" href="./security-scans/conviso-ast">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75M12 3l7.5 4.5v5.25c0 4.142-2.72 7.964-7.5 9.75-4.78-1.786-7.5-5.608-7.5-9.75V7.5L12 3z" />
        </svg>
      </span>
      <div className="landing-card__title">Scanning your Application</div>
    </div>
    <div className="landing-card__body">
      Install the CLI, run AST/DAST/SBOM scans, and enforce Security Gate checks.
    </div>
    <div className="landing-card__cta">Start scanning</div>
  </a>

  <a className="landing-card" href="./integrations/integrations_intro">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6m-6 0v-3m6 3v-3M6 7.5V6a6 6 0 1112 0v1.5M9 18h6a3 3 0 003-3V9a3 3 0 00-3-3H9a3 3 0 00-3 3v6a3 3 0 003 3z" />
        </svg>
      </span>
      <div className="landing-card__title">Integrations</div>
    </div>
    <div className="landing-card__body">
      Connect CI/CD, defect tracking, notifications, SSO, and security scanners.
    </div>
    <div className="landing-card__cta">Browse integrations</div>
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

  <a className="landing-card" href="./new-cli">
    <div className="landing-card__heading">
      <span className="landing-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4-4 4M12 16h6" />
        </svg>
      </span>
      <div className="landing-card__title">New CLI</div>
    </div>
    <div className="landing-card__body">
      Learn the new CLI commands, bulk operations, and SBOM tooling.
    </div>
    <div className="landing-card__cta">Open New CLI</div>
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
