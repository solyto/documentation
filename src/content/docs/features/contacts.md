---
title: Contacts
description: Contact management with CardDAV sync and address books.
---

The Contacts feature is a full address book built into solyto. It supports multiple color-coded address books, detailed contact fields including photos, search with A–Z grouping, and two-way CardDAV sync with external services like Google Contacts and Apple Contacts.

## Address books

Create multiple address books and color-code each one. This lets you separate contacts by context — for example, a "Personal" address book and a "Work" address book.

Each address book is independent with its own list of contacts. You can create, rename, and delete address books at any time without affecting your contacts.

## Adding contacts

Open an address book and click the **+** button to create a new contact. Fill in the fields you need:

### Contact fields

- **Name** — prefix, first, middle, last name, and suffix
- **Phone numbers** — one or more, each with a type (cell, home, work, other)
- **Email addresses** — one or more, each with a type (home, work, other)
- **Groups** — assign to one or more groups for organization
- **Organization** — company or affiliation
- **Title** — job title
- **Note** — free-text notes about the contact
- **Address** — street address, city, state, postal code, and country
- **Photo** — upload an image for the contact (scaled to fit)

All fields except the name are optional. Contacts can belong to multiple groups within an address book.

### Contact detail view

Click a contact to open its detail view with an initials avatar, tap-to-call (`tel:`) and tap-to-email (`mailto:`) links, address book and group chips, address, organization, note, and photo. Edit or delete the contact from this view.

## Contact photos

Upload a photo for any contact:

- **Upload** — select an image file from your device (automatically resized)
- **View** — the photo appears in the contact list and detail view
- **Delete** — remove the photo at any time

Photos help you quickly identify contacts at a glance, especially in large address books.

## Search and filtering

Find contacts quickly using built-in search and organization tools:

- **Search** — type a name, email, or phone number to find a contact instantly
- **A–Z grouping** — contacts are grouped alphabetically by the first letter of their name, giving you a quick scannable list
- **Filter by address book** — show contacts from a specific address book
- **Filter by group** — show contacts that belong to a specific group

## CardDAV sync

solyto supports two-way CardDAV sync, keeping your contacts in sync with external contact services. Once configured, changes flow in both directions — edit a contact in solyto and it updates on the server, or edit it on the server and it updates in solyto.

- Google Contacts
- Apple Contacts
- Nextcloud Contacts
- Any CardDAV-compatible service

Changes made in solyto are pushed to the external server, and vice versa.

### Import process

Importing from an external CardDAV server is a multi-stage process:

1. **Start** — enter your external server's URL, username, and password
2. **Select** — choose which address books to import from the server
3. **Importing** — contacts are fetched and stored locally, with live progress
4. **Finished** — your contacts are available in solyto

See [DAV Sync](/integrations/dav-sync/) for detailed setup instructions.

## Exporting

Your contacts can be exported as a `.vcf` (vCard) file, compatible with any contacts application. See [Exporting Data](/integrations/exporting/).
