---
title: Secretos de Docker
description: Gestión de secretos de Docker para el almacenamiento seguro de credenciales.
---

solyto usa secretos de Docker para gestionar credenciales sensibles. Las contraseñas, claves de API y tokens se almacenan como archivos en el directorio `./secrets/` y se montan en los contenedores en tiempo de ejecución. Esto mantiene los secretos fuera de las variables de entorno y del control de versiones.

## Cómo funciona

Cada secreto es un archivo de texto plano en `./secrets/`. El nombre del archivo es el nombre del secreto:

```
secrets/
  app_key
  db_user
  db_password
  ai_api_key
  ...
```

Laravel y otros servicios leen los secretos usando la convención del sufijo `_FILE`. Por ejemplo, `DB_PASSWORD_FILE=/run/secrets/db_password` le indica a Laravel que lea la contraseña de la base de datos desde ese archivo en lugar de desde una variable de entorno.

Docker Compose monta estos archivos como solo lectura dentro de los contenedores, en `/run/secrets/`.

## Secretos obligatorios

Estos 7 secretos deben estar presentes para que solyto se inicie:

| Secreto | Descripción | Usado por |
|--------|-------------|---------|
| `app_key` | Clave de cifrado de Laravel (formato: `base64:...`) | api, queue |
| `db_user` | Usuario de la aplicación en MariaDB | api, queue, mariadb |
| `db_password` | Contraseña de la aplicación en MariaDB | api, queue, mariadb |
| `dav_db_user` | Usuario de PostgreSQL para DAV | dav, postgres |
| `dav_db_password` | Contraseña de PostgreSQL para DAV | dav, postgres |
| `mariadb_root_password` | Contraseña de root de MariaDB | mariadb |
| `postgres_root_password` | Contraseña de superusuario de PostgreSQL | postgres |

El usuario y la contraseña de MariaDB se proporcionan mediante `db_user` / `db_password` (las mismas credenciales que usa la API).

## Secretos opcionales

Estos 11 secretos habilitan funciones opcionales. Crea archivos vacíos u omítelos si no los necesitas:

| Secreto | Descripción | Habilita |
|--------|-------------|---------|
| `solyto_bot_webhook_token` | Token del webhook del bot de Telegram | [Bot de Telegram](/integrations/telegram/) |
| `solyto_bot_telegram_token` | Token de la API del bot de Telegram | Bot de Telegram |
| `hardcover_api_key` | Clave de API de libros de Hardcover | Importaciones de metadatos de libros |
| `ai_api_key` | Clave de API del proveedor de IA | [Recomendaciones de biblioteca](/account/ai-assistants/) |
| `mailgun_secret` | Clave de API de Mailgun | Notificaciones por correo |
| `vapid_public_key` | Clave pública de Web Push | Notificaciones push del navegador |
| `vapid_private_key` | Clave privada de Web Push | Notificaciones push del navegador |
| `bgg_api_key` | Clave de API de BoardGameGeek | Metadatos de juegos |
| `tmdb_access_token` | Token de acceso a la API de TMDB | Metadatos de películas |
| `imgproxy_key` | Clave de autenticación de Imgproxy | Procesamiento de imágenes vía imgproxy |
| `imgproxy_salt` | Salt de firma de URL de Imgproxy | Procesamiento de imágenes vía imgproxy |

## Generación automática

El script de configuración genera todos los secretos obligatorios automáticamente:

```bash
curl -fsSL "https://raw.githubusercontent.com/solyto/selfhosted/main/setup.sh?$(date +%s)" | bash
```

## Generación manual

Si necesitas regenerar un secreto manualmente:

```bash
# Contraseña hexadecimal aleatoria (32 bytes)
openssl rand -hex 32 > secrets/db_password

# Clave de aplicación de Laravel
echo "base64:$(openssl rand -base64 32)" > secrets/app_key

# Nombre de usuario simple
echo "solyto" > secrets/db_user

# Clave de API (pega la tuya)
echo "sk-your-openai-key-here" > secrets/ai_api_key
```

## Notas de seguridad

- **Nunca subas los secretos al control de versiones** — el directorio `secrets/` debería estar en `.gitignore`
- **Permisos de archivo** — restringe el acceso a los archivos de secretos: `chmod 600 secrets/*`
- **Copias de seguridad** — respalda tu directorio `secrets/` de forma segura. Si pierdes estos archivos, es posible que tengas que restablecer las credenciales de la base de datos
- **Rotación** — para rotar un secreto, actualiza el archivo y reinicia los servicios afectados con `docker compose up -d`

## Solución de problemas

Si un servicio no arranca, comprueba que los archivos de secretos obligatorios existan y sean legibles:

```bash
ls -la secrets/
docker compose logs api
```

Los problemas más comunes son archivos que faltan, archivos vacíos o saltos de línea finales en los archivos de secretos.
