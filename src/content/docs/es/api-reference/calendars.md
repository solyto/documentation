---
title: API de calendarios
description: Gestión de calendarios y eventos con uso compartido, archivos adjuntos e importación CalDAV.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/calendars`.

## Calendarios

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/calendars` | Listar todos los calendarios (propios, compartidos, suscritos) |
| POST | `/v1/calendars` | Crear un calendario (`name`; 409 si ya existe) |
| PUT | `/v1/calendars/{instanceId}` | Actualizar el color de un calendario |
| DELETE | `/v1/calendars/{instanceId}` | Eliminar un calendario |
| DELETE | `/v1/calendars/{instanceId}/unsubscribe` | Cancelar la suscripción a un calendario compartido |
| PUT | `/v1/calendars/order` | Reordenar calendarios (`order[]`) |

## Eventos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/calendars/events/widget` | Próximos eventos para el widget del panel |
| GET | `/v1/calendars/events/{yearMonth}` | Eventos de un mes (`YYYY-MM`) |
| POST | `/v1/calendars/{instanceId}/events` | Crear un evento |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}` | Actualizar o mover un evento (`etag` para gestión de conflictos) |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}` | Eliminar un evento |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Actualizar una sola ocurrencia recurrente |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Eliminar una sola ocurrencia |

La creación de eventos acepta: `title`, `start_date`, `end_date`, `description`, `location`, `is_all_day`, `is_recurring`, `recurrence_rule`, `recurrence_end`.

## Archivos adjuntos de eventos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/calendars/events/{eventId}/attachments/todos` | Tareas adjuntas a un evento |
| POST | `/v1/calendars/events/{eventId}/attachments/todos` | Adjuntar una tarea (`todo_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/todos/{todoId}` | Desvincular una tarea |
| GET | `/v1/calendars/events/{eventId}/attachments/notes` | Notas adjuntas a un evento |
| POST | `/v1/calendars/events/{eventId}/attachments/notes` | Adjuntar una nota (`note_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/notes/{noteId}` | Desvincular una nota |

## Uso compartido e invitaciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/calendars/{instanceId}/share` | Listar personas con acceso (solo propietario) |
| POST | `/v1/calendars/{instanceId}/share` | Compartir con un amigo (`friend_id`) |
| DELETE | `/v1/calendars/{instanceId}/share/{userId}` | Revocar el acceso compartido |
| GET | `/v1/calendars/invites` | Listar invitaciones de uso compartido pendientes |
| PUT | `/v1/calendars/invites/{token}/accept` | Aceptar una invitación |
| PUT | `/v1/calendars/invites/{token}/decline` | Rechazar una invitación |

## Importación (CalDAV)

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/calendars/import` | Iniciar una importación CalDAV externa (`url`, `username`, `secret`) |
| POST | `/v1/calendars/import/select` | Seleccionar calendarios a importar |
| GET | `/v1/calendars/import/state` | Estado de progreso de la importación |
