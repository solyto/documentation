---
title: Bot Telegram
description: Enregistrez des liens, recevez des résumés quotidiens et des notifications via Telegram.
---

solyto dispose d'un bot Telegram ([@SolytoBot](https://t.me/SolytoBot)) qui vous permet d'interagir avec votre compte directement depuis Telegram. Enregistrez des liens, ajoutez des éléments à vos bibliothèques, recevez des résumés quotidiens, et soyez notifié — le tout sans ouvrir l'application.

## Ce que le bot peut faire

- **Ajout rapide d'éléments** — envoyez du texte ou une URL et le bot détecte le type (tâche, note, lien, musique, film, recette, etc.)
- **Résumé quotidien** — `/day` affiche vos rendez-vous à venir et vos tâches à échéance
- **Liste des tâches** — `/todos` liste vos tâches ouvertes directement dans le chat
- **Alertes** — un résumé de la journée à venir à 7h00 et un rappel de suivi quotidien à 20h00 (votre fuseau horaire), lorsqu'ils sont activés
- **Notifications** — recevez des alertes pour les nouvelles sorties, les demandes d'amis, et plus, via le canal Telegram

## Connecter le bot

Lier votre compte solyto à Telegram se fait en deux étapes :

1. Dans solyto, allez dans **Paramètres → Notifications** et demandez un jeton de connexion Telegram
2. Copiez le jeton
3. Ouvrez [@SolytoBot](https://t.me/SolytoBot) sur Telegram
4. Envoyez `/connect <votre-jeton>` au bot
5. Le bot confirme la connexion

Votre compte est maintenant lié. Vous pouvez vous déconnecter à tout moment depuis la même page de paramètres.

## Commandes du bot

| Commande | Ce qu'elle fait |
|---------|-------------|
| `/connect <jeton>` | Lie votre compte solyto (configuration unique) |
| `/day` | Affiche le résumé du jour — rendez-vous à venir et tâches à échéance/en retard |
| `/todos` | Liste vos tâches actuellement ouvertes |
| `/help` | Affiche les commandes disponibles |

## Ajout rapide via le bot

Une fois connecté, vous pouvez ajouter des éléments à vos bibliothèques en envoyant simplement du texte ou une URL au bot :

1. Envoyez une URL ou du texte brut à @SolytoBot
2. Le bot détecte automatiquement le type de contenu (tâche, note, lien, musique, livre, film, jeu, recette, plante, citation, flux, presse-papiers)
3. Si la confiance de détection est inférieure à 60 %, le bot affiche un clavier intégré pour choisir le type
4. L'élément est ajouté à la bibliothèque correspondante

Par exemple :

- Envoyer un lien Deezer ou Discogs → ajouté à votre Bibliothèque de musique
- Envoyer une URL IMDb → ajouté à votre Bibliothèque de films
- Envoyer une URL de recette Chefkoch → ajouté à votre Bibliothèque de recettes
- Envoyer toute autre URL → ajouté à votre Bibliothèque de liens
- Envoyer une ligne contenant `due:` → ajouté comme tâche

Le bot utilise un état de conversation pour gérer les interactions en plusieurs étapes comme la sélection du type.

## Alertes

Le bot peut envoyer deux alertes programmées, contrôlées par les paramètres de notification du canal Telegram (voir [Notifications](/customization/notifications/)) :

- **Alerte « Votre journée »** — à 07h00 (votre fuseau horaire), un résumé des événements du calendrier du jour et des tâches à échéance/en retard
- **Alerte de suivi quotidien** — à 20h00 (votre fuseau horaire), un rappel pour compléter votre [suivi quotidien](/features/check-in/)

## Langues

Le bot prend en charge les mêmes langues que solyto :

- Anglais (en)
- Allemand (de)
- Français (fr)
- Espagnol (es)

La langue du bot suit le paramètre de langue de votre compte solyto.

## Déconnexion

Pour délier votre compte Telegram :

1. Allez dans **Paramètres → Notifications**
2. Déconnectez le bot Telegram

Cela supprime l'association entre votre compte Telegram et votre compte solyto. Le bot ne répondra plus aux commandes et n'enverra plus d'alertes.

## Remarque pour l'auto-hébergement

Si vous auto-hébergez solyto, vous devez créer votre propre bot Telegram :

1. Envoyez un message à [@BotFather](https://t.me/BotFather) sur Telegram
2. Créez un nouveau bot et copiez le jeton d'API
3. Fournissez le jeton en tant que secret `SOLYTO_BOT_TELEGRAM_TOKEN` (voir [Secrets Docker](/self-hosting/secrets/))
4. Enregistrez le webhook du bot (voir la configuration de déploiement)

Le bot reçoit les mises à jour via un webhook servi par l'API.
