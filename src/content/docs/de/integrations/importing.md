---
title: Daten importieren
description: Suche online und importiere von Deezer, Discogs, Goodreads, Hardcover, IMDb, TMDB, Steam, BGG und Chefkoch.
---

solyto kann Daten aus mehreren externen Diensten importieren, um deine Bibliotheken zu befüllen. Alle Importe werden manuell ausgelöst — solyto kontaktiert externe Dienste nie im Hintergrund, und es laufen keine Daten über einen Zwischenserver.

## So funktioniert der Import

Jede Bibliothek bietet zwei Möglichkeiten, Einträge von einem externen Dienst zu übernehmen:

- **Online suchen** — durchsuche einen Anbieter nach Titel/Name und importiere aus den Ergebnissen, wobei Metadaten (Cover, Jahr usw.) automatisch ausgefüllt werden
- **Import per URL** — füge einen Link zu einem Element ein (z. B. ein Deezer-Album oder ein IMDb-Film), und solyto ruft dessen Details ab

Beide Optionen sind über das **+**-Fenster (Erstellen) in jeder Bibliothek verfügbar. Importe werden nur ausgelöst, wenn du explizit auf eine Schaltfläche klickst.

## Musikbibliothek

Anbieter: **Deezer** und **Discogs**.

1. Öffne die **Musikbibliothek** und klicke auf **+**
2. Durchsuche Deezer/Discogs nach Künstler- oder Albumname, oder füge eine Album-URL ein
3. Überprüfe das gefundene Ergebnis (ein Deezer-Vorschau-Widget lässt dich vorher reinhören)
4. Speichern — Cover und Metadaten werden automatisch ausgefüllt

## Buchbibliothek

Anbieter: **Hardcover** und **Goodreads**.

1. Öffne die **Buchbibliothek** und klicke auf **+**
2. Durchsuche Hardcover/Goodreads nach Titel oder Autor, oder füge eine Buch-URL ein
3. Überprüfe das gefundene Ergebnis
4. Speichern — Cover und Metadaten werden automatisch ausgefüllt

## Filmbibliothek

Anbieter: **IMDb** und **TMDB**.

1. Öffne die **Filmbibliothek** und klicke auf **+**
2. Durchsuche TMDB nach Titel, oder füge eine IMDb-/TMDB-URL ein
3. Überprüfe das gefundene Ergebnis
4. Speichern — Poster und Metadaten werden automatisch ausgefüllt

## Spielebibliothek

Anbieter: **Steam** und **BoardGameGeek**.

1. Öffne die **Spielebibliothek** und klicke auf **+**
2. Durchsuche Steam/BGG nach Titel, oder füge eine Steam-/BGG-URL ein
3. Überprüfe das gefundene Ergebnis
4. Speichern — Cover und Metadaten (Entwickler, Publisher usw.) werden automatisch ausgefüllt

## Rezeptbibliothek

Anbieter: **Chefkoch**.

1. Öffne die **Rezeptbibliothek** und klicke auf **+**
2. Füge eine Chefkoch-Rezept-URL ein
3. Überprüfe das importierte Rezept
4. Speichern — Zutaten, Schritte, Portionen und Bild werden automatisch extrahiert

## Notizen

Importiere Notizen aus Markdown- (`.md`) oder ZIP-Dateien.

1. Gehe zu **Notizen → Import**
2. Lade eine oder mehrere Dateien hoch
3. Jede Datei wird zu einer eigenen Notiz in solyto

## Kalender

### Von CalDAV

Importiere Kalender von einem externen CalDAV-Server (Nextcloud, iCloud usw.).

1. Gehe zu **Kalender → Import**
2. Gib die Server-URL, den Benutzernamen und das Passwort ein
3. Wähle aus, welche Kalender importiert werden sollen
4. Termine werden mit Live-Fortschrittsanzeige abgerufen und gespeichert

## Kontakte

### Von CardDAV

Importiere Kontakte von einem externen CardDAV-Server.

1. Gehe zu **Kontakte → Import**
2. Gib die Server-URL, den Benutzernamen und das Passwort ein
3. Wähle aus, welche Adressbücher importiert werden sollen
4. Kontakte werden mit Live-Fortschrittsanzeige abgerufen und gespeichert

## Datenschutz

Alle Importanfragen gehen direkt vom Backend von solyto an den externen Dienst. Deine Daten werden während des Importvorgangs niemals an Dritte gesendet.
