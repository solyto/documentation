---
title: Notes
description: Un carnet de notes en texte enrichi avec dossiers, étiquettes et prise en charge du markdown.
---

Les Notes (aussi appelées Notebook) forment un outil de prise de notes complet intégré à solyto. Il utilise un éditeur de texte enrichi basé sur TipTap (ProseMirror), prend en charge une organisation hiérarchique en dossiers, les étiquettes, la réorganisation par glisser-déposer, l'intégration d'images et les menus contextuels au clic droit — le tout stocké de manière privée dans votre compte.

## Éditeur

Les Notes utilisent [TipTap](https://tiptap.dev/), un éditeur de texte enrichi basé sur ProseMirror. Il prend en charge à la fois l'édition WYSIWYG et des raccourcis de style markdown — tapez `#` pour un titre, `-` pour une liste à puces, ou ``` pour un bloc de code. Enregistrez avec le bouton **Enregistrer** ou **Ctrl+S** (`Cmd+S` sur Mac) ; un indicateur « Enregistré · heure » confirme votre dernière sauvegarde.

### Mise en forme prise en charge

| Mise en forme | Comment l'utiliser |
|-----------|------------|
| Titres | H1 à H3 |
| Gras | Texte en gras |
| Italique | Texte en italique |
| Barré | Texte barré |
| Code | `Code` en ligne |
| Listes à puces | Listes non ordonnées |
| Listes numérotées | Listes ordonnées |
| Tableaux | Insérer un tableau 3×3 avec colonnes redimensionnables et opérations sur les lignes/colonnes via un menu contextuel |
| Images | Téléverser depuis le disque, coller une URL, ou coller depuis le presse-papiers |
| Liens | Créer un hyperlien sur n'importe quel texte (le texte sélectionné est prérempli) |
| Blocs de code | Blocs de code délimités |
| Citations | Texte en citation |
| Séparateurs horizontaux | Séparateurs de section |

### Images

Les images peuvent être ajoutées aux notes de trois façons :

1. **Téléversement** — sélectionnez un fichier sur votre appareil
2. **URL** — collez une URL d'image
3. **Presse-papiers** — collez une image copiée directement dans l'éditeur

Les images téléversées sont stockées dans votre compte solyto et intégrées directement dans la note.

## Catégories hiérarchiques

Organisez vos notes en une arborescence de dossiers et sous-dossiers :

- **Catégories parentes et enfants** — créez une arborescence de dossiers aussi profonde que nécessaire
- **Arborescence de catégories repliable** — repliez et dépliez les branches ; l'état est conservé entre les sessions, votre mise en page est donc toujours mémorisée
- **Glisser-déposer** — faites glisser une note vers une autre catégorie pour la réorganiser instantanément
- **Réorganiser les catégories** — modifiez l'ordre des catégories dans l'arborescence

L'arborescence des catégories apparaît dans la barre latérale, offrant une navigation rapide dans toutes vos notes. Vous pouvez aussi créer de nouveaux sous-dossiers directement depuis l'arborescence.

Les catégories prennent en charge l'imbrication — créez des dossiers de premier niveau comme « Travail » avec des sous-dossiers comme « Projets », « Réunions » et « Notes » en dessous.

## Favoris

Marquez n'importe quelle note comme **favori** pour l'épingler et y accéder rapidement. Les favoris apparaissent en haut de la liste des notes quelle que soit leur catégorie, afin que vos notes les plus importantes soient toujours à portée d'un clic.

Activez ou désactivez le statut de favori depuis l'en-tête de la note (étoile) ou le menu contextuel au clic droit. Vous pouvez filtrer la liste des notes pour n'afficher que les favoris.

## Aperçu

L'aperçu des Notes affiche trois sections : **Favoris**, **Nouvelles notes** et **Dernières mises à jour** — un moyen rapide de revenir à ce qui est récent ou important.

## Étiquettes

Ajoutez une ou plusieurs étiquettes à n'importe quelle note. Les étiquettes sont partagées entre les fonctionnalités de solyto, vous pouvez donc utiliser les mêmes étiquettes pour les notes, les tâches et les entrées de bibliothèque. Chaque étiquette a une couleur pour une identification visuelle.

Les étiquettes offrent un moyen transversal de retrouver des notes liées — par exemple, étiquetez toutes les notes liées à un projet avec « travail », quel que soit le dossier dans lequel elles se trouvent.

## Import

Importez des notes depuis des fichiers Markdown (`.md`) ou ZIP. solyto lit le contenu du fichier et crée des notes dans la catégorie de votre choix, avec une barre de progression pendant le téléversement. C'est utile pour migrer des notes depuis d'autres applications (comme Obsidian ou Notion).

Pour importer, rendez-vous sur la page **Import** dédiée et sélectionnez un ou plusieurs fichiers sur votre appareil.

## Exportation

Les notes s'exportent sous forme d'archive ZIP de fichiers `.md` (Markdown) — un fichier par note. Ce format est compatible avec Obsidian, Notion et tout éditeur markdown. Les noms de fichiers dérivent du titre de la note.

Consultez [Exportation des données](/integrations/exporting/) pour plus de détails sur la façon d'exporter et les formats disponibles.

## Menus contextuels

Faites un clic droit sur n'importe quelle note ou catégorie pour accéder à des menus contextuels avec des actions rapides :

- **Notes** — créer, renommer, supprimer, déplacer vers une autre catégorie, ajouter/retirer des étiquettes, activer/désactiver le favori
- **Catégories** — créer une nouvelle sous-catégorie, renommer, supprimer, replier/déplier

Les menus contextuels offrent un moyen rapide de gérer vos notes sans passer par les boutons de la barre d'outils.
