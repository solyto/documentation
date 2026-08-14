---
title: API de bibliotecas
description: Música, libros, películas, juegos, enlaces, citas, recetas y plantas.
---

Todos los endpoints requieren autenticación. Cada tipo de biblioteca sigue el mismo patrón CRUD bajo `/api/v1/libraries/{type}`.

## Patrón común

Todos los tipos de biblioteca admiten:

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/{type}` | Listar elementos |
| POST | `/v1/libraries/{type}` | Crear un elemento |
| GET | `/v1/libraries/{type}/{id}` | Obtener un solo elemento |
| PUT | `/v1/libraries/{type}/{id}` | Actualizar un elemento |
| DELETE | `/v1/libraries/{type}/{id}` | Eliminar un elemento |

Sustituye `{type}` por uno de: `music`, `books`, `movies`, `games`, `links`, `quotes`, `recipes`, `plants`. Todos los elementos comparten indicadores comunes: `rating` (1–5), `wishlist`, `cover_path`, `link`, `genres[]` y (donde esté disponible) `tags[]`.

## Portadas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/covers/{type}/{fileName}` | Servir una imagen de portada (type: music/books/movies/games/quotes/recipes/links/plants) |
| OPTIONS | `/v1/libraries/covers/{type}/{fileName}` | Preflight CORS |

## Música

Endpoints específicos de la biblioteca:

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/music/recommend/{type}` | Recomendar (favorito/sin valorar/aleatorio/nuevo) |
| GET | `/v1/libraries/music/releases` | Nuevos lanzamientos de Deezer de tus artistas favoritos |
| GET | `/v1/libraries/music/search/{service}/{query}` | Buscar en Deezer/Discogs |
| POST | `/v1/libraries/music/import/{service}` | Importar un álbum por URL (deezer/discogs) |
| GET/POST/PUT/DELETE | `/v1/libraries/music/genres` | CRUD de géneros |

Campos: `title`, `artist`, `type` (album/single/compilation), `format` (vinyl/CD/digital/cassette), `condition`, `acquired_where`, `additional_info`, `publication_year`.

## Libros

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/books/recommend/{type}` | Recomendar (favorito/sin valorar/aleatorio/nuevo) |
| GET | `/v1/libraries/books/releases` | Nuevos lanzamientos de Hardcover de tus autores favoritos |
| GET | `/v1/libraries/books/search/{service}/{query}` | Buscar en Hardcover/Goodreads |
| POST | `/v1/libraries/books/import/{service}` | Importar un libro por URL (hardcover/goodreads) |
| GET/POST/PUT/DELETE | `/v1/libraries/books/genres` | CRUD de géneros |

Campos: `title`, `author`, `series`, `volume`, `pages`, `current_page`, `lent_to`, `is_where`, `summary`, `started_at`, `finished_at`, `publication_year`.

## Películas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/movies/search/{service}/{title}` | Buscar en TMDB |
| POST | `/v1/libraries/movies/import/{service}` | Importar una película por URL (imdb) |
| GET | `/v1/libraries/movies/releases` | Nuevos estrenos |
| GET | `/v1/libraries/movies/{movie}/trailers` | Trailers (claves de YouTube de TMDB) |
| GET/POST/PUT/DELETE | `/v1/libraries/movies/genres` | CRUD de géneros |

Campos: `title`, `category` (movie/series), `publication_year`, `started_at`, `finished_at`.

## Juegos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/games/search/{service}/{query}` | Buscar en Steam/BGG |
| POST | `/v1/libraries/games/import/{service}` | Importar un juego por URL (steam/bgg) |
| GET/POST/PUT/DELETE | `/v1/libraries/games/genres` | CRUD de géneros |

Campos: `title`, `platform` (pc/playstation/xbox/nintendo/mobile/boardgame/other), `developer`, `publisher`, `playtime_hours`, `completed`, `publication_year`.

## Enlaces

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/links/newest` | Enlaces más recientes |
| GET/POST/PUT/DELETE | `/v1/libraries/links/categories` | CRUD de categorías de enlaces |

Campos: `title`, `url`, `is_favorite`, `cover_path`, `category_id`.

## Citas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/libraries/quotes/random` | Cita aleatoria |

Campos: `quote`, `author`, `source`, `summary`.

## Recetas

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/libraries/recipes/import/{service}` | Importar una receta por URL (chefkoch) |

Campos: `title`, `type` (breakfast/lunch/dinner/snack/dessert/drink/other), `calories`, `time_to_make`, `servings`, `description`, `ingredients[]` ({name, amount, unit}), `steps[]`, `rating`.

## Plantas

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/libraries/plants/{plant}/cover` | Subir una imagen de portada (multipart) |

Campos: `name`, `latin_name`, `location` (indoor/outdoor/both), `sunlight` (full_sun/partial_sun/indirect/shade), `current_size`, `max_size`, `acquired_at`, `winter_hardy`, `instructions`.
