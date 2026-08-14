---
title: Keyboard Shortcuts
description: Navigate and act faster with keyboard shortcuts.
---

solyto has a keyboard shortcut system (KeyManager) for common actions across the app. Shortcuts are handled globally, and most also work with a helper key like `Ctrl` for specific actions.

## Global shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Confirm / create / quick-add (when not in an input field) |
| `Escape` | Cancel / close the current dialog |
| `Ctrl+S` | Save the current note |
| `Ctrl+F` | Focus the search bar (libraries, contacts) |

## How shortcuts work

- Shortcuts are registered globally and run with priorities, so the most specific action wins when several handlers react to the same key
- `Enter` and `Escape` are the two most common keys — used in modals ("Press Enter to Confirm, Escape to Cancel"), todo quick-create, dev request comments, wealth fields, and more
- Helper keys (`Ctrl`, `Shift`, `Alt`) can be combined with character keys for actions like save (`Ctrl+S`) and search (`Ctrl+F`)
- Shortcuts don't fire while you're typing in an input field, textarea, or select

## Notes

- Shortcuts work in desktop browsers
- The `F1` key and the `e`, `f`, `s`, `n` character keys are part of the KeyManager's supported key set; bindings are registered per screen as needed
