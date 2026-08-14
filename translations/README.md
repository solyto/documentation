# Translating the solyto docs

The docs site uses Starlight's built-in internationalization. English (`en`) is the
default locale and is served at the root URL (no `/en/` prefix). German (`de`),
French (`fr`), and Spanish (`es`) are scaffolded but not yet translated: their
folders exist under `src/content/docs/`, so all pages currently fall back to
English with a "not yet translated" notice.

## How translation works

- A page is translated by creating `src/content/docs/<locale>/<same-path-as-en>.md`.
  For example, to translate "What is solyto" into German, create
  `src/content/docs/de/getting-started/what.md`.
- Starlight pairs pages across locales by file path. Missing pages fall back to
  the English version automatically, so translation can happen progressively,
  one file at a time.
- The site UI (search, table of contents, language switcher, ...) is already
  translated by Starlight for de/fr/es out of the box.

## Conventions

- Keep the same file path and file name as the English source (the slug equals
  the path).
- Keep frontmatter keys in English (`title`, `description`, ...) and translate
  only their values.
- Translate headings and prose.
- Keep link `href`s (and `/...` paths) unchanged; translate only the visible
  link text.
- Do not translate code blocks, inline code, URLs, or shell commands.
- Keep tables, Starlight asides, and any HTML intact.
- Keep the `template: splash`/`hero:` frontmatter on `index.mdx` intact, and
  translate the displayed strings (tagline, action labels, card text) inside it.

## Status

Per-language checklists, one line per page with its target path:

- `translations/de.md` — German
- `translations/fr.md` — French
- `translations/es.md` — Spanish

Mark items `[x]` as pages are translated.

## Related config

- Locales are declared in `astro.config.mjs` (`locales` + `defaultLocale`).
- The site UI (search, TOC, language switcher) is translated by Starlight's
  built-in strings for de/fr/es — no work needed there.
- Only if you need custom UI strings (or want to override a default label): add
  the `i18n` data collection to `src/content.config.ts` (import `i18nLoader` from
  `@astrojs/starlight/loaders` and `i18nSchema` from `@astrojs/starlight/schema`),
  then create `src/content/i18n/<locale>.json` with the keys to override.
- Sidebar labels in `astro.config.mjs` are English-only for now; they can be
  localized later per locale.
