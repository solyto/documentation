---
title: Fehlerbehebung
description: Häufige Probleme und Lösungen für selbst gehostetes solyto.
---

Diese Seite behandelt häufige Probleme, die beim Self-Hosting von solyto auftreten können, und wie du sie behebst.

## Logs prüfen

Der erste Schritt bei der Fehlersuche ist immer, die Container-Logs zu prüfen:

```bash
# Alle Dienste
docker compose logs

# Ein bestimmter Dienst
docker compose logs api
docker compose logs app
docker compose logs nginx

# Logs in Echtzeit verfolgen
docker compose logs -f api
```

Logs sind dein bester Freund. Die meisten Fehler werden in der Ausgabe erklärt.

## Container startet nicht

**Symptome:** `docker compose ps` zeigt einen Dienst als neu startend oder beendet.

**Prüfungen:**

1. Sieh dir die Logs des fehlgeschlagenen Dienstes an: `docker compose logs <service>`
2. Überprüfe, ob `.env` alle erforderlichen Variablen enthält — siehe [Konfiguration](/self-hosting/configuration/)
3. Überprüfe, ob alle erforderlichen Secret-Dateien in `./secrets/` vorhanden sind — siehe [Docker Secrets](/self-hosting/secrets/)
4. Prüfe, ob Docker genug Ressourcen hat (Arbeitsspeicher, Speicherplatz)

Häufige Ursache: fehlende oder leere Secret-Datei. Prüfe mit:

```bash
ls -la secrets/
```

## Datenbankverbindungsfehler

**Symptome:** Die API liefert 500-Fehler, die Logs zeigen `SQLSTATE` oder `Connection refused`.

**Prüfungen:**

1. Läuft die Datenbank? `docker compose ps mariadb` und `docker compose ps postgres`
2. Überprüfe, ob die Zugangsdaten zwischen `.env` und den Secret-Dateien übereinstimmen:
   ```bash
   cat secrets/db_user
   cat secrets/db_password
   ```
3. Stelle sicher, dass `DB_HOST=mariadb` und `DAV_DB_HOST=postgres` gesetzt sind (Docker-Dienstnamen)
4. Warte — MariaDB und PostgreSQL können beim ersten Start ein paar Sekunden brauchen, bis sie bereit sind. Der API-Container versucht es automatisch erneut.

**Datenbank-Zugangsdaten zurücksetzen** (falls beschädigt):

```bash
# Secret-Datei neu erzeugen
openssl rand -hex 32 > secrets/db_password
docker compose up -d mariadb
# Warte, bis MariaDB gestartet ist, und starte dann die API neu
docker compose restart api queue
```

## TLS-Zertifikatsprobleme

**Symptome:** Der Browser zeigt eine Sicherheitswarnung, Traefik meldet Zertifikatsfehler.

**Prüfungen:**

1. Überprüfe, ob deine Domains auf die Server-IP auflösen: `dig api.example.com`
2. Stelle sicher, dass die Ports 80 und 443 offen sind und nicht von einer Firewall blockiert werden
3. Prüfe, ob `ACME_EMAIL` in `.env` gesetzt ist
4. Überprüfe, ob das Volume `traefik_acme` existiert und beschreibbar ist

**Zertifikatserneuerung erzwingen:**

```bash
docker compose down
docker volume rm <project>_traefik_acme
docker compose up -d
```

Ersetze `<project>` durch deinen `PROJECT_NAME`. Traefik fordert beim Start neue Zertifikate an.

## Berechtigungsprobleme mit storage/

**Symptome:** Datei-Uploads schlagen fehl, die Logs zeigen `Permission denied` in `storage/`.

**Lösung:**

```bash
chown -R www-data:www-data storage/
chmod -R 775 storage/
```

Das Verzeichnis `storage/` wird über einen Bind-Mount zwischen `api`, `dav`, `queue`, `nginx` und `imgproxy` geteilt. Alle davon benötigen Schreibzugriff.

## CalDAV/CardDAV funktioniert nicht

**Symptome:** Kalender- oder Kontakt-Synchronisierung schlägt in externen Apps fehl (DAVx5, Apple Calendar usw.).

**Prüfungen:**

1. Überprüfe, ob der `dav`-Dienst läuft: `docker compose ps dav`
2. Stelle sicher, dass `DAV_DOMAIN` gesetzt ist und korrekt auflöst
3. Prüfe, ob die CalDAV-/CardDAV-URL, die deine externe App verwendet, mit `https://dav.example.com` übereinstimmt
4. Prüfe die Logs des `dav`-Dienstes: `docker compose logs dav`
5. Überprüfe, ob PostgreSQL läuft: `docker compose ps postgres`
6. Stelle sicher, dass die Secrets `dav_db_user` und `dav_db_password` korrekt sind

**Häufiges Problem:** Die DAV-Domain muss sich von der API-Domain unterscheiden. Beide laufen als separate Dienste hinter Traefik.

## Queue wird nicht verarbeitet

**Symptome:** Asynchrone Aufgaben werden nicht abgeschlossen (Benachrichtigungen, Hintergrundjobs).

**Prüfungen:**

1. Läuft der Queue-Worker? `docker compose ps queue`
2. Prüfe die Queue-Logs: `docker compose logs queue`
3. Überprüfe, ob Redis läuft: `docker compose ps redis`
4. Prüfe die Redis-Konnektivität: `docker compose exec api so tinker` und teste dann einen Redis-Befehl

**Queue-Worker neu starten:**

```bash
docker compose restart queue
```

## Bilder werden nicht geladen

**Symptome:** Hochgeladene Profilbilder oder andere Medien liefern 404 oder sind defekt.

**Prüfungen:**

1. Bei `IMAGE_DRIVER=intervention` (Standard) ist kein zusätzlicher Dienst nötig
2. Bei `IMAGE_DRIVER=imgproxy`, stelle sicher, dass der `imgproxy`-Dienst läuft und die Secrets `imgproxy_key` / `imgproxy_salt` gesetzt sind
3. Prüfe, ob `storage/app/public/` existiert und beschreibbar ist
4. Prüfe die nginx-Logs: `docker compose logs nginx`

## Healthcheck-Fehler

Der nginx-Dienst hat einen Healthcheck unter `/api/v1/health`. Falls dieser fehlschlägt:

1. Manuell testen: `curl -s https://api.example.com/api/v1/health`
2. Antwortet die API nicht, prüfe die Logs des `api`-Containers
3. Ist die Datenbank down, schlägt der Healthcheck fehl — behebe zuerst das Datenbankproblem

## Hilfe erhalten

Wenn du ein Problem nicht lösen kannst:

- Durchsuche bestehende Issues im [Selfhosted-Repository](https://github.com/solyto/selfhosted/issues)
- Erstelle ein neues Issue mit deinen Logs (entferne vorher alle Secrets)
- Wirf einen Blick auf das [Dev-Requests](/account/dev-requests/)-Board, falls du solyto.app nutzt
