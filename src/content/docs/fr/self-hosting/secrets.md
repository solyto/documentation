---
title: Secrets Docker
description: Gestion des secrets Docker pour un stockage sécurisé des identifiants.
---

solyto utilise les secrets Docker pour gérer les identifiants sensibles. Les mots de passe, clés API et jetons sont stockés sous forme de fichiers dans le répertoire `./secrets/` et montés dans les conteneurs au démarrage. Cela permet de garder les secrets hors des variables d'environnement et du contrôle de version.

## Fonctionnement

Chaque secret est un fichier texte brut dans `./secrets/`. Le nom du fichier est le nom du secret :

```
secrets/
  app_key
  db_user
  db_password
  ai_api_key
  ...
```

Laravel et les autres services lisent les secrets selon la convention du suffixe `_FILE`. Par exemple, `DB_PASSWORD_FILE=/run/secrets/db_password` indique à Laravel de lire le mot de passe de la base de données depuis ce fichier plutôt que depuis une variable d'environnement.

Docker Compose monte ces fichiers en lecture seule dans les conteneurs sous `/run/secrets/`.

## Secrets requis

Ces 7 secrets doivent être présents pour que solyto démarre :

| Secret | Description | Utilisé par |
|--------|-------------|---------|
| `app_key` | Clé de chiffrement Laravel (format : `base64:...`) | api, queue |
| `db_user` | Utilisateur applicatif MariaDB | api, queue, mariadb |
| `db_password` | Mot de passe applicatif MariaDB | api, queue, mariadb |
| `dav_db_user` | Utilisateur PostgreSQL DAV | dav, postgres |
| `dav_db_password` | Mot de passe PostgreSQL DAV | dav, postgres |
| `mariadb_root_password` | Mot de passe root de MariaDB | mariadb |
| `postgres_root_password` | Mot de passe superutilisateur de PostgreSQL | postgres |

L'utilisateur et le mot de passe MariaDB sont fournis par `db_user` / `db_password` (les mêmes identifiants que ceux utilisés par l'API).

## Secrets optionnels

Ces 11 secrets activent des fonctionnalités optionnelles. Créez des fichiers vides ou omettez-les si vous n'en avez pas besoin :

| Secret | Description | Active |
|--------|-------------|---------|
| `solyto_bot_webhook_token` | Jeton de webhook du bot Telegram | [Bot Telegram](/integrations/telegram/) |
| `solyto_bot_telegram_token` | Jeton d'API du bot Telegram | Bot Telegram |
| `hardcover_api_key` | Clé API livres Hardcover | Imports de métadonnées de livres |
| `ai_api_key` | Clé API du fournisseur d'IA | [Recommandations de bibliothèque](/account/ai-assistants/) |
| `mailgun_secret` | Clé API Mailgun | Notifications par e-mail |
| `vapid_public_key` | Clé publique Web Push | Notifications push du navigateur |
| `vapid_private_key` | Clé privée Web Push | Notifications push du navigateur |
| `bgg_api_key` | Clé API BoardGameGeek | Métadonnées de jeux |
| `tmdb_access_token` | Jeton d'accès API TMDB | Métadonnées de films |
| `imgproxy_key` | Clé d'authentification Imgproxy | Traitement d'images via imgproxy |
| `imgproxy_salt` | Sel de signature d'URL Imgproxy | Traitement d'images via imgproxy |

## Génération automatique

Le script d'installation génère automatiquement tous les secrets requis :

```bash
curl -fsSL "https://raw.githubusercontent.com/solyto/selfhosted/main/setup.sh?$(date +%s)" | bash
```

## Génération manuelle

Si vous devez régénérer un secret manuellement :

```bash
# Mot de passe hexadécimal aléatoire (32 octets)
openssl rand -hex 32 > secrets/db_password

# Clé d'application Laravel
echo "base64:$(openssl rand -base64 32)" > secrets/app_key

# Nom d'utilisateur simple
echo "solyto" > secrets/db_user

# Clé API (collez la vôtre)
echo "sk-your-openai-key-here" > secrets/ai_api_key
```

## Notes de sécurité

- **Ne jamais commiter les secrets dans le contrôle de version** — le répertoire `secrets/` doit figurer dans `.gitignore`
- **Permissions des fichiers** — restreignez l'accès aux fichiers de secrets : `chmod 600 secrets/*`
- **Sauvegardes** — sauvegardez votre répertoire `secrets/` de manière sécurisée. Si vous perdez ces fichiers, vous devrez peut-être réinitialiser les identifiants de base de données
- **Rotation** — pour faire tourner un secret, mettez à jour le fichier et redémarrez les services concernés avec `docker compose up -d`

## Dépannage

Si un service ne démarre pas, vérifiez que les fichiers de secrets requis existent et sont lisibles :

```bash
ls -la secrets/
docker compose logs api
```

Les problèmes courants incluent des fichiers manquants, des fichiers vides, ou des retours à la ligne superflus dans les fichiers de secrets.
