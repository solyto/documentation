---
title: Notifications
description: Configurez les notifications sur les canaux in-app, e-mail, push et Telegram.
---

solyto peut envoyer des notifications par quatre canaux. Vous contrôlez précisément quels types de notifications passent par quels canaux — chaque type peut être activé ou désactivé par canal.

## Types de notifications

solyto compte 9 types de notifications :

| Type | Clé | Description |
|------|-----|-------------|
| Sortie musicale | `music_release` | Nouveaux albums ou singles des artistes de votre bibliothèque Musique |
| Sortie de livre | `book_release` | Nouvelles sorties de livres des auteurs de votre bibliothèque Livres |
| Sortie de film | `movie_release` | Nouvelles sorties de films de votre liste à voir |
| Demande d'ami | `friend_request` | Quelqu'un vous a envoyé une demande d'ami |
| Rappel de votre journée | `daily_day_reminder` | Résumé matinal quotidien de votre journée (tâches, événements, météo) |
| Rappel de Check-in | `daily_check_in_reminder` | Rappel quotidien pour compléter votre Check-in quotidien |
| Partage de calendrier | `calendar_share` | Quelqu'un a partagé un calendrier avec vous |
| Commentaire sur une demande de développement | `dev_request_comment` | Quelqu'un a commenté une demande de fonctionnalité que vous suivez |
| Exportation prête | `export_ready` | Une exportation de données est terminée et prête à être téléchargée |

## Canaux

### In-app (interface)

Les notifications apparaissent dans l'icône de cloche de la barre de navigation. Cliquez sur la cloche pour consulter l'historique de vos notifications, marquer des éléments comme lus, ou tout marquer comme lu. Ce canal est toujours disponible — aucune configuration requise.

### Push (Web Push)

Notifications push du navigateur via l'API Web Push avec authentification VAPID. Disponible sur le web.

Pour activer les notifications push :

1. Allez dans **Paramètres → Notifications**
2. Cliquez sur **Activer les notifications push**
3. Votre navigateur vous demandera une autorisation — cliquez sur **Autoriser**
4. Les notifications push sont maintenant actives

Les notifications push fonctionnent même lorsque solyto n'est pas ouvert dans un onglet du navigateur, y compris lorsque l'application est installée en tant que PWA.

:::note
Les notifications push nécessitent HTTPS et un navigateur pris en charge (Chrome, Firefox, Edge, Safari 16.4+).
:::

### Telegram (Bot)

Envoyez des notifications vers votre compte Telegram via le [bot Telegram](/integrations/telegram/).

Pour configurer les notifications Telegram :

1. [Connectez le bot Telegram](/integrations/telegram/#connecting-the-bot) à votre compte solyto
2. Allez dans **Paramètres → Notifications**
3. Activez les types de notifications que vous souhaitez recevoir via le canal **Bot**

Le canal Telegram n'est activé qu'une fois le bot connecté.

### E-mail

Les notifications par e-mail arrivent bientôt — le canal e-mail n'est pas encore disponible.

## Configurer les notifications

Allez dans **Paramètres → Notifications** pour :

- Connecter ou déconnecter le bot Telegram
- Activer ou désactiver les notifications push dans votre navigateur
- Activer ou désactiver chaque type de notification par canal

### Configuration par type et par canal

La page des paramètres de notifications affiche une matrice où chaque ligne est un type de notification et chaque colonne un canal (UI, Email, Push, Bot). Activez n'importe quelle combinaison. Les canaux qui ne sont pas encore configurés apparaissent grisés — le canal Bot nécessite un bot Telegram connecté, et le canal Push nécessite que le push soit activé.

| Type | UI | Email | Push | Bot |
|---|:---:|:---:|:---:|:---:|
| Nouvelles sorties de livres | ✓ | — | ✓ | ✓ |
| Nouvelles sorties musicales | ✓ | — | ✓ | ✓ |
| Nouvelle sortie à l'écran | ✓ | — | ✓ | ✓ |
| Nouvelle demande d'ami | ✓ | — | ✓ | ✓ |
| Rappel de Check-in quotidien | ✓ | — | ✓ | ✓ |
| Rappel de la journée à venir | ✓ | — | ✓ | ✓ |
| Partages de calendrier | ✓ | — | ✓ | ✓ |
| Commentaires sur les demandes de développement | ✓ | — | ✓ | ✓ |
| Exportation prête | ✓ | — | ✓ | ✓ |

Par exemple, vous pourriez vouloir des notifications d'exportation uniquement in-app, des rappels quotidiens via Telegram, et des alertes de sortie via push.

Les deux types de rappels quotidiens (`daily_day_reminder` et `daily_check_in_reminder`) sont envoyés respectivement à 07h00 et 20h00 dans votre fuseau horaire (voir [Telegram](/integrations/telegram/) pour le comportement des alertes).
