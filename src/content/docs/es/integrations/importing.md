---
title: Importar datos
description: Busca en línea e importa desde Deezer, Discogs, Goodreads, Hardcover, IMDb, TMDB, Steam, BGG y Chefkoch.
---

solyto puede importar datos desde varios servicios externos para rellenar tus bibliotecas. Todas las importaciones se activan manualmente — solyto nunca contacta con servicios externos en segundo plano, y ningún dato pasa por un servidor intermedio.

## Cómo funciona la importación

Cada biblioteca ofrece dos formas de traer entradas desde un servicio externo:

- **Buscar en línea** — busca en un proveedor por título/nombre e importa desde los resultados con los metadatos (portada, año, etc.) rellenados automáticamente
- **Importar por URL** — pega un enlace a un elemento (por ejemplo, un álbum de Deezer o una película de IMDb) y solyto obtiene sus detalles

Ambas opciones están disponibles desde el modal **+** (crear) de cada biblioteca. Las importaciones solo se activan cuando haces clic explícitamente en un botón.

## Biblioteca de música

Proveedores: **Deezer** y **Discogs**.

1. Abre la **Biblioteca de música** y haz clic en **+**
2. Busca en Deezer/Discogs por artista o nombre de álbum, o pega la URL de un álbum
3. Revisa el resultado encontrado (un widget de vista previa de Deezer te permite escucharlo primero)
4. Guarda — la carátula y los metadatos se rellenan automáticamente

## Biblioteca de libros

Proveedores: **Hardcover** y **Goodreads**.

1. Abre la **Biblioteca de libros** y haz clic en **+**
2. Busca en Hardcover/Goodreads por título o autor, o pega la URL de un libro
3. Revisa el resultado encontrado
4. Guarda — la portada y los metadatos se rellenan automáticamente

## Biblioteca de películas

Proveedores: **IMDb** y **TMDB**.

1. Abre la **Biblioteca de películas** y haz clic en **+**
2. Busca en TMDB por título, o pega una URL de IMDb/TMDB
3. Revisa el resultado encontrado
4. Guarda — el póster y los metadatos se rellenan automáticamente

## Biblioteca de juegos

Proveedores: **Steam** y **BoardGameGeek**.

1. Abre la **Biblioteca de juegos** y haz clic en **+**
2. Busca en Steam/BGG por título, o pega una URL de Steam/BGG
3. Revisa el resultado encontrado
4. Guarda — la carátula y los metadatos (desarrollador, distribuidora, etc.) se rellenan automáticamente

## Biblioteca de recetas

Proveedor: **Chefkoch**.

1. Abre la **Biblioteca de recetas** y haz clic en **+**
2. Pega la URL de una receta de Chefkoch
3. Revisa la receta importada
4. Guarda — los ingredientes, los pasos, las raciones y la imagen se extraen automáticamente

## Notas

Importa notas desde archivos Markdown (`.md`) o ZIP.

1. Ve a **Notas → Importar**
2. Sube uno o varios archivos
3. Cada archivo se convierte en una nota independiente en solyto

## Calendario

### Desde CalDAV

Importa calendarios desde un servidor CalDAV externo (Nextcloud, iCloud, etc.).

1. Ve a **Calendario → Importar**
2. Introduce la URL del servidor, el usuario y la contraseña
3. Selecciona qué calendarios importar
4. Los eventos se obtienen y almacenan con progreso en tiempo real

## Contactos

### Desde CardDAV

Importa contactos desde un servidor CardDAV externo.

1. Ve a **Contactos → Importar**
2. Introduce la URL del servidor, el usuario y la contraseña
3. Selecciona qué libretas de direcciones importar
4. Los contactos se obtienen y almacenan con progreso en tiempo real

## Privacidad

Todas las solicitudes de importación van directamente desde el backend de solyto al servicio externo. Tus datos nunca se envían a ningún tercero durante el proceso de importación.
