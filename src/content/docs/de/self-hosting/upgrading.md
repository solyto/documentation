---
title: Aktualisieren
description: So aktualisierst du solyto auf die neueste Version.
---

solyto aktuell zu halten sorgt dafür, dass du die neuesten Funktionen, Fehlerbehebungen und Sicherheitspatches erhältst.

## Vor dem Aktualisieren

1. **Release Notes prüfen** — sieh dir die [Releases-Seite](https://github.com/solyto/selfhosted/releases) auf Breaking Changes oder manuelle Migrationsschritte an
2. **Daten sichern** — siehe unten
3. **Aktuelle Version notieren** — prüfe `SOLYTO_VERSION` in deiner `.env`

## Daten sichern

Erstelle vor jedem Upgrade Backups deiner Datenbanken und deines Storage. Das [README](https://github.com/solyto/selfhosted) des Selfhosted-Repositorys enthält ein vollständiges, auf restic basierendes Backup-Skript; das Wesentliche:

```bash
# MariaDB sichern (Datenbank: api)
docker exec -e MYSQL_PWD="$(cat secrets/mariadb_root_password)" <project>-mariadb \
  mariadb-dump -u root --databases api > backup_mariadb.sql

# PostgreSQL sichern (Datenbank: dav)
docker exec -e PGPASSWORD="$(cat secrets/postgres_root_password)" <project>-postgres \
  pg_dump -U postgres --clean --create dav > backup_postgres.sql

# Storage sichern
tar -czf backup_storage.tar.gz storage/
```

Ersetze `<project>` durch deinen `PROJECT_NAME` (Standard `solyto`). Bewahre diese Backups außerhalb des Servers oder an einem separaten Ort auf.

## Upgrade-Vorgang

### 1. Die neuesten Images laden

```bash
docker compose pull
```

Dies lädt die neuesten Versionen aller drei solyto-Images (`solyto/app`, `solyto/api-php`, `solyto/api-nginx`) sowie aller aktualisierten Basis-Images.

### 2. Dienste neu starten

```bash
docker compose up -d
```

Docker Compose erkennt die neuen Images und erstellt die Container neu.

### 3. Datenbankmigrationen

Der `api`-Container führt bei jedem Start `startup.sh` aus, wodurch ausstehende Datenbankmigrationen automatisch angewendet werden. Es ist keine manuelle Aktion nötig.

### 4. Überprüfen

Prüfe, ob alle Dienste laufen:

```bash
docker compose ps
```

Teste den API-Health-Endpunkt:

```bash
curl -s https://api.example.com/api/v1/health
```

Öffne das Frontend und bestätige, dass alles wie erwartet funktioniert.

## Version festlegen

Um bei einer bestimmten Version zu bleiben, setze `SOLYTO_VERSION` in deiner `.env`:

```
SOLYTO_VERSION=1.2.0
```

`docker compose pull` lädt dann genau diesen Tag. Entferne die Variable oder setze sie auf `latest`, um wieder neue Versionen zu erhalten.

## Zurückrollen

Falls ein Upgrade Probleme verursacht:

1. Stoppe die Dienste: `docker compose down`
2. Setze `SOLYTO_VERSION` in `.env` auf die vorherige Version
3. Stelle bei Bedarf deine Datenbank-Backups wieder her
4. Starte die Dienste: `docker compose up -d`

Beachte, dass derzeit keine verifizierbare Downgrade-Strategie verfügbar ist — Rollbacks beruhen darauf, die mit jedem Image veröffentlichten Laravel-Migrationen rückgängig zu machen, weshalb Backups unverzichtbar sind.
