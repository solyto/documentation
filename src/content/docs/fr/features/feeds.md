---
title: Flux
description: Un lecteur de flux RSS/Atom avec filtrage par mots-clés et un répertoire de découverte.
---

Les Flux constituent un lecteur de flux RSS/Atom complet intégré à solyto. Abonnez-vous à n'importe quelle URL de flux, lisez les articles selon plusieurs mises en page, filtrez par mots-clés, et découvrez de nouveaux flux grâce à un répertoire de découverte et à vos amis — le tout sans quitter l'application.

## Ajouter des flux

Collez n'importe quelle URL de flux RSS ou Atom pour vous y abonner. solyto récupère les nouveaux éléments en arrière-plan — une tâche de synchronisation s'exécute toutes les heures pour récupérer les derniers articles de tous vos abonnements. Vous n'avez pas besoin d'actualiser manuellement. Les nouveaux éléments apparaissent automatiquement dans votre liste de lecture.

### Tester les flux

Avant de vous abonner, vous pouvez **tester une URL de flux** pour récupérer et prévisualiser son contenu (« C'est bien ça ? »). Cela évite d'ajouter des flux défectueux à votre liste et vous permet de confirmer que le flux contient bien le contenu attendu.

## Modes de lecture

Trois mises en page sont disponibles pour lire vos flux :

| Vue | Description |
|------|-------------|
| **Compacte** | Mise en page minimale affichant uniquement le titre et les métadonnées — idéale pour parcourir de nombreux éléments |
| **Confortable** | Mise en page équilibrée avec un aperçu du contenu — idéale pour survoler |
| **Carte** | Cartes d'articles complètes avec images et mise en forme — idéale pour lire dans l'application |

Basculez entre les vues à l'aide du sélecteur de mise en page. Votre choix est mémorisé.

## Filtrage

Chaque abonnement à un flux prend en charge le **filtrage par mots-clés** pour contrôler ce qui apparaît dans votre liste de lecture :

- **Liste blanche** — n'afficher que les éléments correspondant à l'un de ces mots-clés
- **Liste noire** — masquer les éléments correspondant à l'un de ces mots-clés

Les mots-clés sont saisis sous forme de puces séparées par des virgules. Cela permet de filtrer les sujets qui ne vous intéressent pas dans les flux à fort volume. Les filtres s'appliquent par abonnement, vous pouvez donc avoir des règles différentes pour différents flux.

## Marquer comme lu

Gérez votre file de lecture :

- **Individuel** — marquez un seul élément comme lu une fois que vous l'avez terminé
- **En masse** — marquez tous les éléments d'un flux comme lus pour vider votre file

Les éléments non lus sont affichés en premier afin que vous puissiez vous concentrer sur le nouveau contenu.

## Enregistrer dans la bibliothèque

Tout élément de flux peut être enregistré dans votre [Bibliothèque de liens](/features/libraries/links/) en un clic, afin de conserver les articles et leur contenu dans solyto bien après l'expiration de l'élément dans le flux.

## Ouvrir l'original

Chaque élément de flux inclut un lien pour **ouvrir l'article original** dans un nouvel onglet du navigateur, afin que vous puissiez lire l'article complet sur le site source lorsque l'extrait du flux ne suffit pas.

## Abonnements aux flux

Gérez vos abonnements avec des opérations CRUD complètes :

- **Créer** — abonnez-vous à un nouveau flux en collant son URL
- **Lire** — consultez les éléments et les paramètres d'un flux
- **Modifier** — changez le nom, l'URL ou les filtres d'un flux
- **Supprimer** — désabonnez-vous d'un flux

Chaque abonnement affiche le titre du flux et le nombre d'éléments non lus.

## Découvrir des flux

Un répertoire de flux permettant la découverte, avec recherche, pagination et nombre d'abonnés. Vous pouvez vous abonner à un flux directement depuis la vue de découverte. Les abonnements en double sont détectés automatiquement.

## Flux de vos amis

Découvrez à quels flux vos amis solyto sont abonnés, avec leurs noms affichés. Découvrez de nouvelles sources via votre réseau et abonnez-vous en un clic. C'est une manière sociale d'élargir votre liste de lecture.

## Exportation

Vos abonnements aux flux peuvent être exportés sous forme de fichier `.opml`, qui peut être importé dans n'importe quel lecteur de flux (Feedly, NewsBlur, Inoreader, etc.). Consultez [Exportation des données](/integrations/exporting/).
