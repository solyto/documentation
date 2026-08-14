---
title: Telegram-API
description: Telegram-Bot-Verbindung und Verwaltung von Benachrichtigungen.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/telegram`.

## Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/telegram/token-request` | Einen Kopplungs-Token abrufen (oder erstellen), 24 Std. gültig |
| GET | `/v1/telegram/request` | Den aktuellen Verbindungsstatus abrufen |
| PUT | `/v1/telegram/your-day-alert` | Die tägliche "Your Day"-Benachrichtigung umschalten |
| PUT | `/v1/telegram/check-in-alert` | Die Check-In-Benachrichtigung umschalten |

## Token generieren

```
GET /v1/telegram/token-request
```

Gibt einen Kopplungs-Token zurück. Sende ihn als `/connect <token>` an den solyto-Telegram-Bot, um dein Konto zu verknüpfen.

## Verbindung prüfen

```
GET /v1/telegram/request
```

Gibt den aktuellen Telegram-Verbindungsstatus zurück, einschließlich ob die Bot-Verbindung bestätigt ist und die verknüpfte Chat-ID.

## Your-Day-Benachrichtigung

```
PUT /v1/telegram/your-day-alert
```

Schaltet die tägliche "Your Day"-Benachrichtigung um, die um 07:00 Uhr in deiner Zeitzone zugestellt wird.

## Check-In-Benachrichtigung

```
PUT /v1/telegram/check-in-alert
```

Schaltet die tägliche Check-In-Erinnerung um, die um 20:00 Uhr in deiner Zeitzone zugestellt wird.

Details zum Bot und seinen Befehlen findest du unter [Telegram-Bot](/integrations/telegram/).
