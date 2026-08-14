---
title: Registro diario
description: Registra tu estado de ánimo, salud y hábitos cada día con 12 indicadores configurables.
---

Registro diario es una herramienta de seguimiento diario integrada en solyto. Ofrece 12 indicadores configurables —la mayoría en una escala de 1 a 5— para registrar tu estado de ánimo, tus métricas de salud y tus hábitos cada día. Con el tiempo, construye un historial personal con gráficos de tendencia, promedios y estadísticas que puedes revisar para detectar patrones en tu bienestar.

## Indicadores

El Registro diario incluye 12 indicadores, todos valorados en una escala de 1 a 5 salvo que se indique lo contrario. En la escala, 1 representa el extremo bajo y 5 el extremo alto:

| Indicador | Escala | Descripción |
|---------|-------|-------------|
| **Estado de ánimo** | 1–5 | Estado de ánimo general del día |
| **Sueño** | 1–5 | Calidad del sueño |
| **Sueños** | 1–5 | Si soñaste y con qué intensidad |
| **Calidad de la comida** | 1–5 | Lo saludable que fue tu alimentación |
| **Cantidad de comida** | 1–5 | Cuánto comiste (1 = demasiado poco, 5 = demasiado) |
| **Agua** | 1–5 | Cuánta agua bebiste |
| **Deporte** | Binario | Si hiciste ejercicio — en caso afirmativo, selecciona un tipo de deporte |
| **Trabajo** | 1–5 | Productividad o satisfacción laboral |
| **Menstruación** | 1–5 | Seguimiento relacionado |
| **Alcohol** | 1–5 | Consumo de alcohol |
| **Tabaco** | 1–5 | Consumo de tabaco |
| **Vida social** | 1–5 | Calidad de la interacción social |

### Tipos de deporte

Al marcar el indicador de deporte como activo, puedes seleccionar qué tipo de ejercicio realizaste:

- Gimnasio
- Ciclismo
- Senderismo
- Caminar
- Natación
- Yoga

## Personalizar indicadores

No todos los indicadores son relevantes para todo el mundo. Abre **Ajustes** (el icono de engranaje) en la navegación del Registro diario para:

- **Activar o desactivar** indicadores individuales — solo los que actives aparecerán en el formulario de registro diario (al menos uno debe permanecer activo)
- **Marcar indicadores como puntuables** — los indicadores puntuables alimentan la puntuación total y el widget del panel (el indicador de deporte nunca puntúa)
- **Elegir tus deportes** — selecciona hasta 5 tipos de deporte para hacer seguimiento; toca un deporte seleccionado y luego uno no seleccionado para intercambiarlos

Esto mantiene tu registro diario centrado en lo que realmente te importa.

## Registro diario

Cada día, completa tus indicadores mediante el formulario de registro. El formulario solo muestra los indicadores que hayas activado, para que sea rápido de completar. Puedes volver atrás y editar cualquier entrada pasada — simplemente navega hasta la fecha y actualiza los valores.

Un registro diario suele llevar menos de un minuto una vez que te acostumbras.

## Historial

Explora tus entradas anteriores en una **cuadrícula mensual**:

- Una matriz día por día con los iconos de los indicadores de cada jornada
- Haz clic en cualquier celda para editar rápidamente el valor de ese indicador para ese día
- Haz clic en el número del día para abrir la vista completa de ese día
- Navega por mes para explorar tu historial

### Promedios y resúmenes

La página de historial también muestra **promedios** por indicador junto con tu total general, y **resúmenes del registro diario** — resúmenes en lenguaje natural que describen cada día ("buen ánimo, dormiste bien, pero bebiste alcohol") y resúmenes de periodo para esta semana/la semana pasada y este mes/el mes pasado, incluyendo tu recuento de deportes.

## Tendencias

La página de tendencias muestra gráficos de líneas suaves para cada indicador puntuable activo (excluyendo el deporte), con rangos de fecha de **30 días, 3 meses, 6 meses o todo el historial**:

Las tendencias te ayudan a detectar patrones — por ejemplo, si la calidad de tu sueño está relacionada con tu estado de ánimo, o si hacer más ejercicio mejora tus puntuaciones de bienestar general.

## Widget del panel

El widget de Registro diario aparece en tu [panel](/dashboard/overview/), mostrando el valor medio por indicador puntuable como barras codificadas por color, junto con tu puntuación total general.

## Recordatorios

Configura recordatorios de registro diario para convertirlo en un hábito:

- **Telegram** — recibe un mensaje de recordatorio diario a través del bot de Telegram
- **Notificaciones push** — notificación push del navegador a la hora que elijas

Consulta [Notificaciones](/customization/notifications/) y [Telegram](/integrations/telegram/) para la configuración.

## Rutas

| Ruta | Descripción |
|-------|-------------|
| `/check-in` | Entrada del registro diario de hoy |
| `/check-in/date/[date]` | Registro para una fecha concreta |
| `/check-in/history` | Vista de calendario de entradas pasadas |
| `/check-in/trends` | Estadísticas y gráficos de tendencia |

## Exportar

Los datos del registro diario se exportan como `.csv`, compatible con cualquier hoja de cálculo. Consulta [Exportar datos](/integrations/exporting/).
