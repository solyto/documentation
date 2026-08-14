---
title: Configuration
description: All environment variables and configuration options.
---

All configuration is done through the `.env` file in the root of the selfhosted repo. Sensitive values (passwords, API keys) are stored as Docker secrets in `./secrets/` — see [Docker Secrets](/self-hosting/secrets/) for details.

## Project

| Variable | Description | Default |
|----------|-------------|---------|
| `PROJECT_NAME` | Docker Compose project name | `solyto` |
| `SOLYTO_VERSION` | Version tag for solyto images | `latest` |

## Domains

These are the domain names pointing to your server. Each service gets its own (sub)domain.

| Variable | Description | Example |
|----------|-------------|---------|
| `API_DOMAIN` | Domain for the API | `api.example.com` |
| `APP_DOMAIN` | Domain for the frontend | `app.example.com` |
| `DAV_DOMAIN` | Domain for CalDAV/CardDAV | `dav.example.com` |
| `ACME_EMAIL` | Email for Let's Encrypt certificate notifications | `admin@example.com` |

## Application

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_NAME` | Application display name | `solyto` |
| `APP_URL` | Full URL to the API | `https://${API_DOMAIN}` |
| `FRONTEND_URL` | Full URL to the frontend | `https://${APP_DOMAIN}` |
| `APP_ENV` | Application environment | `production` |
| `APP_DEBUG` | Enable debug mode | `false` |
| `APP_TIMEZONE` | Default application timezone | `UTC` |

## Frontend

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Node.js environment | `production` |
| `PUBLIC_API_URL` | URL the frontend uses to reach the API | `https://${API_DOMAIN}` |
| `PUBLIC_DISABLE_DEV_REQUESTS` | Hide the Dev Requests section | (empty) |

Set `PUBLIC_DISABLE_DEV_REQUESTS=true` to hide the Dev Requests link and disable the route entirely.

## Database versions

| Variable | Description | Default |
|----------|-------------|---------|
| `MARIADB_VERSION` | MariaDB image version | `12` |
| `POSTGRES_VERSION` | PostgreSQL image version | `17` |
| `REDIS_VERSION` | Redis image version | `7.4.1` |

## MariaDB

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_CONNECTION` | Database driver | `mariadb` |
| `DB_HOST` | MariaDB hostname | `mariadb` |
| `DB_PORT` | MariaDB port | `3306` |
| `DB_DATABASE` | Database name | `solyto` |

Credentials (`DB_USER`, `DB_PASSWORD`) are read from Docker secrets (`db_user`, `db_password`). The MariaDB root password is read from `mariadb_root_password`.

## PostgreSQL (DAV)

| Variable | Description | Default |
|----------|-------------|---------|
| `DAV_DB_HOST` | PostgreSQL hostname | `postgres` |
| `DAV_DB_PORT` | PostgreSQL port | `5432` |
| `DAV_DB_DATABASE` | DAV database name | `solyto_dav` |

Credentials are read from Docker secrets (`dav_db_user`, `dav_db_password`). The PostgreSQL root password is read from `postgres_root_password`.

## Redis

| Variable | Description | Default |
|----------|-------------|---------|
| `REDIS_CLIENT` | Redis client library | `phpredis` |
| `REDIS_HOST` | Redis hostname | `redis` |
| `REDIS_PORT` | Redis port | `6379` |
| `REDIS_PASSWORD` | Redis password | (from Docker secret) |
| `REDIS_PREFIX` | Key prefix for this instance | `solyto_` |

## Proxy

| Variable | Description | Default |
|----------|-------------|---------|
| `TRUSTED_PROXIES` | Trusted proxy IPs (Traefik) | `172.16.0.0/12` |

## Timezone

| Variable | Description | Default |
|----------|-------------|---------|
| `TIMEZONE` | Server timezone | `UTC` |

This affects PHP and queue worker timezone settings.

## AI

| Variable | Description | Default |
|----------|-------------|---------|
| `AI_BASE_URL` | OpenAI-compatible API base URL | OpenAI default |
| `AI_MODEL` | Default AI model | `gpt-4o` |

The API key is stored in the `ai_api_key` Docker secret. This is only needed if you want to use [AI Assistants](/account/ai-assistants/) server-side.

## Mail

| Variable | Description | Default |
|----------|-------------|---------|
| `MAILGUN_DOMAIN` | Mailgun domain for sending email | (empty) |
| `MAIL_FROM_ADDRESS` | Sender email address | `noreply@example.com` |
| `MAIL_FROM_NAME` | Sender display name | `solyto` |

The Mailgun secret is stored in the `mailgun_secret` Docker secret.

## Image processing

| Variable | Description | Default |
|----------|-------------|---------|
| `IMAGE_DRIVER` | Image processing backend | `intervention` |

Options:

- `intervention` — uses the Intervention Image PHP library (default, no extra service needed)
- `imgproxy` — uses the standalone `imgproxy` service for better performance with large images

When `IMAGE_DRIVER=imgproxy`, the `imgproxy` container is started and credentials are read from the `imgproxy_key` and `imgproxy_salt` Docker secrets.

## Telegram

| Variable | Description | Default |
|----------|-------------|---------|
| `TELEGRAM_DEBUG_CHAT_ID` | Chat ID for debug notifications | (empty) |

Telegram bot credentials are stored in Docker secrets (`solyto_bot_telegram_token`, `solyto_bot_webhook_token`). See [Telegram Bot](/integrations/telegram/) for setup instructions.

## Applying changes

After editing `.env`, restart the affected services:

```bash
docker compose up -d
```

Docker Compose detects changes in `.env` and recreates containers with the new values.
