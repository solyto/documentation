---
title: API Contacts
description: Carnet d'adresses et gestion des contacts avec import CardDAV.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/address-books`.

## Carnets d'adresses

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/address-books` | Lister les carnets d'adresses |
| POST | `/v1/address-books` | Créer un carnet d'adresses (`name` ; 409 s'il existe déjà) |
| PUT | `/v1/address-books/{addressBookId}` | Modifier la couleur d'un carnet d'adresses |
| DELETE | `/v1/address-books/{addressBookId}` | Supprimer un carnet d'adresses |

## Contacts

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/address-books/contacts` | Lister tous les contacts |
| POST | `/v1/address-books/contacts/photos` | Récupérer en masse les URL des photos de contact (max 10) |
| POST | `/v1/address-books/{addressBookId}/contacts` | Créer un contact |
| PUT | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Modifier un contact |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Supprimer un contact |
| POST | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Téléverser une photo de contact (multipart) |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Supprimer une photo de contact |

La création d'un contact accepte les différentes parties du nom (préfixe, prénom, second prénom, nom, suffixe), plusieurs `emails[]` et `phones[]` avec leur type (cell/home/work/other), des `groups[]`, une `organization`, un `title`, une `note`, une adresse complète et une `photo` optionnelle (en base64).

## Import (CardDAV)

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/address-books/import` | Démarrer un import CardDAV externe (`url`, `username`, `secret`) |
| POST | `/v1/address-books/import/select` | Sélectionner les carnets d'adresses à importer |
| GET | `/v1/address-books/import/state` | État de progression de l'import |
