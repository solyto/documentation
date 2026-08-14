---
title: Profile & Settings
description: Manage your profile image, password, and application settings.
---

Your profile and settings let you personalize solyto to fit how you work.

## Profile

The **Profile** page shows your avatar, name, and user ID. From here you can:

- **Change your profile image** — click the avatar and choose a new image (2 MB max)
- **Manage friends** — see your friend list and handle incoming/outgoing friend requests
- **Admin** — if you're an admin, a shield icon links to the [Admin](/account/dev-requests/) area
- **Log out** — sign out of the current device

## Settings

Settings is organized into eight tabs:

### Todos

Configure how todos behave across the app:

- Manage **categories** (create, rename, delete)
- Manage **workspaces** — attach/detach categories and toggle the **Hide It** flag

### Tags

Manage your tags globally. Create, rename, recolor, and delete tags.

### Localization

Control how dates, times, and numbers are displayed:

| Setting | Options |
|---------|---------|
| Language | English, German, French, Spanish |
| Timezone | Any IANA timezone (e.g. `Europe/Berlin`, `America/New_York`) |
| Date format | `dd.mm.YYYY`, `dd.mm.YY`, `YYYY/mm/dd`, `YY/mm/dd`, `YYYY-mm-dd`, `YY-mm-dd` |
| Time format | 24-hour (`13:37`) or 12-hour (`1.37 PM`) |

### Features

Toggle individual features on or off. If you don't use a feature, you can hide it from the sidebar and dashboard. This keeps your interface clean.

### Notifications

Configure how and when solyto notifies you:

- Connect the [Telegram bot](/integrations/telegram/) and enable push notifications
- Toggle each notification type per channel (UI, Email, Push, Bot)

See [Notifications](/customization/notifications/) for details.

### App

Application-level settings:

- **Theme** — choose from 10 themes (see [Themes](/customization/themes/))
- **Animations** — turn CSS/JS animations on or off
- **Restart the welcome tour** — replay the guided tour
- **Install as App** — install solyto as a [Progressive Web App](/account/pwa/)
- **Version** — the installed app version

### Security

Manage your passkeys:

- Add a passkey (WebAuthn), rename it, or delete it
- See when each passkey was last used

### Export Data

Export your data from solyto. See [Exporting](/integrations/exporting/) for details on supported formats.

## Changing your password

Passwords are set at registration and via the password reset flow. Passwords must be at least **12 characters** long, and solyto checks new passwords against a database of known compromised passwords, rejecting any that appear in a known breach.
