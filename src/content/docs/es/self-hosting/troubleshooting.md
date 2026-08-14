---
title: Solución de problemas
description: Problemas comunes y soluciones para solyto autoalojado.
---

Esta página cubre los problemas comunes que puedes encontrar al autoalojar solyto y cómo resolverlos.

## Consultar los registros

El primer paso para depurar cualquier problema es consultar los registros de los contenedores:

```bash
# Todos los servicios
docker compose logs

# Un servicio concreto
docker compose logs api
docker compose logs app
docker compose logs nginx

# Seguir los registros en tiempo real
docker compose logs -f api
```

Los registros son tu mejor aliado. La mayoría de los errores se explican en la salida.

## El contenedor no arranca

**Síntomas:** `docker compose ps` muestra un servicio reiniciándose o detenido.

**Comprobaciones:**

1. Consulta los registros del servicio que falla: `docker compose logs <servicio>`
2. Verifica que `.env` tenga todas las variables obligatorias — consulta [Configuración](/self-hosting/configuration/)
3. Verifica que todos los archivos de secretos obligatorios existan en `./secrets/` — consulta [Secretos de Docker](/self-hosting/secrets/)
4. Comprueba que Docker tenga suficientes recursos (memoria, espacio en disco)

Causa común: archivo de secreto que falta o está vacío. Compruébalo con:

```bash
ls -la secrets/
```

## Errores de conexión a la base de datos

**Síntomas:** la API devuelve errores 500, los registros muestran `SQLSTATE` o `Connection refused`.

**Comprobaciones:**

1. ¿La base de datos está en ejecución? `docker compose ps mariadb` y `docker compose ps postgres`
2. Comprueba que las credenciales coincidan entre `.env` y los archivos de secretos:
   ```bash
   cat secrets/db_user
   cat secrets/db_password
   ```
3. Asegúrate de que `DB_HOST=mariadb` y `DAV_DB_HOST=postgres` (nombres de servicio de Docker)
4. Espera — MariaDB y PostgreSQL pueden tardar unos segundos en estar listos en el primer arranque. El contenedor de la API reintentará automáticamente.

**Restablecer las credenciales de la base de datos** (si están corruptas):

```bash
# Regenera el archivo de secreto
openssl rand -hex 32 > secrets/db_password
docker compose up -d mariadb
# Espera a que MariaDB arranque, luego reinicia la API
docker compose restart api queue
```

## Problemas con el certificado TLS

**Síntomas:** el navegador muestra una advertencia de seguridad, errores de certificado de Traefik.

**Comprobaciones:**

1. Verifica que tus dominios resuelvan a la IP del servidor: `dig api.example.com`
2. Asegúrate de que los puertos 80 y 443 estén abiertos y no bloqueados por un cortafuegos
3. Comprueba que `ACME_EMAIL` esté configurado en `.env`
4. Verifica que el volumen `traefik_acme` exista y tenga permisos de escritura

**Forzar la renovación del certificado:**

```bash
docker compose down
docker volume rm <project>_traefik_acme
docker compose up -d
```

Sustituye `<project>` por tu `PROJECT_NAME`. Traefik solicitará nuevos certificados al arrancar.

## Problemas de permisos con storage/

**Síntomas:** las subidas de archivos fallan, los registros muestran `Permission denied` en `storage/`.

**Solución:**

```bash
chown -R www-data:www-data storage/
chmod -R 775 storage/
```

El directorio `storage/` se comparte entre `api`, `dav`, `queue`, `nginx` e `imgproxy` mediante un bind mount. Todos ellos necesitan acceso de escritura.

## CalDAV/CardDAV no funciona

**Síntomas:** la sincronización de calendario o contactos falla en aplicaciones externas (DAVx5, Apple Calendar, etc.).

**Comprobaciones:**

1. Verifica que el servicio `dav` esté en ejecución: `docker compose ps dav`
2. Asegúrate de que `DAV_DOMAIN` esté configurado y resolviendo correctamente
3. Comprueba que la URL CalDAV/CardDAV que usa tu aplicación externa coincida con `https://dav.example.com`
4. Consulta los registros del servicio `dav`: `docker compose logs dav`
5. Verifica que PostgreSQL esté en ejecución: `docker compose ps postgres`
6. Asegúrate de que los secretos `dav_db_user` y `dav_db_password` sean correctos

**Problema común:** el dominio DAV debe ser distinto del dominio de la API. Se ejecutan como servicios independientes detrás de Traefik.

## La cola no procesa tareas

**Síntomas:** las tareas asíncronas no se completan (notificaciones, tareas en segundo plano).

**Comprobaciones:**

1. ¿El trabajador de la cola está en ejecución? `docker compose ps queue`
2. Consulta los registros de la cola: `docker compose logs queue`
3. Verifica que Redis esté en ejecución: `docker compose ps redis`
4. Comprueba la conectividad con Redis: `docker compose exec api so tinker` y luego prueba un comando de Redis

**Reiniciar el trabajador de la cola:**

```bash
docker compose restart queue
```

## Las imágenes no cargan

**Síntomas:** las imágenes de perfil subidas u otros medios devuelven 404 o aparecen rotos.

**Comprobaciones:**

1. Si usas `IMAGE_DRIVER=intervention` (por defecto), no se necesita ningún servicio adicional
2. Si usas `IMAGE_DRIVER=imgproxy`, asegúrate de que el servicio `imgproxy` esté en ejecución y de que los secretos `imgproxy_key` / `imgproxy_salt` estén configurados
3. Comprueba que `storage/app/public/` existe y tiene permisos de escritura
4. Consulta los registros de nginx: `docker compose logs nginx`

## Fallos en la comprobación de estado

El servicio nginx tiene una comprobación de estado en `/api/v1/health`. Si está fallando:

1. Pruébala manualmente: `curl -s https://api.example.com/api/v1/health`
2. Si la API no responde, consulta los registros del contenedor `api`
3. Si la base de datos está caída, la comprobación de estado fallará — resuelve primero el problema de la base de datos

## Obtener ayuda

Si no puedes resolver un problema:

- Busca en las incidencias existentes del [repositorio selfhosted](https://github.com/solyto/selfhosted/issues)
- Envía una nueva incidencia con tus registros (elimina antes cualquier secreto)
- Consulta el tablón de [Dev Requests](/account/dev-requests/) si usas solyto.app
