---
title: Finanzen-API
description: Budgetverfolgung und Vermögensverwaltung.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/finances`.

## Budget

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/finances/budget` | Budgetposten auflisten |
| POST | `/v1/finances/budget` | Einen Budgetposten erstellen (`title`, `type`, `value`) |
| GET | `/v1/finances/budget/{budget}` | Einen Budgetposten abrufen |
| PUT | `/v1/finances/budget/{budget}` | Einen Budgetposten aktualisieren |
| DELETE | `/v1/finances/budget/{budget}` | Einen Budgetposten löschen |

## Vermögensfelder

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/finances/wealth/fields` | Vermögensfelder auflisten |
| POST | `/v1/finances/wealth/fields` | Ein Vermögensfeld erstellen (`title`) |
| PUT | `/v1/finances/wealth/fields/{field}` | Ein Vermögensfeld aktualisieren |
| DELETE | `/v1/finances/wealth/fields/{field}` | Ein Vermögensfeld löschen |

## Vermögenswerte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| PUT | `/v1/finances/wealth/fields/{field}/value` | Den aktuellen Wert eines Feldes setzen (`value`) |

Jedes Vermögensfeld führt einen zeitgestempelten Werteverlauf — das Setzen eines neuen Werts erzeugt einen neuen Datenpunkt, und frühere Werte bleiben für die Auswertung im Zeitverlauf erhalten.
