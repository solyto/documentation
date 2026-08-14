---
title: Biblioteca de libros
description: Controla tus lecturas con Hardcover, importación de Goodreads, progreso de lectura y seguimiento de sagas.
---

La Biblioteca de libros es tu registro personal de lectura — controla los libros que has leído, los que estás leyendo actualmente o los que quieres leer. Mantén el progreso de lectura, los préstamos y las sagas todo en un mismo lugar.

## Añadir libros

Añade libros a tu biblioteca de dos formas:

- **Entrada manual** — rellena los detalles tú mismo
- **Importar** — trae una colección existente desde Hardcover o Goodreads

### Importar desde Hardcover

Conéctate a Hardcover mediante API para importar tu historial de lectura, tus estanterías y los datos de tus libros. La importación de Hardcover se basa en la API y trae metadatos detallados automáticamente.

### Importar desde Goodreads

Sube tu archivo de exportación CSV de Goodreads para importar tus estanterías y tu historial de lectura. Exporta primero tus datos desde Goodreads y luego sube el archivo en solyto.

Consulta [Importar datos](/integrations/importing/) para instrucciones paso a paso.

## Campos de la entrada

Cada entrada de libro incluye:

| Campo | Descripción |
|-------|-------------|
| **title** | Título del libro |
| **author** | Nombre del autor |
| **series** | Nombre de la saga (si forma parte de una) |
| **volume** | Número de volumen dentro de la saga |
| **rating** | 1–5 estrellas |
| **publication_year** | Año de publicación del libro |
| **pages** | Número total de páginas |
| **current_page** | Página en la que vas (progreso de lectura) |
| **lent_to** | A quién le prestaste el libro |
| **is_where** | Ubicación física del libro |
| **cover** | Portada del libro |
| **link** | URL (Hardcover, Goodreads, página de la tienda) |
| **wishlist** | Marcar como deseado pero aún no adquirido |
| **summary** | Descripción breve o sinopsis |
| **started_at** | Fecha en que empezaste a leerlo |
| **finished_at** | Fecha en que terminaste de leerlo |
| **tags** | Etiquetas de color para filtrar |
| **genres** | Uno o más géneros literarios |

## Progreso de lectura

Controla en qué punto estás de cualquier libro. Establece **current_page** en relación con el total de **pages** para ver tu avance. solyto muestra tu progreso como porcentaje, facilitando que retomes la lectura donde la dejaste.

El progreso es visible en la lista de libros y en la página de detalle de cada libro.

## Sagas y volúmenes

Los libros que forman parte de una saga se pueden agrupar. Establece el nombre de la **series** y el número de **volume** en cada entrada para mantener tus sagas organizadas. Explora por saga para ver todos los volúmenes en orden.

## Préstamos

Controla quién tiene tus libros. Usa **lent_to** para registrar a quién le prestaste un libro, y **is_where** para anotar dónde está físicamente el libro — en casa de un amigo, en la oficina, o de vuelta en tu estantería.

Esto es especialmente útil si prestas libros con frecuencia y quieres recordar quién tiene qué. Un filtro dedicado de **prestados** muestra solo los libros que has prestado.

## Recomendaciones con IA

Obtén recomendaciones de libros basadas en tu biblioteca. Elige **Un favorito**, **Algo que no haya visto antes**, **Algo completamente aleatorio** o **Algo nuevo** — solyto elige un libro que coincida de tu colección (o busca un lanzamiento reciente vía Hardcover para "nuevo"). Usa "Probar de nuevo" para repetir la selección.

Las recomendaciones se generan solo bajo demanda — no ocurre nada hasta que haces clic en el botón.

## Notificaciones de lanzamientos

solyto consulta Hardcover en busca de libros nuevos de tus autores favoritos y puede avisarte cuando publiquen. Las notificaciones son configurables por canal — Telegram, correo electrónico o push. Consulta [Notificaciones](/customization/notifications/) para la configuración.

## Vistas

Explora tu colección de libros en las vistas **Lista**, **Tarjetas**, **Estantería** o **Lomo** — la vista de estantería muestra una estantería de madera y la vista de lomo despliega lomos de libro en 3D (el ancho del lomo se calcula a partir del número de páginas). Busca por título o autor (pulsa **Ctrl+F**), y filtra por género, valoración, lista de deseos o prestados.

## Géneros literarios

La biblioteca de libros tiene su propio sistema de géneros. Añade géneros que se ajusten a tus lecturas — ficción literaria, ciencia ficción, biografía, autoayuda, o cualquier otro. Asigna varios géneros a cualquier libro.

Gestiona los géneros desde los ajustes de la biblioteca. Puedes añadir, renombrar y eliminar géneros en cualquier momento.

## Exportar

Exporta toda tu biblioteca de libros como `.csv`. El archivo incluye todos los campos — título, autor, saga, valoración, géneros y fechas de lectura. Consulta [Exportar datos](/integrations/exporting/).
