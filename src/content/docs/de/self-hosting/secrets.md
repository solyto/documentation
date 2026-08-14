---
title: Docker Secrets
description: Verwaltung von Docker Secrets für die sichere Speicherung von Zugangsdaten.
---

solyto nutzt Docker Secrets, um sensible Zugangsdaten zu verwalten. Passwörter, API-Schlüssel und Tokens werden als Dateien im Verzeichnis `./secrets/` gespeichert und zur Laufzeit in die Container eingebunden. So bleiben Secrets aus Umgebungsvariablen und der Versionskontrolle heraus.

## So funktioniert es

Jedes Secret ist eine Textdatei in `./secrets/`. Der Dateiname ist der Name des Secrets:

```
secrets/
  app_key
  db_user
  db_password
  ai_api_key
  ...
```

Laravel und andere Dienste lesen Secrets über die `_FILE`-Suffix-Konvention. Zum Beispiel weist `DB_PASSWORD_FILE=/run/secrets/db_password` Laravel an, das Datenbankpasswort aus dieser Datei statt aus einer Umgebungsvariable zu lesen.

Docker Compose bindet diese Dateien schreibgeschützt unter `/run/secrets/` in die Container ein.

## Erforderliche Secrets

Diese 7 Secrets müssen vorhanden sein, damit solyto starten kann:

| Secret | Beschreibung | Genutzt von |
|--------|-------------|---------|
| `app_key` | Laravel-Verschlüsselungsschlüssel (Format: `base64:...`) | api, queue |
| `db_user` | MariaDB-Anwendungsbenutzer | api, queue, mariadb |
| `db_password` | MariaDB-Anwendungspasswort | api, queue, mariadb |
| `dav_db_user` | PostgreSQL-DAV-Benutzer | dav, postgres |
| `dav_db_password` | PostgreSQL-DAV-Passwort | dav, postgres |
| `mariadb_root_password` | MariaDB-Root-Passwort | mariadb |
| `postgres_root_password` | PostgreSQL-Superuser-Passwort | postgres |

Der MariaDB-Benutzer und das Passwort werden über `db_user` / `db_password` bereitgestellt (dieselben Zugangsdaten, die auch die API nutzt).

## Optionale Secrets

Diese 11 Secrets aktivieren optionale Funktionen. Erstelle leere Dateien oder lasse sie weg, wenn sie nicht benötigt werden:

| Secret | Beschreibung | Aktiviert |
|--------|-------------|---------|
| `solyto_bot_webhook_token` | Webhook-Token des Telegram-Bots | [Telegram-Bot](/integrations/telegram/) |
| `solyto_bot_telegram_token` | API-Token des Telegram-Bots | Telegram-Bot |
| `hardcover_api_key` | Hardcover-Buch-API-Schlüssel | Buch-Metadaten-Importe |
| `ai_api_key` | API-Schlüssel des KI-Anbieters | [Bibliotheksempfehlungen](/account/ai-assistants/) |
| `mailgun_secret` | Mailgun-API-Schlüssel | E-Mail-Benachrichtigungen |
| `vapid_public_key` | Öffentlicher Web-Push-Schlüssel | Browser-Push-Benachrichtigungen |
| `vapid_private_key` | Privater Web-Push-Schlüssel | Browser-Push-Benachrichtigungen |
| `bgg_api_key` | BoardGameGeek-API-Schlüssel | Spiele-Metadaten |
| `tmdb_access_token` | TMDB-API-Zugriffstoken | Film-Metadaten |
| `imgproxy_key` | Imgproxy-Authentifizierungsschlüssel | Bildverarbeitung über imgproxy |
| `imgproxy_salt` | Imgproxy-URL-Signatur-Salt | Bildverarbeitung über imgproxy |

## Automatische Erzeugung

Das Setup-Skript erzeugt alle erforderlichen Secrets automatisch:

```bash
curl -fsSL "https://raw.githubusercontent.com/solyto/selfhosted/main/setup.sh?$(date +%s)" | bash
```

## Manuelle Erzeugung

Falls du ein Secret manuell neu erzeugen musst:

```bash
# Zufälliges Hex-Passwort (32 Byte)
openssl rand -hex 32 > secrets/db_password

# Laravel-App-Key
echo "base64:$(openssl rand -base64 32)" > secrets/app_key

# Einfacher Benutzername
echo "solyto" > secrets/db_user

# API-Schlüssel (füge deinen eigenen ein)
echo "sk-your-openai-key-here" > secrets/ai_api_key
```

## Sicherheitshinweise

- **Committe Secrets niemals in die Versionskontrolle** — das Verzeichnis `secrets/` sollte in der `.gitignore` stehen
- **Dateiberechtigungen** — beschränke den Zugriff auf Secret-Dateien: `chmod 600 secrets/*`
- **Backups** — sichere dein `secrets/`-Verzeichnis an einem sicheren Ort. Gehen diese Dateien verloren, musst du möglicherweise die Datenbank-Zugangsdaten zurücksetzen
- **Rotation** — um ein Secret zu rotieren, aktualisiere die Datei und starte die betroffenen Dienste mit `docker compose up -d` neu

## Fehlerbehebung

Wenn ein Dienst nicht startet, überprüfe, ob die erforderlichen Secret-Dateien vorhanden und lesbar sind:

```bash
ls -la secrets/
docker compose logs api
```

Häufige Ursachen sind fehlende Dateien, leere Dateien oder abschließende Zeilenumbrüche in den Secret-Dateien.
