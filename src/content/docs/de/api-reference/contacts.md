---
title: Kontakte-API
description: Adressbuch- und Kontaktverwaltung mit CardDAV-Import.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/address-books`.

## Adressbücher

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/address-books` | Adressbücher auflisten |
| POST | `/v1/address-books` | Ein Adressbuch erstellen (`name`; 409 falls bereits vorhanden) |
| PUT | `/v1/address-books/{addressBookId}` | Die Farbe eines Adressbuchs aktualisieren |
| DELETE | `/v1/address-books/{addressBookId}` | Ein Adressbuch löschen |

## Kontakte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/address-books/contacts` | Alle Kontakte auflisten |
| POST | `/v1/address-books/contacts/photos` | Kontaktfoto-URLs im Bulk abrufen (max. 10) |
| POST | `/v1/address-books/{addressBookId}/contacts` | Einen Kontakt erstellen |
| PUT | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Einen Kontakt aktualisieren |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Einen Kontakt löschen |
| POST | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Ein Kontaktfoto hochladen (multipart) |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Ein Kontaktfoto entfernen |

Beim Erstellen eines Kontakts werden akzeptiert: vollständige Namensbestandteile (Präfix, Vorname, zweiter Vorname, Nachname, Suffix), mehrere `emails[]` und `phones[]` mit Typ (privat/geschäftlich/mobil/sonstiges), `groups[]`, `organization`, `title`, `note`, eine vollständige Adresse und ein optionales `photo` (base64).

## Import (CardDAV)

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/address-books/import` | Einen externen CardDAV-Import starten (`url`, `username`, `secret`) |
| POST | `/v1/address-books/import/select` | Zu importierende Adressbücher auswählen |
| GET | `/v1/address-books/import/state` | Fortschritt des Imports |
