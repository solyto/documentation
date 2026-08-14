---
title: Quick Add
description: Füge eine URL oder einen Text ein und lass solyto herausfinden, was es ist und wohin es gehört.
---

Quick Add ist ein intelligentes Werkzeug zur Inhaltserkennung auf dem Dashboard. Du fügst eine URL oder eine Textzeile ein, und solyto bestimmt automatisch den Inhaltstyp und speichert ihn am richtigen Ort — ganz ohne manuelle Kategorisierung.

## Quick Add öffnen

Es gibt zwei Möglichkeiten, Quick Add zu starten:

- **Schwebende Aktionsschaltfläche (FAB)** — Klicke auf die FAB unten rechts auf dem Dashboard.
- **Enter-Taste** — Drücke `Enter` an einer beliebigen Stelle auf dem Dashboard, wenn kein Eingabefeld fokussiert ist. Der Quick-Add-Dialog öffnet sich sofort.

## Wie die Erkennung funktioniert

Wenn du Inhalte übermittelst, prüft solyto sie gegen eine Reihe von Regeln und weist ihnen einen Inhaltstyp mit einem Konfidenzwert zu.

### Todo-Signale zuerst

Enthält der Inhalt eines der Todo-Schlüsselwörter `due`, `repeat` oder `link:`, wird er mit **70 % Konfidenz** als **Todo** erkannt — dies wird vor der URL-Erkennung geprüft, sodass eine URL mit `due` darin als Todo behandelt wird.

### URL-Erkennung (95 % Konfidenz)

URLs werden mit bekannten Domains abgeglichen:

| URL-Muster | Erkannt als |
|-------------|------------|
| `deezer.com`, `discogs.com` | Eintrag in der [Musik-Bibliothek](/features/libraries/music/) |
| `hardcover.app`, `goodreads.com` | Eintrag in der [Bücher-Bibliothek](/features/libraries/books/) |
| `imdb.com` | Eintrag in der [Film-Bibliothek](/features/libraries/movies/) |
| `store.steampowered.com`, `boardgamegeek.com` | Eintrag in der [Spiele-Bibliothek](/features/libraries/games/) |
| `chefkoch.de` | Eintrag in der [Rezepte-Bibliothek](/features/libraries/recipes/) |
| Jede andere URL | Eintrag in der [Link-Bibliothek](/features/libraries/links/) |

### Text-Erkennung

Bei reinem Text (keine erkannte URL und keine Todo-Schlüsselwörter):

| Inhaltssignale | Erkannt als | Konfidenz |
|----------------|-------------|-----------|
| Enthält `/` oder `#` | [Todo](/features/todos/) | 50 % |
| Reiner Text ohne Signale | [Notiz](/features/notes/) | 50 % |

## Bestätigung

Der Konfidenzwert entscheidet, ob der Eintrag direkt gespeichert wird oder deine Bestätigung benötigt:

- **Konfidenz ≥ 60 %** — der Eintrag wird automatisch übernommen, kein zusätzlicher Schritt nötig.
- **Konfidenz < 60 %** — solyto zeigt dir den erkannten Typ und bittet dich, vor dem Speichern zu bestätigen. Du kannst zustimmen oder aus der vollständigen Liste der Zielorte einen anderen Typ wählen.

## Beispiele

### Ein Album hinzufügen

1. Quick Add öffnen
2. Einfügen: `https://www.deezer.com/album/123456`
3. solyto erkennt **Musik** mit 95 % Konfidenz und importiert es in deine Musik-Bibliothek

### Ein Todo hinzufügen

1. Quick Add öffnen
2. Eingeben: `Pick up dry cleaning due:tomorrow`
3. solyto erkennt **Todo** mit 70 % Konfidenz und erstellt ein Todo, das morgen fällig ist

### Eine Notiz hinzufügen

1. Quick Add öffnen
2. Eingeben: `Meeting notes: client wants to move deadline to March`
3. solyto erkennt **Notiz** mit 50 % Konfidenz — da dies unter 60 % liegt, wirst du vor dem Speichern um Bestätigung gebeten

### Einen Link hinzufügen

1. Quick Add öffnen
2. Einfügen: `https://example.com/some-interesting-article`
3. solyto erkennt **Link** mit 95 % Konfidenz und speichert ihn in deiner Link-Bibliothek

## Einen anderen Typ wählen

Falls der erkannte Typ falsch ist, klicke im Bestätigungsbildschirm auf **"No, choose type"** (oder die entsprechende Option), um ein Raster mit allen unterstützten Zielorten zu öffnen: Musik, Bücher, Filme, Spiele, Links, Rezepte, Pflanzen, Zitate, Todo, Notiz, Feed und Zwischenablage.

## Zusammenspiel mit anderen Funktionen

Quick Add speist direkt in die Funktionen ein, die du aktiviert hast:

- **Bibliothekseinträge** erscheinen in der entsprechenden Bibliothek und tauchen in den Dashboard-Widgets für Veröffentlichungen auf
- **Todos** erscheinen in der Funktion [Todos](/features/todos/) sowie in den Dashboard-Widgets Fällige Todos / Bewertete Todos
- **Notizen** erscheinen in [Notizen](/features/notes/) und im Widget Letzte Notizen
- **Links** erscheinen in der [Link-Bibliothek](/features/libraries/links/) und im Widget Neueste Links

Ist eine Funktion unter **Einstellungen → Features** deaktiviert, bietet Quick Add sie nicht als erkannten Typ an.
