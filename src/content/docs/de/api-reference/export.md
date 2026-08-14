---
title: Daten-Export-API
description: Exportiere deine solyto-Daten als ZIP-Datei.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/export`.

Begrenzt auf **1 Anfrage pro 24 Stunden** pro Benutzer.

## Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/export` | Einen neuen Export anfordern (`features[]`) |
| GET | `/v1/export/status` | Status des Export-Jobs prüfen |
| GET | `/v1/export/{id}/download` | Die Export-Datei herunterladen (410 falls abgelaufen) |

## Export anfordern

```
POST /v1/export
```

Startet einen asynchronen Export-Job. Der Anfrage-Body listet die einzuschließenden Funktionen auf; die vollständige Liste findest du unter [Daten exportieren](/integrations/exporting/).

**Statuswerte:** `pending`, `in-progress`, `completed`, `failed`.

## Status prüfen

```
GET /v1/export/status
```

Gibt den letzten Export mit seinem Status, `expires_at` und ob er abgelaufen ist zurück.

## Export herunterladen

```
GET /v1/export/{id}/download
```

Lädt die ZIP-Datei mit allen exportierten Daten herunter. Dateien laufen nach **48 Stunden** ab — eine Anfrage für eine abgelaufene Datei liefert 410 zurück.
