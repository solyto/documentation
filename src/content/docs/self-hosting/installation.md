---
title: Installation
description: Step-by-step guide to installing solyto on your server.
---

This guide walks you through deploying solyto on your own server using Docker.

## Prerequisites

Before you begin, make sure you have:

- A server (VPS, dedicated, or home server) with at least 2 GB RAM and 10 GB storage
- **Docker** and **Docker Compose** installed
- Three domain names (or subdomains) pointing to your server's IP address:
  - `app.example.com` — the frontend
  - `api.example.com` — the API
  - `dav.example.com` — CalDAV/CardDAV
- A valid email address for Let's Encrypt TLS certificates
- Ports **80** and **443** open on your firewall

## DNS setup

Point your three domain names to your server's public IP address:

```
app.example.com   A   your.server.ip
api.example.com   A   your.server.ip
dav.example.com   A   your.server.ip
```

Wait for DNS propagation before continuing (usually a few minutes, up to 24 hours).

## One-step install

The fastest way to install solyto is with the setup script:

```bash
curl -fsSL "https://raw.githubusercontent.com/solyto/selfhosted/main/setup.sh?$(date +%s)" | bash
```

The setup script will:

1. Clone the [selfhosted repo](https://github.com/solyto/selfhosted)
2. Create required directories (`storage/`, `bootstrap/cache/`, etc.)
3. Prompt you interactively for:
   - **API_DOMAIN** — e.g. `api.example.com`
   - **APP_DOMAIN** — e.g. `app.example.com`
   - **DAV_DOMAIN** — e.g. `dav.example.com`
   - **ACME_EMAIL** — your email for Let's Encrypt
4. Generate all required secrets (database passwords, app key, etc.)
5. Write everything to `.env` and `./secrets/`

After the script finishes, start the services:

```bash
cd selfhosted
docker compose up -d
```

## Manual install

If you prefer to do everything manually:

### 1. Clone the repo

```bash
git clone https://github.com/solyto/selfhosted.git
cd selfhosted
```

### 2. Create directories

```bash
mkdir -p storage/app/public
mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/logs
mkdir -p bootstrap/cache
chown -R www-data:www-data storage/
```

### 3. Configure environment

Copy the example environment file and edit it:

```bash
cp .env.example .env
```

Edit `.env` with your domain names, timezone, and preferences. See [Configuration](/self-hosting/configuration/) for all available options.

### 4. Generate secrets

Create the `./secrets/` directory and generate the required secret files:

```bash
mkdir -p secrets

# Application key
echo "base64:$(openssl rand -base64 32)" > secrets/app_key

# MariaDB
echo "solyto" > secrets/db_user
openssl rand -hex 32 > secrets/db_password
echo "solyto" > secrets/mariadb_user
openssl rand -hex 32 > secrets/mariadb_password
openssl rand -hex 32 > secrets/mariadb_root_password

# PostgreSQL (DAV)
echo "solyto_dav" > secrets/dav_db_user
openssl rand -hex 32 > secrets/dav_db_password
openssl rand -hex 32 > secrets/postgres_root_password

# Optional secrets (create empty files)
touch secrets/solyto_bot_webhook_token
touch secrets/solyto_bot_telegram_token
touch secrets/hardcover_api_key
touch secrets/ai_api_key
touch secrets/mailgun_secret
touch secrets/vapid_public_key
touch secrets/vapid_private_key
touch secrets/bgg_api_key
touch secrets/tmdb_access_token
touch secrets/imgproxy_key
touch secrets/imgproxy_salt
```

See [Docker Secrets](/self-hosting/secrets/) for details on each secret.

### 5. Start the services

```bash
docker compose up -d
```

## Verify the installation

### Check container status

```bash
docker compose ps
```

All services should show status `Up` or `Up (healthy)`.

### Check the API health endpoint

```bash
curl -s https://api.example.com/api/v1/health
```

A successful response means the API is running and connected to the database.

### Access the app

Open `https://app.example.com` in your browser. You should see the solyto login page.

## Creating your first user

The registration page is available at `https://app.example.com/auth/register` — create your account with a display name, email address, and a password (minimum 12 characters).

Alternatively, create a user from the command line:

```bash
docker exec -it <project>-api so users:create
```

Replace `<project>` with your `PROJECT_NAME` (default `solyto`). If you changed the project name, adjust the container name accordingly.

## Next steps

- [Configuration](/self-hosting/configuration/) — fine-tune your environment variables
- [Docker Secrets](/self-hosting/secrets/) — set up optional integrations
- [Upgrading](/self-hosting/upgrading/) — how to keep solyto up to date
