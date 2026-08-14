---
title: Feeds-API
description: RSS-/Atom-Feed-Abonnements und -Einträge.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/feeds`.

## Abonnements

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/feeds/subscriptions` | Abonnierte Feeds auflisten |
| POST | `/v1/feeds/subscriptions` | Einen Feed abonnieren (`title`, `url`, `whitelist`, `blacklist`; 409 bei Duplikat) |
| GET | `/v1/feeds/subscriptions/{feedSubscription}` | Ein Abonnement anzeigen |
| PUT | `/v1/feeds/subscriptions/{feedSubscription}` | Ein Abonnement aktualisieren (Titel, Whitelist, Blacklist) |
| DELETE | `/v1/feeds/subscriptions/{feedSubscription}` | Ein Feed-Abonnement kündigen |

## Feed-Einträge

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/feeds/items` | Feed-Einträge auflisten (`offset`, `limit` oder `all`; gibt `has_more` und `feed_counts` zurück) |

## Entdecken & Testen

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/feeds/available` | Verfügbare Feeds durchsuchen (Offset-Paginierung) |
| GET | `/v1/feeds/search` | Feeds suchen (`search`, mind. 2 Zeichen) |
| GET | `/v1/feeds/friends` | Feeds, die von deinen Freunden abonniert sind |
| POST | `/v1/feeds/test` | Eine Feed-URL testen, liefert bis zu 5 Beispieleinträge |

## Feed testen

```
POST /v1/feeds/test
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `url` | string | Erforderlich. Zu testende URL |

Liefert bis zu 5 Beispieleinträge, sodass du einen Feed prüfen kannst, bevor du ihn abonnierst.
