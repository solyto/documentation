---
title: Exportar datos
description: Exporta todos tus datos de solyto en formatos estándar.
---

solyto te permite exportar tus datos en cualquier momento desde **Ajustes → Exportar datos**. Tus datos son tuyos y puedes descargarlos cuando quieras.

## Cómo exportar

1. Ve a **Ajustes → Exportar datos**
2. Selecciona funciones individuales o haz clic en **Seleccionar todo**
3. Haz clic en **Exportar**
4. solyto ejecuta la tarea de exportación en segundo plano
5. Cuando termine, verás un enlace de descarga en **Ajustes → Exportar datos** y en tus notificaciones

## Cómo funcionan las exportaciones

- Las exportaciones se ejecutan como **tareas en segundo plano** — no necesitas mantener la página abierta
- Las exportaciones tienen un **límite de frecuencia** de una vez cada 24 horas
- Las exportaciones completadas **caducan después de 48 horas** — descárgalas antes de que se eliminen
- La descarga es un único **archivo ZIP** llamado `export_YYYY-MM-DD.zip`, incluso cuando exportas una sola función
- Recibirás una **notificación dentro de la aplicación** y (si está configurado) una notificación push o de Telegram cuando la exportación esté lista

## Formatos de exportación

Cada función se exporta en un formato estándar que puedes abrir en otras aplicaciones:

| Función | Formato | Compatible con |
|---------|--------|----------------|
| Calendario | `.ics` (iCalendar) | Google Calendar, Apple Calendar, Outlook |
| Contactos | `.vcf` (vCard) | Google Contacts, Apple Contacts, cualquier aplicación de contactos |
| Notas | ZIP de archivos `.md` | Obsidian, Notion, cualquier editor de markdown |
| Feeds | `.opml` | Feedly, NewsBlur, cualquier lector de RSS |
| Biblioteca de enlaces | `.html` (Netscape Bookmarks) | Chrome, Firefox, Safari, cualquier navegador |
| Tareas | `.csv` | Excel, Google Sheets |
| Biblioteca de música | `.csv` | Excel, Google Sheets |
| Biblioteca de libros | `.csv` (columnas compatibles con Goodreads) | Goodreads, aplicaciones de hoja de cálculo |
| Biblioteca de juegos | `.csv` | Excel, Google Sheets |
| Biblioteca de recetas | `.csv` | Excel, Google Sheets |
| Biblioteca de citas | `.csv` | Excel, Google Sheets |
| Registro diario | `.csv` | Excel, Google Sheets |
| Seguimiento del tiempo | `.csv` | Excel, Google Sheets |
| Finanzas (Presupuesto) | `.csv` | Excel, Google Sheets |
| Finanzas (Patrimonio) | `.csv` | Excel, Google Sheets |

## Exportación selectiva

No tienes que exportarlo todo. Marca solo las funciones que necesites y el ZIP contendrá únicamente esos archivos. Esto es útil si quieres:

- Hacer una copia de seguridad de una sola biblioteca antes de hacer cambios
- Importar tu calendario a otra aplicación como Google Calendar
- Archivar tus notas para usarlas en Obsidian u otro editor de markdown
- Compartir tus recetas con alguien

Nota: las funciones de Películas, Plantas y Portapapeles no forman parte actualmente del conjunto exportable.

## Detalles de la exportación

- **Formato:** archivo ZIP que contiene un archivo por cada función seleccionada
- **Límite de frecuencia:** una exportación cada 24 horas
- **Caducidad:** las exportaciones se eliminan automáticamente después de 48 horas
- **Notificación:** recibirás una notificación dentro de la aplicación (icono de campana) cuando la exportación esté lista; también se envían notificaciones push y de Telegram si están configuradas
- **Nomenclatura de archivos:** `export_YYYY-MM-DD.zip` (por ejemplo, `export_2026-05-27.zip`)

## Volver a importar los datos exportados

La mayoría de los formatos de exportación están diseñados para poder volver a importarse:

- Los archivos `.ics` se pueden importar en cualquier aplicación de calendario o de vuelta en solyto
- Los archivos `.vcf` se pueden importar en cualquier aplicación de contactos
- Los archivos `.opml` se pueden importar en cualquier lector de RSS
- Los archivos `.csv` se pueden abrir en aplicaciones de hoja de cálculo para revisarlos
- Las notas `.md` se pueden usar en Obsidian, Notion o cualquier editor de markdown

## Solución de problemas

- **"Límite de exportación alcanzado"** — has exportado en las últimas 24 horas. Espera e inténtalo de nuevo.
- **"Exportación caducada"** — el archivo se ha eliminado tras 48 horas. Inicia una nueva exportación.
- **Exportaciones grandes** — las exportaciones con muchas funciones pueden tardar unos minutos en procesarse. Se te notificará cuando estén listas.
- **La descarga no se inicia** — comprueba la configuración del bloqueador de ventanas emergentes/descargas de tu navegador. La descarga se inicia automáticamente al hacer clic en el enlace.
