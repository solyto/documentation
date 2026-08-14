---
title: Présentation des bibliothèques
description: La collection de bibliothèques personnelles de solyto pour la musique, les livres, les films, les jeux, les recettes, les citations, les liens et les plantes.
---

Les bibliothèques sont une fonctionnalité distinctive propre à solyto — des outils de suivi de collections personnelles pour tout ce que vous possédez, lisez, regardez, jouez, cuisinez et collectionnez. Chaque bibliothèque est conçue spécifiquement pour son type de contenu, mais elles partagent toutes une interface cohérente afin que vous vous y retrouviez toujours facilement.

## Bibliothèques disponibles

solyto comprend huit bibliothèques :

| Bibliothèque | Ce que vous suivez |
|---------|---------------|
| [Bibliothèque de musique](/features/libraries/music/) | Albums et artistes — vinyles, CD, numérique |
| [Bibliothèque de livres](/features/libraries/books/) | Livres avec progression de lecture et suivi des séries |
| [Bibliothèque de films](/features/libraries/movies/) | Films et séries avec import IMDb |
| [Bibliothèque de jeux](/features/libraries/games/) | Jeux vidéo et jeux de société |
| [Bibliothèque de recettes](/features/libraries/recipes/) | Recettes avec ingrédients et types de repas |
| [Bibliothèque de citations](/features/libraries/quotes/) | Citations de livres, personnes, films et plus |
| [Bibliothèque de liens](/features/libraries/links/) | Favoris et URL enregistrées |
| [Bibliothèque de plantes](/features/libraries/plants/) | Plantes d'intérieur et de jardin |

## Fonctionnalités communes

Chaque bibliothèque partage les mêmes capacités de base (lorsqu'elles ont du sens pour ce type de contenu) :

### Recherche et filtres

- **Recherche** — recherchez dans les champs clés de la bibliothèque (par ex. titre et artiste pour la musique, titre et ingrédients pour les recettes). Appuyez sur **Ctrl+F** pour placer le curseur dans la barre de recherche.
- **Filtres** — filtrez par **genre**, **note**, **liste de souhaits**, et par des filtres spécifiques à la bibliothèque, avec un bouton pour tout effacer.

### Genres

Chaque bibliothèque dispose de son propre système de genres. Vous pouvez personnaliser les genres — les ajouter, les renommer et les supprimer — pour qu'ils correspondent à votre façon de penser votre collection. Assignez un ou plusieurs genres à n'importe quelle entrée.

### Notes et liste de souhaits

- **Notes** — notez n'importe quelle entrée sur une échelle de 1 à 5
- **Liste de souhaits** — marquez les entrées que vous souhaitez, et filtrez pour les retrouver

### Vues

La plupart des bibliothèques proposent un sélecteur de vue : **Liste** et **Cartes**. Les bibliothèques **Musique** et **Livres** ajoutent deux vues 3D :

- **Étagère** — une bibliothèque en bois avec les couvertures exposées
- **Tranche** — les couvertures disposées comme des tranches de livres/disques, avec une rotation 3D au survol ; la largeur de la tranche de livre dépend du nombre de pages

### Liens externes

Lorsqu'une entrée provient d'un service externe, un raccourci « Rechercher sur / Voir sur » renvoie vers ce fournisseur.

### Images de couverture

Chaque bibliothèque prend en charge les images de couverture — pochettes d'album, couvertures de livre, affiches de film, photos de plantes, etc. Téléversez les vôtres ou laissez solyto les récupérer automatiquement depuis le service d'import.

### Étiquettes

Ajoutez des étiquettes colorées à n'importe quelle entrée. Les étiquettes sont partagées entre les fonctionnalités, donc une étiquette créée dans une bibliothèque fonctionne de la même façon partout ailleurs.

### Export au format CSV

Téléchargez vos données à tout moment sous forme de fichier `.csv`. Vos données restent les vôtres. Consultez [Exportation des données](/integrations/exporting/).

## Recommandations IA

Les bibliothèques **Musique** et **Livres** proposent des recommandations basées sur une API compatible OpenAI. Lorsque vous en demandez une, choisissez parmi :

- **Un favori** — quelque chose de similaire à ce que vous aimez déjà
- **Quelque chose que je n'ai jamais vu**
- **Quelque chose au hasard**
- **Quelque chose de nouveau**

solyto choisit ensuite une entrée dans votre bibliothèque (pour « nouveau », il récupère une nouveauté via Deezer/Hardcover). Utilisez « Réessayer » pour relancer le tirage. Les recommandations ne sont générées qu'à la demande — rien ne se passe tant que vous ne cliquez pas sur le bouton. Consultez [Bibliothèque de musique](/features/libraries/music/) et [Bibliothèque de livres](/features/libraries/books/) pour plus de détails.

## Notifications de sortie

solyto peut vous notifier lorsque des artistes ou auteurs de votre bibliothèque publient quelque chose de nouveau. Les notifications de sortie sont disponibles pour :

- **Musique** — nouveaux albums et singles de vos artistes
- **Livres** — nouveaux livres de vos auteurs
- **Films** — nouvelles sorties correspondant à votre bibliothèque

Les notifications sont configurables par canal (Telegram, e-mail, push). Consultez [Notifications](/customization/notifications/) pour la configuration.

## Import depuis des services externes

Vous pouvez rechercher en ligne et importer depuis des services externes comme Deezer, Discogs, Goodreads, Hardcover, IMDb, TMDB, Steam, BoardGameGeek et Chefkoch. Les imports ne se produisent que lorsque vous les déclenchez explicitement — solyto ne récupère jamais de données auprès de services tiers en arrière-plan. Consultez [Importation des données](/integrations/importing/) pour plus de détails.
