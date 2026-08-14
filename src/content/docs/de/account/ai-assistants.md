---
title: AI-Funktionen
description: Wie KI-Technologie in solyto eingesetzt wird — Empfehlungen für deine Bibliotheken.
---

solyto nutzt AI an wenigen gezielten Stellen — immer nur auf Anfrage und niemals, um mit deinen Daten zu trainieren.

## Was AI macht

- **Bibliotheks-Empfehlungen** — die Bibliotheken [Musik](/features/libraries/music/) und [Bücher](/features/libraries/books/) können dir basierend auf deiner Sammlung Einträge vorschlagen ("Ein Favorit", "Etwas, das ich noch nicht kenne", "Etwas Zufälliges", "Etwas Neues")
- **Quick-Add-Erkennung** — die Funktion [Quick Add](/dashboard/quick-add/) erkennt Inhaltstypen aus eingefügtem Text bzw. eingefügten URLs

## Wie es funktioniert

AI-Anfragen laufen über das solyto-Backend (eine OpenAI-kompatible API). Es wird nichts gesendet, bis du eine Empfehlung oder Erkennung auslöst, und deine Daten werden niemals zum Trainieren von Modellen verwendet.

## Konfiguration

Das AI-Backend wird serverseitig konfiguriert. Beim Self-Hosting kannst du es auf einen eigenen OpenAI-kompatiblen Endpunkt verweisen:

| Variable | Beschreibung |
|----------|-------------|
| `AI_API_KEY` | API-Schlüssel für den AI-Dienst |
| `AI_BASE_URL` | URL des API-Endpunkts |
| `AI_MODEL` | Standardmodell |

Die vollständige Liste der Variablen findest du unter [Self-Hosting-Konfiguration](/self-hosting/configuration/).
