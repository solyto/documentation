---
title: Check-in
description: Verfolge Stimmung, Gesundheit und Gewohnheiten täglich mit 12 konfigurierbaren Trackern.
---

Der Check-in ist ein tägliches Tracking-Tool, das fest in solyto integriert ist. Er bietet 12 konfigurierbare Tracker — die meisten auf einer Skala von 1–5 — zum täglichen Erfassen deiner Stimmung, Gesundheitswerte und Gewohnheiten. Mit der Zeit entsteht daraus ein persönliches Protokoll mit Trenddiagrammen, Durchschnittswerten und Statistiken, mit denen du Muster in deinem Wohlbefinden erkennen kannst.

## Tracker

Der Check-in umfasst 12 Tracker, die alle auf einer Skala von 1–5 bewertet werden, sofern nicht anders angegeben. Auf der Skala steht 1 für das untere und 5 für das obere Ende:

| Tracker | Skala | Beschreibung |
|---------|-------|-------------|
| **Stimmung** | 1–5 | Allgemeine Stimmung des Tages |
| **Schlaf** | 1–5 | Schlafqualität |
| **Träume** | 1–5 | Ob und wie intensiv du geträumt hast |
| **Essensqualität** | 1–5 | Wie gesund dein Essen war |
| **Essensmenge** | 1–5 | Wie viel du gegessen hast (1 = zu wenig, 5 = zu viel) |
| **Wasser** | 1–5 | Wie viel Wasser du getrunken hast |
| **Sport** | Binär | Ob du Sport gemacht hast — falls ja, wähle eine Sportart |
| **Arbeit** | 1–5 | Produktivität oder Arbeitszufriedenheit |
| **Menstruation** | 1–5 | Zugehöriges Tracking |
| **Alkohol** | 1–5 | Alkoholkonsum |
| **Rauchen** | 1–5 | Konsummenge beim Rauchen |
| **Soziales Leben** | 1–5 | Qualität sozialer Kontakte |

### Sportarten

Wenn du den Sport-Tracker als aktiv markierst, kannst du auswählen, welche Sportart du ausgeübt hast:

- Fitnessstudio
- Radfahren
- Wandern
- Spazieren
- Schwimmen
- Yoga

## Tracker anpassen

Nicht jeder Tracker ist für jeden relevant. Öffne **Einstellungen** (Zahnrad-Symbol) in der Check-in-Navigation, um:

- **Einzelne Tracker zu aktivieren oder zu deaktivieren** — nur aktivierte Tracker erscheinen im täglichen Erfassungsformular (mindestens einer muss aktiviert bleiben)
- **Tracker als bewertet zu markieren** — bewertete Tracker fließen in die Gesamtpunktzahl und das Dashboard-Widget ein (der Sport-Tracker wird nie bewertet)
- **Deine Sportarten auszuwählen** — wähle bis zu 5 Sportarten zum Tracken aus; tippe auf eine ausgewählte und dann auf eine nicht ausgewählte Sportart, um sie zu tauschen

So bleibt dein täglicher Check-in auf das Wesentliche fokussiert.

## Tägliche Erfassung

Fülle jeden Tag deine Tracker über das Check-in-Formular aus. Das Formular zeigt nur deine aktivierten Tracker an, damit es schnell auszufüllen ist. Du kannst jederzeit zu vergangenen Einträgen zurückgehen und sie bearbeiten — navigiere einfach zum jeweiligen Datum und aktualisiere die Werte.

Ein täglicher Check-in dauert in der Regel weniger als eine Minute, sobald du dich daran gewöhnt hast.

## Verlauf

Durchstöbere deine vergangenen Einträge in einem **Monatsraster**:

- Eine tagesweise Matrix mit Tracker-Symbolen pro Tag
- Klicke auf eine beliebige Zelle, um den Wert eines Trackers für diesen Tag schnell zu bearbeiten
- Klicke auf die Tageszahl, um die vollständige Ansicht dieses Tages zu öffnen
- Navigiere monatsweise durch deinen Verlauf

### Durchschnittswerte und Zusammenfassungen

Die Verlaufsseite zeigt außerdem **Durchschnittswerte** pro Tracker sowie deinen Gesamtdurchschnitt und **Check-in-Zusammenfassungen** — Zusammenfassungen in natürlicher Sprache, die jeden Tag beschreiben ("gute Stimmung, gut geschlafen, aber Alkohol getrunken") sowie Zeitraum-Zusammenfassungen für diese/letzte Woche und diesen/letzten Monat, einschließlich deiner Sportzahlen.

## Trends

Die Trends-Seite zeigt weiche Liniendiagramme für jeden aktiven, bewerteten Tracker (Sport ausgenommen), mit Zeiträumen von **30 Tagen, 3 Monaten, 6 Monaten oder allen Daten**:

Trends helfen dir, Muster zu erkennen — zum Beispiel, ob deine Schlafqualität mit deiner Stimmung zusammenhängt oder ob mehr Sport deine allgemeinen Wohlbefindenswerte verbessert.

## Dashboard-Widget

Das Check-in-Widget erscheint auf deinem [Dashboard](/dashboard/overview/) und zeigt den Mittelwert je bewertetem Tracker als farbcodierte Balken sowie deinen Gesamtscore.

## Erinnerungen

Richte Check-in-Erinnerungen ein, um das tägliche Tracking zur Gewohnheit zu machen:

- **Telegram** — erhalte täglich eine Erinnerungsnachricht über den Telegram-Bot
- **Push-Benachrichtigungen** — Browser-Push-Benachrichtigung zu einer von dir gewählten Uhrzeit

Siehe [Benachrichtigungen](/customization/notifications/) und [Telegram](/integrations/telegram/) zur Einrichtung.

## Routen

| Route | Beschreibung |
|-------|-------------|
| `/check-in` | Heutiger Check-in-Eintrag |
| `/check-in/date/[date]` | Check-in für ein bestimmtes Datum |
| `/check-in/history` | Kalenderübersicht vergangener Einträge |
| `/check-in/trends` | Statistiken und Trenddiagramme |

## Exportieren

Check-in-Daten werden als `.csv` exportiert, kompatibel mit jedem Tabellenkalkulationsprogramm. Siehe [Daten exportieren](/integrations/exporting/).
