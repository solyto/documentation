---
title: Panel
description: Tu resumen diario — clima, calendario, inspiración y un vistazo rápido a todo lo importante.
---

El panel es la página de inicio de solyto, accesible en la ruta raíz `/`. Reúne datos de todas tus funciones en una única vista de tres columnas para que puedas ver de un vistazo cómo será tu día.

## Estructura

El panel se organiza en tres columnas. En móvil, las columnas se apilan verticalmente en el mismo orden.

### Tu día (columna izquierda)

Todo lo que necesitas saber sobre hoy:

- **Clima** — Condiciones actuales y el pronóstico de hoy de la API Open-Meteo. Haz clic en el nombre de la ciudad para buscar una nueva ubicación (con un selector °C/°F). La unidad de temperatura se recuerda en tu configuración.
- **Eventos de hoy** — Eventos de calendario de hoy, tomados de todos tus calendarios activos. Toca un evento para saltar a la vista de [Calendario](/features/calendar/).
- **Próximos eventos** — Los siguientes eventos después de hoy, para que puedas planificar con antelación.
- **Tareas pendientes** — Tareas que vencen hoy o que están atrasadas, con un punto de prioridad en color. Márcalas como completadas directamente desde el panel (un pequeño confeti celebra tu logro).
- **Tareas destacadas** — Las 5 tareas más relevantes, clasificadas por una puntuación inteligente que tiene en cuenta la prioridad, el esfuerzo estimado, si está atrasada y su antigüedad. Esto ayuda a resaltar las tareas que más importan ahora mismo.

Si no hay nada programado, la columna muestra un mensaje amigable de "No tienes nada pendiente hoy".

### Inspiración (columna central)

Contenido nuevo para empezar el día:

- **Nuevos lanzamientos de música** — Hasta 5 nuevos álbumes de artistas de tu [biblioteca de música](/features/libraries/music/).
- **Nuevos lanzamientos de libros** — Hasta 5 nuevos libros de autores de tu [biblioteca de libros](/features/libraries/books/).
- **Nuevos estrenos** — Hasta 5 nuevas películas o series que vale la pena conocer.
- **Notas recientes** — Hasta 5 notas que creaste o actualizaste recientemente. Acceso rápido a tus [Notas](/features/notes/).
- **Enlaces más recientes** — Los enlaces guardados más recientemente de tu [biblioteca de enlaces](/features/libraries/links/).
- **Cita del día** — Una cita aleatoria de tu [biblioteca de citas](/features/libraries/quotes/), renovada una vez al día.

### Vistazo rápido (columna derecha)

Widgets de estado de un vistazo:

- **Registro diario** — Una vista rápida de tus puntuaciones del [registro diario](/features/check-in/): el valor medio por indicador puntuado (barras con código de colores) más tu puntuación total general. Toca para registrar o editar la entrada de hoy.
- **Seguimiento de tiempo** — Tus totales de [seguimiento de tiempo](/features/time-tracking/) de la semana actual con un desglose por proyecto. También muestra cualquier cronómetro activo.
- **Accesos directos** — Enlaces de acceso rápido definidos por el usuario con favicons, mostrados como una lista con acciones al pasar el cursor. Gestiónalos con el botón de lápiz.

## Incorporación

Cuando visitas solyto por primera vez (cuando el indicador `first_visit` es verdadero), un modal de incorporación en cuatro pasos te guía en la configuración:

1. **Bienvenida** — Una introducción a solyto y a lo que puede hacer por ti.
2. **Localización** — Elige tu idioma, formato de fecha y formato de hora.
3. **Funciones** — Activa qué funciones aparecen en la navegación. Puedes elegir entre 11 funciones: calendario, tareas, notas, bibliotecas, contactos, registro diario, finanzas, portapapeles, solicitudes de desarrollo, feeds y seguimiento de tiempo.
4. **Listo** — Una pantalla de finalización que confirma tu configuración.

### Recorrido de bienvenida

Después de completar el modal de incorporación, se inicia automáticamente un recorrido de bienvenida guiado. Te lleva paso a paso por cada función habilitada para que sepas dónde está todo.

Puedes reiniciar el recorrido en cualquier momento desde **Configuración → App → "Hacer el recorrido"**.

## Personalizar el panel

Controlas lo que aparece en el panel a través de **Configuración → Funciones**. Desactivar una función la oculta tanto en los widgets del panel como en la barra de navegación lateral. Por ejemplo, si desactivas Finanzas, todos los widgets relacionados con finanzas desaparecen del panel.

La personalización a nivel de widget (reordenar, ocultar widgets individuales) no está disponible actualmente.

## Comportamiento en móvil

En pantallas más pequeñas, las tres columnas se apilan en un único desplazamiento vertical. El orden se conserva: primero Tu día, luego Inspiración, y después Vistazo rápido. Todos los widgets siguen siendo funcionales: puedes completar tareas, iniciar cronómetros y añadir entradas de registro diario igual que en el escritorio.

## Agregar rápido

El panel incluye un botón de acción flotante (FAB) para [Agregar rápido](/dashboard/quick-add/), una herramienta inteligente de detección de contenido que te permite pegar una URL o texto y hacer que solyto lo clasifique automáticamente como una entrada de biblioteca, una tarea o una nota. Consulta la página de [Agregar rápido](/dashboard/quick-add/) para más detalles.
