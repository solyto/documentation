---
title: Quick Start
description: Get solyto running locally in minutes.
---

## Using solyto.app

The fastest way to get started is the hosted version. Go to [solyto.app](https://solyto.app), create an account, and you're ready.

## Running locally with Docker

Requirements: git, Docker

```bash
git clone https://github.com/solyto/solyto
cd solyto
make install
```

This clones all sub-repos, sets up a Docker Compose stack, initializes the databases, and starts everything.

| Service      | URL                      |
|--------------|--------------------------|
| App          | http://localhost:5173    |
| API          | http://localhost:8080    |
| Landing page | http://localhost:5174    |

## Running from source

Requirements: git, Node 22+, Composer 2, Docker

```bash
git clone https://github.com/solyto/solyto
cd solyto
make install
```

See the [localdocker repo](https://github.com/solyto/localdocker) for more details.

## Next steps

- Enable the features you want in **Settings → Features**
- Set up [CalDAV/CardDAV sync](/integrations/dav-sync/) if you use an external calendar or contact app
- Configure [notifications](/customization/notifications/) to get daily digests via Telegram or email
- Pick a [theme](/customization/themes/) you like
