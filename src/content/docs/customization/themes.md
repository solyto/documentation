---
title: Themes
description: Customize solyto's appearance with 10 built-in themes.
---

solyto comes with 10 built-in themes that change the look and feel of the entire interface — navigation, cards, buttons, typography, and all UI elements.

## Changing your theme

1. Go to **Settings → App**
2. Select a theme from the list
3. The change is **applied immediately** — no reload needed

## Available themes

| Theme | Description |
|-------|-------------|
| **Default** | Clean, minimal light theme. Supports dark mode via OS preference. |
| **Nord** | Cool, arctic-inspired color palette based on the [Nord](https://www.nordtheme.com/) color scheme. Calm blues and soft grays. |
| **Skyrim** | Inspired by the UI of The Elder Scrolls V: Skyrim. Parchment tones and fantasy-styled elements. |
| **Catppuccin Mocha** | A dark, warm-toned theme from the [Catppuccin](https://catppuccin.com/) family. Rich purples and pastels on a dark background. |
| **Catppuccin Latte** | The light variant of Catppuccin. Warm pastels and soft colors on a light background. |
| **Gruvbox** | A retro groove theme with warm, earthy tones. Based on the popular [Gruvbox](https://github.com/morhetz/gruvbox) color scheme. |
| **Dracula** | A dark purple theme based on the [Dracula](https://draculatheme.com/) color palette. High contrast with vibrant syntax colors. |
| **Terminal** | A monospace, green-on-black theme inspired by classic terminal emulators. Minimalist and hacker-friendly. |
| **Paper** | A paper-like, warm, low-contrast look. Easy on the eyes with cream backgrounds and subtle typography. |
| **Atari** | Over-the-top retro style inspired by early Atari interfaces. Bold colors and chunky aesthetics. |

## Dark mode

The **Default** theme is the only theme that supports dark mode. It automatically switches between light and dark based on your operating system preference:

- **macOS:** System Settings → Appearance → Light/Dark/Auto
- **Windows:** Settings → Personalization → Colors → Choose your mode
- **Linux:** Follows your desktop environment's dark mode setting

When you select any theme other than Default, dark mode is not applied — the theme's own color scheme is used regardless of OS settings.

## How themes work

Themes are implemented as CSS variable overrides. Each theme is a standalone CSS file loaded from `/themes/{id}/{id}.css`, for example:

- `/themes/nord/nord.css`
- `/themes/catppuccin-mocha/catppuccin-mocha.css`
- `/themes/gruvbox/gruvbox.css`

When you select a theme, solyto loads the corresponding CSS file and applies it to the document root. The CSS overrides default variables for colors, backgrounds, borders, shadows, and typography. Because themes use CSS variables, the switch is instant with no page reload.

## Theme details

### Default

The default theme is a clean, minimal light design with blue accents and generous whitespace. It's the only theme that supports automatic dark mode switching based on your OS preference. In dark mode, backgrounds shift to dark grays and text becomes light.

### Nord

Based on the [Nord color palette](https://www.nordtheme.com/). Cool arctic blues (Polar Night, Snow Storm, Frost) create a calm, focused environment. Great for extended use.

### Skyrim

Inspired by The Elder Scrolls V: Skyrim's in-game UI. Parchment-colored backgrounds, fantasy-style borders, and warm earth tones. A unique, immersive feel.

### Catppuccin Mocha

The dark variant of the [Catppuccin](https://catppuccin.com/) palette. Rich purples, muted pastels, and a deep dark background. Popular with developers.

### Catppuccin Latte

The light variant of Catppuccin. Same warm pastel accent colors but on a creamy light background. A softer alternative to the Default theme.

### Gruvbox

A retro groove color scheme with warm oranges, yellows, and reds on a dark background. Based on the widely-used [Gruvbox](https://github.com/morhetz/gruvbox) palette.

### Dracula

A dark theme with a purple-tinted background and vibrant syntax colors (green, orange, pink, cyan). Based on the [Dracula](https://draculatheme.com/) color scheme.

### Terminal

A monospace green-on-black theme inspired by classic terminal emulators (VT100, xterm). All text renders in a monospace font. Minimalist and nostalgic.

### Paper

A warm, low-contrast theme that mimics the look of aged paper. Cream backgrounds, brown text, and subtle shadows. Easy on the eyes for long reading sessions.

### Atari

A bold retro theme inspired by the bright, chunky graphics of early Atari consoles and 8-bit computers. High contrast, saturated colors, and playful aesthetics.

## Creating a custom theme

solyto's theming system is based on CSS custom properties. If you want to create your own theme, you can override the default CSS variables. Community themes and contributions are welcome in the app repository.
