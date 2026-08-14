---
title: Bibliothèque de livres
description: Suivez vos lectures avec Hardcover, l'import Goodreads, la progression de lecture et le suivi des séries.
---

La Bibliothèque de livres est votre journal de lecture personnel — suivez les livres que vous avez lus, que vous êtes en train de lire, ou que vous voulez lire. Gardez la progression de lecture, les prêts et les séries au même endroit.

## Ajouter des livres

Ajoutez des livres à votre bibliothèque de deux façons :

- **Saisie manuelle** — remplissez les détails vous-même
- **Import** — importez une collection existante depuis Hardcover ou Goodreads

### Import depuis Hardcover

Connectez-vous à Hardcover via l'API pour importer votre historique de lecture, vos étagères et vos données de livres. L'import Hardcover repose sur l'API et récupère automatiquement des métadonnées détaillées.

### Import depuis Goodreads

Téléversez votre fichier d'export CSV Goodreads pour importer vos étagères et votre historique de lecture. Exportez d'abord vos données depuis Goodreads, puis téléversez le fichier dans solyto.

Consultez [Importation des données](/integrations/importing/) pour des instructions détaillées.

## Champs d'une entrée

Chaque entrée de livre comprend :

| Champ | Description |
|-------|-------------|
| **title** | Titre du livre |
| **author** | Nom de l'auteur |
| **series** | Nom de la série (si le livre en fait partie) |
| **volume** | Numéro de tome au sein de la série |
| **rating** | 1 à 5 étoiles |
| **publication_year** | Année de publication du livre |
| **pages** | Nombre total de pages |
| **current_page** | Page où vous en êtes (progression de lecture) |
| **lent_to** | À qui vous avez prêté le livre |
| **is_where** | Emplacement physique du livre |
| **cover** | Couverture du livre |
| **link** | URL (Hardcover, Goodreads, page boutique) |
| **wishlist** | Marquer comme souhaité mais pas encore possédé |
| **summary** | Brève description ou résumé |
| **started_at** | Date à laquelle vous avez commencé la lecture |
| **finished_at** | Date à laquelle vous avez terminé la lecture |
| **tags** | Étiquettes colorées pour le filtrage |
| **genres** | Un ou plusieurs genres littéraires |

## Progression de lecture

Suivez où vous en êtes dans un livre. Renseignez **current_page** par rapport au total **pages** pour voir votre avancement. solyto affiche votre progression sous forme de pourcentage, ce qui facilite la reprise là où vous vous étiez arrêté.

La progression est visible dans la liste des livres et sur la page de détail de chaque livre.

## Séries et tomes

Les livres faisant partie d'une série peuvent être regroupés. Renseignez le nom de **series** et le numéro de **volume** sur chaque entrée pour organiser vos séries. Parcourez par série pour voir tous les tomes dans l'ordre.

## Prêts

Suivez qui a vos livres. Utilisez **lent_to** pour enregistrer la personne à qui vous avez prêté un livre, et **is_where** pour noter où se trouve physiquement le livre — chez un ami, au bureau, ou de retour sur votre étagère.

C'est particulièrement utile si vous prêtez souvent des livres et voulez vous souvenir qui a quoi. Un filtre dédié **Prêtés** n'affiche que les livres que vous avez prêtés.

## Recommandations IA

Obtenez des recommandations de livres basées sur votre bibliothèque. Choisissez **Un favori**, **Quelque chose que je n'ai jamais vu**, **Quelque chose au hasard**, ou **Quelque chose de nouveau** — solyto choisit un livre correspondant dans votre collection (ou récupère une nouveauté via Hardcover pour « nouveau »). Utilisez « Réessayer » pour relancer le tirage.

Les recommandations ne sont générées qu'à la demande — rien ne se passe tant que vous ne cliquez pas sur le bouton.

## Notifications de sortie

solyto vérifie sur Hardcover les nouveaux livres de vos auteurs favoris et peut vous notifier lors de leur publication. Les notifications sont configurables par canal — Telegram, e-mail ou push. Consultez [Notifications](/customization/notifications/) pour la configuration.

## Vues

Parcourez votre collection de livres en vues **Liste**, **Cartes**, **Étagère** ou **Tranche** — la vue étagère affiche une bibliothèque en bois et la vue tranche fait pivoter en 3D les tranches des livres (la largeur de la tranche dépend du nombre de pages). Recherchez par titre ou auteur (appuyez sur **Ctrl+F**), et filtrez par genre, note, liste de souhaits ou prêts en cours.

## Genres littéraires

La bibliothèque de livres dispose de son propre système de genres. Ajoutez des genres correspondant à vos lectures — fiction littéraire, science-fiction, biographie, développement personnel, ou tout autre. Assignez plusieurs genres à un même livre.

Gérez les genres depuis les paramètres de la bibliothèque. Vous pouvez ajouter, renommer et supprimer des genres à tout moment.

## Exportation

Exportez toute votre bibliothèque de livres au format `.csv`. Le fichier inclut tous les champs — titre, auteur, série, note, genres et dates de lecture. Consultez [Exportation des données](/integrations/exporting/).
