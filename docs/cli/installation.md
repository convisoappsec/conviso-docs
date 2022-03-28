---
id: installation
title: CLI
sidebar_label: Overview
---

## Overview
The CLI is a command line interface tool to interact with Conviso Platform. 

The primary goal of the CLI is to be a developer friendly tool which automates different functionalities, letting users interact more easily with the platform.

You can use the CLI locally and also inside your [CI/CD] to be able to use the following features:
- Perform security scans project (SAST, SCA, IaC, Container)
- Set policies to block the pipeline depending on different criterias
- Send diff versions of your source code application to later be reviewed by your own security team or Conviso's (when subscribed to our professional services license)

## Requirements
To install the CLI some dependecies are required:
* python3 >= 3.4. See [python3 download]
* pip. See [pip guide]
* git. See [git download]
* Docker. See [docker download]

If you have system admin privileges just execute one of the following commands.
```sh
$ pip install conviso-flowcli
```
or
```sh
$ python3 -m pip install conviso-flowcli
```
If you haven't system admin privileges execute one of the following commands.
```sh
$ pip install --user conviso-flowcli
```
or
```sh
$ python3 -m pip install --user conviso-flowcli
```
Check if the install command was well succeeded.
```sh
$ conviso --version
```
The command will print the current version and exit with success. Now we are ready to proceed.

## CI/CD
For running the CLI in the CI/CD, please check the menu with all the different tools that we are integrated. If your tool is not there, please contact us to assess it.

## Shell Completion
This section will guide you to activate the [CLI shell completion](https://en.wikipedia.org/wiki/Command-line_completion) feature. This is not required to use the tool so you can skip it if you want. 

### Bash
Open your .bashrc file at ~/.bashrc and place the following snippet in the end of file.
```sh
CONVISO_COMPLETER="$(which flow_bash_completer.sh)"

[ -f "$CONVISO_COMPLETER" ] && {
  source "$CONVISO_COMPLETER"
}
```
Start a new bash shell session and the shell completion will be available.

### Zsh
Open your .zshrc file at ~/.zshrc and place the following snippet in the end of file.
```sh
CONVISO_COMPLETER="$(which flow_zsh_completer.sh)"

[ -f "$CONVISO_COMPLETER" ] && {
  source "$CONVISO_COMPLETER"
}
```
Start a new zsh shell session and the shell completion will be available.

### Fish
Start a fish shell session and execute the following command.
```sh
$ mkdir -p ~/.config/fish/completions
$ cp (which flow_fish_completer.fish) ~/.config/fish/completions/flow.fish
```
Start a new fish shell session and the shell completion will be available.

[python3 download]: <https://www.python.org/downloads/>
[git download]: <https://git-scm.com/downloads>
[pip guide]: <https://packaging.python.org/tutorials/installing-packages/#installing-from-pypi>
[docker download]: <https://docs.docker.com/engine/install/>
[bash]: <https://www.gnu.org/software/bash/>
[zsh]: <https://www.zsh.org/>
[fish]: <https://fishshell.com/>
[convisoappsec]: <https://convisoappsec.com/>
[CI/CD]: <https://en.wikipedia.org/wiki/CI/CD>
[Conviso Platform]: <https://app.convisoappsec.com/>