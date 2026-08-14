---
title: Ajout rapide
description: Collez une URL ou un texte et laissez solyto déterminer de quoi il s'agit et où le classer.
---

L'Ajout rapide est un outil de détection intelligente du contenu, disponible sur le tableau de bord. Vous collez une URL ou une ligne de texte, et solyto détermine automatiquement le type de contenu et l'enregistre au bon endroit — aucune catégorisation manuelle n'est nécessaire.

## Ouvrir l'Ajout rapide

Il existe deux façons de déclencher l'Ajout rapide :

- **Bouton d'action flottant** — Cliquez sur le FAB en bas à droite du tableau de bord.
- **Touche Entrée** — Appuyez sur `Enter` n'importe où sur le tableau de bord lorsqu'aucun champ de saisie n'a le focus. La boîte de dialogue Ajout rapide s'ouvre immédiatement.

## Fonctionnement de la détection

Lorsque vous soumettez du contenu, solyto l'analyse selon un ensemble de règles et lui attribue un type de contenu avec un score de confiance.

### Les signaux de tâche en premier

Si le contenu contient l'un des mots-clés de tâche `due`, `repeat` ou `link:`, il est détecté comme **Tâche** avec une **confiance de 70 %** — cette vérification a lieu avant la détection d'URL, de sorte qu'une URL contenant `due` est traitée comme une tâche.

### Détection d'URL (confiance de 95 %)

Les URL sont comparées à des domaines connus :

| Modèle d'URL | Détecté comme |
|-------------|------------|
| `deezer.com`, `discogs.com` | Entrée de [bibliothèque Musique](/features/libraries/music/) |
| `hardcover.app`, `goodreads.com` | Entrée de [bibliothèque Livres](/features/libraries/books/) |
| `imdb.com` | Entrée de [bibliothèque Films](/features/libraries/movies/) |
| `store.steampowered.com`, `boardgamegeek.com` | Entrée de [bibliothèque Jeux](/features/libraries/games/) |
| `chefkoch.de` | Entrée de [bibliothèque Recettes](/features/libraries/recipes/) |
| Toute autre URL | Entrée de [bibliothèque de liens](/features/libraries/links/) |

### Détection de texte

Pour du texte brut (ni URL reconnue, ni mot-clé de tâche) :

| Signaux de contenu | Détecté comme | Confiance |
|----------------|-------------|-----------|
| Contient `/` ou `#` | [Tâche](/features/todos/) | 50 % |
| Texte brut sans signal | [Note](/features/notes/) | 50 % |

## Confirmation

Le score de confiance détermine si l'élément est enregistré directement ou nécessite votre confirmation :

- **Confiance ≥ 60 %** — l'élément est validé automatiquement, sans étape supplémentaire.
- **Confiance < 60 %** — solyto vous montre le type détecté et vous demande de confirmer avant l'enregistrement. Vous pouvez l'accepter, ou choisir un type différent parmi la liste complète des destinations.

## Exemples

### Ajouter un album

1. Ouvrez l'Ajout rapide
2. Collez : `https://www.deezer.com/album/123456`
3. solyto détecte **Musique** avec une confiance de 95 % et l'importe dans votre bibliothèque Musique

### Ajouter une tâche

1. Ouvrez l'Ajout rapide
2. Tapez : `Pick up dry cleaning due:tomorrow`
3. solyto détecte **Tâche** avec une confiance de 70 % et crée une tâche à échéance demain

### Ajouter une note

1. Ouvrez l'Ajout rapide
2. Tapez : `Meeting notes: client wants to move deadline to March`
3. solyto détecte **Note** avec une confiance de 50 % — comme ce score est inférieur à 60 %, il vous demande de confirmer avant l'enregistrement

### Ajouter un lien

1. Ouvrez l'Ajout rapide
2. Collez : `https://example.com/some-interesting-article`
3. solyto détecte **Lien** avec une confiance de 95 % et l'enregistre dans votre bibliothèque de liens

## Choisir un type différent

Si le type détecté est incorrect, cliquez sur **« Non, choisir le type »** dans l'écran de confirmation (ou l'option équivalente) pour ouvrir une grille de toutes les destinations prises en charge : musique, livres, films, jeux, liens, recettes, plantes, citations, tâche, note, flux et presse-papiers.

## Intégration avec les fonctionnalités

L'Ajout rapide alimente directement les fonctionnalités que vous avez activées :

- Les **entrées de bibliothèque** apparaissent dans la bibliothèque correspondante et s'affichent dans les widgets de sorties du tableau de bord
- Les **tâches** apparaissent dans la fonctionnalité [Tâches](/features/todos/) et dans les widgets Tâches à échéance / Tâches prioritaires du tableau de bord
- Les **notes** apparaissent dans [Notes](/features/notes/) et dans le widget Notes récentes
- Les **liens** apparaissent dans la [bibliothèque de liens](/features/libraries/links/) et dans le widget Derniers liens

Si une fonctionnalité est désactivée dans **Paramètres → Fonctionnalités**, l'Ajout rapide ne la proposera pas comme type détecté.
