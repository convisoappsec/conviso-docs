---
id: installation
title: Installation
sidebar_label: Installation
---

This is a command line tool to interact with [convisoappsec] flow api. This aims to be very useful for integrations development.
## Overview
The primary goal of the flowcli aims to be a developer friendly tool. The tool will automate as many steps as possible to decrease spent time on an integration with [appsec flow]. Using this tool the integration with your [CI/CD] platform will be easy. At your [CI/CD] you be able to perform [SAST] and [DAST] analysis, send source code to be reviewed by our analysts and order features availables in your [appsec flow account].

## Requirements
To install flowcli some dependecies are required:
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
$ flow --version
```
The command will print the current version and exit with success. Now we are ready to proceed.


## Shell Completion
This section will guide you to activate the flow shell completion. This is not required to use the tool so you can skip it if you want. 

### Bash
Open your .bashrc file at ~/.bashrc and place the following snippet in the end of file.
```sh
FLOW_COMPLETER="$(which flow_bash_completer.sh)"

[ -f "$FLOW_COMPLETER" ] && {
  source "$FLOW_COMPLETER"
}
```
Start a new bash shell session and the shell completion will be available.

### Zsh
Open your .zshrc file at ~/.zshrc and place the following snippet in the end of file.
```sh
FLOW_COMPLETER="$(which flow_zsh_completer.sh)"

[ -f "$FLOW_COMPLETER" ] && {
  source "$FLOW_COMPLETER"
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
[generating api key]: <https://appsecflow.helpy.io/>
[generating project code]: <https://appsecflow.helpy.io/>
[appsec flow]: <https://appsecflow.helpy.io/>
[CI/CD]: <https://en.wikipedia.org/wiki/CI/CD>
[SAST]: <https://blog.convisoappsec.com/en/code-review-and-sast-whats-the-difference/>
[DAST]: <https://blog.convisoappsec.com/en/code-review-and-sast-whats-the-difference/>
[creating project]: <https://appsecflow.helpy.io/>
[appsec flow account]: <https://appsecflow.helpy.io/>
[Flow AppSec]: <https://app.conviso.com.br/>