---
title: Datenschutz & Sicherheit
description: Wie solyto mit deinen Daten umgeht.
---

solyto wurde mit Datenschutz als Kernanforderung entwickelt, nicht als nachträglichem Zusatz.

## Was solyto NICHT tut

- **Kein Tracking** — keine Analytics, keine Telemetrie, keine Nutzungsdaten
- **Keine Cookies** — die einzige verwendete Browser-Speicherung ist ein localStorage-Eintrag für die Authentifizierung
- **Keine Hintergrundanfragen** — solyto kontaktiert externe Dienste nur, wenn du ausdrücklich eine Aktion auslöst (etwa einen Import oder eine Empfehlung)
- **Kein AI-Training** — deine Daten werden nicht zum Trainieren irgendeines Modells verwendet
- **Keine Werbung** — solyto hat keinerlei Werbung

## Was solyto speichert

solyto speichert die Daten, die du eingibst — Notizen, Todos, Kalendertermine, Kontakte, Bibliothekseinträge und so weiter — in deinem Konto. Auf solyto.app liegen diese Daten auf Servern in der EU. Wenn du selbst hostest, liegen sie auf deinem eigenen Server.

## Authentifizierung

solyto verwendet einen einzigen localStorage-Eintrag für dein Authentifizierungs-Token. Es sind keine Auth-Dienste von Drittanbietern beteiligt. Passkey-Login (WebAuthn) wird für passwortlose Authentifizierung unterstützt.

## Kontakt zu externen Diensten

solyto kontaktiert externe Dienste nur, wenn du es ausdrücklich anforderst:

- **Wetter** — Open-Meteo für Vorhersagen und OpenStreetMap Nominatim für die Stadtsuche im Dashboard-Widget
- **Bibliotheks-Importe & Suche** — Deezer, Discogs, Hardcover, Goodreads, IMDb, TMDB, Steam, BoardGameGeek und Chefkoch, ausgelöst durch dich
- **Release-Benachrichtigungen** — das Backend prüft regelmäßig Deezer/Hardcover/TMDB auf neue Veröffentlichungen deiner Lieblingskünstler/-autoren
- **AI-Empfehlungen** — Bibliotheks-Empfehlungen werden auf Anfrage über eine OpenAI-kompatible API generiert; es wird nichts gesendet, bis du auf die Schaltfläche klickst
- **CalDAV/CardDAV-Sync** — synchronisiert nur, wenn du es konfiguriert hast; du kannst es jederzeit deaktivieren
- **Telegram-Bot** — nur aktiv, wenn du ihn eingerichtet hast; Nachrichten werden von dir gesendet
- **Benachrichtigungen** — werden an deinen Browser, deine E-Mail-Adresse oder Telegram gesendet, wenn Ereignisse eintreten

Nichts geschieht im Hintergrund ohne dein Wissen.

## Self-Hosting

Wenn du solyto selbst hostest, verlassen deine Daten niemals deinen Server. Du kontrollierst alles. Siehe [Self-Hosting](/self-hosting/overview/).

## Open Source

solyto ist Open Source. Du kannst genau nachvollziehen, was es tut. Der Quellcode liegt auf [GitHub](https://github.com/solyto).
