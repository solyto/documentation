---
title: Benutzer & Einstellungen
description: Benutzerprofil, Einstellungen und öffentliche Profile.
---

Verwalte dein Profil, deine Präferenzen und (als Administrator) Benutzer. Alle Endpunkte erfordern Authentifizierung, sofern nicht anders angegeben.

## Profil-Endpunkte

| Methode | Pfad | Beschreibung | Auth |
|--------|------|-------------|------|
| GET | `/v1/users/me` | Aktuelles Benutzerprofil abrufen | Ja |
| POST | `/v1/users/me/profile-image` | Profilbild hochladen | Ja |
| PUT | `/v1/users/change-password` | Passwort ändern | Ja |
| GET | `/v1/users/{user}/public-profile` | Das öffentliche Profil eines anderen Benutzers ansehen | Ja |

## Einstellungs-Endpunkte

| Methode | Pfad | Beschreibung | Auth |
|--------|------|-------------|------|
| PUT | `/v1/users/me/settings/navigation` | Navigationseinstellungen aktualisieren | Ja |
| PUT | `/v1/users/me/settings/timezone` | Zeitzone festlegen | Ja |
| PUT | `/v1/users/me/settings/language` | Sprache festlegen (en/de/fr/es) | Ja |
| PUT | `/v1/users/me/settings/date-format` | Datumsformat festlegen | Ja |
| PUT | `/v1/users/me/settings/time-format` | Uhrzeitformat festlegen | Ja |
| PUT | `/v1/users/me/settings/weather-city` | Standort für Wetter festlegen | Ja |
| PUT | `/v1/users/me/settings/weather-temperature-unit` | Einheit festlegen (c/f) | Ja |
| PUT | `/v1/users/me/settings/openai-api-key` | OpenAI-API-Schlüssel speichern | Ja |
| PUT | `/v1/users/me/settings/complete-onboarding` | Onboarding als abgeschlossen markieren | Ja |
| GET/PUT | `/v1/users/me/settings/check-in` | Check-In-Einstellungen abrufen oder aktualisieren | Ja |

## Admin-Endpunkte

| Methode | Pfad | Beschreibung | Auth |
|--------|------|-------------|------|
| GET | `/v1/users` | Alle Benutzer auflisten | Admin |
| PUT | `/v1/users/{user}` | Einen Benutzer aktualisieren | Admin |

## Profilbild hochladen

```
POST /v1/users/me/profile-image
Content-Type: multipart/form-data
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `image` | file | erforderlich, Bild, max. 2 MB |

## Passwort ändern

```
PUT /v1/users/change-password
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `current_password` | string | erforderlich |
| `new_password` | string | erforderlich, mind. 12 |
| `new_password_confirmation` | string | erforderlich, muss übereinstimmen |

## Wetter-Standort

```
PUT /v1/users/me/settings/weather-city
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `city` | string | erforderlich |
| `lat` | numeric | erforderlich |
| `lon` | numeric | erforderlich |

## Sprache

Unterstützte Werte: `en`, `de`, `fr`, `es`.

## Temperatureinheit

Unterstützte Werte: `c` (Celsius), `f` (Fahrenheit).
