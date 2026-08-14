---
title: Dashboard
description: Deine tägliche Übersicht — Wetter, Kalender, Inspiration und ein schneller Blick auf alles Wichtige.
---

Das Dashboard ist die Startseite von solyto, erreichbar über die Root-Route `/`. Es bündelt Daten aus allen deinen Funktionen in einer einzigen dreispaltigen Ansicht, sodass du auf einen Blick siehst, wie dein Tag aussieht.

## Layout

Das Dashboard ist in drei Spalten gegliedert. Auf mobilen Geräten werden die Spalten in derselben Reihenfolge vertikal gestapelt.

### Dein Tag (linke Spalte)

Alles, was du über heute wissen musst:

- **Wetter** — Aktuelle Bedingungen und die heutige Vorhersage von der Open-Meteo-API. Klicke auf den Stadtnamen, um nach einem neuen Ort zu suchen (mit einem °C/°F-Umschalter). Die Temperatureinheit wird in deinen Einstellungen gespeichert.
- **Heutige Termine** — Kalendertermine für heute, zusammengeführt aus all deinen aktiven Kalendern. Tippe auf einen Termin, um zur Ansicht [Kalender](/features/calendar/) zu springen.
- **Bevorstehende Termine** — Die nächsten Termine nach heute, damit du vorausplanen kannst.
- **Fällige Todos** — Todos, die heute fällig oder überfällig sind, mit einem farbigen Prioritätspunkt. Markiere sie direkt vom Dashboard aus als erledigt (ein bisschen Konfetti feiert deinen Erfolg).
- **Bewertete Todos** — Die 5 relevantesten Todos, sortiert nach einem intelligenten Score, der Priorität, geschätzten Aufwand, Überfälligkeit und Alter berücksichtigt. Das hilft dabei, die gerade wichtigsten Aufgaben sichtbar zu machen.

Wenn nichts geplant ist, zeigt die Spalte einen freundlichen Leerzustand: "Nothing on your plate today".

### Inspiration (mittlere Spalte)

Frischer Inhalt für den Start in den Tag:

- **Neue Musik-Veröffentlichungen** — Bis zu 5 neue Album-Veröffentlichungen von Künstlern in deiner [Musik-Bibliothek](/features/libraries/music/).
- **Neue Buch-Veröffentlichungen** — Bis zu 5 neue Buchveröffentlichungen von Autoren in deiner [Bücher-Bibliothek](/features/libraries/books/).
- **Neue Film-Veröffentlichungen** — Bis zu 5 neue Filme oder Serien, die es sich lohnt zu kennen.
- **Letzte Notizen** — Bis zu 5 zuletzt erstellte oder bearbeitete Notizen. Schneller Zugriff zurück auf deine [Notizen](/features/notes/).
- **Neueste Links** — Die zuletzt gespeicherten Links aus deiner [Link-Bibliothek](/features/libraries/links/).
- **Zitat des Tages** — Ein zufälliges Zitat aus deiner [Zitate-Bibliothek](/features/libraries/quotes/), täglich neu.

### Kurzüberblick (rechte Spalte)

Widgets mit Status auf einen Blick:

- **Check-In** — Ein schneller Blick auf deine täglichen [Check-In](/features/check-in/)-Werte: der Mittelwert pro bewertetem Tracker (farblich codierte Balken) sowie dein Gesamt-Score. Tippe durch, um den heutigen Eintrag zu erfassen oder zu bearbeiten.
- **Zeiterfassung** — Deine [Zeiterfassungs](/features/time-tracking/)-Summen für die laufende Woche mit einer Aufschlüsselung nach Projekt. Zeigt außerdem einen aktiven Timer an.
- **Shortcuts** — Vom Benutzer definierte Schnellzugriffs-Links mit Favicons, angezeigt als Liste mit Aktionen beim Hover. Verwalte sie über die Stift-Schaltfläche.

## Onboarding

Bei deinem ersten Besuch von solyto (wenn das Flag `first_visit` gesetzt ist) führt dich ein vierstufiger Onboarding-Dialog durch die Einrichtung:

1. **Welcome** — Eine Einführung in solyto und was es für dich tun kann.
2. **Localization** — Wähle deine Sprache, dein Datumsformat und dein Uhrzeitformat.
3. **Features** — Schalte um, welche Funktionen in der Navigation erscheinen. Du kannst aus 11 Funktionen wählen: Kalender, Todos, Notizen, Bibliotheken, Kontakte, Check-In, Finanzen, Zwischenablage, Dev Requests, Feeds und Zeiterfassung.
4. **Ready** — Ein Abschlussbildschirm, der deine Einrichtung bestätigt.

### Willkommenstour

Nachdem der Onboarding-Dialog abgeschlossen ist, startet automatisch eine geführte Willkommenstour. Sie führt dich Schritt für Schritt durch jede aktivierte Funktionsseite, damit du weißt, wo alles zu finden ist.

Du kannst die Tour jederzeit über **Einstellungen → App → "Take the tour"** neu starten.

## Das Dashboard anpassen

Du bestimmst über **Einstellungen → Features**, was auf dem Dashboard angezeigt wird. Wird eine Funktion deaktiviert, verschwindet sie sowohl aus den Dashboard-Widgets als auch aus der Seitenleiste. Wenn du zum Beispiel Finanzen deaktivierst, verschwinden alle finanzbezogenen Widgets vom Dashboard.

Eine Anpassung auf Widget-Ebene (Neuanordnen, einzelne Widgets ausblenden) ist derzeit nicht möglich.

## Verhalten auf Mobilgeräten

Auf kleineren Bildschirmen werden die drei Spalten zu einem einzigen vertikalen Scrollbereich zusammengefasst. Die Reihenfolge bleibt erhalten: zuerst Dein Tag, dann Inspiration, dann Kurzüberblick. Alle Widgets bleiben funktionsfähig — du kannst Todos abschließen, Timer starten und Check-In-Einträge hinzufügen, genau wie auf dem Desktop.

## Quick Add

Das Dashboard enthält eine schwebende Aktionsschaltfläche (FAB) für [Quick Add](/dashboard/quick-add/) — ein intelligentes Werkzeug zur Inhaltserkennung, mit dem du eine URL oder einen Text einfügen kannst, und solyto legt es automatisch als Bibliothekseintrag, Todo oder Notiz ab. Alle Details findest du auf der Seite [Quick Add](/dashboard/quick-add/).
