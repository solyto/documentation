---
title: Importation des données
description: Recherchez en ligne et importez depuis Deezer, Discogs, Goodreads, Hardcover, IMDb, TMDB, Steam, BGG et Chefkoch.
---

solyto peut importer des données depuis plusieurs services externes pour alimenter vos bibliothèques. Tous les imports sont déclenchés manuellement — solyto ne contacte jamais de services externes en arrière-plan, et aucune donnée ne transite par un serveur intermédiaire.

## Fonctionnement de l'import

Chaque bibliothèque propose deux façons d'importer des entrées depuis un service externe :

- **Recherche en ligne** — recherchez chez un fournisseur par titre/nom et importez depuis les résultats avec les métadonnées (couverture, année, etc.) remplies automatiquement
- **Import par URL** — collez un lien vers un élément (par ex. un album Deezer ou un film IMDb) et solyto en récupère les détails

Les deux options sont disponibles depuis la fenêtre de création (**+**) de chaque bibliothèque. Les imports ne sont déclenchés que lorsque vous cliquez explicitement sur un bouton.

## Bibliothèque de musique

Fournisseurs : **Deezer** et **Discogs**.

1. Ouvrez la **Bibliothèque de musique** et cliquez sur **+**
2. Recherchez sur Deezer/Discogs par artiste ou nom d'album, ou collez une URL d'album
3. Vérifiez le résultat correspondant (un widget d'aperçu Deezer vous permet d'écouter avant de valider)
4. Enregistrez — la pochette et les métadonnées sont remplies automatiquement

## Bibliothèque de livres

Fournisseurs : **Hardcover** et **Goodreads**.

1. Ouvrez la **Bibliothèque de livres** et cliquez sur **+**
2. Recherchez sur Hardcover/Goodreads par titre ou auteur, ou collez une URL de livre
3. Vérifiez le résultat correspondant
4. Enregistrez — la couverture et les métadonnées sont remplies automatiquement

## Bibliothèque de films

Fournisseurs : **IMDb** et **TMDB**.

1. Ouvrez la **Bibliothèque de films** et cliquez sur **+**
2. Recherchez sur TMDB par titre, ou collez une URL IMDb/TMDB
3. Vérifiez le résultat correspondant
4. Enregistrez — l'affiche et les métadonnées sont remplies automatiquement

## Bibliothèque de jeux

Fournisseurs : **Steam** et **BoardGameGeek**.

1. Ouvrez la **Bibliothèque de jeux** et cliquez sur **+**
2. Recherchez sur Steam/BGG par titre, ou collez une URL Steam/BGG
3. Vérifiez le résultat correspondant
4. Enregistrez — la jaquette et les métadonnées (développeur, éditeur, etc.) sont remplies automatiquement

## Bibliothèque de recettes

Fournisseur : **Chefkoch**.

1. Ouvrez la **Bibliothèque de recettes** et cliquez sur **+**
2. Collez une URL de recette Chefkoch
3. Vérifiez la recette importée
4. Enregistrez — les ingrédients, les étapes, les portions et l'image sont extraits automatiquement

## Notes

Importez des notes depuis des fichiers Markdown (`.md`) ou ZIP.

1. Allez dans **Notes → Import**
2. Téléversez un ou plusieurs fichiers
3. Chaque fichier devient une note distincte dans solyto

## Calendrier

### Depuis CalDAV

Importez des calendriers depuis un serveur CalDAV externe (Nextcloud, iCloud, etc.).

1. Allez dans **Calendrier → Import**
2. Saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe
3. Sélectionnez les calendriers à importer
4. Les événements sont récupérés et enregistrés avec une progression en temps réel

## Contacts

### Depuis CardDAV

Importez des contacts depuis un serveur CardDAV externe.

1. Allez dans **Contacts → Import**
2. Saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe
3. Sélectionnez les carnets d'adresses à importer
4. Les contacts sont récupérés et enregistrés avec une progression en temps réel

## Confidentialité

Toutes les requêtes d'import vont directement du backend de solyto vers le service externe. Vos données ne sont jamais envoyées à un tiers pendant le processus d'import.
