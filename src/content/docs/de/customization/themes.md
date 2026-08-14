---
title: Themes
description: Passe das Erscheinungsbild von solyto mit 10 integrierten Themes an.
---

solyto wird mit 10 integrierten Themes ausgeliefert, die das Erscheinungsbild der gesamten Oberfläche verändern — Navigation, Karten, Schaltflächen, Typografie und alle UI-Elemente.

## Dein Theme ändern

1. Gehe zu **Einstellungen → App**
2. Wähle ein Theme aus der Liste
3. Die Änderung wird **sofort übernommen** — kein Neuladen erforderlich

## Verfügbare Themes

| Theme | Beschreibung |
|-------|-------------|
| **Default** | Klares, minimalistisches, helles Theme. Unterstützt den Dark Mode je nach Betriebssystem-Einstellung. |
| **Nord** | Kühle, arktisch inspirierte Farbpalette basierend auf dem [Nord](https://www.nordtheme.com/)-Farbschema. Ruhige Blautöne und sanfte Grautöne. |
| **Skyrim** | Inspiriert von der Oberfläche von The Elder Scrolls V: Skyrim. Pergamenttöne und fantasy-artige Elemente. |
| **Catppuccin Mocha** | Ein dunkles, warmtoniges Theme aus der [Catppuccin](https://catppuccin.com/)-Familie. Kräftige Lila- und Pastelltöne auf dunklem Hintergrund. |
| **Catppuccin Latte** | Die helle Variante von Catppuccin. Warme Pastelltöne und weiche Farben auf hellem Hintergrund. |
| **Gruvbox** | Ein Retro-Groove-Theme mit warmen, erdigen Tönen. Basierend auf dem beliebten [Gruvbox](https://github.com/morhetz/gruvbox)-Farbschema. |
| **Dracula** | Ein dunkles, violettes Theme basierend auf der [Dracula](https://draculatheme.com/)-Farbpalette. Hoher Kontrast mit lebendigen Akzentfarben. |
| **Terminal** | Ein Monospace-Theme in Grün auf Schwarz, inspiriert von klassischen Terminal-Emulatoren. Minimalistisch und hacker-freundlich. |
| **Paper** | Ein papierartiger, warmer, kontrastarmer Look. Angenehm für die Augen dank cremefarbener Hintergründe und dezenter Typografie. |
| **Atari** | Übertrieben nostalgischer Stil, inspiriert von frühen Atari-Oberflächen. Kräftige Farben und klobige Ästhetik. |

## Dark Mode

Das **Default**-Theme ist das einzige Theme, das den Dark Mode unterstützt. Es wechselt automatisch zwischen hell und dunkel, basierend auf der Einstellung deines Betriebssystems:

- **macOS:** Systemeinstellungen → Erscheinungsbild → Hell/Dunkel/Auto
- **Windows:** Einstellungen → Personalisierung → Farben → Modus auswählen
- **Linux:** Folgt der Dark-Mode-Einstellung deiner Desktop-Umgebung

Wenn du ein anderes Theme als Default auswählst, wird der Dark Mode nicht angewendet — es wird unabhängig von den Systemeinstellungen das eigene Farbschema des Themes verwendet.

## Wie Themes funktionieren

Themes sind als CSS-Variablen-Überschreibungen implementiert. Jedes Theme ist eine eigenständige CSS-Datei, die von `/themes/{id}/{id}.css` geladen wird, zum Beispiel:

- `/themes/nord/nord.css`
- `/themes/catppuccin-mocha/catppuccin-mocha.css`
- `/themes/gruvbox/gruvbox.css`

Wenn du ein Theme auswählst, lädt solyto die entsprechende CSS-Datei und wendet sie auf das Dokument-Root an. Das CSS überschreibt die Standardvariablen für Farben, Hintergründe, Rahmen, Schatten und Typografie. Da Themes CSS-Variablen verwenden, erfolgt der Wechsel sofort, ohne dass die Seite neu geladen werden muss.

## Theme-Details

### Default

Das Standard-Theme ist ein klares, minimalistisches, helles Design mit blauen Akzenten und großzügigem Weißraum. Es ist das einzige Theme, das den automatischen Wechsel des Dark Mode basierend auf deiner Betriebssystem-Einstellung unterstützt. Im Dark Mode wechseln Hintergründe zu dunklen Grautönen und der Text wird hell.

### Nord

Basiert auf der [Nord-Farbpalette](https://www.nordtheme.com/). Kühle arktische Blautöne (Polar Night, Snow Storm, Frost) schaffen eine ruhige, fokussierte Umgebung. Ideal für längeres Arbeiten.

### Skyrim

Inspiriert von der Spieloberfläche von The Elder Scrolls V: Skyrim. Pergamentfarbene Hintergründe, fantasy-artige Rahmen und warme Erdtöne. Ein einzigartiges, immersives Gefühl.

### Catppuccin Mocha

Die dunkle Variante der [Catppuccin](https://catppuccin.com/)-Palette. Kräftige Lilatöne, gedämpfte Pastellfarben und ein tiefdunkler Hintergrund. Beliebt bei Entwicklern.

### Catppuccin Latte

Die helle Variante von Catppuccin. Dieselben warmen Pastell-Akzentfarben, aber auf cremig hellem Hintergrund. Eine sanftere Alternative zum Default-Theme.

### Gruvbox

Ein Retro-Groove-Farbschema mit warmen Orange-, Gelb- und Rottönen auf dunklem Hintergrund. Basiert auf der weit verbreiteten [Gruvbox](https://github.com/morhetz/gruvbox)-Palette.

### Dracula

Ein dunkles Theme mit violett getöntem Hintergrund und lebendigen Akzentfarben (Grün, Orange, Pink, Cyan). Basiert auf dem [Dracula](https://draculatheme.com/)-Farbschema.

### Terminal

Ein Monospace-Theme in Grün auf Schwarz, inspiriert von klassischen Terminal-Emulatoren (VT100, xterm). Der gesamte Text wird in einer Monospace-Schrift dargestellt. Minimalistisch und nostalgisch.

### Paper

Ein warmes, kontrastarmes Theme, das den Look von gealtertem Papier nachahmt. Cremefarbene Hintergründe, brauner Text und dezente Schatten. Angenehm für die Augen bei langen Lesesitzungen.

### Atari

Ein kräftiges Retro-Theme, inspiriert von den knalligen, klobigen Grafiken früher Atari-Konsolen und 8-Bit-Computer. Hoher Kontrast, gesättigte Farben und verspielte Ästhetik.

## Ein eigenes Theme erstellen

Das Theming-System von solyto basiert auf CSS Custom Properties. Wenn du dein eigenes Theme erstellen möchtest, kannst du die Standard-CSS-Variablen überschreiben. Community-Themes und Beiträge sind im App-Repository willkommen.
