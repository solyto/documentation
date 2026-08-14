---
title: Contacts API
description: Address book and contact management with CardDAV import.
---

All endpoints require authentication. Base path: `/api/v1/address-books`.

## Address Books

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/address-books` | List address books |
| POST | `/v1/address-books` | Create an address book (`name`; 409 if it already exists) |
| PUT | `/v1/address-books/{addressBookId}` | Update an address book's color |
| DELETE | `/v1/address-books/{addressBookId}` | Delete an address book |

## Contacts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/address-books/contacts` | List all contacts |
| POST | `/v1/address-books/contacts/photos` | Bulk-fetch contact photo URLs (max 10) |
| POST | `/v1/address-books/{addressBookId}/contacts` | Create a contact |
| PUT | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Update a contact |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}` | Delete a contact |
| POST | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Upload a contact photo (multipart) |
| DELETE | `/v1/address-books/{addressBookId}/contacts/{contactUri}/photo` | Remove a contact photo |

Contact creation accepts full name parts (prefix, first, middle, last, suffix), multiple `emails[]` and `phones[]` with types (cell/home/work/other), `groups[]`, `organization`, `title`, `note`, a full address, and an optional `photo` (base64).

## Import (CardDAV)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/address-books/import` | Start an external CardDAV import (`url`, `username`, `secret`) |
| POST | `/v1/address-books/import/select` | Select address books to import |
| GET | `/v1/address-books/import/state` | Import progress state |
