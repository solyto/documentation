---
title: Authentifizierung
description: Login, Registrierung, Token-Verwaltung und E-Mail-Verifizierung.
---

Alle Auth-Endpunkte beginnen mit `/api/v1/auth/`. Verwende für authentifizierte Anfragen den Header `Authorization: Bearer <token>`.

## Endpunkte

| Methode | Pfad | Beschreibung | Auth |
|--------|------|-------------|------|
| GET | `/v1/health` | Health-Check (öffentlich) | Nein |
| POST | `/v1/auth/register` | Neues Konto erstellen | Nein |
| POST | `/v1/auth/login` | Authentifizieren und Token erhalten | Nein |
| POST | `/v1/auth/verify` | E-Mail-Adresse verifizieren | Nein |
| POST | `/v1/auth/forgot-password` | E-Mail zum Zurücksetzen des Passworts anfordern | Nein |
| POST | `/v1/auth/reset-password` | Passwort mit Token zurücksetzen | Nein |
| POST | `/v1/auth/passkey/authenticate-options` | WebAuthn-Login-Challenge abrufen | Nein |
| POST | `/v1/auth/passkey/authenticate` | WebAuthn-Login abschließen | Nein |
| POST | `/v1/auth/logout` | Aktuellen Token widerrufen | Ja |
| POST | `/v1/auth/logout-all` | Alle Tokens außer dem aktuellen widerrufen | Ja |
| POST | `/v1/auth/refresh` | Neuen Token ausstellen | Ja |
| GET | `/v1/auth/tokens` | Alle aktiven Tokens auflisten | Ja |
| POST | `/v1/auth/revoke-token` | Einen bestimmten Token widerrufen | Ja |
| POST | `/v1/auth/passkeys/register-options` | WebAuthn-Registrierungs-Challenge abrufen | Ja |
| POST | `/v1/auth/passkeys/register` | Neuen Passkey registrieren | Ja |
| GET | `/v1/auth/passkeys` | Passkeys auflisten | Ja |
| PUT | `/v1/auth/passkeys/{passkey}` | Einen Passkey umbenennen | Ja |
| DELETE | `/v1/auth/passkeys/{passkey}` | Einen Passkey löschen | Ja |

## Registrieren

```
POST /v1/auth/register
```

**Request Body:**

| Feld | Typ | Regeln |
|-------|------|-------|
| `name` | string | erforderlich |
| `email` | string | erforderlich, gültige E-Mail-Adresse, eindeutig |
| `password` | string | erforderlich, mind. 12 Zeichen |
| `password_confirmation` | string | erforderlich, muss mit `password` übereinstimmen |

Begrenzt auf **10 Anfragen pro Stunde pro IP-Adresse**.

## Login

```
POST /v1/auth/login
```

**Request Body:**

| Feld | Typ | Regeln |
|-------|------|-------|
| `email` | string | erforderlich |
| `password` | string | erforderlich |

Begrenzt auf **5 Anfragen pro Minute pro E-Mail-Adresse/IP**.

**Antwort (200):**

```json
{
  "success": true,
  "data": {
    "token": "1|abc123...",
    "token_type": "Bearer",
    "token_expires_at": "2026-06-27T00:00:00Z",
    "user": { "id": 1, "name": "...", "email": "..." }
  }
}
```

## E-Mail verifizieren

```
POST /v1/auth/verify
```

**Request Body:**

| Feld | Typ | Regeln |
|-------|------|-------|
| `user_id` | string | erforderlich |
| `token` | string | erforderlich |

## Passwort vergessen

```
POST /v1/auth/forgot-password
```

Sendet einen Link zum Zurücksetzen des Passworts (60 Minuten gültig). Begrenzt auf **10 Anfragen pro Stunde pro IP-Adresse**.

| Feld | Typ | Regeln |
|-------|------|-------|
| `email` | string | erforderlich |
| `platform` | string | optional (web/mobile/desktop) |

## Passwort zurücksetzen

```
POST /v1/auth/reset-password
```

| Feld | Typ | Regeln |
|-------|------|-------|
| `token` | string | erforderlich |
| `email` | string | erforderlich |
| `password` | string | erforderlich, mind. 12 Zeichen |

## Passkeys

WebAuthn-Passkey-Login und -Verwaltung.

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/auth/passkey/authenticate-options` | Login-Challenge abrufen |
| POST | `/v1/auth/passkey/authenticate` | Login abschließen |
| POST | `/v1/auth/passkeys/register-options` | Registrierungs-Challenge abrufen |
| POST | `/v1/auth/passkeys/register` | Neuen Passkey registrieren |
| GET | `/v1/auth/passkeys` | Passkeys auflisten |
| PUT | `/v1/auth/passkeys/{passkey}` | Einen Passkey umbenennen (`name`) |
| DELETE | `/v1/auth/passkeys/{passkey}` | Einen Passkey löschen |

Die Passkey-Authentifizierung ist begrenzt auf **10 Anfragen pro Minute pro IP-Adresse/E-Mail**.

## Health

```
GET /v1/health
```

Öffentlicher Health-Check. Gibt `status`, `timestamp`, `app` und `version` zurück.

## Logout

```
POST /v1/auth/logout
```

Widerruft den im `Authorization`-Header verwendeten Token.

## Alle anderen Sitzungen abmelden

```
POST /v1/auth/logout-all
```

Widerruft alle Tokens außer dem, mit dem die Anfrage gestellt wurde.

## Token erneuern

```
POST /v1/auth/refresh
```

Gibt einen neuen Token zurück. Der alte Token wird widerrufen.

**Antwort (200):**

```json
{
  "success": true,
  "data": {
    "token": "2|def456...",
    "token_type": "Bearer",
    "token_expires_at": "2026-07-27T00:00:00Z"
  }
}
```

## Tokens auflisten

```
GET /v1/auth/tokens
```

Gibt alle aktiven Tokens des authentifizierten Benutzers zurück. Jeder Token enthält einen booleschen Wert `is_current`.

## Einen Token widerrufen

```
POST /v1/auth/revoke-token
```

**Request Body:**

| Feld | Typ | Regeln |
|-------|------|-------|
| `token_id` | integer | erforderlich |
