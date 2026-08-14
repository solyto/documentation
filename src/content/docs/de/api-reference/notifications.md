---
title: Benachrichtigungen-API
description: In-App-Benachrichtigungen, Push-Abonnements und Benachrichtigungseinstellungen.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/notifications`.

## In-App-Benachrichtigungen

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/notifications` | Ungelesene In-App-Benachrichtigungen auflisten |
| POST | `/v1/notifications/read-all` | Alle Benachrichtigungen als gelesen markieren |
| PUT | `/v1/notifications/{notification}/read` | Eine einzelne Benachrichtigung als gelesen markieren |

## Push-Abonnements

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/notifications/push/vapid-key` | Den öffentlichen VAPID-Schlüssel abrufen |
| POST | `/v1/notifications/push/subscribe` | Ein Web-Push-Abonnement registrieren (`endpoint`, `keys.auth`, `keys.p256dh`) |
| POST | `/v1/notifications/push/unsubscribe` | Ein Push-Abonnement entfernen (`endpoint`) |

## Benachrichtigungseinstellungen

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/notifications/settings` | Benachrichtigungseinstellungen pro Typ × pro Kanal abrufen |
| PUT | `/v1/notifications/settings` | Umschalter pro Typ × pro Kanal aktualisieren |

Die Einstellungen bilden eine Matrix aus den 9 Benachrichtigungstypen (Musik-, Buch-, Film-Veröffentlichung, Freundschaftsanfrage, tägliche Tageserinnerung, tägliche Check-In-Erinnerung, Kalenderfreigabe, Dev-Request-Kommentar, Export bereit), jeweils mit vier Kanal-Flags (`_ui`, `_email`, `_push`, `_telegram`). Die vollständige Matrix findest du unter [Benachrichtigungen](/customization/notifications/).
