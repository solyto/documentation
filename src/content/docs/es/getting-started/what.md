---
title: Qué es solyto
description: solyto es una app de gestión personal todo en uno, gratuita, de código abierto y privada.
---

solyto es una app de gestión personal todo en uno, gratuita, de código abierto y privada. Tareas, calendario, contactos, notas, finanzas, bibliotecas, seguimiento de tiempo y más — una sola app, un solo inicio de sesión, una sola interfaz. Sin rastreo, sin anuncios, sin suscripciones. Nunca.

## Tres formas de usar solyto

1. **solyto.app** — la versión hosted. Crea una cuenta y empieza a usarla de inmediato. No requiere configuración.
2. **Desarrollo local** — ejecuta la pila completa localmente con Docker Compose a través del repositorio [localdocker](https://github.com/solyto/localdocker). Ideal para contribuir o experimentar.
3. **Self-hosting** — despliega solyto en tu propio servidor usando el repositorio [selfhosted](https://github.com/solyto/selfhosted). Control total sobre tus datos.

## Qué incluye

Todas las funciones están incluidas. Sin niveles, sin actualizaciones de pago, sin "próximamente".

**Productividad**

- [Tareas](/features/todos/) — tareas con etiquetas, fechas de vencimiento, prioridades y programaciones recurrentes
- [Calendario](/features/calendar/) — tu agenda con sincronización CalDAV
- [Notas](/features/notes/) — notas y pensamientos, organizados a tu manera
- [Contactos](/features/contacts/) — libreta de direcciones con sincronización CardDAV
- [Portapapeles](/features/clipboard/) — portapapeles compartido entre dispositivos

**Bibliotecas**

- [Música](/features/libraries/music/), [Libros](/features/libraries/books/), [Películas](/features/libraries/movies/), [Juegos](/features/libraries/games/) — lleva el registro de tus colecciones
- [Recetas](/features/libraries/recipes/), [Citas](/features/libraries/quotes/), [Enlaces](/features/libraries/links/), [Plantas](/features/libraries/plants/) — cataloga todo lo demás

**Bienestar y tiempo**

- [Registro diario](/features/check-in/) — seguimiento del estado de ánimo, diario personal, formación de hábitos
- [Seguimiento de tiempo](/features/time-tracking/) — controla proyectos, horas facturables y productividad

**Finanzas**

- [Finanzas](/features/finances/) — seguimiento de presupuesto y resumen del patrimonio neto

**Información**

- [Feeds RSS](/features/feeds/) — noticias de las fuentes que elijas, sin algoritmos

**Integraciones**

- [Bot de Telegram](/integrations/telegram/) — guarda enlaces, recibe resúmenes diarios y notificaciones
- [Sincronización CalDAV/CardDAV](/integrations/dav-sync/) — sincroniza con apps externas de calendario y contactos
- Asistentes de IA — interactúa con tus propios datos usando IA, en tus propios términos

## Stack tecnológico

solyto está construido con herramientas conocidas y maduras:

- **Frontend** — SvelteKit 2, Svelte 5, Tailwind CSS v4, TypeScript
- **Backend** — Laravel 12, PHP 8.4
- **Bases de datos** — MariaDB (datos de la app), PostgreSQL (CalDAV/CardDAV vía SabreDAV)
- **Caché y colas** — Redis
- **Proxy inverso** — Traefik con TLS automático de Let's Encrypt
- **Despliegue** — Docker (imágenes: `solyto/app`, `solyto/api-php`, `solyto/api-nginx`)
