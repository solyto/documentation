---
title: API de notificaciones
description: Notificaciones en la app, suscripciones push y configuración de notificaciones.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/notifications`.

## Notificaciones en la app

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/notifications` | Listar notificaciones no leídas en la app |
| POST | `/v1/notifications/read-all` | Marcar todas las notificaciones como leídas |
| PUT | `/v1/notifications/{notification}/read` | Marcar una sola notificación como leída |

## Suscripciones push

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/notifications/push/vapid-key` | Obtener la clave pública VAPID |
| POST | `/v1/notifications/push/subscribe` | Registrar una suscripción Web Push (`endpoint`, `keys.auth`, `keys.p256dh`) |
| POST | `/v1/notifications/push/unsubscribe` | Eliminar una suscripción push (`endpoint`) |

## Configuración de notificaciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/notifications/settings` | Obtener la configuración de notificaciones por tipo y canal |
| PUT | `/v1/notifications/settings` | Actualizar los interruptores por tipo y canal |

La configuración es una matriz de los 9 tipos de notificación (lanzamiento de música/libro/película, solicitud de amistad, recordatorio diario del día, recordatorio diario de registro, calendario compartido, comentario en solicitud de desarrollo, exportación lista) cada uno con cuatro indicadores de canal (`_ui`, `_email`, `_push`, `_telegram`). Consulta [Notificaciones](/customization/notifications/) para ver la matriz completa.
