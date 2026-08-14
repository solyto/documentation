---
title: Présentation de l'auto-hébergement
description: Tout ce que vous devez savoir pour exécuter solyto sur votre propre serveur.
---

solyto est entièrement auto-hébergeable. Tous les composants sont publiés sous forme d'images Docker, et le dépôt selfhosted fournit une pile Docker Compose complète avec tout déjà interconnecté.

## Pourquoi s'auto-héberger

- **Contrôle total** — vos données restent sur votre propre matériel
- **Aucun accès tiers** — personne d'autre n'a jamais accès à vos données
- **Personnalisation** — configurez les fonctionnalités, désactivez ce dont vous n'avez pas besoin
- **Pas de dépendance à un fournisseur** — pile Docker standard, facile à migrer ou à sauvegarder
- **Gratuit** — pas d'abonnement, pas de limites

## Configuration requise

La seule exigence logicielle est **Docker** et **Docker Compose** — tout le reste s'exécute dans des conteneurs. solyto est léger : il fonctionne confortablement sur un Raspberry Pi, et n'importe quel VPS ou serveur dédié est largement suffisant.

Vous avez également besoin de :

- Un serveur accessible depuis Internet (VPS, serveur dédié, ou serveur personnel avec redirection de port)
- Trois noms de domaine pointant vers l'adresse IP de votre serveur (app, api, dav)
- Une adresse e-mail valide pour la génération de certificats TLS (Let's Encrypt)

## Architecture

solyto fonctionne avec 10 services Docker :

| Service | Image | Description |
|---------|-------|-------------|
| `traefik` | `traefik:v3` | Proxy inverse avec HTTPS automatique via Let's Encrypt |
| `nginx` | `solyto/api-nginx` | Serveur web pour l'API et DAV, contrôle de santé sur `/api/v1/health` |
| `api` | `solyto/api-php` | Backend Laravel PHP-FPM, exécute `startup.sh` puis `php-fpm` |
| `dav` | `solyto/api-php` | Service WebDAV/CalDAV/CardDAV (même image, configuration différente) |
| `queue` | `solyto/api-php` | Worker de file d'attente Laravel (`queue:work --tries=3 --timeout=300`) |
| `app` | `solyto/app` | Frontend SvelteKit avec SSR, s'exécute sur le port 3000 |
| `imgproxy` | `darthsim/imgproxy` | Traitement d'images optionnel (uniquement si `IMAGE_DRIVER=imgproxy`) |
| `mariadb` | `mariadb:12` | Base de données principale pour l'API |
| `postgres` | `postgres:17` | Base de données pour CalDAV/CardDAV (SabreDAV) |
| `redis` | `redis:7.4.1` | Cache, backend de file d'attente et stockage de session |

## Images Docker

Trois images sont publiées et maintenues par le projet solyto :

| Image | Base | Objectif |
|-------|------|---------|
| `solyto/app` | Node 22 Alpine | Frontend SvelteKit SSR, port 3000 |
| `solyto/api-php` | PHP 8.4 FPM | Backend applicatif Laravel |
| `solyto/api-nginx` | Nginx Alpine | Sert les fichiers statiques et fait le proxy vers PHP-FPM |

## Architecture réseau

Trois réseaux Docker isolent les services par fonction :

| Réseau | Services | Objectif |
|---------|----------|---------|
| `public` | traefik, nginx, app | Services accessibles depuis l'extérieur |
| `api` | nginx, api, dav, queue, imgproxy | Communication interne de l'API |
| `db` | api, dav, queue, mariadb, postgres, redis | Accès à la base de données uniquement |

Flux de trafic : `Internet → Traefik → Nginx → PHP-FPM (api/dav)` et `Internet → Traefik → App (port 3000)`.

## Volumes

| Volume | Utilisé par | Objectif |
|--------|---------|---------|
| `mariadb_data` | mariadb | Persistance des données MariaDB |
| `pg_data` | postgres | Persistance des données PostgreSQL |
| `redis_data` | redis | Persistance des données Redis |
| `traefik_acme` | traefik | Certificats TLS Let's Encrypt |
| `./storage/` | api, dav, queue, nginx, imgproxy | Stockage de fichiers partagé (téléversements, journaux, cache du framework) |

## Et ensuite

- [Installation](/self-hosting/installation/) — guide d'installation étape par étape
- [Configuration](/self-hosting/configuration/) — toutes les variables d'environnement
- [Secrets Docker](/self-hosting/secrets/) — gestion sécurisée des identifiants
