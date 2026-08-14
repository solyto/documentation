---
title: Dépannage
description: Problèmes courants et solutions pour solyto auto-hébergé.
---

Cette page couvre les problèmes courants que vous pourriez rencontrer en auto-hébergeant solyto, et comment les résoudre.

## Consulter les journaux

La première étape pour déboguer un problème est de consulter les journaux des conteneurs :

```bash
# Tous les services
docker compose logs

# Un service spécifique
docker compose logs api
docker compose logs app
docker compose logs nginx

# Suivre les journaux en temps réel
docker compose logs -f api
```

Les journaux sont votre meilleur allié. La plupart des erreurs sont expliquées dans la sortie.

## Le conteneur ne démarre pas

**Symptômes :** `docker compose ps` affiche un service en redémarrage ou arrêté.

**Vérifications :**

1. Consultez les journaux du service en échec : `docker compose logs <service>`
2. Vérifiez que `.env` contient toutes les variables requises — consultez [Configuration](/self-hosting/configuration/)
3. Vérifiez que tous les fichiers de secrets requis existent dans `./secrets/` — consultez [Secrets Docker](/self-hosting/secrets/)
4. Vérifiez que Docker dispose de ressources suffisantes (mémoire, espace disque)

Cause fréquente : un fichier de secret manquant ou vide. Vérifiez avec :

```bash
ls -la secrets/
```

## Erreurs de connexion à la base de données

**Symptômes :** l'API renvoie des erreurs 500, les journaux affichent `SQLSTATE` ou `Connection refused`.

**Vérifications :**

1. La base de données est-elle en cours d'exécution ? `docker compose ps mariadb` et `docker compose ps postgres`
2. Vérifiez que les identifiants correspondent entre `.env` et les fichiers de secrets :
   ```bash
   cat secrets/db_user
   cat secrets/db_password
   ```
3. Assurez-vous que `DB_HOST=mariadb` et `DAV_DB_HOST=postgres` (noms de service Docker)
4. Attendez — MariaDB et PostgreSQL peuvent prendre quelques secondes pour être prêts au premier démarrage. Le conteneur API réessaiera automatiquement.

**Réinitialiser les identifiants de la base de données** (en cas de corruption) :

```bash
# Régénérer le fichier de secret
openssl rand -hex 32 > secrets/db_password
docker compose up -d mariadb
# Attendez que MariaDB démarre, puis redémarrez l'API
docker compose restart api queue
```

## Problèmes de certificat TLS

**Symptômes :** le navigateur affiche un avertissement de sécurité, erreurs de certificat Traefik.

**Vérifications :**

1. Vérifiez que vos domaines pointent vers l'IP du serveur : `dig api.example.com`
2. Assurez-vous que les ports 80 et 443 sont ouverts et non bloqués par un pare-feu
3. Vérifiez que `ACME_EMAIL` est défini dans `.env`
4. Vérifiez que le volume `traefik_acme` existe et est accessible en écriture

**Forcer le renouvellement du certificat :**

```bash
docker compose down
docker volume rm <project>_traefik_acme
docker compose up -d
```

Remplacez `<project>` par votre `PROJECT_NAME`. Traefik demandera de nouveaux certificats au démarrage.

## Problèmes de permissions avec storage/

**Symptômes :** les téléversements de fichiers échouent, les journaux affichent `Permission denied` dans `storage/`.

**Correction :**

```bash
chown -R www-data:www-data storage/
chmod -R 775 storage/
```

Le répertoire `storage/` est partagé entre `api`, `dav`, `queue`, `nginx` et `imgproxy` via un montage bind. Tous ces services ont besoin d'un accès en écriture.

## CalDAV/CardDAV ne fonctionne pas

**Symptômes :** la synchronisation du calendrier ou des contacts échoue dans les applications externes (DAVx5, Apple Calendar, etc.).

**Vérifications :**

1. Vérifiez que le service `dav` est en cours d'exécution : `docker compose ps dav`
2. Assurez-vous que `DAV_DOMAIN` est défini et résout correctement
3. Vérifiez que l'URL CalDAV/CardDAV utilisée par votre application externe correspond à `https://dav.example.com`
4. Consultez les journaux du service `dav` : `docker compose logs dav`
5. Vérifiez que PostgreSQL est en cours d'exécution : `docker compose ps postgres`
6. Assurez-vous que les secrets `dav_db_user` et `dav_db_password` sont corrects

**Problème courant :** le domaine DAV doit être différent du domaine de l'API. Ils fonctionnent comme des services séparés derrière Traefik.

## La file d'attente ne traite rien

**Symptômes :** les tâches asynchrones ne se terminent pas (notifications, tâches en arrière-plan).

**Vérifications :**

1. Le worker de file d'attente est-il en cours d'exécution ? `docker compose ps queue`
2. Consultez les journaux de la file d'attente : `docker compose logs queue`
3. Vérifiez que Redis est en cours d'exécution : `docker compose ps redis`
4. Vérifiez la connectivité Redis : `docker compose exec api so tinker` puis essayez une commande Redis

**Redémarrer le worker de file d'attente :**

```bash
docker compose restart queue
```

## Les images ne se chargent pas

**Symptômes :** les photos de profil téléversées ou autres médias renvoient une erreur 404 ou sont cassés.

**Vérifications :**

1. Si vous utilisez `IMAGE_DRIVER=intervention` (par défaut), aucun service supplémentaire n'est nécessaire
2. Si vous utilisez `IMAGE_DRIVER=imgproxy`, assurez-vous que le service `imgproxy` est en cours d'exécution et que les secrets `imgproxy_key` / `imgproxy_salt` sont définis
3. Vérifiez que `storage/app/public/` existe et est accessible en écriture
4. Consultez les journaux nginx : `docker compose logs nginx`

## Échecs de contrôle de santé

Le service nginx dispose d'un contrôle de santé sur `/api/v1/health`. En cas d'échec :

1. Testez manuellement : `curl -s https://api.example.com/api/v1/health`
2. Si l'API ne répond pas, consultez les journaux du conteneur `api`
3. Si la base de données est indisponible, le contrôle de santé échouera — résolvez d'abord le problème de base de données

## Obtenir de l'aide

Si vous ne parvenez pas à résoudre un problème :

- Recherchez dans les tickets existants du [dépôt selfhosted](https://github.com/solyto/selfhosted/issues)
- Soumettez un nouveau ticket avec vos journaux (en supprimant d'abord tout secret)
- Consultez le tableau [Dev Requests](/account/dev-requests/) si vous utilisez solyto.app
