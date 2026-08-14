---
title: Calendrier
description: Gestion des événements avec synchronisation CalDAV, événements récurrents et partage de calendrier.
---

Le Calendrier est un gestionnaire d'événements complet intégré à solyto. Il prend en charge plusieurs calendriers, les événements récurrents, le partage avec des amis, et une synchronisation CalDAV bidirectionnelle avec des services externes comme Google Calendar et Apple Calendar.

## Créer des événements

Cliquez sur un jour ou un créneau horaire pour créer un événement. Les événements prennent en charge :

- **Titre** — le nom de l'événement
- **Description** — détails facultatifs
- **Lieu** — où se déroule l'événement
- **Heure de début et de fin** — ou marquer comme journée entière
- **Récurrence** — répétition quotidienne, hebdomadaire, mensuelle ou selon une règle personnalisée
- **Calendrier** — assigner à l'un de vos calendriers

## Plusieurs calendriers

Vous pouvez créer autant de calendriers que nécessaire et attribuer une couleur à chacun. Les configurations courantes incluent :

- **Personnel** — vos propres rendez-vous
- **Travail** — réunions et échéances
- **Famille** — événements familiaux partagés

Chaque calendrier a sa propre couleur. Vous pouvez réorganiser les calendriers (glisser-déposer), et masquer ou afficher chaque calendrier individuellement. Les calendriers peuvent vous appartenir, être partagés avec vous (invitation en attente ou acceptée), ou faire l'objet d'un abonnement.

## Vues du calendrier

solyto propose quatre vues, chacune avec une variante optimisée pour mobile :

| Vue | Description |
|------|-------------|
| **Mois** | Grille mensuelle complète avec pastilles d'événements |
| **Semaine** | Colonnes heure par heure pour la semaine |
| **Jour** | Vue horaire détaillée d'une seule journée |
| **Liste** | Liste chronologique des événements à venir |

## Événements récurrents

Les événements peuvent se répéter grâce aux règles de récurrence RRULE (RFC 5545). Les modèles pris en charge incluent :

- Quotidien, hebdomadaire, mensuel, annuel
- Intervalles personnalisés (par ex. toutes les 2 semaines)
- Jours spécifiques de la semaine (par ex. tous les lundis et mercredis)

### Modifier des événements récurrents

Lorsque vous modifiez ou supprimez un événement récurrent, solyto vous demande si le changement doit s'appliquer à :

- **Cette occurrence uniquement** — l'instance unique
- **Toutes les occurrences** — chaque instance de l'événement répétitif

## Partage de calendrier

Partagez vos calendriers avec des amis qui utilisent aussi solyto :

1. Ouvrez la fenêtre **Partager** d'un calendrier (seul le propriétaire peut partager)
2. Sélectionnez un ami dans votre liste d'[Amis](/account/friends/) — il reçoit une invitation
3. L'ami **accepte ou refuse** l'invitation en attente
4. **Révoquer l'accès** — le propriétaire peut arrêter le partage à tout moment
5. **Se désabonner** — les destinataires peuvent se désabonner des calendriers partagés avec eux

Les calendriers partagés apparaissent aux côtés des vôtres, avec un indicateur de statut d'invitation (en attente / acceptée).

## Associer des tâches et des notes aux événements

Tout événement peut avoir des tâches et des notes associées, ce qui permet de regrouper les éléments liés :

- **Associer** une tâche ou une note depuis un sélecteur avec recherche lors de la modification d'un événement
- **Dissocier** ces éléments à tout moment
- Les éléments associés sont visibles sur l'événement dans le calendrier

Les tâches ayant une date d'échéance apparaissent aussi directement sur le calendrier et peuvent y être marquées comme terminées.

## Synchronisation CalDAV

solyto prend en charge la synchronisation CalDAV bidirectionnelle, ce qui permet de garder vos événements synchronisés avec des services de calendrier externes :

- Google Calendar
- Apple Calendar
- Nextcloud Calendar
- Tout autre service compatible CalDAV

Le serveur CalDAV de solyto fonctionne à l'adresse `https://dav.solyto.de` (ou celle de votre propre instance). Vous vous connectez avec votre adresse e-mail et votre mot de passe solyto.

### Processus d'import

L'import depuis un serveur CalDAV externe se déroule en plusieurs étapes :

1. **Démarrage** — saisissez l'URL, le nom d'utilisateur et le mot de passe de votre serveur externe
2. **Sélection** — choisissez les calendriers à importer
3. **Import** — les événements sont récupérés et enregistrés, avec une progression en temps réel
4. **Terminé** — vos calendriers sont disponibles dans solyto

Consultez [Synchronisation DAV](/integrations/dav-sync/) pour des instructions détaillées.

## Notifications

Vous pouvez recevoir des notifications pour les événements à venir via Telegram ou les notifications push du navigateur. Consultez [Notifications](/customization/notifications/).

## Exportation

Les données de votre calendrier peuvent être exportées sous forme de fichier `.ics`, compatible avec toute application de calendrier. Consultez [Exportation des données](/integrations/exporting/).
