---
title: Notas
description: Un cuaderno de texto enriquecido con carpetas, etiquetas y compatibilidad con markdown.
---

Notas (también llamada Cuaderno) es una herramienta de toma de notas completa integrada en solyto. Usa un editor de texto enriquecido basado en TipTap (ProseMirror), admite organización jerárquica en carpetas, etiquetas, reordenación por arrastrar y soltar, inserción de imágenes y menús contextuales con clic derecho — todo almacenado de forma privada en tu cuenta.

## Editor

Notas usa [TipTap](https://tiptap.dev/), un editor de texto enriquecido basado en ProseMirror. Admite tanto edición WYSIWYG como atajos de estilo markdown — escribe `#` para un encabezado, `-` para una lista con viñetas, o ``` para un bloque de código. Guarda con el botón **Guardar** o **Ctrl+S** (`Cmd+S` en Mac); un indicador "Guardado · hora" confirma tu último guardado.

### Formato admitido

| Formato | Cómo usarlo |
|-----------|------------|
| Encabezados | De H1 a H3 |
| Negrita | Texto en negrita |
| Cursiva | Texto en cursiva |
| Tachado | Texto tachado |
| Código | `Código` en línea |
| Listas con viñetas | Listas sin ordenar |
| Listas numeradas | Listas ordenadas |
| Tablas | Inserta una tabla de 3×3 con columnas redimensionables y operaciones de fila/columna mediante un menú emergente |
| Imágenes | Sube desde el disco, pega una URL, o pega desde el portapapeles |
| Enlaces | Convierte cualquier texto en hipervínculo (el texto seleccionado se rellena automáticamente) |
| Bloques de código | Bloques de código delimitados |
| Citas | Texto citado en bloque |
| Líneas horizontales | Separadores de sección |

### Imágenes

Las imágenes se pueden añadir a las notas de tres formas:

1. **Subir** — selecciona un archivo de tu dispositivo
2. **URL** — pega la URL de una imagen
3. **Portapapeles** — pega una imagen copiada directamente en el editor

Las imágenes subidas se almacenan en tu cuenta de solyto y se insertan directamente en la nota.

## Categorías jerárquicas

Organiza las notas en un árbol de carpetas y subcarpetas:

- **Categorías padre e hijas** — crea un árbol de carpetas tan profundo como necesites
- **Árbol de categorías plegable** — colapsa y expande ramas; el estado se guarda entre sesiones, así que tu organización siempre se recuerda
- **Arrastrar y soltar** — arrastra una nota a una categoría distinta para reorganizarla al instante
- **Reordenar categorías** — reorganiza el orden de las categorías en el árbol

El árbol de categorías aparece en la barra lateral, dándote una navegación rápida por todas tus notas. También puedes crear nuevas subcarpetas directamente desde el árbol.

Las categorías admiten anidación — crea carpetas de nivel superior como "Trabajo" con subcarpetas como "Proyectos", "Reuniones" y "Notas" debajo.

## Favoritos

Marca cualquier nota como **favorita** para fijarla y acceder a ella rápidamente. Los favoritos aparecen en la parte superior de la lista de notas independientemente de su categoría, así que tus notas más importantes están siempre a un clic de distancia.

Activa o desactiva el estado de favorito desde el encabezado de la nota (estrella) o el menú contextual del clic derecho. Puedes filtrar la lista de notas para mostrar solo los favoritos.

## Resumen

El resumen de Notas muestra tres secciones: **Favoritos**, **Notas nuevas** y **Última actualización** — una forma rápida de retomar lo que es reciente o importante.

## Etiquetas

Añade una o varias etiquetas a cualquier nota. Las etiquetas se comparten entre las funciones de solyto, así que puedes usar las mismas etiquetas para notas, tareas y entradas de biblioteca. Cada etiqueta tiene un color para identificarla visualmente.

Las etiquetas ofrecen una forma transversal de encontrar notas relacionadas — por ejemplo, etiqueta todas las notas relacionadas con un proyecto como "trabajo" sin importar en qué carpeta estén.

## Importar

Importa notas desde archivos Markdown (`.md`) o ZIP. solyto lee el contenido del archivo y crea notas en la categoría que elijas, con una barra de progreso durante la subida. Esto es útil para migrar notas desde otras aplicaciones (como Obsidian o Notion).

Para importar, ve a la página dedicada de **Importar** y selecciona uno o varios archivos de tu dispositivo.

## Exportar

Las notas se exportan como un archivo ZIP de archivos `.md` (Markdown) — un archivo por nota. Este formato es compatible con Obsidian, Notion y cualquier editor de markdown. Los nombres de archivo se derivan del título de la nota.

Consulta [Exportar datos](/integrations/exporting/) para más detalles sobre cómo exportar y qué formatos están disponibles.

## Menús contextuales

Haz clic derecho en cualquier nota o categoría para acceder a menús contextuales con acciones rápidas:

- **Notas** — crear, renombrar, eliminar, mover a otra categoría, añadir/quitar etiquetas, marcar/desmarcar como favorita
- **Categorías** — crear una nueva subcategoría, renombrar, eliminar, colapsar/expandir

Los menús contextuales ofrecen una forma rápida de gestionar tus notas sin cambiar a los botones de la barra de herramientas.
