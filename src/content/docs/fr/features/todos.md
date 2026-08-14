---
title: Tâches
description: Gestion des tâches avec espaces de travail, étiquettes, notation intelligente et vues multiples.
---

Les Tâches forment un gestionnaire de tâches complet intégré à solyto. Il prend en charge les espaces de travail, les catégories, les étiquettes, un système de notation intelligente, et plusieurs vues — afin que vous puissiez organiser vos tâches comme cela vous convient. Une syntaxe de création sur une seule ligne vous permet d'ajouter des tâches sans ouvrir de formulaire.

## Créer des tâches

### Formulaire standard

Cliquez sur le bouton **+** pour ouvrir le formulaire de tâche. Remplissez les champs dont vous avez besoin — seul le titre est obligatoire :

- **Titre** — le nom de la tâche
- **Description** — détails ou contexte facultatifs
- **Lien** — associer une URL en rapport avec la tâche
- **Priorité** — faible, moyenne ou élevée
- **Statut** — backlog, à faire, en cours, en attente, presque terminé
- **Effort** — faible, moyen ou élevé
- **Progression** — un curseur de 0 à 100
- **Date d'échéance** — quand la tâche doit être terminée
- **Catégorie** — assigner à une catégorie
- **Étiquettes** — une ou plusieurs étiquettes colorées

### Création en une ligne

Saisissez directement dans le champ de saisie une syntaxe de commande courte :

```
Buy groceries #shopping /errands due:tomorrow repeat:weekly link:https://shop.example.com
```

