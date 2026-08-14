---
title: Biblioteca de enlaces
description: Un gestor de marcadores con categorías e integración con el bot de Telegram.
---

La Biblioteca de enlaces es un gestor de marcadores personal integrado en solyto. Guarda URLs con títulos, carátulas, etiquetas y categorías — y luego organízalas en categorías personalizadas. Accede a tus marcadores desde cualquier lugar, y guarda otros nuevos a través del bot de Telegram o de Adición rápida.

## Añadir enlaces

Hay tres formas de añadir enlaces:

- **Entrada manual** — haz clic en el botón + y rellena la URL y los detalles
- **Bot de Telegram** — envía una URL a [@SolytoBot](https://t.me/SolytoBot) y se guarda automáticamente en tu biblioteca
- **Adición rápida** — las URLs pegadas en Adición rápida se detectan automáticamente como enlaces y se guardan directamente

Consulta [Integración con Telegram](/integrations/telegram/) para las instrucciones de configuración del bot.

## Campos de la entrada

Cada entrada de enlace incluye:

| Campo | Descripción |
|-------|-------------|
| **title** | Título o descripción de la página |
| **URL** | La URL completa |
| **cover** | Una imagen de portada/vista previa |
| **category** | Categoría asignada |
| **is_favorite** | Marcar como favorito |
| **tags** | Etiquetas de color para filtrar |

## Categorías de enlaces

Organiza tus enlaces en categorías personalizadas con colores. La barra lateral muestra Todos, Favoritos, cada categoría (con su recuento) y Sin categorizar. **Arrastra y suelta** un enlace sobre una categoría para moverlo.

Las categorías son independientes de las etiquetas. Usa las categorías para agrupaciones amplias (trabajo, referencia, entretenimiento) y las etiquetas para un filtrado más preciso.

## Enlaces más recientes

Tus enlaces añadidos más recientemente alimentan el widget "Enlaces más recientes" del [panel](/dashboard/overview/).

## Favoritos

Marca enlaces como favoritos usando el indicador de estrella. Filtra tu biblioteca para mostrar solo los favoritos, facilitando encontrar rápidamente tus marcadores más utilizados.

## Vistas y filtros

Explora tus enlaces en las vistas **Lista** o **Tarjetas**. Busca por título o URL, y filtra por categoría o favoritos.

## Exportar

Exporta toda tu biblioteca de enlaces como `.html` en formato Netscape Bookmark, que cualquier navegador principal puede importar. Consulta [Exportar datos](/integrations/exporting/).
