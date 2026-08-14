---
title: Zeiterfassungs-API
description: Projekte, Kategorien, Zeiteinträge und Statistiken.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/time-tracking`.

## Kategorien

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/time-tracking/categories` | Kategorien auflisten |
| POST | `/v1/time-tracking/categories` | Eine Kategorie erstellen (`title`, `color`) |
| GET | `/v1/time-tracking/categories/{category}` | Eine Kategorie abrufen |
| PUT | `/v1/time-tracking/categories/{category}` | Eine Kategorie aktualisieren |
| DELETE | `/v1/time-tracking/categories/{category}` | Eine Kategorie löschen |

## Projekte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/time-tracking/projects` | Projekte auflisten |
| POST | `/v1/time-tracking/projects` | Ein Projekt erstellen (`title`, `description`, `category_ids[]`) |
| GET | `/v1/time-tracking/projects/{project}` | Ein Projekt abrufen |
| PUT | `/v1/time-tracking/projects/{project}` | Ein Projekt aktualisieren |
| DELETE | `/v1/time-tracking/projects/{project}` | Ein Projekt löschen (entfernt auch dessen Einträge) |

## Zeiteinträge

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries` | Zeiteinträge auflisten |
| POST | `/v1/time-tracking/entries` | Einen manuellen Eintrag erstellen (`started_at`, `stopped_at`, `duration_minutes`, `project_id`, `description`) |
| GET | `/v1/time-tracking/entries/{entry}` | Einen Eintrag abrufen |
| PUT | `/v1/time-tracking/entries/{entry}` | Einen Eintrag aktualisieren |
| DELETE | `/v1/time-tracking/entries/{entry}` | Einen Eintrag löschen |

## Timer

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/time-tracking/entries/start` | Einen Timer starten (409, falls bereits einer läuft) |
| POST | `/v1/time-tracking/entries/{entry}/stop` | Den laufenden Timer stoppen (409, falls bereits gestoppt) |

## Statistiken

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries/statistics` | Statistiken zwischen den Daten `from`/`to` abrufen |
