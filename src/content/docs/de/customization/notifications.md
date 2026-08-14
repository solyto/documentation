---
title: Benachrichtigungen
description: Konfiguriere Benachrichtigungen für In-App-, E-Mail-, Push- und Telegram-Kanäle.
---

solyto kann Benachrichtigungen über vier Kanäle senden. Du bestimmst genau, welche Benachrichtigungstypen über welche Kanäle laufen — jeder Typ kann pro Kanal einzeln ein- oder ausgeschaltet werden.

## Benachrichtigungstypen

solyto hat 9 Benachrichtigungstypen:

| Typ | Schlüssel | Beschreibung |
|------|-----|-------------|
| Musik-Veröffentlichung | `music_release` | Neue Alben oder Singles von Künstlern in deiner Musik-Bibliothek |
| Buch-Veröffentlichung | `book_release` | Neue Bücher von Autoren in deiner Bücher-Bibliothek |
| Film-Veröffentlichung | `movie_release` | Neue Filmveröffentlichungen für Titel auf deiner Watchlist |
| Freundschaftsanfrage | `friend_request` | Jemand hat dir eine Freundschaftsanfrage gesendet |
| Erinnerung "Your Day" | `daily_day_reminder` | Tägliche Morgenübersicht über deinen Tag (Todos, Termine, Wetter) |
| Check-In-Erinnerung | `daily_check_in_reminder` | Tägliche Erinnerung, deinen Daily Check-In auszufüllen |
| Kalenderfreigabe | `calendar_share` | Jemand hat einen Kalender mit dir geteilt |
| Dev-Request-Kommentar | `dev_request_comment` | Jemand hat eine Anfrage kommentiert, der du folgst |
| Export bereit | `export_ready` | Ein Datenexport-Job ist abgeschlossen und zum Download bereit |

## Kanäle

### In-App (UI)

Benachrichtigungen erscheinen über das Glockensymbol in der Navigationsleiste. Klicke auf die Glocke, um deinen Benachrichtigungsverlauf zu sehen, einzelne Einträge oder alle als gelesen zu markieren. Dieser Kanal ist immer verfügbar — keine Einrichtung nötig.

### Push (Web Push)

Browser-Push-Benachrichtigungen über die Web-Push-API mit VAPID-Authentifizierung. Im Web verfügbar.

So aktivierst du Push-Benachrichtigungen:

1. Gehe zu **Einstellungen → Notifications**
2. Klicke auf **Enable Push Notifications**
3. Dein Browser fragt nach einer Berechtigung — klicke auf **Zulassen**
4. Push-Benachrichtigungen sind jetzt aktiv

Push-Benachrichtigungen funktionieren auch, wenn solyto nicht in einem Browser-Tab geöffnet ist — auch wenn die App als PWA installiert ist.

:::note
Push-Benachrichtigungen erfordern HTTPS und einen unterstützten Browser (Chrome, Firefox, Edge, Safari 16.4+).
:::

### Telegram (Bot)

Sende Benachrichtigungen über den [Telegram-Bot](/integrations/telegram/) an dein Telegram-Konto.

So richtest du Telegram-Benachrichtigungen ein:

1. [Verbinde den Telegram-Bot](/integrations/telegram/#connecting-the-bot) mit deinem solyto-Konto
2. Gehe zu **Einstellungen → Notifications**
3. Aktiviere die Benachrichtigungstypen, die du über den Kanal **Bot** erhalten möchtest

Der Telegram-Kanal ist erst aktiviert, sobald der Bot verbunden ist.

### E-Mail

E-Mail-Benachrichtigungen folgen in Kürze — der E-Mail-Kanal ist derzeit noch nicht verfügbar.

## Benachrichtigungen konfigurieren

Gehe zu **Einstellungen → Notifications**, um:

- den Telegram-Bot zu verbinden oder zu trennen
- Push-Benachrichtigungen in deinem Browser zu aktivieren oder zu deaktivieren
- jeden Benachrichtigungstyp pro Kanal umzuschalten

### Konfiguration pro Typ und Kanal

Die Seite mit den Benachrichtigungseinstellungen zeigt eine Matrix, bei der jede Zeile einem Benachrichtigungstyp und jede Spalte einem Kanal (UI, E-Mail, Push, Bot) entspricht. Du kannst jede Kombination umschalten. Noch nicht eingerichtete Kanäle sind ausgegraut — der Kanal Bot erfordert einen verbundenen Telegram-Bot, und der Kanal Push erfordert aktivierte Push-Benachrichtigungen.

| Typ | UI | E-Mail | Push | Bot |
|---|:---:|:---:|:---:|:---:|
| Neue Buch-Veröffentlichungen | ✓ | — | ✓ | ✓ |
| Neue Musik-Veröffentlichungen | ✓ | — | ✓ | ✓ |
| Neue Film-Veröffentlichung | ✓ | — | ✓ | ✓ |
| Neue Freundschaftsanfrage | ✓ | — | ✓ | ✓ |
| Erinnerung für den täglichen Check-In | ✓ | — | ✓ | ✓ |
| Erinnerung für den bevorstehenden Tag | ✓ | — | ✓ | ✓ |
| Kalenderfreigaben | ✓ | — | ✓ | ✓ |
| Dev-Request-Kommentare | ✓ | — | ✓ | ✓ |
| Export bereit | ✓ | — | ✓ | ✓ |

Zum Beispiel könntest du Export-Benachrichtigungen nur In-App erhalten wollen, tägliche Erinnerungen über Telegram und Veröffentlichungshinweise per Push.

Die beiden täglichen Erinnerungstypen (`daily_day_reminder` und `daily_check_in_reminder`) werden jeweils um 07:00 Uhr und 20:00 Uhr in deiner Zeitzone gesendet (siehe [Telegram](/integrations/telegram/) für das Verhalten der Benachrichtigung).
