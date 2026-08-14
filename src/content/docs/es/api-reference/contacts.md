---
title: API de contactos
description: Libreta de direcciones y gestión de contactos con importación CardDAV.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/address-books`.

## Libretas de direcciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/address-books` | Listar libretas de direcciones |
| POST | `/v1/address-books` | Crear una libreta de direcciones (`name`; 409 si ya existe) |
| PUT | `/v1/address-books/{addressBookId}` | Actualizar el color de una libreta de direcciones |
| DELETE | `/v1/address-books/{addressBookId}` | Eliminar una libreta de direcciones |

## Contactos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/address-books/contacts` | Listar todos los contactos |
| POST | `/v1/address-books/contacts/photos` | Obtener en bloque las URL de fotos de contactos (máx. 10) |
| POST | `/v1/address-books/{addressBookId}/contacts` | Crear un contacto |
| PUT | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Actualizar un contacto |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Eliminar un contacto |
| POST | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Subir una foto de contacto (multipart) |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Eliminar una foto de contacto |

La creación de contactos acepta las partes completas del nombre (prefijo, primer nombre, segundo nombre, apellido, sufijo), varios `emails[]` y `phones[]` con tipos (móvil/casa/trabajo/otro), `groups[]`, `organization`, `title`, `note`, una dirección completa y una `photo` opcional (base64).

## Importación (CardDAV)

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/address-books/import` | Iniciar una importación CardDAV externa (`url`, `username`, `secret`) |
| POST | `/v1/address-books/import/select` | Seleccionar libretas de direcciones a importar |
| GET | `/v1/address-books/import/state` | Estado de progreso de la importación |
