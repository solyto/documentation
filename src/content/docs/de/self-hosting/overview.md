---
title: Self-Hosting – Übersicht
description: Alles, was du wissen musst, um solyto auf deinem eigenen Server zu betreiben.
---

solyto lässt sich vollständig selbst hosten. Alle Komponenten werden als Docker-Images veröffentlicht, und das Selfhosted-Repository stellt einen vollständigen Docker-Compose-Stack bereit, bei dem alles miteinander verdrahtet ist.

## Warum selbst hosten

- **Volle Kontrolle** — deine Daten bleiben auf deiner eigenen Hardware
- **Kein Zugriff durch Dritte** — niemand sonst hat jemals Zugriff auf deine Daten
- **Anpassbarkeit** — konfiguriere Funktionen, deaktiviere, was du nicht brauchst
- **Kein Vendor-Lock-in** — Standard-Docker-Stack, leicht zu migrieren oder zu sichern
- **Kostenlos** — keine Abonnements, keine Limits

## Systemanforderungen

Die einzige Softwarevoraussetzung sind **Docker** und **Docker Compose** — alles andere läuft in Containern. solyto ist ressourcenschonend: Es läuft problemlos auf einem Raspberry Pi, und jeder VPS oder Root-Server ist mehr als ausreichend.

Außerdem brauchst du:

- Einen Server, der aus dem Internet erreichbar ist (VPS, dedizierter Server oder Heimserver mit Portweiterleitung)
- Drei Domainnamen, die auf die IP-Adresse deines Servers zeigen (app, api, dav)
- Eine gültige E-Mail-Adresse zur Erzeugung von TLS-Zertifikaten (Let's Encrypt)

## Architektur

solyto läuft als 10 Docker-Dienste:

| Dienst | Image | Beschreibung |
|---------|-------|-------------|
| `traefik` | `traefik:v3` | Reverse Proxy mit automatischem HTTPS über Let's Encrypt |
| `nginx` | `solyto/api-nginx` | Webserver für API und DAV, Healthcheck unter `/api/v1/health` |
| `api` | `solyto/api-php` | Laravel-PHP-FPM-Backend, führt `startup.sh` und dann `php-fpm` aus |
| `dav` | `solyto/api-php` | WebDAV/CalDAV/CardDAV-Dienst (gleiches Image, andere Konfiguration) |
| `queue` | `solyto/api-php` | Laravel-Queue-Worker (`queue:work --tries=3 --timeout=300`) |
| `app` | `solyto/app` | SvelteKit-Frontend mit SSR, läuft auf Port 3000 |
| `imgproxy` | `darthsim/imgproxy` | Optionale Bildverarbeitung (nur wenn `IMAGE_DRIVER=imgproxy`) |
| `mariadb` | `mariadb:12` | Primäre Datenbank für die API |
| `postgres` | `postgres:17` | Datenbank für CalDAV/CardDAV (SabreDAV) |
| `redis` | `redis:7.4.1` | Cache, Queue-Backend und Session-Speicher |

## Docker-Images

Drei Images werden vom solyto-Projekt veröffentlicht und gepflegt:

| Image | Basis | Zweck |
|-------|------|---------|
| `solyto/app` | Node 22 Alpine | SvelteKit-SSR-Frontend, Port 3000 |
| `solyto/api-php` | PHP 8.4 FPM | Laravel-Anwendungs-Backend |
| `solyto/api-nginx` | Nginx Alpine | Liefert statische Dateien aus und leitet an PHP-FPM weiter |

## Netzwerkarchitektur

Drei Docker-Netzwerke isolieren Dienste nach Funktion:

| Netzwerk | Dienste | Zweck |
|---------|----------|---------|
| `public` | traefik, nginx, app | Von außen erreichbare Dienste |
| `api` | nginx, api, dav, queue, imgproxy | Interne API-Kommunikation |
| `db` | api, dav, queue, mariadb, postgres, redis | Nur Datenbankzugriff |

Datenfluss: `Internet → Traefik → Nginx → PHP-FPM (api/dav)` sowie `Internet → Traefik → App (Port 3000)`.

## Volumes

| Volume | Genutzt von | Zweck |
|--------|---------|---------|
| `mariadb_data` | mariadb | Persistenz der MariaDB-Daten |
| `pg_data` | postgres | Persistenz der PostgreSQL-Daten |
| `redis_data` | redis | Persistenz der Redis-Daten |
| `traefik_acme` | traefik | Let's-Encrypt-TLS-Zertifikate |
| `./storage/` | api, dav, queue, nginx, imgproxy | Gemeinsamer Dateispeicher (Uploads, Logs, Framework-Cache) |

## Wie geht es weiter

- [Installation](/self-hosting/installation/) — Schritt-für-Schritt-Einrichtungsanleitung
- [Konfiguration](/self-hosting/configuration/) — alle Umgebungsvariablen
- [Docker Secrets](/self-hosting/secrets/) — Zugangsdaten sicher verwalten
