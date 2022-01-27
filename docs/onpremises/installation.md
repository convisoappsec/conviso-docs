---
id: installation
title: Installation
sidebar_label: Installation
---

## Preparing the environment

First of all, we need to get the sample repository from Github:

```sh
git clone https://github.com/convisoappsec/flow-onpremise-sample.git flow-onpremise
```

Now, we need to get the most current repository version available and create a new .env file from the provided sample:

```sh
cd flow-onpremise && git checkout 2.x && cp .env.sample .env
```

Doing so, we have prepared the Conviso Platform environment to be installed.

## Authentication

Now we have to execute some commands to prepare the environment before installing/upgrading Conviso Platform:

```sh
source ./scripts/shell_commands.sh && touch key.txt
```

At this point , you should ask Conviso for a new access token, in order to be able to login at Conviso’s Docker Repository.
To do so, you must e-mail sre@convisoappsec.com and ask for a new Conviso Platform On Premises Access Token. Beware that this token will be available for 12 hours, so use it as soon as possible.

Once you had received it, paste the access token in the file that you just created, key.txt (we use nano just as an example, you can you use the text editor of your choice).

Paste token as file content

```sh
vi key.txt
```

```sh
convisoappsec:docker:login key.txt
```

```sh
docker-compose pull
```
## Environment Variables
When the download is finished, we have to set up some environment variables, in order to make Conviso Platform to run:

```sh
KEY="$(docker run docker.convisoappsec.com/flow-app:2 bundle exec rake secret)"
```

```sh
echo "APP_SECRET_KEY_BASE=${KEY}" >> .env
```

## Starting Conviso Platform

Finally, we just need to startup Conviso Platform:

```sh
docker-compose up -d
```

Watch the containers status
```sh
watch docker ps
```

When all statuses are healthy, you can ctrl+C to close.