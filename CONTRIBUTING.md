# Contributing Guide

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

This is the Conviso Docs contributing guide. Please read the following sections to learn how to ask questions and how to work on something.

## How to contribute?

### Issues
If you have a bug or an idea, check out the following sections before submitting your contribution.
Writing a good issue will help our team better analyze and manage your contributions:

- Bug Report: Create a report to help us improve

- Feature request: Suggest a new feature for a project

- Improvement: Suggest an improvement for a project

- Support request: Support request or question relating to Docs

#### With the issue description:

Try to explain the scenario to us by following these tips:

Context: Explain the conditions which led you to write this issue. 

Problem or idea: The context should lead to something, an idea or a problem that you’re facing. 

Solution or next step: This where you move forward. 
You can engage others (request feedback), assign somebody else to the issue, or simply leave it for further investigation, but you absolutely need to propose a next step towards solving the issue.


## Add new feature, bug fixing or improvement of Conviso Docs

Working on your first Pull Request? You can learn how from this free series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

If you want to add an improvement, a new feature or bug fix, follow the steps to contribute:

- Step 1: Create your own fork of the code.
- Step 2: Do the changes in your fork. Make sure your branch, if you create one, is based on main.
- Step 3: Make your changes and open a GitHub pull request.
- Step 4: Make sure to write a title describing what you have done.

That's it, now just wait!

## Generate standardized screenshots (required)

You must generate platform screenshots with Playwright using the authenticated standardized flow.

Standard is enforced by `screenshot:standard`:

- Fixed resolution: `1440x900`
- Fixed zoom: `100%`
- Fixed browser: Playwright `chromium`
- Fixed theme: `light`
- Fixed locale/timezone: `en-US` / `UTC`
- Fixed auto file naming: `nomedatela-YYYYMMDD-HHMMSS.png` (UTC)
- Session file saved outside repository in `~/.conviso-docs/platform-session.json`
- Basic masking: emails and hex-like IDs are normalized

### 1. Install the browser runtime

```bash
npm run screenshot:install
```

### 2. Save an authenticated session

This opens a Chromium window with default login URL `https://app.convisoappsec.com/spa/auth/login`.
If needed, you can override with `--loginUrl`.

```bash
npm run screenshot:auth
```

### 3. Capture the target page (standard command)

```bash
npm run screenshot:standard -- --url=https://app.convisoappsec.com/spa/security-feed
```

The command only accepts:

- `--url` target platform page
- `--waitFor` optional custom selector (default is `#q-app`)

### 4. Advanced mode (not standardized)

If you need custom captures for one-off cases, use:

```bash
npm run screenshot:url -- --url=https://app.convisoappsec.com/spa/security-feed --output=static/img/custom.png --viewport=1440x900 --fullPage=true
```

## Community
Do you have any questions about Conviso Docs? Let's chat in our [Community](https://discord.gg/jJC9NfmsgA).
Thank you for your contribution.
