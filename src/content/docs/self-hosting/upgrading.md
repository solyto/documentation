---
title: Upgrading
description: How to update solyto to the latest version.
---

Keeping solyto up to date ensures you have the latest features, bug fixes, and security patches.

## Before upgrading

1. **Check release notes** — review the [releases page](https://github.com/solyto/selfhosted/releases) for breaking changes or manual migration steps
2. **Back up your data** — see below
3. **Note your current version** — check `SOLYTO_VERSION` in your `.env`

## Back up your data

Before any upgrade, create backups of your databases and storage:

```bash
# Back up MariaDB
docker compose exec mariadb mysqldump -u root -p solyto > backup_mariadb.sql

# Back up PostgreSQL
docker compose exec postgres pg_dump -U solyto_dav solyto_dav > backup_postgres.sql

# Back up storage
tar -czf backup_storage.tar.gz storage/
```

Store these backups outside the server or in a separate location.

## Upgrade process

### 1. Pull the latest images

```bash
docker compose pull
```

This fetches the latest versions of all three solyto images (`solyto/app`, `solyto/api-php`, `solyto/api-nginx`) as well as any updated base images.

### 2. Restart services

```bash
docker compose up -d
```

Docker Compose detects the new images and recreates the containers.

### 3. Database migrations

The `api` container runs `startup.sh` on every start, which automatically applies pending database migrations. No manual action is needed.

### 4. Verify

Check that all services are running:

```bash
docker compose ps
```

Test the API health endpoint:

```bash
curl -s https://api.example.com/api/v1/health
```

Open the frontend and confirm everything works as expected.

## Pinning a version

To stay on a specific version, set `SOLYTO_VERSION` in your `.env`:

```
SOLYTO_VERSION=1.2.0
```

Then `docker compose pull` will fetch that specific tag. Remove or set it to `latest` to get new versions again.

## Rolling back

If an upgrade causes issues:

1. Stop the services: `docker compose down`
2. Set `SOLYTO_VERSION` to the previous version in `.env`
3. Restore your database backups if needed
4. Start the services: `docker compose up -d`

Database downgrades may not be supported if migrations made irreversible changes. This is why backups are essential.
