---
title: Was ist solyto
description: solyto ist eine kostenlose, quelloffene, private Alles-in-einem-App für die persönliche Organisation.
---

solyto ist eine kostenlose, quelloffene, private Alles-in-einem-App für die persönliche Organisation. Todos, Kalender, Kontakte, Notizen, Finanzen, Bibliotheken, Zeiterfassung und mehr — eine App, ein Login, eine Oberfläche. Kein Tracking, keine Werbung, keine Abos. Nie.

## Drei Wege, solyto zu nutzen

1. **solyto.app** — die gehostete Version. Erstelle ein Konto und leg sofort los. Keine Einrichtung nötig.
2. **Lokale Entwicklung** — führe den kompletten Stack lokal mit Docker Compose über das Repository [localdocker](https://github.com/solyto/localdocker) aus. Ideal, um beizutragen oder zu experimentieren.
3. **Self-Hosting** — betreibe solyto auf deinem eigenen Server mithilfe des Repositorys [selfhosted](https://github.com/solyto/selfhosted). Volle Kontrolle über deine Daten.

## Was enthalten ist

Jede Funktion ist enthalten. Keine Stufen, keine Upgrades, kein "kommt bald".

**Produktivität**

- [Todos](/features/todos/) — Aufgaben mit Tags, Fälligkeitsdaten, Prioritäten und wiederkehrenden Zeitplänen
- [Kalender](/features/calendar/) — dein Terminplan mit CalDAV-Sync
- [Notizen](/features/notes/) — Notizen und Gedanken, organisiert nach deinen Vorstellungen
- [Kontakte](/features/contacts/) — Adressbuch mit CardDAV-Sync
- [Zwischenablage](/features/clipboard/) — geräteübergreifende, gemeinsame Zwischenablage

**Bibliotheken**

- [Musik](/features/libraries/music/), [Bücher](/features/libraries/books/), [Filme](/features/libraries/movies/), [Spiele](/features/libraries/games/) — verwalte deine Sammlungen
- [Rezepte](/features/libraries/recipes/), [Zitate](/features/libraries/quotes/), [Links](/features/libraries/links/), [Pflanzen](/features/libraries/plants/) — katalogisiere alles andere

**Wohlbefinden & Zeit**

- [Daily Check-In](/features/check-in/) — Stimmungs-Tracking, Journaling, Gewohnheitsaufbau
- [Zeiterfassung](/features/time-tracking/) — verfolge Projekte, abrechenbare Stunden und Produktivität

**Finanzen**

- [Finanzen](/features/finances/) — Budgetverfolgung und Vermögensübersicht

**Information**

- [RSS-Feeds](/features/feeds/) — Neuigkeiten aus Quellen, die du selbst wählst, ganz ohne Algorithmen

**Integrationen**

- [Telegram-Bot](/integrations/telegram/) — Links speichern, tägliche Zusammenfassungen erhalten, Benachrichtigungen empfangen
- [CalDAV/CardDAV-Sync](/integrations/dav-sync/) — Synchronisation mit externen Kalender- und Kontakt-Apps
- AI Assistants — interagiere mit deinen eigenen Daten mithilfe von AI, zu deinen Bedingungen

## Tech-Stack

solyto basiert auf bewährten, ausgereiften Technologien:

- **Frontend** — SvelteKit 2, Svelte 5, Tailwind CSS v4, TypeScript
- **Backend** — Laravel 12, PHP 8.4
- **Datenbanken** — MariaDB (App-Daten), PostgreSQL (CalDAV/CardDAV über SabreDAV)
- **Cache & Queue** — Redis
- **Reverse Proxy** — Traefik mit automatischem Let's-Encrypt-TLS
- **Deployment** — Docker (Images: `solyto/app`, `solyto/api-php`, `solyto/api-nginx`)
