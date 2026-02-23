---
id: documentation-writing-best-practices
title: Documentation Writing Best Practices
sidebar_label: Docs Writing Best Practices
---

## Purpose

Use this guide to keep Conviso Docs clear, consistent, and easy to maintain.

## Core Principles

- Write for task completion, not for internal context.
- Use short sentences and direct language.
- Keep one goal per section.
- Prefer step-by-step instructions over long paragraphs.

## Structure Standard

Each how-to page should follow this order:

1. Objective: what the user will achieve.
2. Prerequisites: required access, permissions, or tools.
3. Steps: numbered and action-oriented.
4. Validation: how to confirm it worked.
5. Troubleshooting: common errors and fixes.

## Writing Rules

- Use imperative verbs for steps: "Open", "Click", "Run", "Select".
- Keep each step focused on one action.
- Use consistent terms for the same concept.
- Avoid ambiguous words like "simply" or "just".
- Avoid internal-only acronyms unless previously explained.

## Images and Screenshots

### Mandatory rules

- Do not use manually edited screenshots (arrows, highlights, blur, added text, overlays).
- Use original screenshots from the standardized capture flow whenever possible.
- Keep screenshots current with the latest UI.
- Capture only what is needed for the step.

### Screenshot execution (standard flow)

Use this flow when you need screenshots for documentation pages.

1. Save authenticated session (default login URL: `https://app.convisoappsec.com/spa/auth/login`):

```bash
npm run screenshot:auth
```

2. Generate standardized screenshot:

```bash
npm run screenshot:standard -- --url=https://app.convisoappsec.com/spa/security-feed
```

3. Optional custom selector:

```bash
npm run screenshot:standard -- --url=https://app.convisoappsec.com/spa/security-feed --waitFor='[data-testid=\"security-feed\"]'
```

4. Advanced non-standard mode (only when strictly necessary):

```bash
npm run screenshot:url -- --url=https://app.convisoappsec.com/spa/security-feed --output=static/img/custom.png --viewport=1440x900 --fullPage=true
```

### Screenshot standards

- Resolution: `1440x900`
- Zoom: `100%`
- Browser: Playwright `chromium`
- Theme: `light`
- Locale/timezone: `en-US` / `UTC`
- Auto file naming: `nomedatela-YYYYMMDD-HHMMSS.png` (UTC)
- Session file location: `~/.conviso-docs/platform-session.json` (outside repository)

### Captions and step context

- Every screenshot must include a caption that explains what the user should see.
- Captions must describe expected state, not repeat the title.
- If the screenshot represents a step, add the step number in the caption.

Good caption example:

- `Step 3: Security Feed page loaded with risk cards visible.`

Weak caption example:

- `Security Feed screen.`

### When to use images

Use screenshots when:

- The UI element is hard to find.
- The user must verify a specific visual state.
- There is risk of confusion between similar options.

Do not use screenshots when:

- A short text instruction is enough.
- The UI changes frequently and image maintenance is high.

## Code and Command Blocks

- Always use fenced code blocks with the correct language.
- Commands must be copy-paste ready.
- Include placeholders only when necessary and name them clearly.

Example:

```bash
npm run screenshot:standard -- --url=https://app.convisoappsec.com/spa/security-feed
```

## Links and References

- Prefer relative links for internal docs pages.
- Use descriptive link text (avoid "click here").
- Check that every link opens the intended destination.

## Quality Checklist (Before PR)

- Objective is explicit in the first section.
- Steps are numbered and executable in order.
- Commands were validated or reviewed.
- Screenshots are original, current, and captioned.
- Grammar and wording are clear and concise.
- Broken links were checked.

## Fast Template

Use this template when creating a new how-to page:

```md
## Objective

## Prerequisites

## Steps
1.
2.
3.

## Validation

## Troubleshooting
```
