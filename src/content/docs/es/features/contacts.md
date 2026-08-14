---
title: Contactos
description: Gestión de contactos con sincronización CardDAV y libretas de direcciones.
---

Contactos es una libreta de direcciones completa integrada en solyto. Admite varias libretas de direcciones codificadas por color, campos de contacto detallados incluyendo fotos, búsqueda con agrupación A-Z, y sincronización bidireccional CardDAV con servicios externos como Google Contacts y Apple Contacts.

## Libretas de direcciones

Crea varias libretas de direcciones y asigna un color a cada una. Esto te permite separar tus contactos por contexto — por ejemplo, una libreta "Personal" y una libreta "Trabajo".

Cada libreta de direcciones es independiente, con su propia lista de contactos. Puedes crear, renombrar y eliminar libretas de direcciones en cualquier momento sin afectar a tus contactos.

## Añadir contactos

Abre una libreta de direcciones y haz clic en el botón **+** para crear un nuevo contacto. Rellena los campos que necesites:

### Campos del contacto

- **Nombre** — prefijo, nombre, segundo nombre, apellido y sufijo
- **Teléfonos** — uno o más, cada uno con un tipo (móvil, casa, trabajo, otro)
- **Correos electrónicos** — uno o más, cada uno con un tipo (casa, trabajo, otro)
- **Grupos** — asignar a uno o varios grupos para organizarlos
- **Organización** — empresa o afiliación
- **Cargo** — puesto de trabajo
- **Nota** — notas de texto libre sobre el contacto
- **Dirección** — calle, ciudad, provincia, código postal y país
- **Foto** — sube una imagen para el contacto (se ajusta automáticamente)

Todos los campos excepto el nombre son opcionales. Los contactos pueden pertenecer a varios grupos dentro de una libreta de direcciones.

### Vista de detalle del contacto

Haz clic en un contacto para abrir su vista de detalle, con un avatar de iniciales, enlaces para llamar (`tel:`) y enviar correo (`mailto:`) con un toque, chips de libreta de direcciones y grupo, dirección, organización, nota y foto. Edita o elimina el contacto desde esta vista.

## Fotos de contacto

Sube una foto para cualquier contacto:

- **Subir** — selecciona un archivo de imagen de tu dispositivo (se redimensiona automáticamente)
- **Ver** — la foto aparece en la lista de contactos y en la vista de detalle
- **Eliminar** — quita la foto en cualquier momento

Las fotos te ayudan a identificar contactos de un vistazo, especialmente en libretas de direcciones grandes.

## Búsqueda y filtrado

Encuentra contactos rápidamente usando las herramientas integradas de búsqueda y organización:

- **Búsqueda** — escribe un nombre, correo o número de teléfono para encontrar un contacto al instante
- **Agrupación A-Z** — los contactos se agrupan alfabéticamente por la primera letra de su nombre, dándote una lista rápida de explorar
- **Filtrar por libreta de direcciones** — muestra los contactos de una libreta de direcciones concreta
- **Filtrar por grupo** — muestra los contactos que pertenecen a un grupo concreto

## Sincronización CardDAV

solyto admite sincronización CardDAV bidireccional, manteniendo tus contactos sincronizados con servicios de contactos externos. Una vez configurada, los cambios fluyen en ambas direcciones — edita un contacto en solyto y se actualiza en el servidor, o edítalo en el servidor y se actualiza en solyto.

- Google Contacts
- Apple Contacts
- Nextcloud Contacts
- Cualquier servicio compatible con CardDAV

Los cambios realizados en solyto se envían al servidor externo, y viceversa.

### Proceso de importación

Importar desde un servidor CardDAV externo es un proceso de varias etapas:

1. **Inicio** — introduce la URL, el usuario y la contraseña de tu servidor externo
2. **Selección** — elige qué libretas de direcciones importar del servidor
3. **Importando** — los contactos se obtienen y almacenan localmente, con progreso en tiempo real
4. **Finalizado** — tus contactos ya están disponibles en solyto

Consulta [Sincronización DAV](/integrations/dav-sync/) para instrucciones detalladas de configuración.

## Exportar

Tus contactos se pueden exportar como archivo `.vcf` (vCard), compatible con cualquier aplicación de contactos. Consulta [Exportar datos](/integrations/exporting/).
