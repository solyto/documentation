---
title: API Bibliothèques
description: Musique, livres, films, jeux, liens, citations, recettes et plantes.
---

Tous les endpoints nécessitent une authentification. Chaque type de bibliothèque suit le même schéma CRUD sous `/api/v1/libraries/{type}`.

## Schéma commun

Chaque type de bibliothèque prend en charge :

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/{type}` | Lister les éléments |
| POST | `/v1/libraries/{type}` | Créer un élément |
| GET | `/v1/libraries/{type}/{id}` | Récupérer un élément |
| PUT | `/v1/libraries/{type}/{id}` | Mettre à jour un élément |
| DELETE | `/v1/libraries/{type}/{id}` | Supprimer un élément |

Remplacez `{type}` par l'une des valeurs suivantes : `music`, `books`, `movies`, `games`, `links`, `quotes`, `recipes`, `plants`. Tous les éléments partagent des champs communs : `rating` (1 à 5), `wishlist`, `cover_path`, `link`, `genres[]` et (lorsque c'est pris en charge) `tags[]`.

## Couvertures

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/covers/{type}/{fileName}` | Servir une image de couverture (type : music/books/movies/games/quotes/recipes/links/plants) |
| OPTIONS | `/v1/libraries/covers/{type}/{fileName}` | Pré-vérification CORS |

## Musique

Endpoints spécifiques à cette bibliothèque :

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/music/recommend/{type}` | Recommander (favorite/unrated/random/new) |
| GET | `/v1/libraries/music/releases` | Nouvelles sorties de Deezer pour les artistes favoris |
| GET | `/v1/libraries/music/search/{service}/{query}` | Rechercher sur Deezer/Discogs |
| POST | `/v1/libraries/music/import/{service}` | Importer un album via une URL (deezer/discogs) |
| GET/POST/PUT/DELETE | `/v1/libraries/music/genres` | CRUD des genres |

Champs : `title`, `artist`, `type` (album/single/compilation), `format` (vinyl/CD/digital/cassette), `condition`, `acquired_where`, `additional_info`, `publication_year`.

## Livres

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/books/recommend/{type}` | Recommander (favorite/unrated/random/new) |
| GET | `/v1/libraries/books/releases` | Nouvelles sorties de Hardcover pour les auteurs favoris |
| GET | `/v1/libraries/books/search/{service}/{query}` | Rechercher sur Hardcover/Goodreads |
| POST | `/v1/libraries/books/import/{service}` | Importer un livre via une URL (hardcover/goodreads) |
| GET/POST/PUT/DELETE | `/v1/libraries/books/genres` | CRUD des genres |

Champs : `title`, `author`, `series`, `volume`, `pages`, `current_page`, `lent_to`, `is_where`, `summary`, `started_at`, `finished_at`, `publication_year`.

## Films

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/movies/search/{service}/{title}` | Rechercher sur TMDB |
| POST | `/v1/libraries/movies/import/{service}` | Importer un film via une URL (imdb) |
| GET | `/v1/libraries/movies/releases` | Nouvelles sorties en salle/écran |
| GET | `/v1/libraries/movies/{movie}/trailers` | Bandes-annonces (clés YouTube TMDB) |
| GET/POST/PUT/DELETE | `/v1/libraries/movies/genres` | CRUD des genres |

Champs : `title`, `category` (movie/series), `publication_year`, `started_at`, `finished_at`.

## Jeux

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/games/search/{service}/{query}` | Rechercher sur Steam/BGG |
| POST | `/v1/libraries/games/import/{service}` | Importer un jeu via une URL (steam/bgg) |
| GET/POST/PUT/DELETE | `/v1/libraries/games/genres` | CRUD des genres |

Champs : `title`, `platform` (pc/playstation/xbox/nintendo/mobile/boardgame/other), `developer`, `publisher`, `playtime_hours`, `completed`, `publication_year`.

## Liens

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/links/newest` | Liens les plus récents |
| GET/POST/PUT/DELETE | `/v1/libraries/links/categories` | CRUD des catégories de liens |

Champs : `title`, `url`, `is_favorite`, `cover_path`, `category_id`.

## Citations

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/libraries/quotes/random` | Citation aléatoire |

Champs : `quote`, `author`, `source`, `summary`.

## Recettes

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/libraries/recipes/import/{service}` | Importer une recette via une URL (chefkoch) |

Champs : `title`, `type` (breakfast/lunch/dinner/snack/dessert/drink/other), `calories`, `time_to_make`, `servings`, `description`, `ingredients[]` ({name, amount, unit}), `steps[]`, `rating`.

## Plantes

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/libraries/plants/{plant}/cover` | Téléverser une image de couverture (multipart) |

Champs : `name`, `latin_name`, `location` (indoor/outdoor/both), `sunlight` (full_sun/partial_sun/indirect/shade), `current_size`, `max_size`, `acquired_at`, `winter_hardy`, `instructions`.
