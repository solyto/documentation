---
title: Confidentialité & Sécurité
description: Comment solyto traite vos données.
---

solyto a été conçu avec la confidentialité comme exigence fondamentale, et non comme une réflexion après coup.

## Ce que solyto NE fait PAS

- **Aucun traçage** — pas d'analyses, pas de télémétrie, pas de données d'usage collectées
- **Aucun cookie** — le seul stockage navigateur utilisé est une entrée localStorage pour l'authentification
- **Aucune requête en arrière-plan** — solyto ne contacte des services externes que lorsque vous déclenchez explicitement une action (comme une importation ou une recommandation)
- **Aucun entraînement d'AI** — vos données ne sont utilisées pour entraîner aucun modèle
- **Aucune publicité** — solyto ne comporte aucune publicité

## Ce que solyto stocke

solyto stocke les données que vous saisissez — notes, tâches, événements de calendrier, contacts, entrées de bibliothèque, etc. — dans votre compte. Sur solyto.app, ces données sont stockées sur des serveurs situés dans l'UE. Si vous vous auto-hébergez, elles se trouvent sur votre propre serveur.

## Authentification

solyto utilise une unique entrée localStorage pour votre jeton d'authentification. Aucun service d'authentification tiers n'est impliqué. La connexion par Passkey (WebAuthn) est prise en charge pour une authentification sans mot de passe.

## Contact avec des services externes

solyto ne contacte des services externes que lorsque vous le demandez explicitement :

- **Météo** — Open-Meteo pour les prévisions, et OpenStreetMap Nominatim pour la recherche de ville dans le widget du tableau de bord
- **Importation et recherche de bibliothèques** — Deezer, Discogs, Hardcover, Goodreads, IMDb, TMDB, Steam, BoardGameGeek et Chefkoch, déclenchés par vous
- **Notifications de sortie** — le backend vérifie périodiquement Deezer/Hardcover/TMDB pour détecter les nouvelles sorties de vos artistes/auteurs favoris
- **Recommandations AI** — les recommandations de bibliothèque sont générées à la demande via une API compatible OpenAI ; rien n'est envoyé tant que vous n'avez pas cliqué sur le bouton
- **Synchronisation CalDAV/CardDAV** — se synchronise uniquement si vous l'avez configurée ; vous pouvez la désactiver à tout moment
- **Bot Telegram** — actif uniquement si vous l'avez configuré ; messages envoyés par vous
- **Notifications** — envoyées à votre navigateur, par e-mail, ou via Telegram lorsque des événements se produisent

Rien ne se passe en arrière-plan à votre insu.

## Auto-hébergement

Si vous auto-hébergez solyto, vos données ne quittent jamais votre serveur. Vous contrôlez tout. Consultez [Auto-hébergement](/self-hosting/overview/).

## Open source

solyto est open source. Vous pouvez auditer exactement ce qu'il fait. Le code source est sur [GitHub](https://github.com/solyto).
