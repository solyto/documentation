---
title: Self-Hosting Overview
description: Everything you need to know about running solyto on your own server.
---

solyto is fully self-hostable. All components are published as Docker images, and the selfhosted repo provides a complete Docker Compose stack with everything wired together.

## Why self-host

- **Full control** — your data stays on your hardware
- **No third-party access** — nobody else has access to your data, ever
- **Customization** — configure features, disable what you don't need
- **No vendor lock-in** — standard Docker stack, easy to migrate or back up
- **Free** — no subscriptions, no limits

## System requirements

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| RAM | 2 GB | 4 GB |
| Storage | 10 GB | 20 GB |
| CPU | 1 core | 2 cores |
| Software | Docker + Docker Compose | Docker + Docker Compose |

You also need:

- A server reachable from the internet (VPS, dedicated server, or home server with port forwarding)
- Domain names pointing to your server's IP address
- A valid email address for TLS certificate generation (Let's Encrypt)

## Architecture

solyto runs as 10 Docker services:

| Service | Image | Description |
|---------|-------|-------------|
| `traefik` | `traefik:v3` | Reverse proxy with automatic HTTPS via Let's Encrypt |
| `nginx` | `solyto/api-nginx` | Web server for API and DAV, healthcheck on `/api/v1/health` |
| `api` | `solyto/api-php` | Laravel PHP-FPM backend, runs `startup.sh` then `php-fpm` |
| `dav` | `solyto/api-php` | WebDAV/CalDAV/CardDAV service (same image, different config) |
| `queue` | `solyto/api-php` | Laravel queue worker (`queue:work --tries=3 --timeout=300`) |
| `app` | `solyto/app` | SvelteKit frontend with SSR, runs on port 3000 |
| `imgproxy` | `darthsim/imgproxy` | Optional image processing (only if `IMAGE_DRIVER=imgproxy`) |
| `mariadb` | `mariadb:12` | Primary database for the API |
| `postgres` | `postgres:17` | Database for CalDAV/CardDAV (SabreDAV) |
| `redis` | `redis:7.4.1` | Cache, queue backend, and session storage |

## Docker images

Three images are published and maintained by the solyto project:

| Image | Base | Purpose |
|-------|------|---------|
| `solyto/app` | Node 22 Alpine | SvelteKit SSR frontend, port 3000 |
| `solyto/api-php` | PHP 8.4 FPM | Laravel application backend |
| `solyto/api-nginx` | Nginx Alpine | Serves static files and proxies to PHP-FPM |

## Network architecture

Three Docker networks isolate services by function:

| Network | Services | Purpose |
|---------|----------|---------|
| `public` | traefik, nginx, app | Externally reachable services |
| `api` | nginx, api, dav, queue, imgproxy | Internal API communication |
| `db` | api, dav, queue, mariadb, postgres, redis | Database access only |

Traffic flow: `Internet → Traefik → Nginx → PHP-FPM (api/dav)` and `Internet → Traefik → App (port 3000)`.

## Volumes

| Volume | Used by | Purpose |
|--------|---------|---------|
| `mariadb_data` | mariadb | MariaDB data persistence |
| `pg_data` | postgres | PostgreSQL data persistence |
| `redis_data` | redis | Redis data persistence |
| `traefik_acme` | traefik | Let's Encrypt TLS certificates |
| `./storage/` | api, dav, queue, nginx, imgproxy | Shared file storage (uploads, logs, framework cache) |

## What's next

- [Installation](/self-hosting/installation/) — step-by-step setup guide
- [Configuration](/self-hosting/configuration/) — all environment variables
- [Docker Secrets](/self-hosting/secrets/) — managing credentials securely
