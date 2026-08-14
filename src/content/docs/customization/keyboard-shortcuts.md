---
title: Keyboard Shortcuts
description: Navigate faster with keyboard shortcuts and the command palette.
---

solyto has keyboard shortcuts for common actions and a command palette for quick access to anything.

## Command palette

The command palette is the fastest way to navigate and act in solyto on desktop.

| Shortcut | Action |
|----------|--------|
| `Ctrl+Space` | Open the command palette (desktop) |

Once the command palette is open:

- **Type** to search for pages, actions, or settings
- **Arrow keys** (`↑` `↓`) to navigate results
- **Enter** to execute the selected action
- **Escape** to close the palette

The command palette indexes all pages, features, and common actions. Start typing to filter — for example, type "todo" to jump to the Todos page, create a new todo, or open todo settings.

## Quick Add

| Shortcut | Action |
|----------|--------|
| `Enter` | Open the Quick Add modal (when not focused on an input field) |

Quick Add lets you add items to any library, create todos, or save links from anywhere in the app. See [Quick Add](/dashboard/quick-add/) for details.

## Getting help

| Shortcut | Action |
|----------|--------|
| `F1` | Available for keyboard shortcuts reference |

## How shortcuts are managed

solyto uses a KeyManager system that handles all keyboard event registration. Shortcuts are registered globally and intercepted before they reach other components. This ensures that:

- Shortcuts don't fire when you're typing in an input field or textarea
- The command palette can be opened from any page
- Quick Add works globally without conflicting with text editing

## Tips

- Shortcuts work on desktop browsers only
- The command palette is the recommended way to navigate — it's faster than clicking through menus
- If a shortcut conflicts with your browser's built-in shortcuts, you can disable it in **Settings → Keyboard Shortcuts**
- Some shortcuts can be remapped in **Settings → Keyboard Shortcuts**
- The command palette searches across all pages, features, and actions — try typing a few characters of where you want to go
