---
title: Dev Requests
description: Fehler und Feature-Wünsche einreichen, über Ideen abstimmen.
---

Dev Requests ist ein integriertes Feedback-Board, auf dem du Fehler melden und Funktionen vorschlagen kannst. Es ist ein community-gesteuerter Weg, die Weiterentwicklung von solyto mitzugestalten.

## Dev Requests aufrufen

Navigiere in der Seitenleiste zu **/dev-requests** oder rufe die Seite direkt auf. Du siehst eine Liste aller eingereichten Anfragen, sortiert nach Beliebtheit.

## Eine Anfrage einreichen

1. Klicke auf **New Request**
2. Wähle einen Typ:
   - **Bug** — etwas ist defekt oder funktioniert nicht wie erwartet
   - **Feature** — eine Idee für eine neue Funktion oder Verbesserung
3. Schreibe einen klaren Titel und eine Beschreibung
4. Lege eine **Priorität** fest (1–5)
5. Optional: Füge einen **Screenshot** und eine passende URL hinzu
6. Absenden

Gib bei Fehlern Schritte zur Reproduktion an, was du erwartet hast und was tatsächlich passiert ist. Beschreibe bei Feature-Wünschen das Problem, das du lösen möchtest.

## Abstimmen

Jeder Benutzer kann über bestehende Anfragen mit Pfeilen nach oben oder unten abstimmen. Deine Stimme wird erfasst, und der Punktestand wird angezeigt. Abstimmungen helfen dabei zu priorisieren, was als Nächstes umgesetzt wird.

## Kommentieren

Hinterlasse Kommentare zu jeder Anfrage, um Kontext zu ergänzen, Workarounds zu teilen oder die Idee mit anderen zu diskutieren. Drücke **Enter**, um einen Kommentar abzusenden — der Autor wird benachrichtigt.

## Anfrage-Status

Anfragen werden in **Current Requests** und **Resolved Requests** unterteilt und durchlaufen folgende Status:

| Status | Bedeutung |
|--------|---------|
| Backlog | Neu eingereicht, wartet auf Prüfung |
| Pending | Angenommen und für die Entwicklung eingeplant |
| In Progress | Wird gerade umgesetzt |
| Completed | Umgesetzt und veröffentlicht |
| Cancelled | Nicht geplant — Begründung in den Kommentaren |

## Dev Requests deaktivieren

Wenn du selbst hostest und den Bereich Dev Requests nicht anzeigen möchtest, setze die Umgebungsvariable:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

Dadurch wird der Dev-Requests-Link aus der Seitenleiste ausgeblendet und die Route vollständig deaktiviert. Weitere Details findest du unter [Konfiguration](/self-hosting/configuration/).

## Dev Requests deaktivieren

Wenn du selbst hostest und den Bereich Dev Requests nicht anzeigen möchtest, setze die Umgebungsvariable:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

Dadurch wird der Dev-Requests-Link aus der Seitenleiste ausgeblendet und die Route vollständig deaktiviert. Weitere Details findest du unter [Konfiguration](/self-hosting/configuration/).
