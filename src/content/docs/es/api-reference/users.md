---
title: Usuarios y configuración
description: Perfil de usuario, configuración y perfiles públicos.
---

Gestiona tu perfil, tus preferencias y las operaciones de administración de usuarios. Todos los endpoints requieren autenticación salvo que se indique lo contrario.

## Endpoints de perfil

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/v1/users/me` | Obtener el perfil del usuario actual | Sí |
| POST | `/v1/users/me/profile-image` | Subir imagen de perfil | Sí |
| PUT | `/v1/users/change-password` | Cambiar contraseña | Sí |
| GET | `/v1/users/{user}/public-profile` | Ver el perfil público de otro usuario | Sí |

## Endpoints de configuración

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| PUT | `/v1/users/me/settings/navigation` | Actualizar las preferencias de navegación | Sí |
| PUT | `/v1/users/me/settings/timezone` | Definir la zona horaria | Sí |
| PUT | `/v1/users/me/settings/language` | Definir el idioma (en/de/fr/es) | Sí |
| PUT | `/v1/users/me/settings/date-format` | Definir el formato de fecha | Sí |
| PUT | `/v1/users/me/settings/time-format` | Definir el formato de hora | Sí |
| PUT | `/v1/users/me/settings/weather-city` | Definir la ubicación para el clima | Sí |
| PUT | `/v1/users/me/settings/weather-temperature-unit` | Definir la unidad (c/f) | Sí |
| PUT | `/v1/users/me/settings/openai-api-key` | Guardar la clave de API de OpenAI | Sí |
| PUT | `/v1/users/me/settings/complete-onboarding` | Marcar la incorporación como completada | Sí |
| GET/PUT | `/v1/users/me/settings/check-in` | Obtener o actualizar la configuración del registro diario | Sí |

## Endpoints de administración

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/v1/users` | Listar todos los usuarios | Admin |
| PUT | `/v1/users/{user}` | Actualizar un usuario | Admin |

## Subir imagen de perfil

```
POST /v1/users/me/profile-image
Content-Type: multipart/form-data
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `image` | file | obligatorio, imagen, máx. 2 MB |

## Cambiar contraseña

```
PUT /v1/users/change-password
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `current_password` | string | obligatorio |
| `new_password` | string | obligatorio, mínimo 12 |
| `new_password_confirmation` | string | obligatorio, debe coincidir |

## Ciudad para el clima

```
PUT /v1/users/me/settings/weather-city
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `city` | string | obligatorio |
| `lat` | numeric | obligatorio |
| `lon` | numeric | obligatorio |

## Idioma

Valores admitidos: `en`, `de`, `fr`, `es`.

## Unidad de temperatura

Valores admitidos: `c` (Celsius), `f` (Fahrenheit).
