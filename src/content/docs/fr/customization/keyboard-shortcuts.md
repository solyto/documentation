---
title: Raccourcis clavier
description: Naviguez et agissez plus vite grâce aux raccourcis clavier.
---

solyto dispose d'un système de raccourcis clavier (KeyManager) pour les actions courantes de l'application. Les raccourcis sont gérés globalement, et la plupart fonctionnent aussi avec une touche d'aide comme `Ctrl` pour des actions spécifiques.

## Raccourcis globaux

| Raccourci | Action |
|----------|--------|
| `Enter` | Confirmer / créer / ajout rapide (hors champ de saisie) |
| `Escape` | Annuler / fermer la boîte de dialogue actuelle |
| `Ctrl+S` | Enregistrer la note en cours |
| `Ctrl+F` | Donner le focus à la barre de recherche (bibliothèques, contacts) |

## Fonctionnement des raccourcis

- Les raccourcis sont enregistrés globalement et s'exécutent selon des priorités, de sorte que l'action la plus spécifique l'emporte lorsque plusieurs gestionnaires réagissent à la même touche
- `Enter` et `Escape` sont les deux touches les plus utilisées — dans les fenêtres modales (« Appuyez sur Entrée pour confirmer, Échap pour annuler »), la création rapide de tâches, les commentaires des demandes de développement, les champs de patrimoine, et bien d'autres
- Les touches d'aide (`Ctrl`, `Shift`, `Alt`) peuvent être combinées avec des touches de caractères pour des actions comme enregistrer (`Ctrl+S`) et rechercher (`Ctrl+F`)
- Les raccourcis ne se déclenchent pas pendant que vous saisissez du texte dans un champ de saisie, une zone de texte ou une liste déroulante

## Remarques

- Les raccourcis fonctionnent dans les navigateurs de bureau
- La touche `F1` et les touches de caractères `e`, `f`, `s`, `n` font partie de l'ensemble de touches pris en charge par le KeyManager ; les associations sont enregistrées par écran selon les besoins
