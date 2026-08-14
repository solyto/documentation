---
title: Tareas
description: Gestión de tareas con espacios de trabajo, etiquetas, puntuación inteligente y múltiples vistas.
---

Tareas es un gestor de tareas completo integrado en solyto. Admite espacios de trabajo, categorías, etiquetas, un sistema de puntuación inteligente y múltiples vistas — para que puedas organizar tus tareas como mejor te funcione. Una sintaxis de creación en una sola línea te permite añadir tareas sin abrir un formulario.

## Crear tareas

### Formulario estándar

Haz clic en el botón **+** para abrir el formulario de tareas. Rellena los campos que necesites — el título es el único obligatorio:

- **Título** — el nombre de la tarea
- **Descripción** — detalles o contexto opcionales
- **Enlace** — adjunta una URL relacionada con la tarea
- **Prioridad** — baja, media o alta
- **Estado** — backlog, pendiente, en curso, en espera, casi terminada
- **Esfuerzo** — bajo, medio o alto
- **Progreso** — un control deslizante de 0 a 100
- **Fecha de vencimiento** — cuándo debería completarse la tarea
- **Categoría** — asígnala a una categoría
- **Etiquetas** — una o varias etiquetas de color

### Creación en una línea

Escribe directamente en el campo de entrada usando una sintaxis de comandos breve:

```
Buy groceries #shopping /errands due:tomorrow repeat:weekly link:https://shop.example.com
```

| Sintaxis | Significado |
|--------|-------------|
| `#tag` | Asigna una etiqueta (se crea automáticamente si aún no existe) |
| `/category` | Asigna una categoría (se crea automáticamente si aún no existe) |
| `due:tomorrow` | Fecha de vencimiento — también admite `today`, o una fecha completa (`2026-06-01`, `01.06.2026`) |
| `repeat:daily` / `repeat:weekly` / `repeat:monthly` / `repeat:yearly` | Repetir según un calendario — requiere una fecha de vencimiento |
| `link:https://...` | Adjunta una URL a la tarea |

El campo de entrada ofrece sugerencias de autocompletado para etiquetas (`#`), categorías (`/`), fechas de vencimiento (`due:`) y recurrencia (`repeat:`). Si usas `repeat:` sin `due:`, solyto te avisa de que la recurrencia necesita una fecha de vencimiento.

### Adición rápida

El botón flotante de Adición rápida (abajo a la derecha) te permite crear una tarea desde cualquier parte de la aplicación. Consulta [Adición rápida](/dashboard/quick-add/) para más detalles.

## Propiedades de la tarea

Cada tarea tiene las siguientes propiedades:

| Propiedad | Valores | Descripción |
|----------|--------|-------------|
| Título | Texto libre | El nombre de la tarea (obligatorio) |
| Descripción | Texto libre | Detalles opcionales |
| Enlace | URL | Adjunta un enlace relacionado |
| Prioridad | Baja, Media, Alta | Cuán urgente es la tarea |
| Estado | Backlog, Pendiente, En curso, En espera, Casi terminada | En qué punto de tu flujo de trabajo está la tarea |
| Esfuerzo | Bajo, Medio, Alto | Cuánto trabajo requiere la tarea |
| Progreso | 0–100 | Porcentaje completado |
| Fecha de vencimiento | Fecha | Fecha objetivo de finalización |
| Categoría | Categoría asignada | Agrupa tareas entre sí |
| Etiquetas | Una o varias etiquetas | Etiquetas de color para filtrar |

## Tareas recurrentes

Las tareas pueden repetirse según un calendario. Cuando completas una tarea recurrente, la siguiente repetición se crea automáticamente.

| Ajuste | Opciones |
|---------|---------|
| Frecuencia | Diaria, Semanal, Mensual, Anual |
| Intervalo | Cada N días/semanas/meses/años |
| Fecha de fin | Fecha opcional para dejar de repetirse |

Por ejemplo, puedes configurar una tarea para que se repita cada 2 semanas los lunes, terminando el 31 de diciembre.

