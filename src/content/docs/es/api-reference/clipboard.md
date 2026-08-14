---
title: API de portapapeles
description: Portapapeles multidispositivo para texto e imágenes.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/clipboard`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/clipboard` | Listar entradas del portapapeles |
| POST | `/v1/clipboard` | Crear una entrada de texto |
| POST | `/v1/clipboard/image` | Crear una entrada de imagen |
| GET | `/v1/clipboard/{id}/image` | Obtener una entrada de imagen |
| DELETE | `/v1/clipboard/{id}` | Eliminar una entrada |

## Listar portapapeles

```
GET /v1/clipboard
```

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `per_page` | integer | Elementos por página |
| `type` | string | Filtro: text o image |

Devuelve las entradas del portapapeles ordenadas por fecha de creación, de más reciente a más antigua.

## Crear entrada de texto

```
POST /v1/clipboard
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `content` | string | Obligatorio. Contenido de texto |

## Crear entrada de imagen

```
POST /v1/clipboard/image
Content-Type: multipart/form-data
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `image` | file | Obligatorio. Archivo de imagen |

## Obtener imagen

```
GET /v1/clipboard/{id}/image
```

Devuelve el binario de la imagen con la cabecera `Content-Type` adecuada.

## Eliminar entrada

```
DELETE /v1/clipboard/{id}
```

Elimina permanentemente la entrada del portapapeles y su imagen asociada (si la hay).
