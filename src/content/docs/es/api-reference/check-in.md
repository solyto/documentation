---
title: API de registro diario
description: Seguimiento diario del estado de ánimo y la salud.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/check-in`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/check-in` | Listar entradas de registro diario |
| POST | `/v1/check-in` | Crear o actualizar el registro de una fecha (único por usuario/fecha) |

## Obtener registros

```
GET /v1/check-in
```

Devuelve las entradas de registro diario del usuario.

## Crear / actualizar un registro

```
POST /v1/check-in
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `date` | date | Obligatorio. Fecha de esta entrada |
| `mood` | integer | Opcional. 1–5 |
| `sleep` | integer | Opcional. 1–5 |
| `dreams` | integer | Opcional. 1–5 |
| `food_quality` | integer | Opcional. 1–5 |
| `food_amount` | integer | Opcional. 1–5 |
| `water` | integer | Opcional. 1–5 |
| `sports` | integer | Opcional. Valor de deporte |
| `work` | integer | Opcional. 1–5 |
| `menstruation` | integer | Opcional. 1–5 |
| `alcohol` | integer | Opcional. 1–5 |
| `smoking` | integer | Opcional. 1–5 |
| `social_life` | integer | Opcional. 1–5 |

Todos los campos de seguimiento admiten valor nulo y son opcionales; una `date` es única por usuario, así que volver a enviar la misma fecha actualiza la entrada existente.

## Configuración

La configuración del registro diario (indicadores habilitados, deportes seleccionados) se gestiona a través de los endpoints de configuración de usuario; consulta [Usuarios y configuración](/api-reference/users/).
