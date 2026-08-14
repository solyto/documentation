---
title: Aufgaben
description: Aufgabenverwaltung mit Arbeitsbereichen, Tags, intelligenter Bewertung und mehreren Ansichten.
---

Aufgaben ist ein vollwertiger Task-Manager, der fest in solyto integriert ist. Er unterstützt Arbeitsbereiche, Kategorien, Tags, ein intelligentes Bewertungssystem (Smart Score) und mehrere Ansichten — sodass du Aufgaben so organisieren kannst, wie es für dich passt. Eine einzeilige Erstellungssyntax lässt dich Aufgaben hinzufügen, ohne ein Formular zu öffnen.

## Aufgaben erstellen

### Standardformular

Klicke auf die **+**-Schaltfläche, um das Aufgabenformular zu öffnen. Fülle die benötigten Felder aus — nur der Titel ist Pflicht:

- **Titel** — der Name der Aufgabe
- **Beschreibung** — optionale Details oder Kontext
- **Link** — eine URL zur Aufgabe anhängen
- **Priorität** — niedrig, mittel oder hoch
- **Status** — Backlog, ausstehend, in Bearbeitung, wartend, fast fertig
- **Aufwand** — niedrig, mittel oder hoch
- **Fortschritt** — ein Schieberegler von 0 bis 100
- **Fälligkeitsdatum** — wann die Aufgabe erledigt sein soll
- **Kategorie** — einer Kategorie zuweisen
- **Tags** — ein oder mehrere farbige Tags

### Einzeilige Erstellung

Tippe direkt in das Eingabefeld mit einer kurzen Befehlssyntax:

```
Buy groceries #shopping /errands due:tomorrow repeat:weekly link:https://shop.example.com
```

| Syntax | Bedeutung |
|--------|---------|
| `#tag` | Weist ein Tag zu (wird automatisch erstellt, falls es noch nicht existiert) |
| `/kategorie` | Weist eine Kategorie zu (wird automatisch erstellt, falls sie noch nicht existiert) |
| `due:tomorrow` | Fälligkeitsdatum — akzeptiert auch `today` oder ein vollständiges Datum (`2026-06-01`, `01.06.2026`) |
| `repeat:daily` / `repeat:weekly` / `repeat:monthly` / `repeat:yearly` | Nach einem Zeitplan wiederholen — erfordert ein Fälligkeitsdatum |
| `link:https://...` | Eine URL an die Aufgabe anhängen |

Das Eingabefeld bietet Autovervollständigung für Tags (`#`), Kategorien (`/`), Fälligkeitsdaten (`due:`) und Wiederholungen (`repeat:`). Wenn du `repeat:` ohne `due:` verwendest, weist dich solyto darauf hin, dass eine Wiederholung ein Fälligkeitsdatum benötigt.

### Schnelleingabe

Über die schwebende Schaltfläche für die Schnelleingabe (unten rechts) kannst du von überall in der App eine Aufgabe erstellen. Details dazu findest du unter [Schnelleingabe](/dashboard/quick-add/).

## Eigenschaften einer Aufgabe

Jede Aufgabe hat folgende Eigenschaften:

| Eigenschaft | Werte | Beschreibung |
|----------|--------|-------------|
| Titel | Freitext | Der Name der Aufgabe (erforderlich) |
| Beschreibung | Freitext | Optionale Details |
| Link | URL | Einen zugehörigen Link anhängen |
| Priorität | Niedrig, Mittel, Hoch | Wie dringend die Aufgabe ist |
| Status | Backlog, Ausstehend, In Bearbeitung, Wartend, Fast fertig | Wo sich die Aufgabe in deinem Arbeitsablauf befindet |
| Aufwand | Niedrig, Mittel, Hoch | Wie viel Arbeit die Aufgabe erfordert |
| Fortschritt | 0–100 | Prozentualer Abschluss |
| Fälligkeitsdatum | Datum | Angestrebtes Fertigstellungsdatum |
| Kategorie | Zugewiesene Kategorie | Gruppiert Aufgaben |
| Tags | Ein oder mehrere Tags | Farbige Kennzeichnungen zum Filtern |

## Wiederkehrende Aufgaben

Aufgaben können sich nach einem Zeitplan wiederholen. Wenn du eine wiederkehrende Aufgabe abschließt, wird das nächste Vorkommen automatisch erstellt.

| Einstellung | Optionen |
|---------|---------|
| Häufigkeit | Täglich, Wöchentlich, Monatlich, Jährlich |
| Intervall | Alle N Tage/Wochen/Monate/Jahre |
| Enddatum | Optionales Datum, um die Wiederholung zu beenden |

Zum Beispiel kannst du eine Aufgabe so einstellen, dass sie sich alle 2 Wochen montags wiederholt und am 31. Dezember endet.

## Unteraufgaben

Jede Aufgabe kann Unteraufgaben haben:

