---
title: Autenticación
description: Inicio de sesión, registro, gestión de tokens y verificación de correo electrónico.
---

Todos los endpoints de autenticación tienen el prefijo `/api/v1/auth/`. Usa la cabecera `Authorization: Bearer <token>` para las solicitudes autenticadas.

## Endpoints

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/v1/health` | Comprobación de estado (pública) | No |
| POST | `/v1/auth/register` | Crear una cuenta nueva | No |
| POST | `/v1/auth/login` | Autenticarse y obtener un token | No |
| POST | `/v1/auth/verify` | Verificar la dirección de correo electrónico | No |
| POST | `/v1/auth/forgot-password` | Solicitar un correo de restablecimiento de contraseña | No |
| POST | `/v1/auth/reset-password` | Restablecer la contraseña con un token | No |
| POST | `/v1/auth/passkey/authenticate-options` | Obtener un desafío de inicio de sesión WebAuthn | No |
| POST | `/v1/auth/passkey/authenticate` | Completar el inicio de sesión WebAuthn | No |
| POST | `/v1/auth/logout` | Revocar el token actual | Sí |
| POST | `/v1/auth/logout-all` | Revocar todos los tokens excepto el actual | Sí |
| POST | `/v1/auth/refresh` | Emitir un nuevo token | Sí |
| GET | `/v1/auth/tokens` | Listar todos los tokens activos | Sí |
| POST | `/v1/auth/revoke-token` | Revocar un token específico | Sí |
| POST | `/v1/auth/passkeys/register-options` | Obtener un desafío de registro WebAuthn | Sí |
| POST | `/v1/auth/passkeys/register` | Registrar una nueva clave de acceso | Sí |
| GET | `/v1/auth/passkeys` | Listar claves de acceso | Sí |
| PUT | `/v1/auth/passkeys/{passkey}` | Renombrar una clave de acceso | Sí |
| DELETE | `/v1/auth/passkeys/{passkey}` | Eliminar una clave de acceso | Sí |

## Registro

```
POST /v1/auth/register
```

**Cuerpo de la solicitud:**

| Campo | Tipo | Reglas |
|-------|------|-------|
| `name` | string | obligatorio |
| `email` | string | obligatorio, correo válido, único |
| `password` | string | obligatorio, mínimo 12 caracteres |
| `password_confirmation` | string | obligatorio, debe coincidir con `password` |

Límite de tasa: **10 solicitudes por hora por IP**.

## Inicio de sesión

```
POST /v1/auth/login
```

**Cuerpo de la solicitud:**

| Campo | Tipo | Reglas |
|-------|------|-------|
| `email` | string | obligatorio |
| `password` | string | obligatorio |

Límite de tasa: **5 solicitudes por minuto por correo/IP**.

**Respuesta (200):**

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

## Verificar correo electrónico

```
POST /v1/auth/verify
```

**Cuerpo de la solicitud:**

| Campo | Tipo | Reglas |
|-------|------|-------|
| `user_id` | string | obligatorio |
| `token` | string | obligatorio |

## Olvidé mi contraseña

```
POST /v1/auth/forgot-password
```

Envía un enlace de restablecimiento de contraseña (válido durante 60 minutos). Límite de tasa: **10 solicitudes por hora por IP**.

| Campo | Tipo | Reglas |
|-------|------|-------|
| `email` | string | obligatorio |
| `platform` | string | opcional (web/mobile/desktop) |

## Restablecer contraseña

```
POST /v1/auth/reset-password
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `token` | string | obligatorio |
| `email` | string | obligatorio |
| `password` | string | obligatorio, mínimo 12 caracteres |

## Claves de acceso (Passkeys)

Inicio de sesión y gestión de claves de acceso WebAuthn.

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/auth/passkey/authenticate-options` | Obtener un desafío de inicio de sesión |
| POST | `/v1/auth/passkey/authenticate` | Completar el inicio de sesión |
| POST | `/v1/auth/passkeys/register-options` | Obtener un desafío de registro |
| POST | `/v1/auth/passkeys/register` | Registrar una nueva clave de acceso |
| GET | `/v1/auth/passkeys` | Listar claves de acceso |
| PUT | `/v1/auth/passkeys/{passkey}` | Renombrar una clave de acceso (`name`) |
| DELETE | `/v1/auth/passkeys/{passkey}` | Eliminar una clave de acceso |

La autenticación con clave de acceso tiene un límite de tasa de **10 solicitudes por minuto por IP/correo**.

## Estado del servicio

```
GET /v1/health
```

Comprobación de estado pública. Devuelve `status`, `timestamp`, `app` y `version`.

## Cerrar sesión

```
POST /v1/auth/logout
```

Revoca el token usado en la cabecera `Authorization`.

## Cerrar todas las demás sesiones

```
POST /v1/auth/logout-all
```

Revoca todos los tokens excepto el que hace la solicitud.

## Renovar token

```
POST /v1/auth/refresh
```

Devuelve un nuevo token. El token anterior queda revocado.

**Respuesta (200):**

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

## Listar tokens

```
GET /v1/auth/tokens
```

Devuelve todos los tokens activos del usuario autenticado. Cada token incluye un booleano `is_current`.

## Revocar un token

```
POST /v1/auth/revoke-token
```

**Cuerpo de la solicitud:**

| Campo | Tipo | Reglas |
|-------|------|-------|
| `token_id` | integer | obligatorio |
