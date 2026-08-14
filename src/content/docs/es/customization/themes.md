---
title: Temas
description: Personaliza la apariencia de solyto con 10 temas integrados.
---

solyto incluye 10 temas integrados que cambian el aspecto de toda la interfaz: navegación, tarjetas, botones, tipografía y todos los elementos de la UI.

## Cambiar tu tema

1. Ve a **Configuración → App**
2. Selecciona un tema de la lista
3. El cambio se **aplica de inmediato**, sin necesidad de recargar

## Temas disponibles

| Tema | Descripción |
|-------|-------------|
| **Default (predeterminado)** | Tema claro, limpio y minimalista. Admite modo oscuro según la preferencia del sistema operativo. |
| **Nord** | Paleta de colores fría, de inspiración ártica, basada en el esquema de colores [Nord](https://www.nordtheme.com/). Azules tranquilos y grises suaves. |
| **Skyrim** | Inspirado en la interfaz de The Elder Scrolls V: Skyrim. Tonos pergamino y elementos de estilo fantástico. |
| **Catppuccin Mocha** | Un tema oscuro de tonos cálidos de la familia [Catppuccin](https://catppuccin.com/). Morados intensos y pasteles sobre un fondo oscuro. |
| **Catppuccin Latte** | La variante clara de Catppuccin. Pasteles cálidos y colores suaves sobre un fondo claro. |
| **Gruvbox** | Un tema retro con tonos cálidos y terrosos. Basado en el popular esquema de colores [Gruvbox](https://github.com/morhetz/gruvbox). |
| **Dracula** | Un tema morado oscuro basado en la paleta de colores [Dracula](https://draculatheme.com/). Alto contraste con colores de sintaxis vibrantes. |
| **Terminal** | Un tema monoespaciado, verde sobre negro, inspirado en los emuladores de terminal clásicos. Minimalista y con estética hacker. |
| **Paper** | Un aspecto cálido y de bajo contraste que recuerda al papel. Cómodo para la vista, con fondos color crema y tipografía sutil. |
| **Atari** | Un estilo retro exagerado inspirado en las primeras interfaces de Atari. Colores intensos y estética robusta. |

## Modo oscuro

El tema **Default** es el único que admite modo oscuro. Cambia automáticamente entre claro y oscuro según la preferencia de tu sistema operativo:

- **macOS:** Ajustes del sistema → Apariencia → Claro/Oscuro/Automático
- **Windows:** Configuración → Personalización → Colores → Elige tu modo
- **Linux:** Sigue la configuración de modo oscuro de tu entorno de escritorio

Cuando seleccionas cualquier tema distinto de Default, el modo oscuro no se aplica: se usa el esquema de colores propio del tema, independientemente de la configuración del sistema operativo.

## Cómo funcionan los temas

Los temas se implementan como anulaciones de variables CSS. Cada tema es un archivo CSS independiente que se carga desde `/themes/{id}/{id}.css`, por ejemplo:

- `/themes/nord/nord.css`
- `/themes/catppuccin-mocha/catppuccin-mocha.css`
- `/themes/gruvbox/gruvbox.css`

Cuando seleccionas un tema, solyto carga el archivo CSS correspondiente y lo aplica a la raíz del documento. El CSS sobrescribe las variables predeterminadas de colores, fondos, bordes, sombras y tipografía. Como los temas usan variables CSS, el cambio es instantáneo, sin recargar la página.

## Detalle de los temas

### Default

El tema predeterminado es un diseño claro, limpio y minimalista con acentos azules y amplios espacios en blanco. Es el único tema que admite el cambio automático a modo oscuro según la preferencia de tu sistema operativo. En modo oscuro, los fondos cambian a grises oscuros y el texto se vuelve claro.

### Nord

Basado en la [paleta de colores Nord](https://www.nordtheme.com/). Los azules árticos fríos (Polar Night, Snow Storm, Frost) crean un entorno tranquilo y enfocado. Ideal para uso prolongado.

### Skyrim

Inspirado en la interfaz del juego The Elder Scrolls V: Skyrim. Fondos color pergamino, bordes de estilo fantástico y tonos tierra cálidos. Una sensación única e inmersiva.

### Catppuccin Mocha

La variante oscura de la paleta [Catppuccin](https://catppuccin.com/). Morados intensos, pasteles apagados y un fondo muy oscuro. Popular entre desarrolladores.

### Catppuccin Latte

La variante clara de Catppuccin. Los mismos colores de acento pastel cálidos, pero sobre un fondo claro color crema. Una alternativa más suave al tema Default.

### Gruvbox

Un esquema de colores retro con naranjas, amarillos y rojos cálidos sobre un fondo oscuro. Basado en la popular paleta [Gruvbox](https://github.com/morhetz/gruvbox).

### Dracula

Un tema oscuro con fondo de tono morado y colores de sintaxis vibrantes (verde, naranja, rosa, cian). Basado en el esquema de colores [Dracula](https://draculatheme.com/).

### Terminal

Un tema monoespaciado, verde sobre negro, inspirado en los emuladores de terminal clásicos (VT100, xterm). Todo el texto se muestra en una fuente monoespaciada. Minimalista y nostálgico.

### Paper

Un tema cálido y de bajo contraste que imita el aspecto del papel envejecido. Fondos color crema, texto marrón y sombras sutiles. Cómodo para la vista en sesiones de lectura largas.

### Atari

Un tema retro exagerado inspirado en los gráficos brillantes y robustos de las primeras consolas Atari y los ordenadores de 8 bits. Alto contraste, colores saturados y una estética divertida.

## Crear un tema personalizado

El sistema de temas de solyto se basa en propiedades personalizadas de CSS. Si quieres crear tu propio tema, puedes sobrescribir las variables CSS predeterminadas. Los temas y las contribuciones de la comunidad son bienvenidos en el repositorio de la app.
