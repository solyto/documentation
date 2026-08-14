---
title: Actualización
description: Cómo actualizar solyto a la última versión.
---

Mantener solyto actualizado garantiza que dispongas de las últimas funciones, correcciones de errores y parches de seguridad.

## Antes de actualizar

1. **Consulta las notas de la versión** — revisa la [página de versiones](https://github.com/solyto/selfhosted/releases) para ver cambios incompatibles o pasos de migración manuales
2. **Haz una copia de seguridad de tus datos** — consulta a continuación
3. **Anota tu versión actual** — comprueba `SOLYTO_VERSION` en tu `.env`

## Haz una copia de seguridad de tus datos

Antes de cualquier actualización, crea copias de seguridad de tus bases de datos y del almacenamiento. El [README](https://github.com/solyto/selfhosted) del repositorio selfhosted incluye un script de copia de seguridad completo basado en restic; lo esencial es:

```bash
# Copia de seguridad de MariaDB (base de datos: api)
docker exec -e MYSQL_PWD="$(cat secrets/mariadb_root_password)" <project>-mariadb \
  mariadb-dump -u root --databases api > backup_mariadb.sql

# Copia de seguridad de PostgreSQL (base de datos: dav)
docker exec -e PGPASSWORD="$(cat secrets/postgres_root_password)" <project>-postgres \
  pg_dump -U postgres --clean --create dav > backup_postgres.sql

# Copia de seguridad del almacenamiento
tar -czf backup_storage.tar.gz storage/
```

Sustituye `<project>` por tu `PROJECT_NAME` (por defecto `solyto`). Guarda estas copias de seguridad fuera del servidor o en una ubicación separada.

## Proceso de actualización

### 1. Descarga las últimas imágenes

```bash
docker compose pull
```

Esto obtiene las últimas versiones de las tres imágenes de solyto (`solyto/app`, `solyto/api-php`, `solyto/api-nginx`), así como de cualquier imagen base actualizada.

### 2. Reinicia los servicios

```bash
docker compose up -d
```

Docker Compose detecta las nuevas imágenes y recrea los contenedores.

### 3. Migraciones de la base de datos

El contenedor `api` ejecuta `startup.sh` en cada arranque, lo que aplica automáticamente las migraciones de base de datos pendientes. No se necesita ninguna acción manual.

### 4. Verifica

Comprueba que todos los servicios estén en ejecución:

```bash
docker compose ps
```

Prueba el endpoint de salud de la API:

```bash
curl -s https://api.example.com/api/v1/health
```

Abre el frontend y confirma que todo funciona como se espera.

## Fijar una versión

Para quedarte en una versión concreta, configura `SOLYTO_VERSION` en tu `.env`:

```
SOLYTO_VERSION=1.2.0
```

Entonces `docker compose pull` obtendrá esa etiqueta específica. Elimínala o ponla en `latest` para volver a recibir versiones nuevas.

## Revertir a una versión anterior

Si una actualización causa problemas:

1. Detén los servicios: `docker compose down`
2. Establece `SOLYTO_VERSION` en la versión anterior en `.env`
3. Restaura las copias de seguridad de tu base de datos si es necesario
4. Inicia los servicios: `docker compose up -d`

Ten en cuenta que aún no existe una estrategia de reversión verificable — las reversiones dependen de deshacer las migraciones de Laravel publicadas con cada imagen, por lo que las copias de seguridad son esenciales.
