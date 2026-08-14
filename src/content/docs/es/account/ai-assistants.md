---
title: Funciones de IA
description: Cómo se usa la IA en solyto — recomendaciones para tus bibliotecas.
---

solyto usa IA en unos pocos lugares muy concretos, siempre bajo demanda y nunca para entrenar modelos con tus datos.

## Qué hace la IA

- **Recomendaciones de bibliotecas** — las bibliotecas de [Música](/features/libraries/music/) y [Libros](/features/libraries/books/) pueden recomendar entradas según tu colección ("Un favorito", "Algo que no haya visto antes", "Algo al azar", "Algo nuevo")
- **Detección en Agregar rápido** — la función [Agregar rápido](/dashboard/quick-add/) detecta tipos de contenido a partir del texto o las URL que pegas

## Cómo funciona

Las solicitudes de IA pasan por el backend de solyto (una API compatible con OpenAI). No se envía nada hasta que activas una recomendación o una detección, y tus datos nunca se usan para entrenar modelos.

## Configuración

El backend de IA se configura del lado del servidor. Si haces self-hosting, puedes apuntarlo a tu propio endpoint compatible con OpenAI:

| Variable | Descripción |
|----------|-------------|
| `AI_API_KEY` | Clave de API para el servicio de IA |
| `AI_BASE_URL` | URL del endpoint de la API |
| `AI_MODEL` | Modelo predeterminado |

Consulta [Configuración de self-hosting](/self-hosting/configuration/) para ver la lista completa de variables.
