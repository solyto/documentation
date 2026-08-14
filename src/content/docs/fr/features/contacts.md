---
title: Contacts
description: Gestion des contacts avec synchronisation CardDAV et carnets d'adresses.
---

Les Contacts constituent un carnet d'adresses complet intégré à solyto. Ils prennent en charge plusieurs carnets d'adresses colorés, des champs de contact détaillés incluant des photos, une recherche avec regroupement A-Z, et une synchronisation CardDAV bidirectionnelle avec des services externes comme Google Contacts et Apple Contacts.

## Carnets d'adresses

Créez plusieurs carnets d'adresses et attribuez une couleur à chacun. Cela vous permet de séparer vos contacts par contexte — par exemple, un carnet d'adresses « Personnel » et un carnet d'adresses « Travail ».

Chaque carnet d'adresses est indépendant, avec sa propre liste de contacts. Vous pouvez créer, renommer et supprimer des carnets d'adresses à tout moment sans affecter vos contacts.

## Ajouter des contacts

Ouvrez un carnet d'adresses et cliquez sur le bouton **+** pour créer un nouveau contact. Remplissez les champs dont vous avez besoin :

### Champs de contact

- **Nom** — préfixe, prénom, second prénom, nom de famille et suffixe
- **Numéros de téléphone** — un ou plusieurs, chacun avec un type (mobile, domicile, travail, autre)
- **Adresses e-mail** — une ou plusieurs, chacune avec un type (domicile, travail, autre)
- **Groupes** — assigner à un ou plusieurs groupes pour l'organisation
- **Organisation** — entreprise ou affiliation
- **Titre** — intitulé du poste
- **Note** — notes libres à propos du contact
- **Adresse** — adresse postale, ville, région, code postal et pays
- **Photo** — téléverser une image pour le contact (redimensionnée automatiquement)

Tous les champs sauf le nom sont facultatifs. Un contact peut appartenir à plusieurs groupes au sein d'un carnet d'adresses.

### Vue détaillée du contact

Cliquez sur un contact pour ouvrir sa vue détaillée, avec un avatar à initiales, des liens cliquables pour appeler (`tel:`) et envoyer un e-mail (`mailto:`), des étiquettes de carnet d'adresses et de groupe, l'adresse, l'organisation, la note et la photo. Modifiez ou supprimez le contact depuis cette vue.

## Photos de contact

Téléversez une photo pour n'importe quel contact :

- **Téléverser** — sélectionnez un fichier image sur votre appareil (redimensionné automatiquement)
- **Afficher** — la photo apparaît dans la liste des contacts et dans la vue détaillée
- **Supprimer** — retirez la photo à tout moment

Les photos vous aident à identifier rapidement vos contacts d'un coup d'œil, en particulier dans les grands carnets d'adresses.

## Recherche et filtrage

Trouvez rapidement des contacts grâce à la recherche intégrée et aux outils d'organisation :

- **Recherche** — saisissez un nom, un e-mail ou un numéro de téléphone pour trouver un contact instantanément
- **Regroupement A-Z** — les contacts sont regroupés alphabétiquement selon la première lettre de leur nom, pour une liste rapidement consultable
- **Filtrer par carnet d'adresses** — afficher les contacts d'un carnet d'adresses spécifique
- **Filtrer par groupe** — afficher les contacts appartenant à un groupe spécifique

## Synchronisation CardDAV

solyto prend en charge la synchronisation CardDAV bidirectionnelle, ce qui permet de garder vos contacts synchronisés avec des services de contacts externes. Une fois configurée, les modifications circulent dans les deux sens — modifiez un contact dans solyto et il se met à jour sur le serveur, ou modifiez-le sur le serveur et il se met à jour dans solyto.

- Google Contacts
- Apple Contacts
- Nextcloud Contacts
- Tout autre service compatible CardDAV

Les modifications effectuées dans solyto sont poussées vers le serveur externe, et inversement.

### Processus d'import

L'import depuis un serveur CardDAV externe se déroule en plusieurs étapes :

1. **Démarrage** — saisissez l'URL, le nom d'utilisateur et le mot de passe de votre serveur externe
2. **Sélection** — choisissez les carnets d'adresses à importer depuis le serveur
3. **Import** — les contacts sont récupérés et enregistrés localement, avec une progression en temps réel
4. **Terminé** — vos contacts sont disponibles dans solyto

Consultez [Synchronisation DAV](/integrations/dav-sync/) pour des instructions détaillées.

## Exportation

Vos contacts peuvent être exportés sous forme de fichier `.vcf` (vCard), compatible avec toute application de contacts. Consultez [Exportation des données](/integrations/exporting/).
