---
title: Notizen-API
description: CRUD für Notizen und Notizkategorien mit Import/Export.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/notes`.

## Notizen

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/notes` | Notizen auflisten |
| POST | `/v1/notes` | Eine Notiz erstellen (`title`, `content`, `category_id`, `tags[]`) |
| GET | `/v1/notes/{note}` | Eine einzelne Notiz abrufen |
| PUT | `/v1/notes/{note}` | Eine Notiz aktualisieren (inkl. `is_favorite`, `is_starred`) |
| DELETE | `/v1/notes/{note}` | Eine Notiz löschen |
| GET | `/v1/notes/newest` | Neueste Notizen |

## Kategorien

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/notes/categories` | Kategorien auflisten |
| POST | `/v1/notes/categories` | Eine Kategorie erstellen (`title`, `parent_id` — hierarchisch) |
| GET | `/v1/notes/categories/{category}` | Eine Kategorie abrufen |
| PUT | `/v1/notes/categories/{category}` | Eine Kategorie aktualisieren |
| DELETE | `/v1/notes/categories/{category}` | Eine Kategorie löschen |

Kategorien unterstützen Verschachtelung über `parent_id`, sodass Ordner Unterordner enthalten können.

## Import / Export

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/notes/import` | Notizen aus einer Markdown- (`.md`) oder ZIP-Datei (`.zip`) importieren (multipart) |
| GET | `/v1/notes/export` | Notizen exportieren (der vollständige Datenexport erfolgt über das Export-System) |
