---
title: Freunde-API
description: Verwaltung von Freundschaftsanfragen und der Freundesliste.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/friends`.

## Endpunkte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/friends` | Bestätigte Freunde auflisten |
| GET | `/v1/friends/requests` | Ausstehende Freundschaftsanfragen auflisten (eingehend und ausgehend) |
| POST | `/v1/friends/requests` | Eine Freundschaftsanfrage senden (`receiver_id`) |
| PUT | `/v1/friends/requests/{friendRequest}/accept` | Eine Freundschaftsanfrage annehmen (nur Empfänger) |
| PUT | `/v1/friends/requests/{friendRequest}/reject` | Eine Freundschaftsanfrage ablehnen (nur Empfänger) |

## Anfragen auflisten

```
GET /v1/friends/requests
```

Gibt ausstehende eingehende und ausgehende Freundschaftsanfragen mit ihrem Status zurück (pending/accepted/rejected).

## Anfrage senden

```
POST /v1/friends/requests
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `receiver_id` | string | Erforderlich. ID des Benutzers, mit dem du dich befreunden möchtest |

## Annehmen / Ablehnen

```
PUT /v1/friends/requests/{friendRequest}/accept
PUT /v1/friends/requests/{friendRequest}/reject
```

Nur der Empfänger kann eine Anfrage annehmen oder ablehnen. Kein Request-Body erforderlich.