## Subtareas

Cualquier tarea puede tener subtareas:

- **Añadir** subtareas para dividir una tarea en pasos más pequeños
- **Completar** subtareas individualmente — no afectan al estado de la tarea principal
- **Eliminar** subtareas que ya no necesites

Las subtareas se muestran en línea, debajo de la tarea principal.

## Espacios de trabajo

Los espacios de trabajo te permiten agrupar categorías. Esto es útil para separar distintas áreas de tu vida — por ejemplo, un espacio de trabajo "Trabajo" y otro "Personal".

### Funciones del espacio de trabajo

- **Agrupar categorías** — asocia categorías a un espacio de trabajo
- **Establecer espacio de trabajo predeterminado** — las tareas nuevas usan por defecto las categorías de este espacio de trabajo
- **Asociar/desasociar categorías** — mueve categorías entre espacios de trabajo en cualquier momento

### Ocultar

Cada espacio de trabajo tiene un interruptor **Ocultar**. Cuando está activado, las tareas asignadas a las categorías de ese espacio de trabajo se ocultan de la vista principal de Tareas. Esto te permite concentrarte en un espacio de trabajo a la vez sin eliminar ni archivar tareas de otras áreas. Tu preferencia de Ocultar se recuerda en el dispositivo.

## Tareas generadas automáticamente

solyto puede crear tareas automáticamente (por ejemplo, mediante calendarios recurrentes u otras funciones). Las tareas generadas automáticamente se mantienen fuera de tu camino: solo aparecen en la vista principal si vencen dentro de los próximos 3 días.

## Categorías

Las categorías organizan las tareas en grupos. Asigna una categoría al crear o editar una tarea. Las categorías se pueden asignar a espacios de trabajo para una organización adicional.

## Etiquetas

Las etiquetas son un sistema global compartido entre tareas y bibliotecas. Cada etiqueta tiene un color, lo que facilita detectar elementos relacionados de un vistazo. Añade etiquetas a cualquier tarea para una organización flexible y transversal.

## Vistas

solyto ofrece cuatro vistas para tus tareas:

| Vista | Descripción |
|------|-------------|
| **Lista** | Lista plana predeterminada, ordenable por cualquier columna |
| **Kanban** | Columnas basadas en el estado — arrastra tareas entre columnas para actualizar su estado |
| **Resumen** | Resumen compacto que muestra los campos clave de un vistazo |
| **Tarjeta** | Tarjetas detalladas con todas las propiedades visibles |

Cambia entre vistas usando el selector de vistas en la parte superior de la página de Tareas.

## Puntuación inteligente

Cada tarea recibe automáticamente una **puntuación inteligente** que refleja su relevancia o urgencia. Puedes ordenar tu lista de tareas por puntuación inteligente para ver qué necesita atención primero.

La puntuación se calcula a partir de:

| Factor | Puntos |
|--------|--------|
| Base de prioridad | Alta +100, Media +50, Baja +0 |
| Bonificación por esfuerzo | Bajo +50, Medio +25, Alto +0 |
| Vencida | +100 |
| Vence hoy | +50 |
| Vence mañana | +25 |
| Más de 30 días de antigüedad | +50 |

El total se normaliza a una puntuación de relevancia de 0 a 1. Las puntuaciones más altas aparecen primero al ordenar por puntuación inteligente, así las tareas vencidas de alta prioridad suben a la parte superior.

## Filtrado

Usa filtros para acotar tu lista de tareas:

- **Estado** — muestra solo backlog, pendiente, en curso, etc.
- **Prioridad** — muestra solo prioridad alta, media o baja
- **Fecha de vencimiento** — hoy, mañana, esta semana, vencidas
- **Esfuerzo** — bajo, medio, alto
- **Categoría** — muestra las tareas de una categoría concreta
- **Etiqueta** — muestra las tareas con una etiqueta concreta
- **Espacio de trabajo** — muestra las tareas de un espacio de trabajo concreto

Combina varios filtros para un control preciso sobre lo que ves.
