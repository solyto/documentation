---
title: Zeiterfassung
description: Erfasse Zeit für Projekte mit einem integrierten Pomodoro-Timer.
---

Mit der Zeiterfassung kannst du Zeit für Projekte und Kategorien protokollieren. Sie enthält einen integrierten Pomodoro-Timer für fokussierte Arbeitsphasen, einen Start/Stopp-Timer für die Erfassung in Echtzeit sowie Statistiken, die zeigen, wie du deine Zeit über Projekte und Zeiträume hinweg verbringst.

## Projekte

Projekte sind die zentrale Organisationseinheit der Zeiterfassung:

- **Erstelle** ein Projekt mit Titel und Beschreibung
- **Bearbeite** Projektdetails jederzeit
- **Lösche** Projekte, die du nicht mehr brauchst
- **Kategorien zuweisen** — gruppiere Projekte nach Kunde, Typ oder einem beliebigen anderen Kontext

Jedes Projekt sammelt alle seine Zeiteinträge an einem Ort und liefert dir eine laufende Summe der erfassten Stunden. Die Projekt-Detailansicht zeigt alle Einträge nach Datum sortiert, mit der Gesamtzeit oben.

## Kategorien

Weise jedes Projekt zur Gruppierung einer Kategorie zu. Zum Beispiel:

- **Kundenarbeit** — abrechenbare Projekte
- **Privat** — Nebenprojekte und Lernen
- **Open Source** — Beiträge zur Community

Kategorien lassen dich aggregierte Statistiken über verwandte Projekte hinweg einsehen — nützlich, um zu verstehen, wie du deine Zeit verteilst.

## Zeiteinträge

Erfasse Zeit auf zwei Arten. Jeder Zeiteintrag enthält eine Beschreibung, Start-/Endzeit (oder Dauer) und eine Projektzuweisung.

### Manuelle Eingabe

Erstelle einen Zeiteintrag durch Ausfüllen von:

- **Beschreibung** — woran du gearbeitet hast
- **Startzeit** und **Endzeit** — oder gib die Dauer direkt ein
- **Projekt** — zu welchem Projekt die Zeit gehört

Manuelle Eingabe eignet sich, um Zeit im Nachhinein zu erfassen — zum Beispiel, um gestrige Arbeit einzutragen oder Zeit hinzuzufügen, die du zu tracken vergessen hast.

Du kannst bestehende Einträge auch bearbeiten oder löschen, um Fehler zu korrigieren.

### Start/Stopp-Timer

Nutze den integrierten Timer, um Zeit in Echtzeit zu erfassen:

1. Starte einen Timer für ein Projekt (optional mit Beschreibung) — eine Live-Anzeige der verstrichenen Zeit im Format HH:MM:SS erscheint
2. Stoppe den Timer, wenn du fertig bist — die Dauer wird als Eintrag gespeichert

Der laufende Timer bleibt erhalten, auch wenn du navigierst — starte einen Timer auf dem Dashboard und stoppe ihn später von überall in der App.

## Pomodoro-Timer

Der Pomodoro-Timer ist fest in die Zeiterfassung von solyto integriert:

- **25-minütige Fokusphasen** — ohne Unterbrechungen arbeiten
- **5-minütige kurze Pausen** — zwischen den Phasen erholen
- **15-minütige lange Pause** — nach jeweils 4 Phasen
- **Zyklus-Punkte** — zeigen deine Position im aktuellen 4-Phasen-Zyklus
- **Signalton** — ein akustisches Signal am Ende jeder Phase

Du kannst den Pomodoro-Timer über das Dashboard-Widget starten, pausieren, fortsetzen, überspringen und zurücksetzen.

## Statistiken

Sieh dir deine erfasste Zeit aus mehreren Blickwinkeln an:

- **Zeitraum** — Von/Bis-Datum wählen
- **Nach Kategorie filtern** — über die Projekte einer Kategorie aggregieren
- **Gesamtzeit** — die Summe über deine Auswahl
- **Ringdiagramm nach Projekt** — wie sich die Zeit auf Projekte verteilt
- **Balkendiagramm nach Kategorie** — Zeitverteilung nach Kategorie

Nutze die Statistiken, um zu verstehen, wofür deine Zeit draufgeht, und passe deine Gewohnheiten an.

## Dashboard-Widget

Das Zeiterfassung-Widget auf dem [Dashboard](/dashboard/overview/) zeigt:

- Deine Gesamtzeit für die aktuelle Woche
- Eine Aufschlüsselung nach Projekt mit farbigen Balken
- Den Pomodoro-Timer, wenn er aktiv ist

Das gibt dir einen Überblick über deine aktuelle Sitzung, ohne die Arbeit zu verlassen.

## Routen

| Route | Beschreibung |
|-------|-------------|
| `/time-tracking` | Übersicht aller Projekte und letzten Einträge |
| `/time-tracking/[id]` | Projektdetails mit Einträgen und Statistiken |

## Exportieren

Zeiterfassungsdaten werden als `.csv` in einem Standard-Stundenzettelformat exportiert, kompatibel mit Tabellenkalkulationsprogrammen und Abrechnungssoftware. Der Export enthält alle Zeiteinträge mit den Spalten Projekt, Beschreibung, Startzeit, Endzeit und Dauer.

Siehe [Daten exportieren](/integrations/exporting/).
