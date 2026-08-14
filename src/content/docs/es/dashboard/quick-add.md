---
title: Agregar rápido
description: Pega una URL o texto y deja que solyto averigüe qué es y a dónde va.
---

Agregar rápido es una herramienta inteligente de detección de contenido en el panel. Pegas una URL o una línea de texto, y solyto determina automáticamente el tipo de contenido y lo guarda en el lugar correcto, sin necesidad de categorizar manualmente.

## Abrir Agregar rápido

Hay dos formas de activar Agregar rápido:

- **Botón de acción flotante** — Haz clic en el FAB en la esquina inferior derecha del panel.
- **Tecla Enter** — Pulsa `Enter` en cualquier parte del panel cuando ningún campo de entrada esté enfocado. El diálogo de Agregar rápido se abre de inmediato.

## Cómo funciona la detección

Cuando envías contenido, solyto lo analiza contra un conjunto de reglas y le asigna un tipo de contenido con una puntuación de confianza.

### Las señales de tarea van primero

Si el contenido contiene alguna de las palabras clave de tarea `due`, `repeat` o `link:`, se detecta como **Tarea** con un **70% de confianza**; esto se comprueba antes que la detección de URL, así que una URL que contenga `due` se trata como una tarea.

### Detección de URL (95% de confianza)

Las URL se comparan con dominios conocidos:

| Patrón de URL | Detectado como |
|-------------|------------|
| `deezer.com`, `discogs.com` | Entrada de [biblioteca de música](/features/libraries/music/) |
| `hardcover.app`, `goodreads.com` | Entrada de [biblioteca de libros](/features/libraries/books/) |
| `imdb.com` | Entrada de [biblioteca de películas](/features/libraries/movies/) |
| `store.steampowered.com`, `boardgamegeek.com` | Entrada de [biblioteca de juegos](/features/libraries/games/) |
| `chefkoch.de` | Entrada de [biblioteca de recetas](/features/libraries/recipes/) |
| Cualquier otra URL | Entrada de [biblioteca de enlaces](/features/libraries/links/) |

### Detección de texto

Para texto plano (que no es una URL reconocida y no tiene palabras clave de tarea):

| Señales de contenido | Detectado como | Confianza |
|----------------|-------------|-----------|
| Contiene `/` o `#` | [Tarea](/features/todos/) | 50% |
| Texto plano sin señales | [Nota](/features/notes/) | 50% |

## Confirmación

La puntuación de confianza determina si el elemento se guarda directamente o si necesita tu confirmación:

- **Confianza ≥ 60%** — el elemento se confirma automáticamente, sin pasos adicionales.
- **Confianza < 60%** — solyto te muestra el tipo detectado y te pide que confirmes antes de guardar. Puedes aceptarlo o elegir un tipo distinto de la lista completa de destinos.

## Ejemplos

### Añadir un álbum

1. Abre Agregar rápido
2. Pega: `https://www.deezer.com/album/123456`
3. solyto detecta **Música** con un 95% de confianza y lo importa a tu biblioteca de música

### Añadir una tarea

1. Abre Agregar rápido
2. Escribe: `Recoger la ropa de la tintorería due:tomorrow`
3. solyto detecta **Tarea** con un 70% de confianza y crea una tarea que vence mañana

### Añadir una nota

1. Abre Agregar rápido
2. Escribe: `Notas de la reunión: el cliente quiere mover la fecha límite a marzo`
3. solyto detecta **Nota** con un 50% de confianza; como está por debajo del 60%, te pide confirmación antes de guardar

### Añadir un enlace

1. Abre Agregar rápido
2. Pega: `https://example.com/algun-articulo-interesante`
3. solyto detecta **Enlace** con un 95% de confianza y lo guarda en tu biblioteca de enlaces

## Elegir un tipo distinto

Si el tipo detectado es incorrecto, haz clic en **"No, elegir tipo"** en la pantalla de confirmación (o la opción equivalente) para abrir una cuadrícula con todos los destinos admitidos: música, libros, películas, juegos, enlaces, recetas, plantas, citas, tarea, nota, feed y portapapeles.

## Integración con las funciones

Agregar rápido alimenta directamente las funciones que tienes habilitadas:

- Las **entradas de biblioteca** aparecen en la biblioteca correspondiente y se muestran en los widgets de lanzamientos del panel
- Las **tareas** aparecen en la función [Tareas](/features/todos/) y en los widgets del panel de Tareas pendientes / Tareas destacadas
- Las **notas** aparecen en [Notas](/features/notes/) y en el widget de Notas recientes
- Los **enlaces** aparecen en la [biblioteca de enlaces](/features/libraries/links/) y en el widget de Enlaces más recientes

Si una función está desactivada en **Configuración → Funciones**, Agregar rápido no la ofrecerá como tipo detectado.
