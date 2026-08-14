---
title: Qu'est-ce que solyto
description: solyto est une application de gestion personnelle gratuite, open source, privée et tout-en-un.
---

solyto est une application de gestion personnelle gratuite, open source, privée et tout-en-un. Tâches, calendrier, contacts, notes, finances, bibliothèques, suivi du temps, et bien plus — une seule application, une seule connexion, une seule interface. Aucun traçage, aucune publicité, aucun abonnement. Jamais.

## Trois façons d'utiliser solyto

1. **solyto.app** — la version hébergée. Créez un compte et commencez à l'utiliser immédiatement. Aucune configuration requise.
2. **Développement local** — exécutez l'ensemble de la pile en local avec Docker Compose via le dépôt [localdocker](https://github.com/solyto/localdocker). Idéal pour contribuer ou expérimenter.
3. **Auto-hébergement** — déployez solyto sur votre propre serveur en utilisant le dépôt [selfhosted](https://github.com/solyto/selfhosted). Contrôle total sur vos données.

## Ce qui est inclus

Toutes les fonctionnalités sont incluses. Pas de paliers, pas de mises à niveau, pas de « bientôt disponible ».

**Productivité**

- [Tâches](/features/todos/) — des tâches avec étiquettes, dates d'échéance, priorités et récurrences
- [Calendrier](/features/calendar/) — votre emploi du temps avec synchronisation CalDAV
- [Notes](/features/notes/) — notes et réflexions, organisées à votre façon
- [Contacts](/features/contacts/) — carnet d'adresses avec synchronisation CardDAV
- [Presse-papiers](/features/clipboard/) — presse-papiers partagé entre appareils

**Bibliothèques**

- [Musique](/features/libraries/music/), [Livres](/features/libraries/books/), [Films](/features/libraries/movies/), [Jeux](/features/libraries/games/) — suivez vos collections
- [Recettes](/features/libraries/recipes/), [Citations](/features/libraries/quotes/), [Liens](/features/libraries/links/), [Plantes](/features/libraries/plants/) — cataloguez tout le reste

**Bien-être & temps**

- [Check-in quotidien](/features/check-in/) — suivi de l'humeur, journal, création d'habitudes
- [Suivi du temps](/features/time-tracking/) — suivez vos projets, vos heures facturables et votre productivité

**Finances**

- [Finances](/features/finances/) — suivi du budget et vue d'ensemble du patrimoine net

**Information**

- [Flux RSS](/features/feeds/) — les actualités des sources que vous choisissez, sans algorithme

**Intégrations**

- [Bot Telegram](/integrations/telegram/) — enregistrez des liens, recevez des résumés quotidiens et des notifications
- [Synchronisation CalDAV/CardDAV](/integrations/dav-sync/) — synchronisez avec des applications externes de calendrier et de contacts
- Assistants AI — interagissez avec vos propres données grâce à l'AI, selon vos conditions

## Stack technique

solyto est construit avec des outils reconnus et éprouvés :

- **Frontend** — SvelteKit 2, Svelte 5, Tailwind CSS v4, TypeScript
- **Backend** — Laravel 12, PHP 8.4
- **Bases de données** — MariaDB (données de l'application), PostgreSQL (CalDAV/CardDAV via SabreDAV)
- **Cache & files d'attente** — Redis
- **Reverse proxy** — Traefik avec TLS Let's Encrypt automatique
- **Déploiement** — Docker (images : `solyto/app`, `solyto/api-php`, `solyto/api-nginx`)
