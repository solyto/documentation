---
title: Configuración
description: Todas las variables de entorno y opciones de configuración.
---

Toda la configuración se realiza a través del archivo `.env` en la raíz del repositorio selfhosted. Los valores sensibles (contraseñas, claves de API) se almacenan como secretos de Docker en `./secrets/` — consulta [Secretos de Docker](/self-hosting/secrets/) para más detalles.

## Proyecto

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `PROJECT_NAME` | Nombre del proyecto de Docker Compose | `solyto` |
| `SOLYTO_VERSION` | Etiqueta de versión para las imágenes de solyto | `latest` |

## Dominios

Estos son los nombres de dominio que apuntan a tu servidor. Cada servicio tiene su propio (sub)dominio.

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `API_DOMAIN` | Dominio de la API | `api.example.com` |
| `APP_DOMAIN` | Dominio del frontend | `app.example.com` |
| `DAV_DOMAIN` | Dominio de CalDAV/CardDAV | `dav.example.com` |
| `ACME_EMAIL` | Correo para las notificaciones de certificados de Let's Encrypt | `admin@example.com` |

## Aplicación

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `APP_NAME` | Nombre visible de la aplicación | `solyto` |
| `APP_URL` | URL completa de la API | `https://${API_DOMAIN}` |
| `FRONTEND_URL` | URL completa del frontend | `https://${APP_DOMAIN}` |
| `APP_ENV` | Entorno de la aplicación | `production` |
| `APP_DEBUG` | Activa el modo de depuración | `false` |
| `APP_TIMEZONE` | Zona horaria por defecto de la aplicación | `UTC` |

## Frontend

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `NODE_ENV` | Entorno de Node.js | `production` |
| `PUBLIC_API_URL` | URL que usa el frontend para acceder a la API | `https://${API_DOMAIN}` |
| `PUBLIC_DISABLE_DEV_REQUESTS` | Oculta la sección de Dev Requests | `true` |
| `PUBLIC_REDIRECT_AFTER_LOGOUT` | URL a la que redirigir tras cerrar sesión | `${APP_URL}` |
| `PUBLIC_LEGAL_NOTICE_URL` | Enlace para el botón de aviso legal | (vacío) |
| `PUBLIC_PRIVACY_URL` | Enlace para el botón de política de privacidad | (vacío) |
| `PUBLIC_TERMS_URL` | Enlace para el botón de términos del servicio | (vacío) |

Configura `PUBLIC_DISABLE_DEV_REQUESTS=true` para ocultar el enlace de Dev Requests y deshabilitar la ruta por completo (valor por defecto en instancias autoalojadas, ya que las solicitudes no llegarían al equipo de solyto). Configura cualquiera de las variables `PUBLIC_*_URL` para mostrar un botón de aviso legal que enlace a tu propio aviso legal, política de privacidad o términos.

## Versiones de bases de datos

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `MARIADB_VERSION` | Versión de la imagen de MariaDB | `12` |
| `POSTGRES_VERSION` | Versión de la imagen de PostgreSQL | `17` |
| `REDIS_VERSION` | Versión de la imagen de Redis | `7.4.1` |

## MariaDB

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `DB_CONNECTION` | Controlador de base de datos | `mariadb` |
| `DB_HOST` | Nombre de host de MariaDB | `mariadb` |
| `DB_PORT` | Puerto de MariaDB | `3306` |
| `DB_DATABASE` | Nombre de la base de datos | `api` |

Las credenciales (`DB_USER`, `DB_PASSWORD`) se leen de los secretos de Docker (`db_user`, `db_password`). La contraseña de root de MariaDB se lee de `mariadb_root_password`.

## PostgreSQL (DAV)

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `DAV_DB_HOST` | Nombre de host de PostgreSQL | `postgres` |
| `DAV_DB_PORT` | Puerto de PostgreSQL | `5432` |
| `DAV_DB_DATABASE` | Nombre de la base de datos DAV | `dav` |

Las credenciales se leen de los secretos de Docker (`dav_db_user`, `dav_db_password`). La contraseña de superusuario de PostgreSQL se lee de `postgres_root_password`.

## Redis

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `REDIS_CLIENT` | Biblioteca cliente de Redis | `phpredis` |
| `REDIS_HOST` | Nombre de host de Redis | `redis` |
| `REDIS_PORT` | Puerto de Redis | `6379` |
| `REDIS_PASSWORD` | Contraseña de Redis | (desde el secreto de Docker) |
| `REDIS_PREFIX` | Prefijo de claves para esta instancia | `solyto_` |

## Proxy

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `TRUSTED_PROXIES` | IPs de proxy de confianza (necesario al usar un proxy inverso externo) | (vacío) |

## Zona horaria

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `TIMEZONE` | Zona horaria del servidor | `UTC` |

Esto afecta a los ajustes de zona horaria de PHP y del trabajador de colas.

## IA

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `AI_BASE_URL` | URL base de la API compatible con OpenAI | (vacío — valor por defecto de OpenAI) |
| `AI_MODEL` | Modelo de IA por defecto | `gpt-4o-mini` |

La clave de API se almacena en el secreto de Docker `ai_api_key`. Solo es necesaria si quieres usar las [recomendaciones de biblioteca](/account/ai-assistants/).

## Correo

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `MAILGUN_DOMAIN` | Dominio de Mailgun para el envío de correo | (vacío) |
| `MAIL_FROM_ADDRESS` | Dirección de correo del remitente | `noreply@example.com` |
| `MAIL_FROM_NAME` | Nombre visible del remitente | `solyto` |

El secreto de Mailgun se almacena en el secreto de Docker `mailgun_secret`.

## Procesamiento de imágenes

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `IMAGE_DRIVER` | Backend de procesamiento de imágenes | `intervention` |

Opciones:

- `intervention` — usa la biblioteca PHP Intervention Image (por defecto, sin servicio adicional necesario)
- `imgproxy` — usa el servicio independiente `imgproxy` para un mejor rendimiento con imágenes grandes

Cuando `IMAGE_DRIVER=imgproxy`, se inicia el contenedor `imgproxy` y las credenciales se leen de los secretos de Docker `imgproxy_key` y `imgproxy_salt`.

## Telegram

| Variable | Descripción | Valor por defecto |
|----------|-------------|---------|
| `TELEGRAM_DEBUG_CHAT_ID` | ID de chat para las notificaciones de depuración | (vacío) |

Las credenciales del bot de Telegram se almacenan en secretos de Docker (`solyto_bot_telegram_token`, `solyto_bot_webhook_token`). Consulta [Bot de Telegram](/integrations/telegram/) para las instrucciones de configuración.

## Aplicar cambios

Después de editar `.env`, reinicia los servicios afectados:

```bash
docker compose up -d
```

Docker Compose detecta los cambios en `.env` y recrea los contenedores con los nuevos valores.
