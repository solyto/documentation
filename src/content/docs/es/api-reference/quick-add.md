---
title: API de Agregar rápido
description: Detecta automáticamente el tipo de contenido a partir de una URL o texto.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/dashboard/quick-add`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/dashboard/quick-add/detect` | Detectar el tipo de contenido a partir de la entrada |
| POST | `/v1/dashboard/quick-add/commit` | Confirmar el elemento detectado |

## Detectar

```
POST /v1/dashboard/quick-add/detect
```

Analiza una URL o cadena de texto y devuelve el tipo de contenido detectado, la puntuación de confianza y si se necesita confirmación.

**Cuerpo de la solicitud:**

| Campo | Tipo | Reglas |
|-------|------|-------|
| `content` | string | Obligatorio. URL o texto a analizar |

**Respuesta:**

```json
{
  "success": true,
  "data": {
    "content": "https://www.deezer.com/album/123456",
    "content_type": "music",
    "confidence": 0.95,
    "needs_confirmation": false,
    "metadata": { }
  }
}
```

**Tipos detectados:**

| Tipo | Descripción |
|------|-------------|
| `music` | URL de Deezer/Discogs |
| `books` | URL de Hardcover/Goodreads |
| `movies` | URL de IMDb |
| `games` | URL de Steam/BGG |
| `recipes` | URL de Chefkoch |
| `links` | Cualquier otra URL |
| `todo` | Texto que contiene `due`, `repeat` o `link:` |
| `note` | Texto plano sin señales |
| `plants` | Entrada de planta (selección manual) |
| `quotes` | Entrada de cita (selección manual) |
| `feed` | Suscripción a feed (selección manual) |
| `clipboard` | Texto de portapapeles (selección manual) |

Consulta [Agregar rápido](/dashboard/quick-add/) para conocer las reglas de detección. `needs_confirmation` es true cuando la confianza está por debajo del 60%.

## Confirmar

```
POST /v1/dashboard/quick-add/commit
```

Guarda el elemento en la biblioteca correspondiente.

**Cuerpo de la solicitud:**

| Campo | Tipo | Reglas |
|-------|------|-------|
| `content` | string | Obligatorio. La URL o texto original |
| `content_type` | string | Obligatorio. Uno de los tipos anteriores |
| `metadata` | object | Opcional. Campos adicionales para la biblioteca de destino |
