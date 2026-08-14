---
title: API de finanzas
description: Seguimiento de presupuesto y gestión patrimonial.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/finances`.

## Presupuesto

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/finances/budget` | Listar partidas del presupuesto |
| POST | `/v1/finances/budget` | Crear una partida del presupuesto (`title`, `type`, `value`) |
| GET | `/v1/finances/budget/{budget}` | Obtener una partida del presupuesto |
| PUT | `/v1/finances/budget/{budget}` | Actualizar una partida del presupuesto |
| DELETE | `/v1/finances/budget/{budget}` | Eliminar una partida del presupuesto |

## Campos de patrimonio

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/finances/wealth/fields` | Listar campos de patrimonio |
| POST | `/v1/finances/wealth/fields` | Crear un campo de patrimonio (`title`) |
| PUT | `/v1/finances/wealth/fields/{field}` | Actualizar un campo de patrimonio |
| DELETE | `/v1/finances/wealth/fields/{field}` | Eliminar un campo de patrimonio |

## Valores de patrimonio

| Método | Ruta | Descripción |
|--------|------|-------------|
| PUT | `/v1/finances/wealth/fields/{field}/value` | Establecer el valor actual de un campo (`value`) |

Cada campo de patrimonio mantiene un historial de valores con marca de tiempo: al establecer un nuevo valor se registra un nuevo punto, y los valores anteriores se conservan para graficarlos a lo largo del tiempo.
