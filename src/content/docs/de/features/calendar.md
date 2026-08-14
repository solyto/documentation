---
title: Kalender
description: Terminverwaltung mit CalDAV-Synchronisierung, wiederkehrenden Terminen und Kalenderfreigabe.
---

Der Kalender ist ein vollwertiger Terminmanager, der fest in solyto integriert ist. Er unterstützt mehrere Kalender, wiederkehrende Termine, das Teilen mit Freunden und eine bidirektionale CalDAV-Synchronisierung mit externen Diensten wie Google Calendar und Apple Calendar.

## Termine erstellen

Klicke auf einen beliebigen Tag oder Zeitslot, um einen Termin zu erstellen. Termine unterstützen:

- **Titel** — der Name des Termins
- **Beschreibung** — optionale Details
- **Ort** — wo der Termin stattfindet
- **Start- und Endzeit** — oder als ganztägig markieren
- **Wiederholungsplan** — täglich, wöchentlich, monatlich oder nach einer benutzerdefinierten Regel wiederholen
- **Kalender** — einem deiner Kalender zuweisen

## Mehrere Kalender

Du kannst so viele Kalender anlegen, wie du brauchst, und jeden farblich kennzeichnen. Gängige Einrichtungen sind:

- **Privat** — deine eigenen Termine
- **Arbeit** — Meetings und Deadlines
- **Familie** — gemeinsame Familientermine

Jeder Kalender erhält seine eigene Farbe. Du kannst Kalender per Drag-and-Drop neu anordnen sowie einzelne Kalender ein- oder ausblenden. Kalender können dir gehören, mit dir geteilt sein (ausstehende oder angenommene Einladung) oder abonniert sein.

## Kalenderansichten

solyto bietet vier Ansichten, jede mit einer für Mobilgeräte optimierten Variante:

| Ansicht | Beschreibung |
|------|-------------|
| **Monat** | Vollständiges Monatsraster mit Terminpunkten |
| **Woche** | Stundenweise Spalten für die Woche |
| **Tag** | Detaillierte Stundenansicht eines einzelnen Tages |
| **Liste** | Chronologische Liste bevorstehender Termine |

## Wiederkehrende Termine

Termine können sich nach RRULE-Regeln (RFC 5545) wiederholen. Unterstützte Muster sind:

- Täglich, wöchentlich, monatlich, jährlich
- Benutzerdefinierte Intervalle (z. B. alle 2 Wochen)
- Bestimmte Wochentage (z. B. jeden Montag und Mittwoch)

### Wiederkehrende Termine bearbeiten

Wenn du einen wiederkehrenden Termin bearbeitest oder löschst, fragt solyto, ob die Änderung angewendet werden soll auf:

- **Nur dieses Vorkommen** — die einzelne Instanz
- **Alle Vorkommen** — jede Instanz des wiederkehrenden Termins

## Kalender teilen

Teile deine Kalender mit Freunden, die ebenfalls solyto nutzen:

1. Öffne das **Teilen**-Fenster eines Kalenders (nur der Besitzer kann teilen)
2. Wähle einen Freund aus deiner [Freundesliste](/account/friends/) aus — er erhält eine Einladung
3. Der Freund **nimmt die ausstehende Einladung an oder lehnt sie ab**
4. **Zugriff widerrufen** — der Besitzer kann die Freigabe jederzeit beenden
5. **Abbestellen** — Empfänger können geteilte Kalender jederzeit wieder abbestellen

Geteilte Kalender erscheinen neben deinen eigenen, mit einer Statusanzeige für die Einladung (ausstehend / angenommen).

## Todos und Notizen an Termine anhängen

An jeden Termin können Todos und Notizen angehängt werden, sodass zusammengehörige Inhalte beisammenbleiben:

- **Anhängen** eines Todos oder einer Notiz über eine durchsuchbare Auswahl beim Bearbeiten eines Termins
- **Trennen** jederzeit möglich
- Angehängte Elemente sind am Termin im Kalender sichtbar

Todos mit Fälligkeitsdatum erscheinen zusätzlich direkt im Kalender und können dort abgeschlossen werden.

## CalDAV-Synchronisierung

solyto unterstützt eine bidirektionale CalDAV-Synchronisierung, die deine Termine mit externen Kalenderdiensten abgleicht:

- Google Calendar
- Apple Calendar
- Nextcloud Calendar
- Jeder andere CalDAV-kompatible Dienst

Der CalDAV-Server von solyto läuft unter `https://dav.solyto.de` (oder deiner eigenen Instanz). Du meldest dich mit deiner solyto-E-Mail-Adresse und deinem Passwort an.

### Importvorgang

Der Import von einem externen CalDAV-Server läuft in mehreren Schritten ab:

1. **Start** — gib die URL, den Benutzernamen und das Passwort deines externen Servers ein
2. **Auswahl** — wähle aus, welche Kalender importiert werden sollen
3. **Import** — Termine werden mit Live-Fortschrittsanzeige abgerufen und gespeichert
4. **Fertig** — deine Kalender stehen in solyto zur Verfügung

Eine ausführliche Anleitung findest du unter [DAV-Synchronisierung](/integrations/dav-sync/).

## Benachrichtigungen

Du kannst Benachrichtigungen zu bevorstehenden Terminen per Telegram oder Browser-Push erhalten. Siehe [Benachrichtigungen](/customization/notifications/).

## Exportieren

Deine Kalenderdaten können als `.ics`-Datei exportiert werden, kompatibel mit jeder Kalenderanwendung. Siehe [Daten exportieren](/integrations/exporting/).
