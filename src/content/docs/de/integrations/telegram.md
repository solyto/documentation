---
title: Telegram-Bot
description: Speichere Links, erhalte tägliche Zusammenfassungen und Benachrichtigungen über Telegram.
---

solyto hat einen Telegram-Bot ([@SolytoBot](https://t.me/SolytoBot)), mit dem du direkt aus Telegram heraus mit deinem Konto interagieren kannst. Speichere Links, füge Einträge zu deinen Bibliotheken hinzu, erhalte tägliche Zusammenfassungen und werde benachrichtigt — alles ohne die App zu öffnen.

## Was der Bot kann

- **Schnelles Hinzufügen von Einträgen** — sende beliebigen Text oder eine URL, und der Bot erkennt den Typ (Aufgabe, Notiz, Link, Musik, Film, Rezept usw.)
- **Tägliche Zusammenfassung** — `/day` zeigt deine anstehenden Termine und fälligen Aufgaben
- **Aufgaben auflisten** — `/todos` listet deine offenen Aufgaben direkt im Chat auf
- **Erinnerungen** — eine Vorschau-Zusammenfassung um 7:00 Uhr und eine Check-in-Erinnerung um 20:00 Uhr (deine Zeitzone), sofern aktiviert
- **Benachrichtigungen** — erhalte über den Telegram-Kanal Benachrichtigungen zu Neuerscheinungen, Freundschaftsanfragen und mehr

## Bot verbinden

Das Verknüpfen deines solyto-Kontos mit Telegram erfolgt in zwei Schritten:

1. Gehe in solyto zu **Einstellungen → Benachrichtigungen** und fordere ein Telegram-Verbindungstoken an
2. Kopiere das Token
3. Öffne [@SolytoBot](https://t.me/SolytoBot) auf Telegram
4. Sende `/connect <dein-token>` an den Bot
5. Der Bot bestätigt die Verbindung

Dein Konto ist jetzt verknüpft. Du kannst die Verbindung jederzeit auf derselben Einstellungsseite trennen.

## Bot-Befehle

| Befehl | Was er tut |
|---------|-------------|
| `/connect <token>` | Verknüpft dein solyto-Konto (einmalige Einrichtung) |
| `/day` | Zeigt die heutige Zusammenfassung — anstehende Termine und fällige/überfällige Aufgaben |
| `/todos` | Listet deine aktuell offenen Aufgaben auf |
| `/help` | Zeigt die verfügbaren Befehle |

## Schnelles Hinzufügen über den Bot

Sobald du verbunden bist, kannst du Einträge zu deinen Bibliotheken hinzufügen, indem du einfach Text oder eine URL an den Bot sendest:

1. Sende eine URL oder reinen Text an @SolytoBot
2. Der Bot erkennt den Inhaltstyp automatisch (Aufgabe, Notiz, Link, Musik, Buch, Film, Spiel, Rezept, Pflanze, Zitat, Feed, Zwischenablage)
3. Liegt die Erkennungssicherheit unter 60 %, zeigt der Bot eine Inline-Tastatur zur Auswahl des Typs
4. Der Eintrag wird der passenden Bibliothek hinzugefügt

Zum Beispiel:

- Sende einen Deezer- oder Discogs-Link → wird zu deiner Musikbibliothek hinzugefügt
- Sende eine IMDb-URL → wird zu deiner Filmbibliothek hinzugefügt
- Sende eine Chefkoch-Rezept-URL → wird zu deiner Rezeptbibliothek hinzugefügt
- Sende eine beliebige andere URL → wird zu deiner Linkbibliothek hinzugefügt
- Sende eine Zeile mit `due:` → wird als Aufgabe hinzugefügt

Der Bot nutzt einen Konversationsstatus, um mehrstufige Interaktionen wie die Typauswahl zu verwalten.

## Erinnerungen

Der Bot kann zwei geplante Erinnerungen zustellen, gesteuert über die Benachrichtigungseinstellungen für den Telegram-Kanal (siehe [Benachrichtigungen](/customization/notifications/)):

- **Tagesüberblick** — um 07:00 Uhr (deine Zeitzone), eine Zusammenfassung der heutigen Kalendertermine und fälligen/überfälligen Aufgaben
- **Check-in-Erinnerung** — um 20:00 Uhr (deine Zeitzone), eine Erinnerung, deinen [täglichen Check-in](/features/check-in/) auszufüllen

## Sprachen

Der Bot unterstützt dieselben Sprachen wie solyto:

- Englisch (en)
- Deutsch (de)
- Französisch (fr)
- Spanisch (es)

Die Sprache des Bots richtet sich nach der Spracheinstellung deines solyto-Kontos.

## Verbindung trennen

So trennst du dein Telegram-Konto:

1. Gehe zu **Einstellungen → Benachrichtigungen**
2. Trenne den Telegram-Bot

Dadurch wird die Verknüpfung zwischen deinem Telegram-Konto und deinem solyto-Konto aufgehoben. Der Bot reagiert dann nicht mehr auf Befehle und sendet keine Erinnerungen mehr.

## Hinweis zum Self-Hosting

Wenn du solyto selbst hostest, musst du deinen eigenen Telegram-Bot erstellen:

1. Schreibe [@BotFather](https://t.me/BotFather) auf Telegram eine Nachricht
2. Erstelle einen neuen Bot und kopiere das API-Token
3. Hinterlege das Token als `SOLYTO_BOT_TELEGRAM_TOKEN`-Secret (siehe [Docker Secrets](/self-hosting/secrets/))
4. Registriere den Bot-Webhook (siehe die Deployment-Einrichtung)

Der Bot empfängt Updates über einen von der API bereitgestellten Webhook.
