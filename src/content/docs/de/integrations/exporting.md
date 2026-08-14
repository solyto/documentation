---
title: Daten exportieren
description: Exportiere alle deine solyto-Daten in Standardformaten.
---

Mit solyto kannst du deine Daten jederzeit unter **Einstellungen → Daten exportieren** exportieren. Deine Daten gehören dir, und du kannst sie jederzeit herunterladen.

## So exportierst du

1. Gehe zu **Einstellungen → Daten exportieren**
2. Wähle einzelne Funktionen aus oder klicke auf **Alle auswählen**
3. Klicke auf **Exportieren**
4. solyto führt den Export-Job im Hintergrund aus
5. Sobald er fertig ist, findest du einen Download-Link unter **Einstellungen → Daten exportieren** sowie in deinen Benachrichtigungen

## So funktionieren Exporte

- Exporte laufen als **Hintergrundjobs** — du musst die Seite nicht geöffnet lassen
- Exporte sind **ratenbegrenzt** auf einmal alle 24 Stunden
- Abgeschlossene Exporte **laufen nach 48 Stunden ab** — lade sie herunter, bevor sie entfernt werden
- Der Download ist eine einzelne **ZIP-Datei** mit dem Namen `export_YYYY-MM-DD.zip`, auch wenn nur eine Funktion exportiert wird
- Du erhältst eine **In-App-Benachrichtigung** und (falls konfiguriert) eine Push- oder Telegram-Benachrichtigung, sobald der Export bereit ist

## Exportformate

Jede Funktion exportiert in einem Standardformat, das du in anderen Apps öffnen kannst:

| Funktion | Format | Kompatibel mit |
|---------|--------|----------------|
| Kalender | `.ics` (iCalendar) | Google Calendar, Apple Calendar, Outlook |
| Kontakte | `.vcf` (vCard) | Google Contacts, Apple Contacts, jede Kontakte-App |
| Notizen | ZIP aus `.md`-Dateien | Obsidian, Notion, jeder Markdown-Editor |
| Feeds | `.opml` | Feedly, NewsBlur, jeder RSS-Reader |
| Linkbibliothek | `.html` (Netscape Bookmarks) | Chrome, Firefox, Safari, jeder Browser |
| Aufgaben | `.csv` | Excel, Google Sheets |
| Musikbibliothek | `.csv` | Excel, Google Sheets |
| Buchbibliothek | `.csv` (Goodreads-kompatible Spalten) | Goodreads, Tabellenkalkulationsprogramme |
| Spielebibliothek | `.csv` | Excel, Google Sheets |
| Rezeptbibliothek | `.csv` | Excel, Google Sheets |
| Zitatbibliothek | `.csv` | Excel, Google Sheets |
| Check-in | `.csv` | Excel, Google Sheets |
| Zeiterfassung | `.csv` | Excel, Google Sheets |
| Finanzen (Budget) | `.csv` | Excel, Google Sheets |
| Finanzen (Vermögen) | `.csv` | Excel, Google Sheets |

## Selektiver Export

Du musst nicht alles exportieren. Wähle nur die Funktionen aus, die du brauchst, und die ZIP-Datei enthält ausschließlich diese Dateien. Das ist nützlich, wenn du:

- eine einzelne Bibliothek sichern möchtest, bevor du Änderungen vornimmst
- deinen Kalender in eine andere App wie Google Calendar importieren möchtest
- deine Notizen archivieren möchtest, um sie in Obsidian oder einem anderen Markdown-Editor zu nutzen
- deine Rezepte mit jemandem teilen möchtest

Hinweis: Die Funktionen Filme, Pflanzen und Zwischenablage gehören derzeit nicht zum exportierbaren Umfang.

## Export-Details

- **Format:** ZIP-Archiv mit einer Datei pro ausgewählter Funktion
- **Rate Limit:** ein Export alle 24 Stunden
- **Ablauf:** Exporte werden nach 48 Stunden automatisch gelöscht
- **Benachrichtigung:** du erhältst eine In-App-Benachrichtigung (Glockensymbol), sobald der Export bereit ist; Push- und Telegram-Benachrichtigungen werden ebenfalls gesendet, falls konfiguriert
- **Dateibenennung:** `export_YYYY-MM-DD.zip` (z. B. `export_2026-05-27.zip`)

## Exportierte Daten erneut importieren

Die meisten Exportformate sind so gestaltet, dass sie wieder importiert werden können:

- `.ics`-Dateien können in jede Kalender-App oder zurück in solyto importiert werden
- `.vcf`-Dateien können in jede Kontakte-App importiert werden
- `.opml`-Dateien können in jeden RSS-Reader importiert werden
- `.csv`-Dateien können zur Überprüfung in Tabellenkalkulationsprogrammen geöffnet werden
- `.md`-Notizen können in Obsidian, Notion oder jedem Markdown-Editor verwendet werden

## Fehlerbehebung

- **"Export limit reached"** — du hast in den letzten 24 Stunden bereits exportiert. Warte und versuche es erneut.
- **"Export expired"** — die Datei wurde nach 48 Stunden entfernt. Starte einen neuen Export.
- **Große Exporte** — Exporte mit vielen Funktionen können einige Minuten zur Verarbeitung benötigen. Du wirst benachrichtigt, sobald sie fertig sind.
- **Download startet nicht** — überprüfe die Popup-/Download-Blocker-Einstellungen deines Browsers. Der Download startet automatisch, wenn du auf den Link klickst.
