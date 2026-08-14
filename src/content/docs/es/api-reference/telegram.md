---
title: API de Telegram
description: Conexión del bot de Telegram y gestión de alertas.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/telegram`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/telegram/token-request` | Obtener (o crear) un token de vinculación, válido 24 h |
| GET | `/v1/telegram/request` | Obtener el estado actual de la conexión |
| PUT | `/v1/telegram/your-day-alert` | Activar o desactivar la alerta diaria "tu día" |
| PUT | `/v1/telegram/check-in-alert` | Activar o desactivar la alerta de registro diario |

## Generar token

```
GET /v1/telegram/token-request
```

Devuelve un token de vinculación. Envíalo al bot de Telegram de solyto como `/connect <token>` para vincular tu cuenta.

## Comprobar conexión

```
GET /v1/telegram/request
```

Devuelve el estado actual de la conexión de Telegram, incluyendo si la conexión del bot está confirmada y el ID del chat vinculado.

## Alerta "tu día"

```
PUT /v1/telegram/your-day-alert
```

Activa o desactiva la alerta diaria "tu día", que se envía a las 07:00 en tu zona horaria.

## Alerta de registro diario

```
PUT /v1/telegram/check-in-alert
```

Activa o desactiva el recordatorio diario de registro, que se envía a las 20:00 en tu zona horaria.

Consulta [Bot de Telegram](/integrations/telegram/) para más detalles sobre el bot y sus comandos.
