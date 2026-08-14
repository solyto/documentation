---
title: Bot de Telegram
description: Guarda enlaces, recibe resúmenes diarios y notificaciones a través de Telegram.
---

solyto tiene un bot de Telegram ([@SolytoBot](https://t.me/SolytoBot)) que te permite interactuar con tu cuenta directamente desde Telegram. Guarda enlaces, añade elementos a tus bibliotecas, recibe resúmenes diarios y notificaciones — todo sin abrir la aplicación.

## Qué puede hacer el bot

- **Añadir elementos rápidamente** — envía cualquier texto o URL y el bot detecta el tipo (tarea, nota, enlace, música, película, receta, etc.)
- **Resumen diario** — `/day` muestra tus próximas citas y tareas pendientes
- **Listar tareas** — `/todos` lista tus tareas abiertas directamente en el chat
- **Alertas** — un resumen del día siguiente a las 7:00 y un recordatorio de registro diario a las 20:00 (tu zona horaria), cuando está activado
- **Notificaciones** — recibe avisos de nuevos lanzamientos, solicitudes de amistad y más a través del canal de Telegram

## Conectar el bot

Vincular tu cuenta de solyto con Telegram es un proceso de dos pasos:

1. En solyto, ve a **Ajustes → Notificaciones** y solicita un token de conexión de Telegram
2. Copia el token
3. Abre [@SolytoBot](https://t.me/SolytoBot) en Telegram
4. Envía `/connect <tu-token>` al bot
5. El bot confirma la conexión

Tu cuenta ya está vinculada. Puedes desconectarla en cualquier momento desde la misma página de ajustes.

## Comandos del bot

| Comando | Qué hace |
|---------|-------------|
| `/connect <token>` | Vincula tu cuenta de solyto (configuración única) |
| `/day` | Muestra el resumen de hoy — próximas citas y tareas pendientes/vencidas |
| `/todos` | Lista tus tareas abiertas actuales |
| `/help` | Muestra los comandos disponibles |

## Añadir elementos rápidamente vía el bot

Una vez conectado, puedes añadir elementos a tus bibliotecas simplemente enviando texto o una URL al bot:

1. Envía una URL o texto sencillo a @SolytoBot
2. El bot detecta el tipo de contenido automáticamente (tarea, nota, enlace, música, libro, película, juego, receta, planta, cita, feed, portapapeles)
3. Si la confianza de la detección es inferior al 60%, el bot muestra un teclado en línea para elegir el tipo
4. El elemento se añade a la biblioteca correspondiente

Por ejemplo:

- Envía un enlace de Deezer o Discogs → se añade a tu Biblioteca de música
- Envía una URL de IMDb → se añade a tu Biblioteca de películas
- Envía la URL de una receta de Chefkoch → se añade a tu Biblioteca de recetas
- Envía cualquier otra URL → se añade a tu Biblioteca de enlaces
- Envía una línea que contenga `due:` → se añade como tarea

El bot usa el estado de la conversación para gestionar interacciones de varios pasos, como la selección del tipo.

## Alertas

El bot puede entregar dos alertas programadas, controladas por los ajustes de notificaciones del canal de Telegram (consulta [Notificaciones](/customization/notifications/)):

- **Alerta de tu día** — a las 07:00 (tu zona horaria), un resumen de los eventos de calendario de hoy y las tareas pendientes/vencidas
- **Alerta de registro diario** — a las 20:00 (tu zona horaria), un recordatorio para completar tu [registro diario](/features/check-in/)

## Idiomas

El bot admite los mismos idiomas que solyto:

- Inglés (en)
- Alemán (de)
- Francés (fr)
- Español (es)

El idioma del bot sigue el idioma configurado en tu cuenta de solyto.

## Desconectar

Para desvincular tu cuenta de Telegram:

1. Ve a **Ajustes → Notificaciones**
2. Desconecta el bot de Telegram

Esto elimina la asociación entre tu cuenta de Telegram y tu cuenta de solyto. El bot dejará de responder a comandos o enviar alertas.

## Nota sobre el autoalojamiento

Si autoalojas solyto, necesitas crear tu propio bot de Telegram:

1. Envía un mensaje a [@BotFather](https://t.me/BotFather) en Telegram
2. Crea un nuevo bot y copia el token de la API
3. Proporciona el token como el secreto `SOLYTO_BOT_TELEGRAM_TOKEN` (consulta [Secretos de Docker](/self-hosting/secrets/))
4. Registra el webhook del bot (consulta la configuración de despliegue)

El bot recibe actualizaciones a través de un webhook servido por la API.
