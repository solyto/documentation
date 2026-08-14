---
title: Configuration
description: Toutes les variables d'environnement et options de configuration.
---

Toute la configuration se fait via le fichier `.env` à la racine du dépôt selfhosted. Les valeurs sensibles (mots de passe, clés API) sont stockées sous forme de secrets Docker dans `./secrets/` — consultez [Secrets Docker](/self-hosting/secrets/) pour plus de détails.

## Projet

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `PROJECT_NAME` | Nom du projet Docker Compose | `solyto` |
| `SOLYTO_VERSION` | Tag de version pour les images solyto | `latest` |

## Domaines

Ce sont les noms de domaine pointant vers votre serveur. Chaque service dispose de son propre (sous-)domaine.

| Variable | Description | Exemple |
|----------|-------------|---------|
| `API_DOMAIN` | Domaine de l'API | `api.example.com` |
| `APP_DOMAIN` | Domaine du frontend | `app.example.com` |
| `DAV_DOMAIN` | Domaine pour CalDAV/CardDAV | `dav.example.com` |
| `ACME_EMAIL` | E-mail pour les notifications de certificat Let's Encrypt | `admin@example.com` |

## Application

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `APP_NAME` | Nom d'affichage de l'application | `solyto` |
| `APP_URL` | URL complète de l'API | `https://${API_DOMAIN}` |
| `FRONTEND_URL` | URL complète du frontend | `https://${APP_DOMAIN}` |
| `APP_ENV` | Environnement de l'application | `production` |
| `APP_DEBUG` | Active le mode débogage | `false` |
| `APP_TIMEZONE` | Fuseau horaire par défaut de l'application | `UTC` |

## Frontend

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `NODE_ENV` | Environnement Node.js | `production` |
| `PUBLIC_API_URL` | URL utilisée par le frontend pour joindre l'API | `https://${API_DOMAIN}` |
| `PUBLIC_DISABLE_DEV_REQUESTS` | Masque la section Dev Requests | `true` |
| `PUBLIC_REDIRECT_AFTER_LOGOUT` | URL de redirection après déconnexion | `${APP_URL}` |
| `PUBLIC_LEGAL_NOTICE_URL` | Lien pour le bouton de mentions légales | (vide) |
| `PUBLIC_PRIVACY_URL` | Lien pour le bouton de politique de confidentialité | (vide) |
| `PUBLIC_TERMS_URL` | Lien pour le bouton des conditions d'utilisation | (vide) |

Définissez `PUBLIC_DISABLE_DEV_REQUESTS=true` pour masquer le lien Dev Requests et désactiver complètement la route (c'est la valeur par défaut sur les instances auto-hébergées, puisque les demandes n'atteindraient pas l'équipe solyto). Définissez l'une des variables `PUBLIC_*_URL` pour afficher un bouton de mentions légales renvoyant vers vos propres mentions légales, politique de confidentialité ou conditions d'utilisation.

## Versions des bases de données

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `MARIADB_VERSION` | Version de l'image MariaDB | `12` |
| `POSTGRES_VERSION` | Version de l'image PostgreSQL | `17` |
| `REDIS_VERSION` | Version de l'image Redis | `7.4.1` |

## MariaDB

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `DB_CONNECTION` | Pilote de base de données | `mariadb` |
| `DB_HOST` | Nom d'hôte MariaDB | `mariadb` |
| `DB_PORT` | Port MariaDB | `3306` |
| `DB_DATABASE` | Nom de la base de données | `api` |

Les identifiants (`DB_USER`, `DB_PASSWORD`) sont lus depuis les secrets Docker (`db_user`, `db_password`). Le mot de passe root de MariaDB est lu depuis `mariadb_root_password`.

## PostgreSQL (DAV)

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `DAV_DB_HOST` | Nom d'hôte PostgreSQL | `postgres` |
| `DAV_DB_PORT` | Port PostgreSQL | `5432` |
| `DAV_DB_DATABASE` | Nom de la base de données DAV | `dav` |

Les identifiants sont lus depuis les secrets Docker (`dav_db_user`, `dav_db_password`). Le mot de passe root de PostgreSQL est lu depuis `postgres_root_password`.

## Redis

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `REDIS_CLIENT` | Bibliothèque cliente Redis | `phpredis` |
| `REDIS_HOST` | Nom d'hôte Redis | `redis` |
| `REDIS_PORT` | Port Redis | `6379` |
| `REDIS_PASSWORD` | Mot de passe Redis | (depuis un secret Docker) |
| `REDIS_PREFIX` | Préfixe de clé pour cette instance | `solyto_` |

## Proxy

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `TRUSTED_PROXIES` | IP de proxy de confiance (nécessaire lors de l'utilisation d'un proxy inverse externe) | (vide) |

## Fuseau horaire

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `TIMEZONE` | Fuseau horaire du serveur | `UTC` |

Cela affecte les paramètres de fuseau horaire de PHP et du worker de file d'attente.

## IA

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `AI_BASE_URL` | URL de base de l'API compatible OpenAI | (vide — valeur par défaut OpenAI) |
| `AI_MODEL` | Modèle d'IA par défaut | `gpt-4o-mini` |

La clé API est stockée dans le secret Docker `ai_api_key`. Ceci n'est nécessaire que si vous souhaitez utiliser les [recommandations de bibliothèque](/account/ai-assistants/).

## E-mail

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `MAILGUN_DOMAIN` | Domaine Mailgun pour l'envoi d'e-mails | (vide) |
| `MAIL_FROM_ADDRESS` | Adresse e-mail de l'expéditeur | `noreply@example.com` |
| `MAIL_FROM_NAME` | Nom d'affichage de l'expéditeur | `solyto` |

Le secret Mailgun est stocké dans le secret Docker `mailgun_secret`.

## Traitement d'images

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `IMAGE_DRIVER` | Moteur de traitement d'images | `intervention` |

Options :

- `intervention` — utilise la bibliothèque PHP Intervention Image (par défaut, aucun service supplémentaire requis)
- `imgproxy` — utilise le service autonome `imgproxy` pour de meilleures performances avec les images volumineuses

Lorsque `IMAGE_DRIVER=imgproxy`, le conteneur `imgproxy` est démarré et les identifiants sont lus depuis les secrets Docker `imgproxy_key` et `imgproxy_salt`.

## Telegram

| Variable | Description | Valeur par défaut |
|----------|-------------|---------|
| `TELEGRAM_DEBUG_CHAT_ID` | ID de chat pour les notifications de débogage | (vide) |

Les identifiants du bot Telegram sont stockés dans les secrets Docker (`solyto_bot_telegram_token`, `solyto_bot_webhook_token`). Consultez [Bot Telegram](/integrations/telegram/) pour les instructions de configuration.

## Appliquer les changements

Après avoir modifié `.env`, redémarrez les services concernés :

```bash
docker compose up -d
```

Docker Compose détecte les changements dans `.env` et recrée les conteneurs avec les nouvelles valeurs.
