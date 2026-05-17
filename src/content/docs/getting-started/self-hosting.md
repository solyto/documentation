---
title: Self-Hosting
description: Run solyto on your own server.
---

solyto is fully self-hostable. All components are published as Docker images.

## Architecture

solyto consists of several services:

| Service | Description |
|---------|-------------|
| `app` | SvelteKit frontend (PWA) |
| `api` | Laravel backend |
| `db` | PostgreSQL database |

## Docker Compose

The recommended way to self-host is via our pre-built Docker Compose stack in the [selfhosted repo](https://github.com/solyto/selfhosted).

```bash
git clone https://github.com/solyto/selfhosted
cd selfhosted
# Edit .env with your domain and settings
cp .env.example .env
docker compose up -d
```

## Configuration

Key environment variables:

| Variable | Description |
|----------|-------------|
| `APP_URL` | Your domain (e.g. `https://solyto.example.com`) |
| `DB_PASSWORD` | PostgreSQL password |
| `APP_KEY` | Laravel application key (generate with `php artisan key:generate`) |

## Updates

```bash
docker compose pull
docker compose up -d
```

## Telegram Bot (optional)

If you want to use the Telegram integration, you'll need to create a bot via [@BotFather](https://t.me/BotFather) and add the token to your `.env`. See [Telegram Bot](/integrations/telegram/) for details.
