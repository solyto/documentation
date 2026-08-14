---
title: Demandes de développement
description: Soumettez des rapports de bugs et des demandes de fonctionnalités, votez pour les idées.
---

Les Demandes de développement forment un tableau de retours intégré où vous pouvez signaler des bugs et proposer des fonctionnalités. C'est une manière communautaire de façonner le développement de solyto.

## Accéder aux Demandes de développement

Rendez-vous sur **/dev-requests** depuis la barre latérale ou accédez directement à la page. Vous verrez la liste de toutes les demandes soumises, triées par popularité.

## Soumettre une demande

1. Cliquez sur **Nouvelle demande**
2. Choisissez un type :
   - **Bug** — quelque chose est cassé ou ne fonctionne pas comme prévu
   - **Fonctionnalité** — une idée de nouvelle fonctionnalité ou d'amélioration
3. Rédigez un titre et une description clairs
4. Définissez une **priorité** (1 à 5)
5. Ajoutez éventuellement une **capture d'écran** et une URL associée
6. Envoyez

Pour les bugs, indiquez les étapes pour reproduire le problème, ce que vous attendiez et ce qui s'est réellement passé. Pour les fonctionnalités, décrivez le problème que vous cherchez à résoudre.

## Voter

Chaque utilisateur peut voter pour les demandes existantes avec les flèches haut/bas. Votre vote est enregistré et le score est affiché. Le vote aide à prioriser ce qui sera développé ensuite.

## Commenter

Laissez des commentaires sur n'importe quelle demande pour apporter du contexte, partager des solutions de contournement ou discuter de l'idée avec d'autres utilisateurs. Appuyez sur **Entrée** pour envoyer un commentaire, et l'auteur en est notifié.

## Statuts des demandes

Les demandes sont réparties entre **Demandes en cours** et **Demandes résolues**, et suivent les statuts suivants :

| Statut | Signification |
|--------|----------------|
| Backlog | Nouvellement soumise, en attente d'examen |
| En attente | Acceptée et planifiée pour le développement |
| En cours | Actuellement en cours de réalisation |
| Terminée | Implémentée et publiée |
| Annulée | Non prévue — la raison est indiquée dans les commentaires |

## Désactiver les Demandes de développement

Si vous vous auto-hébergez et ne souhaitez pas afficher la section Demandes de développement, définissez la variable d'environnement :

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

Cela masque le lien Demandes de développement dans la barre latérale et désactive entièrement la route. Consultez [Configuration](/self-hosting/configuration/) pour plus de détails.

## Désactiver les Demandes de développement

Si vous vous auto-hébergez et ne souhaitez pas afficher la section Demandes de développement, définissez la variable d'environnement :

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

Cela masque le lien Demandes de développement dans la barre latérale et désactive entièrement la route. Consultez [Configuration](/self-hosting/configuration/) pour plus de détails.
