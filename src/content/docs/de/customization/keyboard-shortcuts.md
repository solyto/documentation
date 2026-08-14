---
title: Tastenkombinationen
description: Schneller navigieren und handeln mit Tastenkombinationen.
---

solyto verfügt über ein Tastenkombinations-System (KeyManager) für häufige Aktionen in der gesamten App. Tastenkombinationen werden global verarbeitet, und die meisten funktionieren auch mit einer Zusatztaste wie `Ctrl` für bestimmte Aktionen.

## Globale Tastenkombinationen

| Tastenkombination | Aktion |
|----------|--------|
| `Enter` | Bestätigen / erstellen / Quick Add (wenn kein Eingabefeld fokussiert ist) |
| `Escape` | Abbrechen / aktuellen Dialog schließen |
| `Ctrl+S` | Aktuelle Notiz speichern |
| `Ctrl+F` | Suchleiste fokussieren (Bibliotheken, Kontakte) |

## Wie Tastenkombinationen funktionieren

- Tastenkombinationen werden global registriert und mit Prioritäten ausgeführt, sodass die spezifischste Aktion gewinnt, wenn mehrere Handler auf dieselbe Taste reagieren
- `Enter` und `Escape` sind die beiden häufigsten Tasten — verwendet in Dialogen ("Enter zum Bestätigen, Escape zum Abbrechen"), bei der Schnellerstellung von Todos, bei Dev-Request-Kommentaren, bei Vermögensfeldern und mehr
- Zusatztasten (`Ctrl`, `Shift`, `Alt`) lassen sich mit Zeichentasten für Aktionen wie Speichern (`Ctrl+S`) und Suchen (`Ctrl+F`) kombinieren
- Tastenkombinationen lösen nicht aus, während du in einem Eingabefeld, einer Textarea oder einem Auswahlfeld tippst

## Hinweise

- Tastenkombinationen funktionieren in Desktop-Browsern
- Die Taste `F1` sowie die Zeichentasten `e`, `f`, `s`, `n` gehören zum unterstützten Tastensatz des KeyManagers; Bindungen werden je nach Bildschirm bei Bedarf registriert
