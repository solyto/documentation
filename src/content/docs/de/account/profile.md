---
title: Profil & Einstellungen
description: Verwalte dein Profilbild, dein Passwort und die Anwendungseinstellungen.
---

Dein Profil und deine Einstellungen ermöglichen es dir, solyto so anzupassen, dass es zu deiner Arbeitsweise passt.

## Profil

Die Seite **Profil** zeigt deinen Avatar, deinen Namen und deine Benutzer-ID. Von hier aus kannst du:

- **Dein Profilbild ändern** — klicke auf den Avatar und wähle ein neues Bild (max. 2 MB)
- **Freunde verwalten** — deine Freundesliste einsehen und eingehende/ausgehende Freundschaftsanfragen bearbeiten
- **Admin** — wenn du Administrator bist, führt ein Schild-Symbol zum Admin-Bereich
- **Abmelden** — dich vom aktuellen Gerät abmelden

## Einstellungen

Die Einstellungen sind in acht Tabs unterteilt:

### Todos

Konfiguriere, wie sich Todos in der gesamten App verhalten:

- **Kategorien** verwalten (erstellen, umbenennen, löschen)
- **Workspaces** verwalten — Kategorien zuordnen/entfernen und das Flag **Hide It** umschalten

### Tags

Verwalte deine Tags global. Erstellen, umbenennen, Farbe ändern und löschen.

### Lokalisierung

Steuere, wie Datum, Uhrzeit und Zahlen angezeigt werden:

| Einstellung | Optionen |
|---------|---------|
| Sprache | Englisch, Deutsch, Französisch, Spanisch |
| Zeitzone | Jede IANA-Zeitzone (z. B. `Europe/Berlin`, `America/New_York`) |
| Datumsformat | `dd.mm.YYYY`, `dd.mm.YY`, `YYYY/mm/dd`, `YY/mm/dd`, `YYYY-mm-dd`, `YY-mm-dd` |
| Uhrzeitformat | 24-Stunden (`13:37`) oder 12-Stunden (`1.37 PM`) |

### Features

Schalte einzelne Funktionen ein oder aus. Wenn du eine Funktion nicht nutzt, kannst du sie aus der Seitenleiste und dem Dashboard ausblenden. So bleibt deine Oberfläche übersichtlich.

### Notifications

Konfiguriere, wie und wann solyto dich benachrichtigt:

- Verbinde den [Telegram-Bot](/integrations/telegram/) und aktiviere Push-Benachrichtigungen
- Schalte jeden Benachrichtigungstyp pro Kanal (UI, E-Mail, Push, Bot) einzeln um

Details findest du unter [Benachrichtigungen](/customization/notifications/).

### App

Einstellungen auf Anwendungsebene:

- **Theme** — wähle aus 10 Themes (siehe [Themes](/customization/themes/))
- **Animationen** — CSS/JS-Animationen ein- oder ausschalten
- **Willkommenstour neu starten** — die geführte Tour erneut abspielen
- **Als App installieren** — installiere solyto als [Progressive Web App](/account/pwa/)
- **Version** — die installierte App-Version

### Security

Verwalte deine Passkeys:

- Einen Passkey (WebAuthn) hinzufügen, umbenennen oder löschen
- Einsehen, wann jeder Passkey zuletzt verwendet wurde

### Export Data

Exportiere deine Daten aus solyto. Details zu den unterstützten Formaten findest du unter [Exportieren](/integrations/exporting/).

## Passwort ändern

Passwörter werden bei der Registrierung und über den Passwort-zurücksetzen-Ablauf festgelegt. Passwörter müssen mindestens **12 Zeichen** lang sein, und solyto gleicht neue Passwörter mit einer Datenbank bekannter kompromittierter Passwörter ab und lehnt jedes ab, das in einem bekannten Datenleck auftaucht.
