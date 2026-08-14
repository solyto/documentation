---
title: API de feeds
description: Suscripciones y elementos de feeds RSS/Atom.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/feeds`.

## Suscripciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/feeds/subscriptions` | Listar feeds suscritos |
| POST | `/v1/feeds/subscriptions` | Suscribirse a un feed (`title`, `url`, `whitelist`, `blacklist`; 409 si está duplicado) |
| GET | `/v1/feeds/subscriptions/{feedSubscription}` | Mostrar una suscripción |
| PUT | `/v1/feeds/subscriptions/{feedSubscription}` | Actualizar una suscripción (título, whitelist, blacklist) |
| DELETE | `/v1/feeds/subscriptions/{feedSubscription}` | Cancelar la suscripción a un feed |

## Elementos del feed

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/feeds/items` | Listar elementos del feed (`offset`, `limit` o `all`; devuelve `has_more` y `feed_counts`) |

## Descubrimiento y pruebas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/feeds/available` | Explorar feeds disponibles (paginación por offset) |
| GET | `/v1/feeds/search` | Buscar feeds (`search`, mínimo 2 caracteres) |
| GET | `/v1/feeds/friends` | Feeds a los que están suscritos tus amigos |
| POST | `/v1/feeds/test` | Probar una URL de feed, devuelve hasta 5 elementos de muestra |

## Probar feed

```
POST /v1/feeds/test
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `url` | string | Obligatorio. URL a probar |

Devuelve hasta 5 elementos de muestra para que puedas verificar un feed antes de suscribirte.
