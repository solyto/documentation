---
title: Resumen del alojamiento propio
description: Todo lo que necesitas saber para ejecutar solyto en tu propio servidor.
---

solyto se puede alojar completamente por tu cuenta. Todos los componentes se publican como imágenes Docker, y el repositorio selfhosted proporciona una pila completa de Docker Compose con todo interconectado.

## Por qué alojarlo tú mismo

- **Control total** — tus datos permanecen en tu propio hardware
- **Sin acceso de terceros** — nadie más tiene acceso a tus datos, nunca
- **Personalización** — configura funciones, desactiva las que no necesites
- **Sin dependencia de un proveedor** — pila Docker estándar, fácil de migrar o respaldar
- **Gratis** — sin suscripciones, sin límites

## Requisitos del sistema

El único requisito de software es **Docker** y **Docker Compose** — todo lo demás se ejecuta dentro de contenedores. solyto es ligero: funciona perfectamente en una Raspberry Pi, y cualquier VPS o servidor dedicado es más que suficiente.

También necesitas:

- Un servidor accesible desde internet (VPS, servidor dedicado o servidor doméstico con redirección de puertos)
- Tres nombres de dominio apuntando a la IP de tu servidor (app, api, dav)
- Una dirección de correo válida para la generación de certificados TLS (Let's Encrypt)

## Arquitectura

solyto se ejecuta como 10 servicios Docker:

| Servicio | Imagen | Descripción |
|---------|-------|-------------|
| `traefik` | `traefik:v3` | Proxy inverso con HTTPS automático vía Let's Encrypt |
| `nginx` | `solyto/api-nginx` | Servidor web para la API y DAV, comprobación de estado en `/api/v1/health` |
| `api` | `solyto/api-php` | Backend Laravel PHP-FPM, ejecuta `startup.sh` y luego `php-fpm` |
| `dav` | `solyto/api-php` | Servicio WebDAV/CalDAV/CardDAV (misma imagen, configuración distinta) |
| `queue` | `solyto/api-php` | Trabajador de cola de Laravel (`queue:work --tries=3 --timeout=300`) |
| `app` | `solyto/app` | Frontend SvelteKit con SSR, se ejecuta en el puerto 3000 |
| `imgproxy` | `darthsim/imgproxy` | Procesamiento de imágenes opcional (solo si `IMAGE_DRIVER=imgproxy`) |
| `mariadb` | `mariadb:12` | Base de datos principal de la API |
| `postgres` | `postgres:17` | Base de datos para CalDAV/CardDAV (SabreDAV) |
| `redis` | `redis:7.4.1` | Caché, backend de colas y almacenamiento de sesiones |

## Imágenes Docker

El proyecto solyto publica y mantiene tres imágenes:

| Imagen | Base | Propósito |
|-------|------|---------|
| `solyto/app` | Node 22 Alpine | Frontend SvelteKit con SSR, puerto 3000 |
| `solyto/api-php` | PHP 8.4 FPM | Backend de la aplicación Laravel |
| `solyto/api-nginx` | Nginx Alpine | Sirve archivos estáticos y actúa de proxy hacia PHP-FPM |

## Arquitectura de red

Tres redes Docker aíslan los servicios por función:

| Red | Servicios | Propósito |
|---------|----------|---------|
| `public` | traefik, nginx, app | Servicios accesibles desde el exterior |
| `api` | nginx, api, dav, queue, imgproxy | Comunicación interna de la API |
| `db` | api, dav, queue, mariadb, postgres, redis | Solo acceso a bases de datos |

Flujo de tráfico: `Internet → Traefik → Nginx → PHP-FPM (api/dav)` y `Internet → Traefik → App (puerto 3000)`.

## Volúmenes

| Volumen | Usado por | Propósito |
|--------|---------|---------|
| `mariadb_data` | mariadb | Persistencia de datos de MariaDB |
| `pg_data` | postgres | Persistencia de datos de PostgreSQL |
| `redis_data` | redis | Persistencia de datos de Redis |
| `traefik_acme` | traefik | Certificados TLS de Let's Encrypt |
| `./storage/` | api, dav, queue, nginx, imgproxy | Almacenamiento de archivos compartido (subidas, registros, caché del framework) |

## Próximos pasos

- [Instalación](/self-hosting/installation/) — guía de configuración paso a paso
- [Configuración](/self-hosting/configuration/) — todas las variables de entorno
- [Secretos de Docker](/self-hosting/secrets/) — gestión segura de credenciales
