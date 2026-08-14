---
title: Notizen
description: Ein Rich-Text-Notizbuch mit Ordnern, Tags und Markdown-Unterstützung.
---

Notizen (auch Notizbuch genannt) ist ein vollwertiges Notiz-Tool, das fest in solyto integriert ist. Es nutzt einen Rich-Text-Editor auf Basis von TipTap (ProseMirror), unterstützt eine hierarchische Ordnerstruktur, Tags, Neuanordnung per Drag-and-Drop, das Einbetten von Bildern und Kontextmenüs per Rechtsklick — alles privat in deinem Konto gespeichert.

## Editor

Notizen nutzt [TipTap](https://tiptap.dev/), einen auf ProseMirror basierenden Rich-Text-Editor. Er unterstützt sowohl WYSIWYG-Bearbeitung als auch Markdown-Kurzbefehle — tippe `#` für eine Überschrift, `-` für eine Aufzählungsliste oder ``` für einen Codeblock. Speichere mit der **Speichern**-Schaltfläche oder **Strg+S** (`Cmd+S` auf dem Mac); eine Anzeige "Gespeichert · Zeit" bestätigt deine letzte Speicherung.

### Unterstützte Formatierung

| Formatierung | Verwendung |
|-----------|------------|
| Überschriften | H1 bis H3 |
| Fett | Fett gedruckter Text |
| Kursiv | Kursiv gesetzter Text |
| Durchgestrichen | Durchgestrichener Text |
| Code | Inline-`Code` |
| Aufzählungslisten | Ungeordnete Listen |
| Nummerierte Listen | Geordnete Listen |
| Tabellen | Eine 3×3-Tabelle mit anpassbaren Spaltenbreiten und Zeilen-/Spaltenoperationen über ein Bubble-Menü einfügen |
| Bilder | Von der Festplatte hochladen, eine URL einfügen oder aus der Zwischenablage einfügen |
| Links | Beliebigen Text verlinken (markierter Text wird vorausgefüllt) |
| Codeblöcke | Eingerahmte Codeblöcke |
| Zitatblöcke | Zitierter Text |
| Horizontale Linien | Abschnittstrenner |

### Bilder

Bilder können auf drei Arten zu Notizen hinzugefügt werden:

1. **Hochladen** — eine Datei von deinem Gerät auswählen
2. **URL** — eine Bild-URL einfügen
3. **Zwischenablage** — ein kopiertes Bild direkt in den Editor einfügen

Hochgeladene Bilder werden in deinem solyto-Konto gespeichert und inline in die Notiz eingebettet.

## Hierarchische Kategorien

Organisiere Notizen in einer Baumstruktur aus Ordnern und Unterordnern:

- **Über- und untergeordnete Kategorien** — erstelle eine Ordnerstruktur so tief, wie du sie brauchst
- **Ein-/ausklappbarer Kategoriebaum** — klappe Zweige ein und aus; der Zustand bleibt zwischen den Sitzungen erhalten, sodass dein Layout immer erhalten bleibt
- **Drag and Drop** — ziehe eine Notiz in eine andere Kategorie, um sie sofort neu einzuordnen
- **Kategorien neu anordnen** — ändere die Reihenfolge der Kategorien im Baum

Der Kategoriebaum erscheint in der Seitenleiste und ermöglicht schnelle Navigation durch alle deine Notizen. Du kannst neue Unterordner auch direkt aus dem Baum heraus erstellen.

Kategorien unterstützen Verschachtelung — erstelle übergeordnete Ordner wie "Arbeit" mit Unterordnern wie "Projekte", "Meetings" und "Notizen" darunter.

## Favoriten

Markiere jede Notiz als **Favorit**, um sie für schnellen Zugriff anzuheften. Favoriten erscheinen unabhängig von ihrer Kategorie ganz oben in der Notizliste, sodass deine wichtigsten Notizen immer nur einen Klick entfernt sind.

Schalte den Favoritenstatus über den Notizkopf (Stern) oder das Rechtsklick-Kontextmenü um. Du kannst die Notizliste filtern, um nur Favoriten anzuzeigen.

## Übersicht

Die Notizen-Übersicht zeigt drei Bereiche: **Favoriten**, **Neue Notizen** und **Zuletzt aktualisiert** — ein schneller Weg, um zu Aktuellem oder Wichtigem zurückzukehren.

## Tags

Füge einer beliebigen Notiz einen oder mehrere Tags hinzu. Tags werden funktionsübergreifend in solyto geteilt, sodass du dieselben Tags für Notizen, Todos und Bibliothekseinträge verwenden kannst. Jeder Tag hat eine Farbe zur visuellen Unterscheidung.

Tags bieten eine kategorieübergreifende Möglichkeit, verwandte Notizen zu finden — markiere zum Beispiel alle projektbezogenen Notizen mit "Arbeit", unabhängig davon, in welchem Ordner sie liegen.

## Import

Importiere Notizen aus Markdown- (`.md`) oder ZIP-Dateien. solyto liest den Dateiinhalt und legt Notizen in der von dir gewählten Kategorie an, mit einer Fortschrittsanzeige während des Hochladens. Das ist nützlich, um Notizen aus anderen Apps zu übernehmen (wie Obsidian oder Notion).

Um zu importieren, öffne die dafür vorgesehene **Import**-Seite und wähle eine oder mehrere Dateien von deinem Gerät aus.

## Exportieren

Notizen werden als ZIP-Archiv aus `.md`-Dateien (Markdown) exportiert — eine Datei pro Notiz. Dieses Format ist kompatibel mit Obsidian, Notion und jedem Markdown-Editor. Dateinamen werden aus dem Notiztitel abgeleitet.

Siehe [Daten exportieren](/integrations/exporting/) für Details zum Export und den verfügbaren Formaten.

## Kontextmenüs

Klicke mit der rechten Maustaste auf eine Notiz oder Kategorie, um über Kontextmenüs schnell auf Aktionen zuzugreifen:

- **Notizen** — erstellen, umbenennen, löschen, in eine andere Kategorie verschieben, Tags hinzufügen/entfernen, Favorit umschalten
- **Kategorien** — neue Unterkategorie erstellen, umbenennen, löschen, ein-/ausklappen

Kontextmenüs bieten eine schnelle Möglichkeit, deine Notizen zu verwalten, ohne zu den Symbolleisten-Schaltflächen wechseln zu müssen.
