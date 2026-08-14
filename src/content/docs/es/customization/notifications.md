---
title: Notificaciones
description: Configura las notificaciones en los canales de la app, correo electrónico, push y Telegram.
---

solyto puede enviar notificaciones a través de cuatro canales. Tú controlas exactamente qué tipos de notificación pasan por qué canales: cada tipo se puede activar o desactivar por canal.

## Tipos de notificación

solyto tiene 9 tipos de notificación:

| Tipo | Clave | Descripción |
|------|-----|-------------|
| Lanzamiento de música | `music_release` | Nuevos álbumes o sencillos de artistas de tu biblioteca de música |
| Lanzamiento de libro | `book_release` | Nuevos libros de autores de tu biblioteca de libros |
| Lanzamiento de película | `movie_release` | Nuevos estrenos de películas de tu lista de seguimiento |
| Solicitud de amistad | `friend_request` | Alguien te envió una solicitud de amistad |
| Recordatorio de tu día | `daily_day_reminder` | Resumen matutino diario de tu día (tareas, eventos, clima) |
| Recordatorio de registro diario | `daily_check_in_reminder` | Aviso diario para completar tu registro diario |
| Calendario compartido | `calendar_share` | Alguien compartió un calendario contigo |
| Comentario en solicitud de desarrollo | `dev_request_comment` | Alguien comentó en una solicitud de función que sigues |
| Exportación lista | `export_ready` | Un trabajo de exportación de datos ha terminado y está listo para descargar |

## Canales

### En la app (UI)

Las notificaciones aparecen en el icono de campana de la barra de navegación. Haz clic en la campana para ver tu historial de notificaciones, marcar elementos como leídos o marcar todos como leídos. Este canal siempre está disponible, sin necesidad de configuración.

### Push (Web Push)

Notificaciones push del navegador mediante la API Web Push con autenticación VAPID. Disponible en la web.

Para activar las notificaciones push:

1. Ve a **Configuración → Notificaciones**
2. Haz clic en **Activar notificaciones push**
3. Tu navegador te pedirá permiso: haz clic en **Permitir**
4. Las notificaciones push ya están activas

Las notificaciones push funcionan incluso cuando solyto no está abierto en una pestaña del navegador, también cuando está instalado como PWA.

:::note
Las notificaciones push requieren HTTPS y un navegador compatible (Chrome, Firefox, Edge, Safari 16.4+).
:::

### Telegram (bot)

Envía notificaciones a tu cuenta de Telegram a través del [bot de Telegram](/integrations/telegram/).

Para configurar las notificaciones de Telegram:

1. [Conecta el bot de Telegram](/integrations/telegram/#connecting-the-bot) a tu cuenta de solyto
2. Ve a **Configuración → Notificaciones**
3. Activa los tipos de notificación que quieras recibir por el canal **Bot**

El canal de Telegram solo se activa una vez que el bot está conectado.

### Correo electrónico

Las notificaciones por correo electrónico llegarán pronto: el canal de correo aún no está disponible.

## Configurar notificaciones

Ve a **Configuración → Notificaciones** para:

- Conectar o desconectar el bot de Telegram
- Activar o desactivar las notificaciones push en tu navegador
- Activar o desactivar cada tipo de notificación por canal

### Configuración por tipo y por canal

La página de configuración de notificaciones muestra una matriz donde cada fila es un tipo de notificación y cada columna es un canal (UI, correo, push, bot). Activa cualquier combinación. Los canales que aún no están configurados aparecen atenuados: el canal Bot requiere un bot de Telegram conectado, y el canal Push requiere que las notificaciones push estén activadas.

| Tipo | UI | Correo | Push | Bot |
|---|:---:|:---:|:---:|:---:|
| Nuevos lanzamientos de libros | ✓ | — | ✓ | ✓ |
| Nuevos lanzamientos de música | ✓ | — | ✓ | ✓ |
| Nuevo estreno | ✓ | — | ✓ | ✓ |
| Nueva solicitud de amistad | ✓ | — | ✓ | ✓ |
| Recordatorio de registro diario | ✓ | — | ✓ | ✓ |
| Recordatorio del próximo día | ✓ | — | ✓ | ✓ |
| Calendarios compartidos | ✓ | — | ✓ | ✓ |
| Comentarios en solicitudes de desarrollo | ✓ | — | ✓ | ✓ |
| Exportación lista | ✓ | — | ✓ | ✓ |

Por ejemplo, podrías querer notificaciones de exportación solo en la app, recordatorios diarios por Telegram y alertas de lanzamientos por push.

Los dos tipos de recordatorio diario (`daily_day_reminder` y `daily_check_in_reminder`) se envían a las 07:00 y a las 20:00 en tu zona horaria respectivamente (consulta [Telegram](/integrations/telegram/) para conocer el comportamiento de las alertas).
