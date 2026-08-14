---
title: Languages
description: solyto is available in English, German, French, and Spanish.
---

solyto is available in four languages. The interface, notifications, and Telegram bot all follow your language preference.

## Supported languages

| Language | Code |
|----------|------|
| English | `en` |
| German | `de` |
| French | `fr` |
| Spanish | `es` |

## Changing your language

1. Go to **Settings → General**
2. Select your preferred language from the **Language** dropdown
3. The interface updates immediately — no reload needed

## Language detection

When you first sign up, solyto detects your preferred language using this priority:

1. **User setting** — if you've manually set a language in settings, that's always used
2. **Browser language** — solyto checks `navigator.language` from your browser
3. **Default** — falls back to English (`en`)

For example, if your browser is set to `de-DE` and you haven't changed the language setting, solyto will use German.

## Scope of translations

All four languages cover:

- The full app interface (navigation, forms, buttons, labels)
- Email notifications (when available)
- Telegram bot commands and responses
- Telegram alerts (Your Day and Check-in)

## Adding a new language

If your language is not yet supported, you can help add it:

1. Check `src/lib/i18n/` for existing translation files (e.g. `en.ts`, `de.ts`)
2. Copy the English file as a starting point
3. Translate all strings to your language
4. Submit a pull request to the [app repository](https://github.com/solyto/app)
5. Once merged, the language will appear in the settings dropdown

## Contributing corrections

If you spot an incorrect or awkward translation:

1. Open the relevant file in `src/lib/i18n/`
2. Fix the string
3. Submit a pull request with a description of the change

Even small corrections are appreciated.

## Contributing translations

solyto is community-translated. Translation files live in the app repository under `src/lib/i18n/`. Contributions for new languages and corrections to existing translations are welcome.
