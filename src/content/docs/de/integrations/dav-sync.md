---
title: DAV-Synchronisierung
description: Bidirektionale CalDAV- und CardDAV-Synchronisierung mit Google, Apple, Nextcloud und mehr.
---

solyto enthält einen integrierten DAV-Server auf Basis von SabreDAV mit einem PostgreSQL-Backend. Das ermöglicht dir eine bidirektionale CalDAV- (Kalender) und CardDAV-Synchronisierung (Kontakte) mit jedem kompatiblen Client — ohne Plugins oder Erweiterungen.

## Server-URL

| Instanz | URL |
|----------|-----|
| Gehostet (solyto.app) | `https://dav.solyto.de` |
| Selbst gehostet | Dein eigener DAV-Endpunkt (typischerweise `https://your-domain/dav`) |

## Authentifizierung

Die DAV-Synchronisierung nutzt **Basic Auth** mit deinen solyto-Kontodaten:

- **Benutzername:** deine solyto-E-Mail-Adresse
- **Passwort:** dein solyto-Kontopasswort

Die Verbindungsdetails (Server-URL, Benutzername, Passwort-Hinweis) werden im **Sync**-Fenster auf den Seiten Kalender und Kontakte angezeigt.

## CalDAV (Kalender-Synchronisierung)

CalDAV hält deinen solyto-Kalender mit externen Kalender-Apps synchron. Änderungen in beide Richtungen werden überall übernommen.

### Kompatible Clients

- **Google Calendar** (über CalDAV-Unterstützung oder Drittanbieter-Sync)
- **Apple Calendar** (macOS, iOS)
- **Thunderbird** (über integriertes CalDAV)
- **DAVx** (Android)
- **Nextcloud Calendar**
- **GNOME Calendar** / **KDE KOrganizer** (Linux)
- Jeder andere CalDAV-kompatible Client

### Einrichtung

1. Öffne in solyto **Kalender → Sync**, um deine DAV-Server-URL und Zugangsdaten zu sehen
2. Öffne deine Kalender-App und füge ein neues CalDAV-Konto hinzu
3. Gib die Server-URL ein (`https://dav.solyto.de` bei der gehosteten Version), deine E-Mail und dein Passwort
4. Deine solyto-Kalender erscheinen als verfügbare Kalender zum Abonnieren

Änderungen, die du in solyto oder deiner externen Kalender-App vornimmst, werden automatisch in beide Richtungen synchronisiert.

### Kalenderfreigabe

solyto unterstützt Kalenderfreigabe über CalDAV. Du kannst Kalender mit anderen solyto-Nutzern teilen und Berechtigungen festlegen (nur lesen oder lesen und schreiben).

## CardDAV (Kontakt-Synchronisierung)

CardDAV hält deine solyto-Kontakte mit externen Kontakte-Apps synchron.

### Kompatible Clients

- **Google Contacts**
- **Apple Contacts** (macOS, iOS)
- **DAVx** (Android)
- **Nextcloud Contacts**
- **Thunderbird** (über die CardBook-Erweiterung)
- Jeder andere CardDAV-kompatible Client

### Einrichtung

1. Öffne in solyto **Kontakte → Sync**, um deine DAV-Server-URL und Zugangsdaten zu sehen
2. Öffne deine Kontakte-App und füge ein neues CardDAV-Konto hinzu
3. Gib die Server-URL, deine E-Mail und dein Passwort ein
4. Deine solyto-Kontakte werden automatisch synchronisiert

## Import über CalDAV / CardDAV

Du kannst Kalender und Kontakte auch direkt von einem externen DAV-Server in solyto importieren:

### Kalenderimport

1. Gehe in solyto zu **Kalender → Import**
2. Gib die URL, den Benutzernamen und das Passwort deines externen Servers ein
3. Ermittle, welche Kalender verfügbar sind, und wähle die zu importierenden aus
4. Termine werden mit Live-Fortschrittsanzeige abgerufen und gespeichert

### Kontaktimport

1. Gehe in solyto zu **Kontakte → Import**
2. Gib die URL, den Benutzernamen und das Passwort deines externen Servers ein
3. Ermittle, welche Adressbücher verfügbar sind, und wähle die zu importierenden aus
4. Kontakte werden mit Live-Fortschrittsanzeige abgerufen und gespeichert

Das funktioniert mit jedem CalDAV-/CardDAV-Server (Nextcloud, iCloud usw.).

## Synchronisierungshäufigkeit

Die DAV-Synchronisierung erfolgt auf solyto.app nahezu in Echtzeit. Externe Clients fragen je nach App typischerweise alle 5–15 Minuten ab. Manche Clients (wie DAVx auf Android) erlauben es, das Synchronisierungsintervall manuell zu konfigurieren.

## Fehlerbehebung

### Synchronisierung funktioniert nicht

- Überprüfe, ob die Server-URL korrekt ist (`https://dav.solyto.de` bei der gehosteten Version)
- Stelle sicher, dass E-Mail und Passwort mit deinem solyto-Konto übereinstimmen
- Falls du kürzlich dein solyto-Passwort geändert hast, aktualisiere die Zugangsdaten in deinem DAV-Client
- Erzwinge eine manuelle Synchronisierung über die externe App (die meisten Clients haben eine Aktualisieren-Schaltfläche)

### Termine erscheinen nicht

- Überprüfe, ob du den richtigen Kalender in deinem DAV-Client abonniert hast
- Manche Clients erfordern, dass du einen neu entdeckten Kalender explizit aktivierst
- Vergewissere dich zunächst, dass der Termin in der Weboberfläche von solyto existiert

### Doppelte Termine

- Das passiert meist, wenn derselbe Kalender zweimal verbunden ist. Entferne eine der Verbindungen und erzwinge eine Synchronisierung.

### Besonderheiten bei Google Calendar

Google Calendar erfordert, dass [die CalDAV-Unterstützung aktiviert ist](https://support.google.com/calendar/answer/99358), und benötigt bei aktivierter Zwei-Faktor-Authentifizierung möglicherweise app-spezifische Passwörter.

### Self-Hosting

Wenn du solyto selbst hostest, läuft der DAV-Server als Teil des Stacks. Stelle sicher, dass:

- der SabreDAV-Dienst läuft
- PostgreSQL erreichbar ist
- dein Reverse Proxy DAV-Anfragen an den richtigen Dienst weiterleitet
- TLS konfiguriert ist (DAV-Clients erfordern in der Regel HTTPS)
