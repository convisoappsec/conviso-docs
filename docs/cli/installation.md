---
id: installation
title: Getting started with the Conviso CLI
sidebar_label: Getting started
description:  The CLI is a command line interface tool for interacting with the Conviso Platform bringing functionality into your development workflow. Learn more about!
keywords: [Conviso CLI]
image: '/static/img/cliinstallationseo.png'
---

:::note
There is currently an incompatibility with the library that handles git repositories in `actions/checkout@v4` causing an **unsupported extension name extensions.worktreeconfig (Rugged::RepositoryError)**


Reference: https://github.com/actions/checkout/issues/1690
:::

## Introduction

The CLI is a command-line interface tool to interact with Conviso Platform. The primary goal of the CLI is to be a developer friendly tool which brings the functionality of Conviso Platform into your development workflow.

You can use the CLI locally and also within your CI/CD to be able to use the following features:

- Run Conviso AST Add-on (SAST, SCA, IaC, Container);
- Set policies to block the pipeline depending on different criteria;
- Send diff versions of your source code application to later be reviewed by your own security team or Conviso's (when subscribed to our professional services license).
- It is capable of creating the asset, if it does not exist, and filling in the technologies found during execution.
- It can close open vulnerabilities on the platform that are no longer identified during its execution, and can reopen them if they were closed but identified later.

[Optimize your software security with the Conviso Platform! Schedule a free demo and start strengthening your defenses today.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


## Install the Conviso CLI

To use the CLI, install it and [authenticate](#authentication) your machine.

### Prerequisites

To install the CLI some dependencies are required:
- python3 >= 3.4. See [python3 download](https://www.python.org/downloads/).
- pip. See [pip guide](https://packaging.python.org/tutorials/installing-packages/#installing-from-pypi).
- git. See [git download](https://git-scm.com/downloads).
- Docker. See [docker download](https://docs.docker.com/engine/install/).

Follow the download instructions for each dependency.

### Installation

Run the following installation command for the Conviso CLI:

```bash
pip install conviso-cli
```

or

```bash
python3 -m pip install conviso-cli
```

**Note:** If it's not working, we recommend visiting the [other installation commands](#other-installation-commands) section that shows other ways to install.

**You can use the CLI in your CI/CD environment**. For details, please check the [menu](../integrations/integrations_intro.md) with all the different tools that we are integrated with. If your tool is not there, please contact us to assess it.

### Test your installation

After installation, test your installation. For a quick test, run:

```bash
conviso --help
```

The command will print CLI commands and options summary. Now we are ready to proceed!

**Note:** Conviso recommends always keeping your CLI installation updated to the latest version. You can check by running ```conviso --version```.

## Authentication

In order to start using the CLI you will need to provide your [API Key for your Conviso Platform account](../api/generate-apikey.md). You can generate an API Key within Security Feed -> Quick Actions -> Generate API KEY.

**Note:** Every time you do this process, you will need to change the API Key from the CLI settings.

When retrieving it, you can export the key as system environment variable:

```bash
export CONVISO_API_KEY='you-api-key'
```

**Note:** The command for setting environment variables can vary slightly between operating systems, but generally follows the same idea. On Windows, you can use the ```set``` command.

Also, the API Key can be set as option argument:

```bash
conviso --api-key 'you-api-key' [SOME COMMAND]
```

**Note:** For security reasons, this is not recommended for production environments!

## Next steps

Once the CLI is installed and your machine is authenticated, perform the following actions to run your AppSec Program with the Conviso Platform:

- Perform **Application Security Testing (AST)** type scans, following this [tutorial](../cli/ast.md).
- Validate your opened vulnerabilities for a specific project and **block your CI/CD pipeline depending on pre-defined vulnerability policies**, [see more](../cli/security-gate.md).
- Perform the **Management of your Assets**, see this [guide](../cli/assets.md).
- **Import findings and vulnerabilities from other security tools** that support .SARIF files to Conviso Platform, see [more](../cli/findings.md).

## Other installation commands

In case the main method didn't work, there are several other ways:

- If you haven't system admin privileges:

```bash
pip install --user conviso-cli
```

or

```bash
python3 -m pip install --user conviso-cli
```

- If you want to install a specific version. Versions can be found on [PypI](https://pypi.org/project/conviso-cli/#history).

```bash
python3 -m pip install conviso-cli==1.12.0rc2
```

**Note:** If you are unsuccessful in running the command, check that the Python path is validated by following this [guide](https://realpython.com/add-python-to-path/).

- If you want to use Container Image with a specific version. Versions can be found in [Dockerhub](https://hub.docker.com/r/convisoappsec/convisocli/tags).

```bash
docker run convisoappsec/convisocli conviso --help
```

**Note:** Observe that PyPI and Github versions have a slightly difference

## Updating Conviso CLI

We release new Conviso CLI versions often! See [Releases Notes](../releases/intro.md) for more details.

## Tips: Shell Completion

Shell Completion is a feature that helps complete commands and command line arguments automatically in a terminal or shell. This is not required to use the tool, so you can skip it if you want.

#### Bash

Open your ```.bashrc``` file at ```~/.bashrc``` and place the following snippet in the end of file.

```bash
CONVISO_COMPLETER="$(which conviso_bash_completer.sh)"

[ -f "$CONVISO_COMPLETER" ] && {
  source "$CONVISO_COMPLETER"
}
```

Start a new bash shell session and the shell completion will be available.

#### ZSH

Open your ```.zshrc``` file at ```~/.zshrc``` and place the following snippet in the end of file.

```bash
CONVISO_COMPLETER="$(which conviso_zsh_completer.sh)"

[ -f "$CONVISO_COMPLETER" ] && {
  source "$CONVISO_COMPLETER"
}
```

Start a new ZSH shell session and the shell completion will be available.

#### Fish

Start a fish shell session and execute the following command.

```bash
mkdir -p ~/.config/fish/completions
cp (which conviso_fish_completer.fish) ~/.config/fish/completions/conviso.fish
```

Start a new fish shell session and the shell completion will be available.

## Getting support for the Conviso CLI

If you have any questions or need help using Conviso CLI, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources

By exploring our content you'll find resources to help you understand the benefits of the Conviso CLI:

[What is SARIF and how it could revolutionize software security:](https://bit.ly/3nqqcbK) The article explains how SARIF can improve transparency and collaboration in the security software industry and highlights how the Conviso Platform already supports the SARIF format with Conviso CLI.

[Securing customers CI/CD pipelines using Conviso CLI:](https://bit.ly/3LS1oD7) This article brings a presentation of the possibilities of using the Conviso CLI for your CI/CD pipeline.

[![Discover Conviso Platform, a solution for ASPM!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
