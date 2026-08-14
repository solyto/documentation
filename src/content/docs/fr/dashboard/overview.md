---
title: Dashboard
description: Votre aperçu quotidien — météo, calendrier, inspiration et vue d'ensemble de tout ce qui compte.
---

Le tableau de bord est la page d'accueil de solyto, accessible à la racine `/`. Il rassemble les données de toutes vos fonctionnalités dans une vue unique à trois colonnes, pour que vous puissiez voir en un coup d'œil à quoi ressemble votre journée.

## Disposition

Le tableau de bord est organisé en trois colonnes. Sur mobile, les colonnes s'empilent verticalement dans le même ordre.

### Votre journée (colonne de gauche)

Tout ce que vous devez savoir sur aujourd'hui :

- **Météo** — Conditions actuelles et prévisions du jour via l'API Open-Meteo. Cliquez sur le nom de la ville pour rechercher un nouvel emplacement (avec un bouton bascule °C/°F). L'unité de température est mémorisée dans vos paramètres.
- **Événements du jour** — Événements de calendrier du jour, tirés de tous vos calendriers actifs. Touchez un événement pour accéder à la vue [Calendrier](/features/calendar/).
- **Événements à venir** — Les prochains événements après aujourd'hui, pour anticiper.
- **Tâches à échéance** — Tâches dont l'échéance est aujourd'hui ou dépassée, avec un point de priorité coloré. Marquez-les comme terminées directement depuis le tableau de bord (une petite pluie de confettis célèbre votre réussite).
- **Tâches prioritaires** — Les 5 tâches les plus pertinentes, classées selon un score intelligent qui tient compte de la priorité, de l'effort estimé, du retard et de l'ancienneté. Cela permet de mettre en avant les tâches les plus importantes du moment.

Si rien n'est prévu, la colonne affiche un message convivial « Rien de prévu aujourd'hui ».

### Inspiration (colonne centrale)

Du contenu frais pour bien commencer la journée :

- **Nouvelles sorties musicales** — Jusqu'à 5 nouveaux albums des artistes de votre [bibliothèque Musique](/features/libraries/music/).
- **Nouvelles sorties de livres** — Jusqu'à 5 nouveaux livres des auteurs de votre [bibliothèque Livres](/features/libraries/books/).
- **Nouvelles sorties à l'écran** — Jusqu'à 5 nouveaux films ou séries à découvrir.
- **Notes récentes** — Jusqu'à 5 notes récemment créées ou modifiées. Accès rapide à vos [Notes](/features/notes/).
- **Derniers liens** — Les liens les plus récemment enregistrés depuis votre [bibliothèque de liens](/features/libraries/links/).
- **Citation du jour** — Une citation aléatoire tirée de votre [bibliothèque de citations](/features/libraries/quotes/), renouvelée une fois par jour.

### Aperçu rapide (colonne de droite)

Widgets de statut en un coup d'œil :

- **Check-In** — Une vue rapide de vos scores de [Check-in](/features/check-in/) quotidien : la valeur moyenne par indicateur noté (barres colorées) ainsi que votre score total global. Accédez-y directement pour saisir ou modifier l'entrée du jour.
- **Suivi du temps** — Vos totaux de [suivi du temps](/features/time-tracking/) pour la semaine en cours, avec une répartition par projet. Affiche également tout minuteur actif.
- **Raccourcis** — Liens d'accès rapide définis par l'utilisateur, avec favicons, affichés sous forme de liste avec des actions au survol. Gérez-les avec le bouton crayon.

## Intégration (onboarding)

Lors de votre première visite sur solyto (lorsque l'indicateur `first_visit` est vrai), une fenêtre modale d'intégration en quatre étapes vous guide dans la configuration :

1. **Bienvenue** — Une introduction à solyto et à ce qu'il peut vous apporter.
2. **Localisation** — Choisissez votre langue, le format de date et le format d'heure.
3. **Fonctionnalités** — Activez ou désactivez les fonctionnalités qui apparaissent dans la navigation. Vous pouvez choisir parmi 11 fonctionnalités : calendrier, tâches, notes, bibliothèques, contacts, check-in, finances, presse-papiers, demandes de développement, flux et suivi du temps.
4. **Prêt** — Un écran de fin confirmant votre configuration.

### Visite guidée de bienvenue

Une fois la fenêtre modale d'intégration terminée, une visite guidée de bienvenue démarre automatiquement. Elle vous fait parcourir pas à pas chaque page de fonctionnalité activée, afin que vous sachiez où tout se trouve.

Vous pouvez relancer la visite à tout moment depuis **Paramètres → Application → « Faire la visite »**.

## Personnaliser le tableau de bord

Vous contrôlez ce qui apparaît sur le tableau de bord via **Paramètres → Fonctionnalités**. Désactiver une fonctionnalité la masque à la fois dans les widgets du tableau de bord et dans la barre de navigation latérale. Par exemple, si vous désactivez Finances, tous les widgets liés aux finances disparaissent du tableau de bord.

La personnalisation au niveau des widgets (réorganiser, masquer des widgets individuels) n'est pas encore disponible.

## Comportement sur mobile

Sur les écrans plus petits, les trois colonnes s'empilent en un seul défilement vertical. L'ordre est conservé : Votre journée d'abord, puis Inspiration, puis Aperçu rapide. Tous les widgets restent fonctionnels — vous pouvez terminer des tâches, démarrer des minuteurs et ajouter des entrées de check-in exactement comme sur ordinateur.

## Ajout rapide

Le tableau de bord comprend un bouton d'action flottant (FAB) pour l'[Ajout rapide](/dashboard/quick-add/) — un outil de détection intelligente du contenu qui vous permet de coller une URL ou un texte pour que solyto le classe automatiquement en entrée de bibliothèque, tâche ou note. Consultez la page [Ajout rapide](/dashboard/quick-add/) pour tous les détails.
