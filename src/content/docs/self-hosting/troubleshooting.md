---
title: Troubleshooting
description: Common issues and solutions for self-hosted solyto.
---

This page covers common issues you might encounter when self-hosting solyto and how to resolve them.

## Checking logs

The first step in debugging any issue is checking the container logs:

```bash
# All services
docker compose logs

# A specific service
docker compose logs api
docker compose logs app
docker compose logs nginx

# Follow logs in real time
docker compose logs -f api
```

Logs are your best friend. Most errors are explained in the output.

## Container won't start

**Symptoms:** `docker compose ps` shows a service restarting or exited.

**Checks:**

1. View the logs for the failing service: `docker compose logs <service>`
2. Verify `.env` has all required variables — see [Configuration](/self-hosting/configuration/)
3. Verify all required secret files exist in `./secrets/` — see [Docker Secrets](/self-hosting/secrets/)
4. Check that Docker has enough resources (memory, disk space)

Common cause: missing or empty secret file. Check with:

```bash
ls -la secrets/
```

## Database connection errors

**Symptoms:** API returns 500 errors, logs show `SQLSTATE` or `Connection refused`.

**Checks:**

1. Is the database running? `docker compose ps mariadb` and `docker compose ps postgres`
2. Check credentials match between `.env` and secret files:
   ```bash
   cat secrets/db_user
   cat secrets/db_password
   ```
3. Ensure `DB_HOST=mariadb` and `DAV_DB_HOST=postgres` (Docker service names)
4. Wait — MariaDB and PostgreSQL can take a few seconds to be ready on first start. The API container will retry.

**Reset database credentials** (if corrupted):

```bash
# Regenerate the secret file
openssl rand -hex 32 > secrets/db_password
docker compose up -d mariadb
# Wait for MariaDB to start, then restart API
docker compose restart api queue
```

## TLS certificate issues

**Symptoms:** Browser shows security warning, Traefik certificate errors.

**Checks:**

1. Verify your domains resolve to the server IP: `dig api.example.com`
2. Ensure ports 80 and 443 are open and not blocked by a firewall
3. Check that `ACME_EMAIL` is set in `.env`
4. Verify the `traefik_acme` volume exists and is writable

**Force certificate renewal:**

```bash
docker compose down
docker volume rm <project>_traefik_acme
docker compose up -d
```

Replace `<project>` with your `PROJECT_NAME`. Traefik will request new certificates on startup.

## Permission problems with storage/

**Symptoms:** File uploads fail, logs show `Permission denied` in `storage/`.

**Fix:**

```bash
chown -R www-data:www-data storage/
chmod -R 775 storage/
```

The `storage/` directory is shared between `api`, `dav`, `queue`, `nginx`, and `imgproxy` via a bind mount. All of these need write access.

## CalDAV/CardDAV not working

**Symptoms:** Calendar or contact sync fails in external apps (DAVx5, Apple Calendar, etc.).

**Checks:**

1. Verify the `dav` service is running: `docker compose ps dav`
2. Ensure `DAV_DOMAIN` is set and resolving correctly
3. Check that the CalDAV/CardDAV URL your external app uses matches `https://dav.example.com`
4. Check `dav` service logs: `docker compose logs dav`
5. Verify PostgreSQL is running: `docker compose ps postgres`
6. Ensure `dav_db_user` and `dav_db_password` secrets are correct

**Common issue:** The DAV domain must be different from the API domain. They run as separate services behind Traefik.

## Queue not processing

**Symptoms:** Async tasks don't complete (notifications, background jobs).

**Checks:**

1. Is the queue worker running? `docker compose ps queue`
2. Check queue logs: `docker compose logs queue`
3. Verify Redis is running: `docker compose ps redis`
4. Check Redis connectivity: `docker compose exec api so tinker` then try a Redis command

**Restart the queue worker:**

```bash
docker compose restart queue
```

## Images not loading

**Symptoms:** Uploaded profile images or other media return 404 or broken.

**Checks:**

1. If using `IMAGE_DRIVER=intervention` (default), no extra service is needed
2. If using `IMAGE_DRIVER=imgproxy`, ensure the `imgproxy` service is running and `imgproxy_key` / `imgproxy_salt` secrets are set
3. Check `storage/app/public/` exists and is writable
4. Check nginx logs: `docker compose logs nginx`

## Healthcheck failures

The nginx service has a healthcheck on `/api/v1/health`. If it's failing:

1. Test manually: `curl -s https://api.example.com/api/v1/health`
2. If the API is not responding, check `api` container logs
3. If the database is down, the healthcheck will fail — resolve the database issue first

## Getting help

If you can't resolve an issue:

- Search existing issues on the [selfhosted repo](https://github.com/solyto/selfhosted/issues)
- Submit a new issue with your logs (redact any secrets first)
- Check the [Dev Requests](/account/dev-requests/) board if you're using solyto.app
