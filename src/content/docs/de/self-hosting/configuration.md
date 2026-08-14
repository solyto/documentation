---
title: Konfiguration
description: Alle Umgebungsvariablen und Konfigurationsoptionen.
---

Die gesamte Konfiguration erfolgt über die Datei `.env` im Wurzelverzeichnis des Selfhosted-Repositorys. Sensible Werte (Passwörter, API-Schlüssel) werden als Docker Secrets in `./secrets/` gespeichert — Details findest du unter [Docker Secrets](/self-hosting/secrets/).

## Projekt

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `PROJECT_NAME` | Name des Docker-Compose-Projekts | `solyto` |
| `SOLYTO_VERSION` | Versions-Tag für solyto-Images | `latest` |

## Domains

Dies sind die Domainnamen, die auf deinen Server zeigen. Jeder Dienst erhält seine eigene (Sub-)Domain.

| Variable | Beschreibung | Beispiel |
|----------|-------------|---------|
| `API_DOMAIN` | Domain für die API | `api.example.com` |
| `APP_DOMAIN` | Domain für das Frontend | `app.example.com` |
| `DAV_DOMAIN` | Domain für CalDAV/CardDAV | `dav.example.com` |
| `ACME_EMAIL` | E-Mail für Let's-Encrypt-Zertifikatsbenachrichtigungen | `admin@example.com` |

## Anwendung

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `APP_NAME` | Anzeigename der Anwendung | `solyto` |
| `APP_URL` | Vollständige URL zur API | `https://${API_DOMAIN}` |
| `FRONTEND_URL` | Vollständige URL zum Frontend | `https://${APP_DOMAIN}` |
| `APP_ENV` | Anwendungsumgebung | `production` |
| `APP_DEBUG` | Debug-Modus aktivieren | `false` |
| `APP_TIMEZONE` | Standard-Zeitzone der Anwendung | `UTC` |

## Frontend

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `NODE_ENV` | Node.js-Umgebung | `production` |
| `PUBLIC_API_URL` | URL, über die das Frontend die API erreicht | `https://${API_DOMAIN}` |
| `PUBLIC_DISABLE_DEV_REQUESTS` | Blendet den Bereich Dev Requests aus | `true` |
| `PUBLIC_REDIRECT_AFTER_LOGOUT` | URL, zu der nach dem Abmelden weitergeleitet wird | `${APP_URL}` |
| `PUBLIC_LEGAL_NOTICE_URL` | Link für die Schaltfläche des Impressums | (leer) |
| `PUBLIC_PRIVACY_URL` | Link für die Schaltfläche der Datenschutzerklärung | (leer) |
| `PUBLIC_TERMS_URL` | Link für die Schaltfläche der Nutzungsbedingungen | (leer) |

Setze `PUBLIC_DISABLE_DEV_REQUESTS=true`, um den Link zu Dev Requests auszublenden und die Route vollständig zu deaktivieren (der Standard bei selbst gehosteten Instanzen, da Anfragen das solyto-Team ohnehin nicht erreichen würden). Setze eine der `PUBLIC_*_URL`-Variablen, um eine Schaltfläche mit rechtlichen Hinweisen anzuzeigen, die auf dein eigenes Impressum, deine Datenschutzerklärung oder deine Nutzungsbedingungen verweist.

## Datenbankversionen

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `MARIADB_VERSION` | MariaDB-Image-Version | `12` |
| `POSTGRES_VERSION` | PostgreSQL-Image-Version | `17` |
| `REDIS_VERSION` | Redis-Image-Version | `7.4.1` |

## MariaDB

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `DB_CONNECTION` | Datenbanktreiber | `mariadb` |
| `DB_HOST` | MariaDB-Hostname | `mariadb` |
| `DB_PORT` | MariaDB-Port | `3306` |
| `DB_DATABASE` | Datenbankname | `api` |

Zugangsdaten (`DB_USER`, `DB_PASSWORD`) werden aus Docker Secrets gelesen (`db_user`, `db_password`). Das MariaDB-Root-Passwort wird aus `mariadb_root_password` gelesen.

## PostgreSQL (DAV)

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `DAV_DB_HOST` | PostgreSQL-Hostname | `postgres` |
| `DAV_DB_PORT` | PostgreSQL-Port | `5432` |
| `DAV_DB_DATABASE` | Name der DAV-Datenbank | `dav` |

Zugangsdaten werden aus Docker Secrets gelesen (`dav_db_user`, `dav_db_password`). Das PostgreSQL-Root-Passwort wird aus `postgres_root_password` gelesen.

## Redis

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `REDIS_CLIENT` | Redis-Client-Bibliothek | `phpredis` |
| `REDIS_HOST` | Redis-Hostname | `redis` |
| `REDIS_PORT` | Redis-Port | `6379` |
| `REDIS_PASSWORD` | Redis-Passwort | (aus Docker Secret) |
| `REDIS_PREFIX` | Schlüsselpräfix für diese Instanz | `solyto_` |

## Proxy

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `TRUSTED_PROXIES` | Vertrauenswürdige Proxy-IPs (nötig bei Verwendung eines externen Reverse Proxys) | (leer) |

## Zeitzone

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `TIMEZONE` | Server-Zeitzone | `UTC` |

Dies wirkt sich auf die Zeitzoneneinstellungen von PHP und des Queue-Workers aus.

## KI

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `AI_BASE_URL` | Basis-URL der OpenAI-kompatiblen API | (leer — OpenAI-Standard) |
| `AI_MODEL` | Standard-KI-Modell | `gpt-4o-mini` |

Der API-Schlüssel wird im Docker Secret `ai_api_key` gespeichert. Das wird nur benötigt, wenn du [Bibliotheksempfehlungen](/account/ai-assistants/) nutzen möchtest.

## E-Mail

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `MAILGUN_DOMAIN` | Mailgun-Domain zum Versenden von E-Mails | (leer) |
| `MAIL_FROM_ADDRESS` | Absender-E-Mail-Adresse | `noreply@example.com` |
| `MAIL_FROM_NAME` | Anzeigename des Absenders | `solyto` |

Das Mailgun-Secret wird im Docker Secret `mailgun_secret` gespeichert.

## Bildverarbeitung

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `IMAGE_DRIVER` | Backend für die Bildverarbeitung | `intervention` |

Optionen:

- `intervention` — nutzt die Intervention-Image-PHP-Bibliothek (Standard, kein zusätzlicher Dienst nötig)
- `imgproxy` — nutzt den eigenständigen `imgproxy`-Dienst für bessere Performance bei großen Bildern

Bei `IMAGE_DRIVER=imgproxy` wird der `imgproxy`-Container gestartet, und die Zugangsdaten werden aus den Docker Secrets `imgproxy_key` und `imgproxy_salt` gelesen.

## Telegram

| Variable | Beschreibung | Standardwert |
|----------|-------------|---------|
| `TELEGRAM_DEBUG_CHAT_ID` | Chat-ID für Debug-Benachrichtigungen | (leer) |

Die Zugangsdaten des Telegram-Bots werden als Docker Secrets gespeichert (`solyto_bot_telegram_token`, `solyto_bot_webhook_token`). Eine Einrichtungsanleitung findest du unter [Telegram-Bot](/integrations/telegram/).

## Änderungen anwenden

Starte nach dem Bearbeiten von `.env` die betroffenen Dienste neu:

```bash
docker compose up -d
```

Docker Compose erkennt Änderungen in `.env` und erstellt Container mit den neuen Werten neu.
