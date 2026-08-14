---
title: Check-In-API
description: Tägliches Stimmungs- und Gesundheits-Tracking.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/check-in`.

## Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/check-in` | Check-In-Einträge auflisten |
| POST | `/v1/check-in` | Einen Check-In für ein Datum erstellen oder aktualisieren (eindeutig pro Benutzer/Datum) |

## Check-Ins abrufen

```
GET /v1/check-in
```

Gibt die Check-In-Einträge des Benutzers zurück.

## Check-In erstellen / aktualisieren

```
POST /v1/check-in
```

| Feld | Typ | Beschreibung |
|-------|------|-------------|
| `date` | date | Erforderlich. Datum für diesen Eintrag |
| `mood` | integer | Optional. 1–5 |
| `sleep` | integer | Optional. 1–5 |
| `dreams` | integer | Optional. 1–5 |
| `food_quality` | integer | Optional. 1–5 |
| `food_amount` | integer | Optional. 1–5 |
| `water` | integer | Optional. 1–5 |
| `sports` | integer | Optional. Sportwert |
| `work` | integer | Optional. 1–5 |
| `menstruation` | integer | Optional. 1–5 |
| `alcohol` | integer | Optional. 1–5 |
| `smoking` | integer | Optional. 1–5 |
| `social_life` | integer | Optional. 1–5 |

Alle Tracker-Felder sind nullbar und optional; ein `date` ist pro Benutzer eindeutig — wird dasselbe Datum erneut gesendet, wird der bestehende Eintrag aktualisiert.

## Einstellungen

Die Check-In-Einstellungen (aktivierte Tracker, ausgewählte Sportarten) werden über die Benutzereinstellungs-Endpunkte verwaltet — siehe [Benutzer & Einstellungen](/api-reference/users/).
