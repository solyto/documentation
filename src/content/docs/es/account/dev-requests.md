---
title: Solicitudes de desarrollo
description: Envía informes de errores y solicitudes de funciones, y vota ideas.
---

Solicitudes de desarrollo es un tablero de comentarios integrado donde puedes reportar errores y proponer funciones nuevas. Es una forma impulsada por la comunidad de dar forma al desarrollo de solyto.

## Acceder a Solicitudes de desarrollo

Ve a **/dev-requests** desde la barra lateral o entra directamente a la página. Verás una lista de todas las solicitudes enviadas, ordenadas por popularidad.

## Enviar una solicitud

1. Haz clic en **Nueva solicitud**
2. Elige un tipo:
   - **Error** — algo está roto o no funciona como se espera
   - **Función** — una idea para una nueva función o mejora
3. Escribe un título y una descripción claros
4. Define una **prioridad** (1–5)
5. Opcionalmente, adjunta una **captura de pantalla** y una URL relacionada
6. Envía la solicitud

Para errores, incluye los pasos para reproducir el problema, qué esperabas que ocurriera y qué ocurrió realmente. Para funciones, describe el problema que intentas resolver.

## Votación

Cualquier usuario puede votar las solicitudes existentes con flechas de arriba/abajo. Tu voto queda registrado y se muestra la puntuación. La votación ayuda a priorizar qué se desarrolla a continuación.

## Comentarios

Deja comentarios en cualquier solicitud para añadir contexto, compartir soluciones alternativas o debatir la idea con otros usuarios. Pulsa **Enter** para enviar un comentario, y se notificará al autor.

## Estados de las solicitudes

Las solicitudes se dividen en **Solicitudes actuales** y **Solicitudes resueltas**, y pasan por los siguientes estados:

| Estado | Significado |
|--------|-------------|
| Pendiente de revisión | Recién enviada, a la espera de revisión |
| En espera | Aceptada y programada para desarrollo |
| En progreso | Actualmente en desarrollo |
| Completada | Implementada y publicada |
| Cancelada | No planificada — el motivo se indica en los comentarios |

## Desactivar Solicitudes de desarrollo

Si haces self-hosting y no quieres mostrar la sección de Solicitudes de desarrollo, define la variable de entorno:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

Esto oculta el enlace de Solicitudes de desarrollo en la barra lateral y desactiva la ruta por completo. Consulta [Configuración](/self-hosting/configuration/) para más detalles.

## Desactivar Solicitudes de desarrollo

Si haces self-hosting y no quieres mostrar la sección de Solicitudes de desarrollo, define la variable de entorno:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

Esto oculta el enlace de Solicitudes de desarrollo en la barra lateral y desactiva la ruta por completo. Consulta [Configuración](/self-hosting/configuration/) para más detalles.