- **Hinzufügen** von Unteraufgaben, um eine Aufgabe in kleinere Schritte zu unterteilen
- **Einzeln abschließen** von Unteraufgaben — sie wirken sich nicht auf den Status der übergeordneten Aufgabe aus
- **Löschen** von Unteraufgaben, die du nicht mehr brauchst

Unteraufgaben werden direkt unter der übergeordneten Aufgabe angezeigt.

## Arbeitsbereiche

Mit Arbeitsbereichen kannst du Kategorien gruppieren. Das ist nützlich, um verschiedene Lebensbereiche zu trennen — zum Beispiel einen Arbeitsbereich "Arbeit" und einen Arbeitsbereich "Privat".

### Funktionen von Arbeitsbereichen

- **Kategorien gruppieren** — Kategorien einem Arbeitsbereich zuordnen
- **Standard-Arbeitsbereich festlegen** — neue Aufgaben verwenden standardmäßig die Kategorien dieses Arbeitsbereichs
- **Kategorien zuordnen/entfernen** — Kategorien jederzeit zwischen Arbeitsbereichen verschieben

### Ausblenden

Jeder Arbeitsbereich hat einen **Ausblenden**-Schalter. Ist er aktiviert, werden Aufgaben, die den Kategorien dieses Arbeitsbereichs zugewiesen sind, in der Hauptansicht der Aufgaben ausgeblendet. So kannst du dich auf einen Arbeitsbereich konzentrieren, ohne Aufgaben aus anderen Bereichen zu löschen oder zu archivieren. Deine Einstellung für "Ausblenden" wird geräteweise gespeichert.

## Automatisch erstellte Aufgaben

solyto kann Aufgaben automatisch erstellen (zum Beispiel über wiederkehrende Zeitpläne oder andere Funktionen). Automatisch erstellte Aufgaben bleiben im Hintergrund: Sie erscheinen nur dann in der Hauptansicht, wenn sie innerhalb der nächsten 3 Tage fällig sind.

## Kategorien

Kategorien organisieren Aufgaben in Gruppen. Weise beim Erstellen oder Bearbeiten einer Aufgabe eine Kategorie zu. Kategorien können zur weiteren Organisation Arbeitsbereichen zugewiesen werden.

## Tags

Tags sind ein globales System, das über Aufgaben und Bibliotheken hinweg geteilt wird. Jeder Tag hat eine Farbe, sodass du zusammengehörige Elemente auf einen Blick erkennst. Füge einer beliebigen Aufgabe Tags hinzu, um sie flexibel und kategorieübergreifend zu organisieren.

## Ansichten

solyto bietet vier Ansichten für deine Aufgaben:

| Ansicht | Beschreibung |
|------|-------------|
| **Liste** | Standard-Flachliste, sortierbar nach jeder Spalte |
| **Kanban** | Spalten basierend auf dem Status — ziehe Aufgaben zwischen den Spalten, um den Status zu ändern |
| **Übersicht** | Kompakte Zusammenfassung mit den wichtigsten Feldern auf einen Blick |
| **Karte** | Detaillierte Karten mit allen sichtbaren Eigenschaften |

Wechsle über den Ansichts-Umschalter oben auf der Aufgaben-Seite zwischen den Ansichten.

## Smart Score

Jede Aufgabe erhält automatisch einen **Smart Score**, der widerspiegelt, wie relevant oder dringend sie ist. Du kannst deine Aufgabenliste nach dem Smart Score sortieren, um zu sehen, was zuerst Aufmerksamkeit braucht.

Der Score berechnet sich aus:

| Faktor | Punkte |
|--------|--------|
| Basiswert Priorität | Hoch +100, Mittel +50, Niedrig +0 |
| Aufwand-Bonus | Niedrig +50, Mittel +25, Hoch +0 |
| Überfällig | +100 |
| Heute fällig | +50 |
| Morgen fällig | +25 |
| Älter als 30 Tage | +50 |

Die Summe wird auf einen Relevanzwert zwischen 0 und 1 normiert. Höhere Werte erscheinen beim Sortieren nach Smart Score zuerst, sodass überfällige Aufgaben mit hoher Priorität nach oben wandern.

## Filtern

Nutze Filter, um deine Aufgabenliste einzugrenzen:

- **Status** — zeige nur Backlog, ausstehend, in Bearbeitung usw.
- **Priorität** — zeige nur hohe, mittlere oder niedrige Priorität
- **Fälligkeitsdatum** — heute, morgen, diese Woche, überfällig
- **Aufwand** — niedrig, mittel, hoch
- **Kategorie** — zeige Aufgaben einer bestimmten Kategorie
- **Tag** — zeige Aufgaben mit einem bestimmten Tag
- **Arbeitsbereich** — zeige Aufgaben eines bestimmten Arbeitsbereichs

Kombiniere mehrere Filter für eine präzise Kontrolle darüber, was du siehst.
