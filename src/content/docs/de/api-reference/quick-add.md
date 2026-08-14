---
title: Quick-Add-API
description: Inhaltstyp automatisch aus URL oder Text erkennen.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/dashboard/quick-add`.

## Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/dashboard/quick-add/detect` | Inhaltstyp aus der Eingabe erkennen |
| POST | `/v1/dashboard/quick-add/commit` | Den erkannten Eintrag übernehmen |

## Erkennen

```
POST /v1/dashboard/quick-add/detect
```

Analysiert eine URL oder einen Textstring und gibt den erkannten Inhaltstyp, einen Konfidenzwert und ob eine Bestätigung nötig ist zurück.

**Request Body:**

| Feld | Typ | Regeln |
|-------|------|-------|
| `content` | string | Erforderlich. Zu analysierende URL oder Text |

**Antwort:**

```json
{
  "success": true,
  "data": {
    "content": "https://www.deezer.com/album/123456",
    "content_type": "music",
    "confidence": 0.95,
    "needs_confirmation": false,
    "metadata": { }
  }
}
```

**Erkannte Typen:**

| Typ | Beschreibung |
|------|-------------|
| `music` | Deezer-/Discogs-URL |
| `books` | Hardcover-/Goodreads-URL |
| `movies` | IMDb-URL |
| `games` | Steam-/BGG-URL |
| `recipes` | Chefkoch-URL |
| `links` | Jede andere URL |
| `todo` | Text, der `due`, `repeat` oder `link:` enthält |
| `note` | Reiner Text ohne Signale |
| `plants` | Pflanzeneintrag (manuelle Auswahl) |
| `quotes` | Zitat-Eintrag (manuelle Auswahl) |
| `feed` | Feed-Abonnement (manuelle Auswahl) |
| `clipboard` | Text für die Zwischenablage (manuelle Auswahl) |

Die Erkennungsregeln findest du unter [Quick Add](/dashboard/quick-add/). `needs_confirmation` ist `true`, wenn die Konfidenz unter 60 % liegt.

## Übernehmen

```
POST /v1/dashboard/quick-add/commit
```

Speichert den Eintrag in der passenden Bibliothek.

**Request Body:**

| Feld | Typ | Regeln |
|-------|------|-------|
| `content` | string | Erforderlich. Die ursprüngliche URL oder der Text |
| `content_type` | string | Erforderlich. Einer der oben genannten Typen |
| `metadata` | object | Optional. Zusätzliche Felder für die Zielbibliothek |
