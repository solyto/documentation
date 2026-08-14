---
title: Authentication
description: Login, register, token management, and email verification.
---

All auth endpoints are prefixed `/api/v1/auth/`. Use the `Authorization: Bearer <token>` header for authenticated requests.

## Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/v1/health` | Health check (public) | No |
| POST | `/v1/auth/register` | Create a new account | No |
| POST | `/v1/auth/login` | Authenticate and get a token | No |
| POST | `/v1/auth/verify` | Verify email address | No |
| POST | `/v1/auth/forgot-password` | Request a password reset email | No |
| POST | `/v1/auth/reset-password` | Reset password with a token | No |
| POST | `/v1/auth/passkey/authenticate-options` | Get a WebAuthn login challenge | No |
| POST | `/v1/auth/passkey/authenticate` | Complete WebAuthn login | No |
| POST | `/v1/auth/logout` | Revoke current token | Yes |
| POST | `/v1/auth/logout-all` | Revoke all tokens except current | Yes |
| POST | `/v1/auth/refresh` | Issue a new token | Yes |
| GET | `/v1/auth/tokens` | List all active tokens | Yes |
| POST | `/v1/auth/revoke-token` | Revoke a specific token | Yes |
| POST | `/v1/auth/passkeys/register-options` | Get a WebAuthn registration challenge | Yes |
| POST | `/v1/auth/passkeys/register` | Register a new passkey | Yes |
| GET | `/v1/auth/passkeys` | List passkeys | Yes |
| PUT | `/v1/auth/passkeys/{passkey}` | Rename a passkey | Yes |
| DELETE | `/v1/auth/passkeys/{passkey}` | Delete a passkey | Yes |

## Register

```
POST /v1/auth/register
```

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `name` | string | required |
| `email` | string | required, valid email, unique |
| `password` | string | required, min 12 characters |
| `password_confirmation` | string | required, must match `password` |

Rate limited to **10 requests per hour per IP**.

## Login

```
POST /v1/auth/login
```

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `email` | string | required |
| `password` | string | required |

Rate limited to **5 requests per minute per email/IP**.

**Response (200):**

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

## Verify Email

```
POST /v1/auth/verify
```

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `user_id` | string | required |
| `token` | string | required |

## Forgot Password

```
POST /v1/auth/forgot-password
```

Sends a password reset link (valid 60 minutes). Rate limited to **10 requests per hour per IP**.

| Field | Type | Rules |
|-------|------|-------|
| `email` | string | required |
| `platform` | string | optional (web/mobile/desktop) |

## Reset Password

```
POST /v1/auth/reset-password
```

| Field | Type | Rules |
|-------|------|-------|
| `token` | string | required |
| `email` | string | required |
| `password` | string | required, min 12 characters |

## Passkeys

WebAuthn passkey login and management.

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/auth/passkey/authenticate-options` | Get a login challenge |
| POST | `/v1/auth/passkey/authenticate` | Complete login |
| POST | `/v1/auth/passkeys/register-options` | Get a registration challenge |
| POST | `/v1/auth/passkeys/register` | Register a new passkey |
| GET | `/v1/auth/passkeys` | List passkeys |
| PUT | `/v1/auth/passkeys/{passkey}` | Rename a passkey (`name`) |
| DELETE | `/v1/auth/passkeys/{passkey}` | Delete a passkey |

Passkey authentication is rate limited to **10 requests per minute per IP/email**.

## Health

```
GET /v1/health
```

Public health check. Returns `status`, `timestamp`, `app`, and `version`.

## Logout

```
POST /v1/auth/logout
```

Revokes the token used in the `Authorization` header.

## Logout All Other Sessions

```
POST /v1/auth/logout-all
```

Revokes every token except the one making the request.

## Refresh Token

```
POST /v1/auth/refresh
```

Returns a new token. The old token is revoked.

**Response (200):**

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

## List Tokens

```
GET /v1/auth/tokens
```

Returns all active tokens for the authenticated user. Each token includes an `is_current` boolean.

## Revoke a Token

```
POST /v1/auth/revoke-token
```

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `token_id` | integer | required |