| Syntaxe | Signification |
|--------|-------------|
| `#étiquette` | Assigne une étiquette (créée automatiquement si elle n'existe pas encore) |
| `/catégorie` | Assigne une catégorie (créée automatiquement si elle n'existe pas encore) |
| `due:tomorrow` | Date d'échéance — accepte aussi `today`, ou une date complète (`2026-06-01`, `01.06.2026`) |
| `repeat:daily` / `repeat:weekly` / `repeat:monthly` / `repeat:yearly` | Répéter selon un calendrier — nécessite une date d'échéance |
| `link:https://...` | Associer une URL à la tâche |

Le champ de saisie propose des suggestions d'autocomplétion pour les étiquettes (`#`), les catégories (`/`), les dates d'échéance (`due:`), et la récurrence (`repeat:`). Si vous utilisez `repeat:` sans `due:`, solyto vous avertit que la récurrence nécessite une date d'échéance.

### Ajout rapide

Le bouton flottant Ajout rapide (en bas à droite) vous permet de créer une tâche depuis n'importe où dans l'application. Consultez [Ajout rapide](/dashboard/quick-add/) pour plus de détails.

## Propriétés d'une tâche

Chaque tâche possède les propriétés suivantes :

| Propriété | Valeurs | Description |
|----------|--------|-------------|
| Titre | Texte libre | Le nom de la tâche (obligatoire) |
| Description | Texte libre | Détails facultatifs |
| Lien | URL | Associer un lien en rapport |
| Priorité | Faible, Moyenne, Élevée | Le degré d'urgence de la tâche |
| Statut | Backlog, À faire, En cours, En attente, Presque terminé | Où en est la tâche dans votre flux de travail |
| Effort | Faible, Moyen, Élevé | La charge de travail que représente la tâche |
| Progression | 0–100 | Pourcentage d'avancement |
| Date d'échéance | Date | Date d'achèvement cible |
| Catégorie | Catégorie assignée | Regroupe les tâches ensemble |
| Étiquettes | Une ou plusieurs étiquettes | Libellés colorés pour le filtrage |

## Tâches récurrentes

Les tâches peuvent se répéter selon un calendrier. Lorsque vous terminez une tâche récurrente, l'occurrence suivante est créée automatiquement.

| Paramètre | Options |
|---------|---------|
| Fréquence | Quotidienne, Hebdomadaire, Mensuelle, Annuelle |
| Intervalle | Tous les N jours/semaines/mois/années |
| Date de fin | Date facultative pour arrêter la récurrence |

Par exemple, vous pouvez configurer une tâche pour qu'elle se répète toutes les 2 semaines le lundi, en se terminant le 31 décembre.

## Sous-tâches

N'importe quelle tâche peut avoir des sous-tâches :

- **Ajouter** des sous-tâches pour décomposer une tâche en étapes plus petites
- **Terminer** des sous-tâches individuellement — elles n'affectent pas le statut de la tâche parente
- **Supprimer** les sous-tâches dont vous n'avez plus besoin

Les sous-tâches s'affichent directement sous la tâche parente.

## Espaces de travail

Les espaces de travail vous permettent de regrouper des catégories ensemble. C'est utile pour séparer différents domaines de votre vie — par exemple, un espace de travail « Travail » et un espace de travail « Personnel ».

### Fonctionnalités des espaces de travail

- **Regrouper des catégories** — associer des catégories à un espace de travail
- **Définir un espace de travail par défaut** — les nouvelles tâches utilisent par défaut les catégories de cet espace de travail
- **Associer/dissocier des catégories** — déplacer des catégories entre espaces de travail à tout moment

### Masquer

Chaque espace de travail dispose d'un bouton **Masquer**. Lorsqu'il est activé, les tâches assignées aux catégories de cet espace de travail sont masquées de la vue principale des Tâches. Cela vous permet de vous concentrer sur un espace de travail à la fois sans supprimer ni archiver les tâches des autres domaines. Votre préférence de masquage est mémorisée sur l'appareil.

## Tâches générées automatiquement

solyto peut créer des tâches automatiquement (par exemple via des calendriers récurrents ou d'autres fonctionnalités). Les tâches générées automatiquement restent discrètes : elles n'apparaissent dans la vue principale que si leur échéance tombe dans les 3 prochains jours.

## Catégories

Les catégories organisent les tâches en groupes. Assignez une catégorie lors de la création ou de la modification d'une tâche. Les catégories peuvent être assignées à des espaces de travail pour une organisation supplémentaire.

## Étiquettes

Les étiquettes forment un système global partagé entre les tâches et les bibliothèques. Chaque étiquette a une couleur, ce qui facilite le repérage des éléments liés d'un coup d'œil. Ajoutez des étiquettes à n'importe quelle tâche pour une organisation flexible et transversale.

## Vues

solyto propose quatre vues pour vos tâches :

| Vue | Description |
|------|-------------|
| **Liste** | Liste plate par défaut, triable selon n'importe quelle colonne |
| **Kanban** | Colonnes basées sur le statut — faites glisser les tâches entre les colonnes pour mettre à jour leur statut |
| **Aperçu** | Résumé compact affichant les champs clés en un coup d'œil |
| **Carte** | Cartes détaillées avec toutes les propriétés visibles |

Basculez entre les vues à l'aide du sélecteur de vue en haut de la page Tâches.

## Score intelligent

Chaque tâche reçoit automatiquement un **Score intelligent** qui reflète sa pertinence ou son urgence. Vous pouvez trier votre liste de tâches par Score intelligent pour voir ce qui nécessite votre attention en priorité.

Le score est calculé à partir de :

| Facteur | Points |
|--------|--------|
| Base de priorité | Élevée +100, Moyenne +50, Faible +0 |
| Bonus d'effort | Faible +50, Moyen +25, Élevé +0 |
| En retard | +100 |
| Échéance aujourd'hui | +50 |
| Échéance demain | +25 |
| Plus ancienne que 30 jours | +50 |

Le total est normalisé en un score de pertinence de 0 à 1. Les scores les plus élevés apparaissent en premier lors du tri par Score intelligent, de sorte que les tâches prioritaires en retard remontent en tête de liste.

## Filtrage

Utilisez les filtres pour affiner votre liste de tâches :

- **Statut** — afficher uniquement le backlog, à faire, en cours, etc.
- **Priorité** — afficher uniquement les priorités élevée, moyenne ou faible
- **Date d'échéance** — aujourd'hui, demain, cette semaine, en retard
- **Effort** — faible, moyen, élevé
- **Catégorie** — afficher les tâches d'une catégorie spécifique
- **Étiquette** — afficher les tâches avec une étiquette spécifique
- **Espace de travail** — afficher les tâches d'un espace de travail spécifique

Combinez plusieurs filtres pour un contrôle précis de ce que vous voyez.
