---
title: API de exportación de datos
description: Exporta tus datos de solyto como un archivo ZIP.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/export`.

Límite de tasa: **1 solicitud cada 24 horas** por usuario.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/export` | Solicitar una nueva exportación (`features[]`) |
| GET | `/v1/export/status` | Consultar el estado del trabajo de exportación |
| GET | `/v1/export/{id}/download` | Descargar el archivo de exportación (410 si ha caducado) |

## Solicitar exportación

```
POST /v1/export
```

Inicia un trabajo de exportación asíncrono. El cuerpo de la solicitud indica las funciones a incluir; consulta [Exportación de datos](/integrations/exporting/) para ver el conjunto completo.

**Valores de estado:** `pending`, `in-progress`, `completed`, `failed`.

## Consultar estado

```
GET /v1/export/status
```

Devuelve la última exportación con su estado, `expires_at` y si ha caducado.

## Descargar exportación

```
GET /v1/export/{id}/download
```

Descarga el archivo ZIP con todos los datos exportados. Los archivos caducan después de **48 horas**; una solicitud de un archivo caducado devuelve 410.
