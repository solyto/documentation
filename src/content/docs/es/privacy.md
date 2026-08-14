---
title: Privacidad y seguridad
description: Cómo maneja solyto tus datos.
---

solyto se construyó con la privacidad como requisito fundamental, no como algo secundario.

## Lo que solyto NO hace

- **Sin rastreo** — sin analíticas, sin telemetría, sin datos de uso
- **Sin cookies** — el único almacenamiento del navegador que se usa es una entrada de localStorage para la autenticación
- **Sin solicitudes en segundo plano** — solyto solo contacta servicios externos cuando tú activas explícitamente una acción (como una importación o una recomendación)
- **Sin entrenamiento de IA** — tus datos no se usan para entrenar ningún modelo
- **Sin anuncios** — solyto no tiene publicidad

## Qué almacena solyto

solyto almacena los datos que introduces —notas, tareas, eventos de calendario, contactos, entradas de biblioteca, etc.— en tu cuenta. En solyto.app, esto se almacena en servidores en la UE. Si haces self-hosting, se almacena en tu propio servidor.

## Autenticación

solyto usa una única entrada de localStorage para tu token de autenticación. No interviene ningún servicio de autenticación de terceros. El inicio de sesión con clave de acceso (WebAuthn) está disponible para una autenticación sin contraseña.

## Contacto con servicios externos

solyto contacta servicios externos solo cuando tú lo solicitas explícitamente:

- **Clima** — Open-Meteo para los pronósticos, y OpenStreetMap Nominatim para la búsqueda de ciudades en el widget del panel
- **Importación y búsqueda en bibliotecas** — Deezer, Discogs, Hardcover, Goodreads, IMDb, TMDB, Steam, BoardGameGeek y Chefkoch, activados por ti
- **Notificaciones de lanzamientos** — el backend comprueba periódicamente Deezer/Hardcover/TMDB en busca de nuevos lanzamientos de tus artistas/autores favoritos
- **Recomendaciones de IA** — las recomendaciones de biblioteca se generan bajo demanda a través de una API compatible con OpenAI; no se envía nada hasta que haces clic en el botón
- **Sincronización CalDAV/CardDAV** — se sincroniza solo cuando la tienes configurada; puedes desactivarla en cualquier momento
- **Bot de Telegram** — solo está activo si lo configuras tú; los mensajes los envías tú
- **Notificaciones** — se envían a tu navegador, correo electrónico o Telegram cuando ocurren eventos

Nada ocurre en segundo plano sin que lo sepas.

## Self-hosting

Si haces self-hosting de solyto, tus datos nunca salen de tu servidor. Tú controlas todo. Consulta [Self-Hosting](/self-hosting/overview/).

## Código abierto

solyto es de código abierto. Puedes auditar exactamente lo que hace. El código fuente está en [GitHub](https://github.com/solyto).
