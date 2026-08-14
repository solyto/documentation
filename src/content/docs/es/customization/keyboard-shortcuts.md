---
title: Atajos de teclado
description: Navega y actúa más rápido con atajos de teclado.
---

solyto cuenta con un sistema de atajos de teclado (KeyManager) para las acciones más comunes en toda la app. Los atajos se gestionan de forma global, y la mayoría también funcionan con una tecla auxiliar como `Ctrl` para acciones específicas.

## Atajos globales

| Atajo | Acción |
|----------|--------|
| `Enter` | Confirmar / crear / agregar rápido (cuando no estás en un campo de entrada) |
| `Escape` | Cancelar / cerrar el diálogo actual |
| `Ctrl+S` | Guardar la nota actual |
| `Ctrl+F` | Enfocar la barra de búsqueda (bibliotecas, contactos) |

## Cómo funcionan los atajos

- Los atajos se registran globalmente y se ejecutan con prioridades, de modo que la acción más específica gana cuando varios controladores reaccionan a la misma tecla
- `Enter` y `Escape` son las dos teclas más habituales, usadas en modales ("Pulsa Enter para confirmar, Escape para cancelar"), creación rápida de tareas, comentarios de solicitudes de desarrollo, campos de patrimonio y más
- Las teclas auxiliares (`Ctrl`, `Shift`, `Alt`) pueden combinarse con teclas de carácter para acciones como guardar (`Ctrl+S`) y buscar (`Ctrl+F`)
- Los atajos no se activan mientras escribes en un campo de entrada, un área de texto o un desplegable

## Notas

- Los atajos funcionan en navegadores de escritorio
- La tecla `F1` y las teclas de carácter `e`, `f`, `s`, `n` forman parte del conjunto de teclas admitidas por KeyManager; los enlaces de teclas se registran por pantalla según sea necesario
