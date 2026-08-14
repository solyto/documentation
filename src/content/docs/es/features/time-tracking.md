---
title: Seguimiento del tiempo
description: Controla el tiempo dedicado a proyectos con un temporizador Pomodoro integrado.
---

Seguimiento del tiempo te permite registrar el tiempo dedicado a proyectos y categorías. Incluye un temporizador Pomodoro integrado para sesiones de trabajo concentrado, un temporizador de inicio/parada para el seguimiento en tiempo real, y estadísticas que muestran cómo distribuyes tu tiempo entre proyectos y rangos de fechas.

## Proyectos

Los proyectos son la unidad de organización principal para el seguimiento del tiempo:

- **Crear** un proyecto con un título y una descripción
- **Editar** los detalles del proyecto en cualquier momento
- **Eliminar** proyectos que ya no necesites
- **Asignar a categorías** — agrupa proyectos por cliente, tipo o cualquier contexto que quieras

Cada proyecto reúne todas sus entradas de tiempo en un mismo lugar, dándote un total acumulado de horas registradas. La vista de detalle del proyecto muestra todas las entradas ordenadas por fecha, con el tiempo total en la parte superior.

## Categorías

Asigna cada proyecto a una categoría para agruparlo. Por ejemplo:

- **Trabajo para clientes** — proyectos facturables
- **Personal** — proyectos paralelos y aprendizaje
- **Código abierto** — contribuciones a la comunidad

Las categorías te permiten ver estadísticas agregadas entre proyectos relacionados, útil para entender cómo distribuyes tu tiempo.

## Entradas de tiempo

Registra el tiempo de dos formas. Cada entrada de tiempo incluye una descripción, hora de inicio/fin (o duración) y asignación de proyecto.

### Entrada manual

Crea una entrada de tiempo rellenando:

- **Descripción** — en qué trabajaste
- **Hora de inicio** y **hora de fin** — o introduce la duración directamente
- **Proyecto** — a qué proyecto pertenece el tiempo

La entrada manual es útil para registrar tiempo a posteriori — por ejemplo, para rellenar el trabajo de ayer o añadir tiempo que olvidaste registrar.

También puedes editar o eliminar entradas existentes para corregir errores.

### Temporizador de inicio/parada

Usa el temporizador integrado para registrar tiempo en tiempo real:

1. Inicia un temporizador en un proyecto (opcionalmente con una descripción) — aparece un contador en vivo con formato HH:MM:SS
2. Detén el temporizador cuando termines — la duración se registra como una entrada

El temporizador en marcha se conserva, así que sobrevive a la navegación — inicia un temporizador en el panel y detenlo más tarde desde cualquier parte de la aplicación.

## Temporizador Pomodoro

El temporizador Pomodoro está integrado en el seguimiento de tiempo de solyto:

- **Sesiones de concentración de 25 minutos** — trabaja sin interrupciones
- **Descansos cortos de 5 minutos** — descansa entre sesiones
- **Descanso largo de 15 minutos** — después de cada 4 sesiones
- **Puntos de ciclo** — muestra tu posición en el ciclo actual de 4 sesiones
- **Pitido** — una señal audible al final de cada fase

Puedes iniciar, pausar, reanudar, saltar y reiniciar el Pomodoro desde el widget del panel.

## Estadísticas

Consulta tu tiempo registrado desde varios ángulos:

- **Rango de fechas** — elige fechas de inicio/fin
- **Filtrar por categoría** — agrega los datos entre los proyectos de una categoría
- **Tiempo total** — la suma de tu selección
- **Dona por proyecto** — cómo se reparte el tiempo entre proyectos
- **Gráfico de barras por categoría** — distribución del tiempo por categoría

Usa las estadísticas para entender adónde va tu tiempo y ajustar tus hábitos.

## Widget del panel

El widget de Seguimiento del tiempo del [panel](/dashboard/overview/) muestra:

- Tu tiempo total de la semana actual
- Un desglose por proyecto con barras de color
- El temporizador Pomodoro, cuando está activo

Esto te da visibilidad sobre tu sesión actual sin tener que salir de tu trabajo.

## Rutas

| Ruta | Descripción |
|-------|-------------|
| `/time-tracking` | Resumen de todos los proyectos y entradas recientes |
| `/time-tracking/[id]` | Detalle del proyecto con entradas y estadísticas |

## Exportar

Los datos de seguimiento de tiempo se exportan como `.csv` en un formato de hoja de horas estándar, compatible con hojas de cálculo y software de facturación. La exportación incluye todas las entradas de tiempo con columnas de proyecto, descripción, hora de inicio, hora de fin y duración.

Consulta [Exportar datos](/integrations/exporting/).
