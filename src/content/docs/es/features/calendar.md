---
title: Calendario
description: Gestión de eventos con sincronización CalDAV, eventos recurrentes y calendarios compartidos.
---

Calendario es un gestor de eventos completo integrado en solyto. Admite múltiples calendarios, eventos recurrentes, compartir con amigos y sincronización bidireccional CalDAV con servicios externos como Google Calendar y Apple Calendar.

## Crear eventos

Haz clic en cualquier día o franja horaria para crear un evento. Los eventos admiten:

- **Título** — el nombre del evento
- **Descripción** — detalles opcionales
- **Ubicación** — dónde tiene lugar el evento
- **Hora de inicio y fin** — o márcalo como evento de todo el día
- **Repetición** — repetir a diario, semanalmente, mensualmente o con una regla personalizada
- **Calendario** — asignarlo a uno de tus calendarios

## Varios calendarios

Puedes crear tantos calendarios como necesites y asignar un color a cada uno. Configuraciones habituales incluyen:

- **Personal** — tus propias citas
- **Trabajo** — reuniones y plazos
- **Familia** — eventos familiares compartidos

Cada calendario tiene su propio color. Puedes reordenar los calendarios (arrastrar y soltar), y ocultar o mostrar calendarios individuales. Los calendarios pueden ser tuyos, estar compartidos contigo (invitación pendiente o aceptada), o estar suscritos.

## Vistas del calendario

solyto ofrece cuatro vistas, cada una con una variante optimizada para móvil:

| Vista | Descripción |
|------|-------------|
| **Mes** | Cuadrícula del mes completo con puntos de evento |
| **Semana** | Columnas hora por hora para la semana |
| **Día** | Vista horaria detallada de un solo día |
| **Lista** | Lista cronológica de próximos eventos |

## Eventos recurrentes

Los eventos pueden repetirse usando reglas de recurrencia RRULE (RFC 5545). Los patrones admitidos incluyen:

- Diario, semanal, mensual, anual
- Intervalos personalizados (p. ej., cada 2 semanas)
- Días concretos de la semana (p. ej., todos los lunes y miércoles)

### Editar eventos recurrentes

Al editar o eliminar un evento recurrente, solyto pregunta si el cambio debe aplicarse a:

- **Solo esta repetición** — la instancia individual
- **Todas las repeticiones** — todas las instancias del evento recurrente

## Calendarios compartidos

Comparte tus calendarios con amigos que también usen solyto:

1. Abre el modal **Compartir** de un calendario (solo el propietario puede compartir)
2. Selecciona un amigo de tu lista de [Amigos](/account/friends/) — recibirá una invitación
3. El amigo **acepta o rechaza** la invitación pendiente
4. **Revocar acceso** — el propietario puede dejar de compartir en cualquier momento
5. **Cancelar suscripción** — los destinatarios pueden anular la suscripción a los calendarios compartidos con ellos

Los calendarios compartidos aparecen junto a los tuyos, con un indicador de estado de la invitación (pendiente / aceptada).

## Adjuntar tareas y notas a eventos

Cualquier evento puede tener tareas y notas adjuntas, manteniendo junto el material relacionado:

- **Adjuntar** una tarea o nota desde un selector con búsqueda mientras editas un evento
- **Desvincular** en cualquier momento
- Los elementos adjuntos son visibles en el evento dentro del calendario

Las tareas con fecha de vencimiento también aparecen directamente en el calendario y pueden completarse desde ahí mismo.

## Sincronización CalDAV

solyto admite sincronización CalDAV bidireccional, manteniendo tus eventos sincronizados con servicios de calendario externos:

- Google Calendar
- Apple Calendar
- Nextcloud Calendar
- Cualquier otro servicio compatible con CalDAV

El servidor CalDAV de solyto se ejecuta en `https://dav.solyto.de` (o en tu propia instancia). Inicias sesión con tu correo y contraseña de solyto.

### Proceso de importación

Importar desde un servidor CalDAV externo es un proceso de varias etapas:

1. **Inicio** — introduce la URL, el usuario y la contraseña de tu servidor externo
2. **Selección** — elige qué calendarios importar
3. **Importando** — los eventos se obtienen y almacenan, con progreso en tiempo real
4. **Finalizado** — tus calendarios ya están disponibles en solyto

Consulta [Sincronización DAV](/integrations/dav-sync/) para instrucciones detalladas de configuración.

## Notificaciones

Puedes recibir notificaciones de próximos eventos por Telegram o notificaciones push del navegador. Consulta [Notificaciones](/customization/notifications/).

## Exportar

Los datos de tu calendario se pueden exportar como archivo `.ics`, compatible con cualquier aplicación de calendario. Consulta [Exportar datos](/integrations/exporting/).
