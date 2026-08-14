---
title: Bibliothèque de liens
description: Un gestionnaire de favoris avec catégories et intégration au bot Telegram.
---

La Bibliothèque de liens est un gestionnaire de favoris personnel intégré à solyto. Enregistrez des URL avec titres, couvertures, étiquettes et catégories — puis organisez-les en catégories personnalisées. Accédez à vos favoris depuis n'importe où, et enregistrez-en de nouveaux via le bot Telegram ou l'Ajout rapide.

## Ajouter des liens

Il existe trois façons d'ajouter des liens :

- **Saisie manuelle** — cliquez sur le bouton + et remplissez l'URL et les détails
- **Bot Telegram** — envoyez une URL à [@SolytoBot](https://t.me/SolytoBot) et elle est automatiquement enregistrée dans votre bibliothèque
- **Ajout rapide** — les URL collées dans l'Ajout rapide sont détectées automatiquement comme des liens et enregistrées directement

Consultez [Intégration Telegram](/integrations/telegram/) pour les instructions de configuration du bot.

## Champs d'une entrée

Chaque entrée de lien comprend :

| Champ | Description |
|-------|-------------|
| **title** | Titre ou description de la page |
| **URL** | L'URL complète |
| **cover** | Une image de couverture/aperçu |
| **category** | Catégorie assignée |
| **is_favorite** | Marquer comme favori |
| **tags** | Étiquettes colorées pour le filtrage |

## Catégories de liens

Organisez vos liens en catégories personnalisées avec des couleurs. La barre latérale affiche Tous, Favoris, chaque catégorie (avec leur nombre d'éléments), et Sans catégorie. **Glissez-déposez** un lien sur une catégorie pour le déplacer.

Les catégories sont distinctes des étiquettes. Utilisez les catégories pour un regroupement large (travail, référence, divertissement) et les étiquettes pour un filtrage plus fin.

## Liens récents

Vos liens ajoutés le plus récemment alimentent le widget « Liens récents » du [tableau de bord](/dashboard/overview/).

## Favoris

Marquez des liens comme favoris à l'aide du drapeau étoile. Filtrez votre bibliothèque pour n'afficher que les favoris, ce qui facilite la recherche rapide de vos favoris les plus utilisés.

## Vues et filtres

Parcourez vos liens en vues **Liste** ou **Cartes**. Recherchez par titre ou URL, et filtrez par catégorie ou favoris.

## Exportation

Exportez toute votre bibliothèque de liens au format `.html` selon le format Netscape Bookmark, que tous les principaux navigateurs peuvent importer. Consultez [Exportation des données](/integrations/exporting/).
