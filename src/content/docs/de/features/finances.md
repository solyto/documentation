---
title: Finanzen
description: Verfolge dein Budget und dein Vermögen über die Zeit.
---

Finanzen hilft dir, dein laufendes Budget und dein Gesamtvermögen über die Zeit im Blick zu behalten. Der Bereich ist in zwei Unterbereiche gegliedert: **Budget** zur Verfolgung von Einnahmen und Ausgaben und **Vermögen** zur Verfolgung von Vermögenswerten, Verbindlichkeiten und deinem Nettovermögen über die Zeit.

Beide Unterbereiche sind über die Finanzen-Übersicht erreichbar und haben jeweils eine eigene Route. Es sind keine externen Integrationen oder Bankverbindungen nötig — alle Daten werden von dir manuell eingegeben, sodass alles privat bleibt.

## Übersicht

Die Finanzen-Übersicht zeigt zwei anklickbare Karten — **Budget** und **Vermögen** — mit ihren Summen sowie drei Diagramme:

- **Einnahmen vs. Ausgaben** — ein Balkendiagramm zum Vergleich der beiden
- **Vermögensverteilung** — ein Ringdiagramm deiner aktuellen Vermögensfelder
- **Vermögenstrend** — ein 12-Monats-Liniendiagramm deines Nettovermögens

## Budget

Verfolge deine Einnahmen und Ausgaben mit einzelnen Einträgen.

### Einträge

Jeder Budgeteintrag hat:

- **Titel** — eine Beschreibung der Einnahme oder Ausgabe
- **Typ** — Einnahme oder Ausgabe
- **Betrag** — der Wert

Füge Einträge hinzu, sobald du etwas einnimmst oder ausgibst. Bearbeite oder lösche Einträge jederzeit.

### Summen ansehen

Die Budgetansicht fasst deine Einträge zusammen:

- Ein proportionaler Fortschrittsbalken für das Verhältnis von Ausgaben zu Einnahmen
- Eine **Gesamt**-Karte mit dem laufenden Saldo (`+` für Überschuss, `-` für Defizit)
- Getrennte Abschnitte für **Einnahmen** und **Ausgaben** mit ihren Zwischensummen

## Vermögen

Verfolge dein Nettovermögen, indem du den Wert deiner Vermögenswerte und Verbindlichkeiten über die Zeit protokollierst. Vermögen ist von Budget getrennt — es konzentriert sich auf deine gesamte finanzielle Situation statt auf den täglichen Zahlungsfluss.

### Vermögensfelder

Erstelle benannte Felder für jede Komponente deines Nettovermögens:

- **Vermögenswerte** — Bankkonten, Investitionen, Immobilien, Ersparnisse, Altersvorsorge usw.
- **Verbindlichkeiten** — Schulden, Kredite, Hypotheken, Kreditkartensalden usw.

Jedes Feld ist lediglich ein Titel — füge jederzeit Felder hinzu oder entferne sie, wenn sich deine finanzielle Situation ändert. Felder werden grün eingefärbt, wenn sie positiv sind, und rot, wenn sie negativ sind.

### Werte protokollieren

Jedes Vermögensfeld führt einen **Wertverlauf**. Bearbeite den aktuellen Wert direkt inline, und solyto zeichnet einen neuen Wert mit Zeitstempel auf. Mit der Zeit entsteht so ein Verlauf, wie sich jedes Feld verändert hat. Du musst nicht jeden Tag protokollieren — aktualisiere die Werte einfach in regelmäßigen Abständen, wenn sich deine Salden ändern.

### Verlaufsdiagramm

Die Vermögensseite zeigt ein Ringdiagramm der aktuellen Werte und eine **Gesamt**-Karte. Aktiviere **Verlauf anzeigen**, um Folgendes einzublenden:

- Ein 12-Monats-Liniendiagramm des **gesamten Nettovermögens**
- Ein **gestapeltes Flächendiagramm** des Werts jedes Feldes über denselben Zeitraum

Das gibt dir ein klares Bild deiner finanziellen Entwicklung und hilft dir zu erkennen, ob dein Vermögen wächst, schrumpft oder stabil bleibt.

## Routen

| Route | Beschreibung |
|-------|-------------|
| `/finances` | Finanzen-Übersicht mit Navigation |
| `/finances/wealth` | Vermögensverfolgung mit Feldern, Wertprotokollierung und Diagramm |
| `/finances/budget` | Budgetverwaltung mit Einnahme- und Ausgabeeinträgen |

## Exportieren

Sowohl Budget- als auch Vermögensdaten werden als `.csv`-Dateien exportiert, kompatibel mit jedem Tabellenkalkulationsprogramm wie Excel, Google Sheets oder LibreOffice Calc. Siehe [Daten exportieren](/integrations/exporting/).
