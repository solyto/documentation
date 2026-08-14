---
title: Synchronisation DAV
description: Synchronisation CalDAV et CardDAV bidirectionnelle avec Google, Apple, Nextcloud et plus.
---

solyto inclut un serveur DAV intégré propulsé par SabreDAV avec une base de données PostgreSQL. Cela vous offre une synchronisation CalDAV (calendrier) et CardDAV (contacts) bidirectionnelle avec tout client compatible — sans plugin ni extension nécessaire.

## URL du serveur

| Instance | URL |
|----------|-----|
| Hébergée (solyto.app) | `https://dav.solyto.de` |
| Auto-hébergée | Votre propre point de terminaison DAV (généralement `https://votre-domaine/dav`) |

## Authentification

La synchronisation DAV utilise une **authentification de base (Basic Auth)** avec les identifiants de votre compte solyto :

- **Nom d'utilisateur :** votre adresse e-mail solyto
- **Mot de passe :** le mot de passe de votre compte solyto

Les détails de connexion (URL du serveur, indice de nom d'utilisateur et de mot de passe) sont affichés dans la fenêtre **Synchronisation** des pages Calendrier et Contacts.

## CalDAV (synchronisation du calendrier)

CalDAV garde votre calendrier solyto synchronisé avec des applications de calendrier externes. Les modifications effectuées dans un sens ou dans l'autre sont répercutées partout.

### Clients compatibles

- **Google Calendar** (via la prise en charge CalDAV ou une synchronisation tierce)
- **Apple Calendar** (macOS, iOS)
- **Thunderbird** (via la prise en charge CalDAV intégrée)
- **DAVx** (Android)
- **Nextcloud Calendar**
- **GNOME Calendar** / **KDE KOrganizer** (Linux)
- Tout autre client compatible CalDAV

### Configuration

1. Dans solyto, ouvrez **Calendrier → Synchronisation** pour voir l'URL de votre serveur DAV et vos identifiants
2. Ouvrez votre application de calendrier et ajoutez un nouveau compte CalDAV
3. Saisissez l'URL du serveur (`https://dav.solyto.de` sur l'instance hébergée), votre e-mail et votre mot de passe
4. Vos calendriers solyto apparaîtront comme calendriers disponibles auxquels vous abonner

Les modifications effectuées dans solyto ou dans votre application de calendrier externe se synchroniseront automatiquement dans les deux sens.

### Partage de calendrier

solyto prend en charge le partage de calendrier via CalDAV. Vous pouvez partager des calendriers avec d'autres utilisateurs solyto et définir des permissions (lecture seule ou lecture-écriture).

## CardDAV (synchronisation des contacts)

CardDAV garde vos contacts solyto synchronisés avec des applications de contacts externes.

### Clients compatibles

- **Google Contacts**
- **Apple Contacts** (macOS, iOS)
- **DAVx** (Android)
- **Nextcloud Contacts**
- **Thunderbird** (via l'extension CardBook)
- Tout autre client compatible CardDAV

### Configuration

1. Dans solyto, ouvrez **Contacts → Synchronisation** pour voir l'URL de votre serveur DAV et vos identifiants
2. Ouvrez votre application de contacts et ajoutez un nouveau compte CardDAV
3. Saisissez l'URL du serveur, votre e-mail et votre mot de passe
4. Vos contacts solyto se synchroniseront automatiquement

## Import via CalDAV / CardDAV

Vous pouvez aussi importer des calendriers et des contacts depuis un serveur DAV externe directement dans solyto :

### Import de calendrier

1. Dans solyto, allez dans **Calendrier → Import**
2. Saisissez l'URL, le nom d'utilisateur et le mot de passe du serveur externe
3. Découvrez les calendriers disponibles et sélectionnez ceux à importer
4. Les événements sont récupérés et enregistrés avec une progression en temps réel

### Import de contacts

1. Dans solyto, allez dans **Contacts → Import**
2. Saisissez l'URL, le nom d'utilisateur et le mot de passe du serveur externe
3. Découvrez les carnets d'adresses disponibles et sélectionnez ceux à importer
4. Les contacts sont récupérés et enregistrés avec une progression en temps réel

Cela fonctionne avec tout serveur CalDAV/CardDAV (Nextcloud, iCloud, etc.).

## Fréquence de synchronisation

La synchronisation DAV est quasi instantanée sur solyto.app. Les clients externes interrogent généralement le serveur toutes les 5 à 15 minutes selon l'application. Certains clients (comme DAVx sur Android) permettent de configurer manuellement l'intervalle de synchronisation.

## Dépannage

### La synchronisation ne fonctionne pas

- Vérifiez que l'URL du serveur est correcte (`https://dav.solyto.de` pour l'instance hébergée)
- Vérifiez que votre e-mail et votre mot de passe correspondent à votre compte solyto
- Si vous avez récemment changé votre mot de passe solyto, mettez à jour les identifiants dans votre client DAV
- Forcez une synchronisation manuelle depuis l'application externe (la plupart des clients disposent d'un bouton d'actualisation)

### Les événements n'apparaissent pas

- Vérifiez que vous êtes abonné au bon calendrier dans votre client DAV
- Certains clients exigent d'activer explicitement un calendrier nouvellement découvert
- Vérifiez d'abord que l'événement existe bien dans l'interface web de solyto

### Événements en double

- Cela arrive généralement lorsque le même calendrier est connecté deux fois. Supprimez l'une des connexions et forcez une synchronisation.

### Spécificités de Google Calendar

Google Calendar nécessite d'[activer la prise en charge CalDAV](https://support.google.com/calendar/answer/99358) et peut nécessiter des mots de passe spécifiques à l'application si vous utilisez l'authentification à deux facteurs.

### Auto-hébergement

Si vous auto-hébergez solyto, le serveur DAV fonctionne comme partie intégrante de la pile applicative. Assurez-vous que :

- Le service SabreDAV est en cours d'exécution
- PostgreSQL est accessible
- Votre proxy inverse redirige les requêtes DAV vers le bon service
- TLS est configuré (les clients DAV nécessitent généralement HTTPS)
