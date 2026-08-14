---
title: Suivi du temps
description: Suivez le temps passé sur vos projets avec un minuteur Pomodoro intégré.
---

Le Suivi du temps vous permet d'enregistrer le temps passé sur des projets et des catégories. Il inclut un minuteur Pomodoro intégré pour les sessions de travail concentré, un chronomètre démarrer/arrêter pour le suivi en temps réel, et des statistiques montrant comment vous répartissez votre temps entre projets et périodes.

## Projets

Les projets sont l'unité d'organisation principale du suivi du temps :

- **Créer** un projet avec un titre et une description
- **Modifier** les détails du projet à tout moment
- **Supprimer** les projets dont vous n'avez plus besoin
- **Assigner à des catégories** — regroupez les projets par client, type, ou tout autre contexte

Chaque projet rassemble toutes ses entrées de temps au même endroit, vous donnant un total cumulé d'heures enregistrées. La vue de détail du projet affiche toutes les entrées triées par date, avec le temps total en haut.

## Catégories

Assignez chaque projet à une catégorie pour le regroupement. Par exemple :

- **Travail client** — projets facturables
- **Personnel** — projets annexes et apprentissage
- **Open source** — contributions communautaires

Les catégories vous permettent de consulter des statistiques agrégées entre projets liés, utile pour comprendre comment vous répartissez votre temps.

## Entrées de temps

Enregistrez le temps de deux façons. Chaque entrée de temps comprend une description, une heure de début/fin (ou une durée), et une assignation à un projet.

### Saisie manuelle

Créez une entrée de temps en remplissant :

- **Description** — sur quoi vous avez travaillé
- **Heure de début** et **Heure de fin** — ou saisissez directement la durée
- **Projet** — à quel projet ce temps appartient

La saisie manuelle est utile pour enregistrer du temps après coup — par exemple, pour compléter le travail de la veille ou ajouter du temps que vous avez oublié de suivre.

Vous pouvez aussi modifier ou supprimer des entrées existantes pour corriger des erreurs.

### Chronomètre démarrer/arrêter

Utilisez le chronomètre intégré pour suivre le temps en temps réel :

1. Démarrez un chronomètre sur un projet (avec éventuellement une description) — un affichage HH:MM:SS du temps écoulé apparaît en direct
2. Arrêtez le chronomètre lorsque vous avez terminé — la durée est enregistrée comme une entrée

Le chronomètre en cours est conservé, il survit donc à la navigation — démarrez un chronomètre depuis le tableau de bord et arrêtez-le plus tard depuis n'importe où dans l'application.

## Minuteur Pomodoro

Le minuteur Pomodoro est intégré au suivi du temps de solyto :

- **Sessions de concentration de 25 minutes** — travaillez sans interruption
- **Pauses courtes de 5 minutes** — reposez-vous entre les sessions
- **Longue pause de 15 minutes** — après chaque cycle de 4 sessions
- **Points de cycle** — indiquent votre position dans le cycle actuel de 4 sessions
- **Bip** — un signal sonore à la fin de chaque phase

Vous pouvez démarrer, mettre en pause, reprendre, passer et réinitialiser le Pomodoro depuis le widget du tableau de bord.

## Statistiques

Consultez votre temps enregistré sous plusieurs angles :

- **Période** — choisissez des dates De/À
- **Filtrer par catégorie** — agréger les projets d'une catégorie
- **Temps total** — la somme sur votre sélection
- **Anneau par projet** — comment le temps se répartit entre les projets
- **Diagramme en barres par catégorie** — répartition du temps par catégorie

Utilisez les statistiques pour comprendre où passe votre temps et ajuster vos habitudes.

## Widget du tableau de bord

Le widget Suivi du temps du [tableau de bord](/dashboard/overview/) affiche :

- Votre temps total pour la semaine en cours
- Une répartition par projet avec des barres colorées
- Le minuteur Pomodoro, lorsqu'il est actif

Cela vous donne une visibilité sur votre session en cours sans quitter votre travail.

## Routes

| Route | Description |
|-------|-------------|
| `/time-tracking` | Aperçu de tous les projets et entrées récentes |
| `/time-tracking/[id]` | Détail du projet avec entrées et statistiques |

## Exportation

Les données de suivi du temps s'exportent au format `.csv` dans un format de feuille de temps standard, compatible avec les tableurs et les logiciels de facturation. L'export inclut toutes les entrées de temps avec les colonnes projet, description, heure de début, heure de fin et durée.

Consultez [Exportation des données](/integrations/exporting/).
