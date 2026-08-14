---
title: Sincronización DAV
description: Sincronización bidireccional CalDAV y CardDAV con Google, Apple, Nextcloud y más.
---

solyto incluye un servidor DAV integrado basado en SabreDAV con una base de datos PostgreSQL. Esto te da sincronización bidireccional CalDAV (calendario) y CardDAV (contactos) con cualquier cliente compatible — sin necesidad de plugins ni extensiones.

## URL del servidor

| Instancia | URL |
|----------|-----|
| Alojada (solyto.app) | `https://dav.solyto.de` |
| Autoalojada | Tu propio endpoint DAV (normalmente `https://tu-dominio/dav`) |

## Autenticación

La sincronización DAV usa **autenticación básica** con las credenciales de tu cuenta de solyto:

- **Usuario:** tu dirección de correo de solyto
- **Contraseña:** la contraseña de tu cuenta de solyto

Los detalles de conexión (URL del servidor, usuario, pista de contraseña) se muestran en el modal **Sincronizar** de las páginas de Calendario y Contactos.

## CalDAV (sincronización de calendario)

CalDAV mantiene tu calendario de solyto sincronizado con aplicaciones de calendario externas. Los cambios realizados en cualquiera de las dos direcciones se reflejan en todas partes.

### Clientes compatibles

- **Google Calendar** (mediante compatibilidad con CalDAV o sincronización de terceros)
- **Apple Calendar** (macOS, iOS)
- **Thunderbird** (mediante compatibilidad integrada con CalDAV)
- **DAVx** (Android)
- **Nextcloud Calendar**
- **GNOME Calendar** / **KDE KOrganizer** (Linux)
- Cualquier otro cliente compatible con CalDAV

### Configuración

1. En solyto, abre **Calendario → Sincronizar** para ver la URL de tu servidor DAV y tus credenciales
2. Abre tu aplicación de calendario y añade una nueva cuenta CalDAV
3. Introduce la URL del servidor (`https://dav.solyto.de` en la versión alojada), tu correo y tu contraseña
4. Tus calendarios de solyto aparecerán como calendarios disponibles para suscribirte

Los cambios realizados en solyto o en tu aplicación de calendario externa se sincronizarán automáticamente en ambas direcciones.

### Calendarios compartidos

solyto admite compartir calendarios mediante CalDAV. Puedes compartir calendarios con otros usuarios de solyto y establecer permisos (solo lectura o lectura y escritura).

## CardDAV (sincronización de contactos)

CardDAV mantiene tus contactos de solyto sincronizados con aplicaciones de contactos externas.

### Clientes compatibles

- **Google Contacts**
- **Apple Contacts** (macOS, iOS)
- **DAVx** (Android)
- **Nextcloud Contacts**
- **Thunderbird** (mediante la extensión CardBook)
- Cualquier otro cliente compatible con CardDAV

### Configuración

1. En solyto, abre **Contactos → Sincronizar** para ver la URL de tu servidor DAV y tus credenciales
2. Abre tu aplicación de contactos y añade una nueva cuenta CardDAV
3. Introduce la URL del servidor, tu correo y tu contraseña
4. Tus contactos de solyto se sincronizarán automáticamente

## Importar mediante CalDAV / CardDAV

También puedes importar calendarios y contactos directamente en solyto desde un servidor DAV externo:

### Importar calendario

1. En solyto, ve a **Calendario → Importar**
2. Introduce la URL, el usuario y la contraseña del servidor externo
3. Descubre qué calendarios están disponibles y selecciona los que quieras importar
4. Los eventos se obtienen y almacenan con progreso en tiempo real

### Importar contactos

1. En solyto, ve a **Contactos → Importar**
2. Introduce la URL, el usuario y la contraseña del servidor externo
3. Descubre qué libretas de direcciones están disponibles y selecciona las que quieras importar
4. Los contactos se obtienen y almacenan con progreso en tiempo real

Esto funciona con cualquier servidor CalDAV/CardDAV (Nextcloud, iCloud, etc.).

## Frecuencia de sincronización

La sincronización DAV es prácticamente en tiempo real en solyto.app. Los clientes externos normalmente consultan cada 5–15 minutos, según la aplicación. Algunos clientes (como DAVx en Android) permiten configurar manualmente el intervalo de sincronización.

## Solución de problemas

### La sincronización no funciona

- Verifica que la URL del servidor sea correcta (`https://dav.solyto.de` para la versión alojada)
- Comprueba que tu correo y contraseña coincidan con los de tu cuenta de solyto
- Si cambiaste recientemente tu contraseña de solyto, actualiza las credenciales en tu cliente DAV
- Fuerza una sincronización manual desde la aplicación externa (la mayoría de los clientes tienen un botón de actualizar)

### Los eventos no aparecen

- Comprueba que te hayas suscrito al calendario correcto en tu cliente DAV
- Algunos clientes requieren que actives explícitamente un calendario recién descubierto
- Verifica primero que el evento exista en la interfaz web de solyto

### Eventos duplicados

- Esto suele ocurrir cuando el mismo calendario está conectado dos veces. Elimina una de las conexiones y fuerza una sincronización.

### Particularidades de Google Calendar

Google Calendar requiere [tener habilitada la compatibilidad con CalDAV](https://support.google.com/calendar/answer/99358) y puede necesitar contraseñas específicas de aplicación si usas autenticación de dos factores.

### Autoalojamiento

Si autoalojas solyto, el servidor DAV se ejecuta como parte de la pila. Asegúrate de que:

- El servicio SabreDAV esté en ejecución
- PostgreSQL esté accesible
- Tu proxy inverso reenvíe las solicitudes DAV al servicio correcto
- TLS esté configurado (los clientes DAV normalmente requieren HTTPS)
