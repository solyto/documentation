---
title: Zwischenablage-API
description: Geräteübergreifende Zwischenablage für Text und Bilder.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/clipboard`.

## Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/clipboard` | Einträge der Zwischenablage auflisten |
| POST | `/v1/clipboard` | Einen Text-Eintrag erstellen |
| POST | `/v1/clipboard/image` | Einen Bild-Eintrag erstellen |
| GET | `/v1/clipboard/{id}/image` | Einen Bild-Eintrag abrufen |
| DELETE | `/v1/clipboard/{id}` | Einen Eintrag löschen |

## Zwischenablage auflisten

```
GET /v1/clipboard
```

| Parameter | Typ | Beschreibung |
|-----------|------|-------------|
| `per_page` | integer | Einträge pro Seite |
| `type` | string | Filter: text oder image |

Gibt die Einträge der Zwischenablage sortiert nach Erstellungszeit zurück, neueste zuerst.

## Text-Eintrag erstellen

```
POST /v1/clipboard
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `content` | string | Erforderlich. Textinhalt |

## Bild-Eintrag erstellen

```
POST /v1/clipboard/image
Content-Type: multipart/form-data
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `image` | file | Erforderlich. Bilddatei |

## Bild abrufen

```
GET /v1/clipboard/{id}/image
```

Gibt die rohen Bilddaten mit dem passenden `Content-Type`-Header zurück.

## Eintrag löschen

```
DELETE /v1/clipboard/{id}
```

Entfernt den Eintrag der Zwischenablage und das zugehörige Bild (falls vorhanden) dauerhaft.
