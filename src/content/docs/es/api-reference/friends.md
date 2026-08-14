---
title: API de amigos
description: Solicitudes de amistad y gestión de la lista de amigos.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/friends`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/friends` | Listar amigos aceptados |
| GET | `/v1/friends/requests` | Listar solicitudes de amistad pendientes (entrantes y salientes) |
| POST | `/v1/friends/requests` | Enviar una solicitud de amistad (`receiver_id`) |
| PUT | `/v1/friends/requests/{friendRequest}/accept` | Aceptar una solicitud de amistad (solo el destinatario) |
| PUT | `/v1/friends/requests/{friendRequest}/reject` | Rechazar una solicitud de amistad (solo el destinatario) |

## Listar solicitudes

```
GET /v1/friends/requests
```

Devuelve las solicitudes de amistad entrantes y salientes pendientes con sus estados (pending/accepted/rejected).

## Enviar solicitud

```
POST /v1/friends/requests
```

| Campo | Tipo | Reglas |
|-------|------|-------|
| `receiver_id` | string | Obligatorio. ID del usuario a agregar como amigo |

## Aceptar / rechazar

```
PUT /v1/friends/requests/{friendRequest}/accept
PUT /v1/friends/requests/{friendRequest}/reject
```

Solo el destinatario puede aceptar o rechazar una solicitud. No se necesita cuerpo en la solicitud.
