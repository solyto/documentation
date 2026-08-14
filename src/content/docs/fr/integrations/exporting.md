---
title: Exportation des données
description: Exportez toutes vos données solyto dans des formats standards.
---

solyto vous permet d'exporter vos données à tout moment depuis **Paramètres → Exporter les données**. Vous êtes propriétaire de vos données et pouvez les télécharger quand vous le souhaitez.

## Comment exporter

1. Allez dans **Paramètres → Exporter les données**
2. Sélectionnez des fonctionnalités individuelles ou cliquez sur **Tout sélectionner**
3. Cliquez sur **Exporter**
4. solyto exécute la tâche d'export en arrière-plan
5. Une fois terminé, vous verrez un lien de téléchargement dans **Paramètres → Exporter les données** et dans vos notifications

## Fonctionnement des exports

- Les exports s'exécutent comme des **tâches en arrière-plan** — vous n'avez pas besoin de garder la page ouverte
- Les exports sont **limités en fréquence** à une fois toutes les 24 heures
- Les exports terminés **expirent après 48 heures** — téléchargez-les avant qu'ils ne soient supprimés
- Le téléchargement est un unique **fichier ZIP** nommé `export_YYYY-MM-DD.zip`, même en exportant une seule fonctionnalité
- Vous recevrez une **notification dans l'application** et (si configuré) une notification push ou Telegram lorsque l'export est prêt

## Formats d'export

Chaque fonctionnalité s'exporte dans un format standard que vous pouvez ouvrir dans d'autres applications :

| Fonctionnalité | Format | Compatible avec |
|---------|--------|----------------|
| Calendrier | `.ics` (iCalendar) | Google Calendar, Apple Calendar, Outlook |
| Contacts | `.vcf` (vCard) | Google Contacts, Apple Contacts, toute application de contacts |
| Notes | ZIP de fichiers `.md` | Obsidian, Notion, tout éditeur markdown |
| Flux | `.opml` | Feedly, NewsBlur, tout lecteur RSS |
| Bibliothèque de liens | `.html` (Netscape Bookmarks) | Chrome, Firefox, Safari, tout navigateur |
| Tâches | `.csv` | Excel, Google Sheets |
| Bibliothèque de musique | `.csv` | Excel, Google Sheets |
| Bibliothèque de livres | `.csv` (colonnes compatibles Goodreads) | Goodreads, applications de tableur |
| Bibliothèque de jeux | `.csv` | Excel, Google Sheets |
| Bibliothèque de recettes | `.csv` | Excel, Google Sheets |
| Bibliothèque de citations | `.csv` | Excel, Google Sheets |
| Suivi quotidien | `.csv` | Excel, Google Sheets |
| Suivi du temps | `.csv` | Excel, Google Sheets |
| Finances (Budget) | `.csv` | Excel, Google Sheets |
| Finances (Patrimoine) | `.csv` | Excel, Google Sheets |

## Export sélectif

Vous n'êtes pas obligé de tout exporter. Cochez uniquement les fonctionnalités dont vous avez besoin et le ZIP ne contiendra que ces fichiers. C'est utile si vous voulez :

- Sauvegarder une seule bibliothèque avant d'y apporter des modifications
- Importer votre calendrier dans une autre application comme Google Calendar
- Archiver vos notes pour les utiliser dans Obsidian ou un autre éditeur markdown
- Partager vos recettes avec quelqu'un

Remarque : les fonctionnalités Films, Plantes et Presse-papiers ne font actuellement pas partie de l'ensemble exportable.

## Détails de l'export

- **Format :** archive ZIP contenant un fichier par fonctionnalité sélectionnée
- **Limite de fréquence :** un export toutes les 24 heures
- **Expiration :** les exports sont automatiquement supprimés après 48 heures
- **Notification :** vous recevrez une notification dans l'application (icône cloche) lorsque l'export est prêt ; des notifications push et Telegram sont aussi envoyées si elles sont configurées
- **Nommage des fichiers :** `export_YYYY-MM-DD.zip` (par ex. `export_2026-05-27.zip`)

## Réimporter des données exportées

La plupart des formats d'export sont conçus pour être réimportables :

- Les fichiers `.ics` peuvent être importés dans toute application de calendrier ou de nouveau dans solyto
- Les fichiers `.vcf` peuvent être importés dans toute application de contacts
- Les fichiers `.opml` peuvent être importés dans tout lecteur RSS
- Les fichiers `.csv` peuvent être ouverts dans des applications de tableur pour consultation
- Les notes `.md` peuvent être utilisées dans Obsidian, Notion, ou tout éditeur markdown

## Dépannage

- **« Limite d'export atteinte »** — vous avez déjà exporté au cours des dernières 24 heures. Attendez et réessayez.
- **« Export expiré »** — le fichier a été supprimé après 48 heures. Lancez un nouvel export.
- **Exports volumineux** — les exports comportant de nombreuses fonctionnalités peuvent prendre quelques minutes à traiter. Vous serez notifié lorsqu'ils seront prêts.
- **Le téléchargement ne démarre pas** — vérifiez les paramètres de blocage des fenêtres pop-up/téléchargements de votre navigateur. Le téléchargement démarre automatiquement lorsque vous cliquez sur le lien.
