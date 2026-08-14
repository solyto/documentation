---
title: Docker Secrets
description: Managing Docker secrets for secure credential storage.
---

solyto uses Docker secrets to manage sensitive credentials. Passwords, API keys, and tokens are stored as files in the `./secrets/` directory and mounted into containers at runtime. This keeps secrets out of environment variables and version control.

## How it works

Each secret is a plain text file in `./secrets/`. The filename is the secret name:

```
secrets/
  app_key
  db_user
  db_password
  ai_api_key
  ...
```

Laravel and other services read secrets using the `_FILE` suffix convention. For example, `DB_PASSWORD_FILE=/run/secrets/db_password` tells Laravel to read the database password from that file instead of from an environment variable.

Docker Compose mounts these files as read-only into containers under `/run/secrets/`.

## Required secrets

These 7 secrets must be present for solyto to start:

| Secret | Description | Used by |
|--------|-------------|---------|
| `app_key` | Laravel encryption key (format: `base64:...`) | api, queue |
| `db_user` | MariaDB application user | api, queue, mariadb |
| `db_password` | MariaDB application password | api, queue, mariadb |
| `dav_db_user` | PostgreSQL DAV user | dav, postgres |
| `dav_db_password` | PostgreSQL DAV password | dav, postgres |
| `mariadb_root_password` | MariaDB root password | mariadb |
| `postgres_root_password` | PostgreSQL superuser password | postgres |

The MariaDB user and password are provided by `db_user` / `db_password` (the same credentials the API uses).

## Optional secrets

These 11 secrets enable optional features. Create empty files or omit them if not needed:

| Secret | Description | Enables |
|--------|-------------|---------|
| `solyto_bot_webhook_token` | Telegram bot webhook token | [Telegram Bot](/integrations/telegram/) |
| `solyto_bot_telegram_token` | Telegram bot API token | Telegram Bot |
| `hardcover_api_key` | Hardcover book API key | Book metadata imports |
| `ai_api_key` | AI provider API key | [Library recommendations](/account/ai-assistants/) |
| `mailgun_secret` | Mailgun API key | Email notifications |
| `vapid_public_key` | Web Push public key | Browser push notifications |
| `vapid_private_key` | Web Push private key | Browser push notifications |
| `bgg_api_key` | BoardGameGeek API key | Game metadata |
| `tmdb_access_token` | TMDB API access token | Movie metadata |
| `imgproxy_key` | Imgproxy authentication key | Image processing via imgproxy |
| `imgproxy_salt` | Imgproxy URL signing salt | Image processing via imgproxy |

## Automatic generation

The setup script generates all required secrets automatically:

```bash
curl -fsSL "https://raw.githubusercontent.com/solyto/selfhosted/main/setup.sh?$(date +%s)" | bash
```

## Manual generation

If you need to regenerate a secret manually:

```bash
# Random hex password (32 bytes)
openssl rand -hex 32 > secrets/db_password

# Laravel app key
echo "base64:$(openssl rand -base64 32)" > secrets/app_key

# Simple username
echo "solyto" > secrets/db_user

# API key (paste your own)
echo "sk-your-openai-key-here" > secrets/ai_api_key
```

## Security notes

- **Never commit secrets to version control** — the `secrets/` directory should be in `.gitignore`
- **File permissions** — restrict access to secret files: `chmod 600 secrets/*`
- **Backups** — back up your `secrets/` directory securely. If you lose these files, you may need to reset database credentials
- **Rotation** — to rotate a secret, update the file and restart the affected services with `docker compose up -d`

## Troubleshooting

If a service fails to start, check that the required secret files exist and are readable:

```bash
ls -la secrets/
docker compose logs api
```

Common issues include missing files, empty files, or trailing newlines in secret files.
