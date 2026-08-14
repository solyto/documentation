---
title: Contacts API
description: Address book and contact management with CardDAV import.
---

All endpoints require authentication. Base path: `/api/v1/contacts`.

## Address Books

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/contacts/address-books` | List address books |
| POST | `/v1/contacts/address-books` | Create an address book |
| PUT | `/v1/contacts/address-books/{id}` | Update an address book |
| DELETE | `/v1/contacts/address-books/{id}` | Delete an address book |

## Contacts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/contacts` | List contacts (filterable) |
| POST | `/v1/contacts` | Create a contact |
| GET | `/v1/contacts/{id}` | Get a contact |
| PUT | `/v1/contacts/{id}` | Update a contact |
| DELETE | `/v1/contacts/{id}` | Delete a contact |

## Photos

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/contacts/{id}/photo` | Upload contact photo |
| GET | `/v1/contacts/{id}/photo` | Get contact photo |

## Import

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/contacts/import` | Import from vCard/CSV |

## Address Book Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required. Address book name |
| `description` | string | Optional description |
| `color` | string | Optional hex color |

## Contact Fields

| Field | Type | Description |
|-------|------|-------------|
| `first_name` | string | Required |
| `last_name` | string | Optional |
| `email` | string | Optional. Valid email |
| `phone` | string | Optional |
| `address` | string | Optional |
| `company` | string | Optional |
| `birthday` | date | Optional |
| `notes` | text | Optional |
| `address_book_id` | integer | Required. Parent address book |

## List Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `address_book_id` | integer | Filter by address book |
| `search` | string | Search name/email/phone |
| `per_page` | integer | Items per page |

## Import vCard/CSV

```
POST /v1/contacts/import
Content-Type: multipart/form-data
```

| Field | Type | Rules |
|-------|------|-------|
| `file` | file | Required. vCard (.vcf) or CSV |
| `address_book_id` | integer | Required. Target address book |
