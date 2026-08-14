---
title: Mise à jour
description: Comment mettre à jour solyto vers la dernière version.
---

Garder solyto à jour vous assure de disposer des dernières fonctionnalités, corrections de bugs et correctifs de sécurité.

## Avant la mise à jour

1. **Consultez les notes de version** — vérifiez la [page des releases](https://github.com/solyto/selfhosted/releases) pour tout changement majeur ou étape de migration manuelle
2. **Sauvegardez vos données** — voir ci-dessous
3. **Notez votre version actuelle** — vérifiez `SOLYTO_VERSION` dans votre `.env`

## Sauvegarder vos données

Avant toute mise à jour, créez des sauvegardes de vos bases de données et de votre stockage. Le [README](https://github.com/solyto/selfhosted) du dépôt selfhosted inclut un script de sauvegarde complet basé sur restic ; l'essentiel est le suivant :

```bash
# Sauvegarder MariaDB (base de données : api)
docker exec -e MYSQL_PWD="$(cat secrets/mariadb_root_password)" <project>-mariadb \
  mariadb-dump -u root --databases api > backup_mariadb.sql

# Sauvegarder PostgreSQL (base de données : dav)
docker exec -e PGPASSWORD="$(cat secrets/postgres_root_password)" <project>-postgres \
  pg_dump -U postgres --clean --create dav > backup_postgres.sql

# Sauvegarder le stockage
tar -czf backup_storage.tar.gz storage/
```

Remplacez `<project>` par votre `PROJECT_NAME` (par défaut `solyto`). Conservez ces sauvegardes en dehors du serveur ou dans un emplacement séparé.

## Processus de mise à jour

### 1. Récupérer les dernières images

```bash
docker compose pull
```

Cela récupère les dernières versions des trois images solyto (`solyto/app`, `solyto/api-php`, `solyto/api-nginx`) ainsi que toute image de base mise à jour.

### 2. Redémarrer les services

```bash
docker compose up -d
```

Docker Compose détecte les nouvelles images et recrée les conteneurs.

### 3. Migrations de base de données

Le conteneur `api` exécute `startup.sh` à chaque démarrage, ce qui applique automatiquement les migrations de base de données en attente. Aucune action manuelle n'est nécessaire.

### 4. Vérifier

Vérifiez que tous les services sont en cours d'exécution :

```bash
docker compose ps
```

Testez le point de contrôle de santé de l'API :

```bash
curl -s https://api.example.com/api/v1/health
```

Ouvrez le frontend et confirmez que tout fonctionne comme prévu.

## Épingler une version

Pour rester sur une version spécifique, définissez `SOLYTO_VERSION` dans votre `.env` :

```
SOLYTO_VERSION=1.2.0
```

Ensuite, `docker compose pull` récupérera ce tag spécifique. Supprimez-le ou définissez-le sur `latest` pour recevoir de nouveau les nouvelles versions.

## Revenir en arrière

Si une mise à jour cause des problèmes :

1. Arrêtez les services : `docker compose down`
2. Définissez `SOLYTO_VERSION` sur la version précédente dans `.env`
3. Restaurez vos sauvegardes de base de données si nécessaire
4. Démarrez les services : `docker compose up -d`

Notez qu'une stratégie de rétrogradation vérifiable n'est pas encore disponible — les retours en arrière reposent sur l'inversion manuelle des migrations Laravel publiées avec chaque image, les sauvegardes sont donc essentielles.
