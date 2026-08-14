# Solyto Documentation - Project Status

**Date:** May 27, 2026
**Total content files:** 62 (up from 32)

## Completed

### Infrastructure
- [x] Astro + Starlight setup configured
- [x] `astro.config.mjs` updated with expanded sidebar (9 sections, 62 pages)
- [x] Custom accent color (teal `#1dbda5`) applied
- [x] GitHub + Discord social links added
- [x] Site configured for `https://docs.solyto.app`

### Getting Started (2 pages)
- [x] `introduction.md` - What solyto is, why it exists, core principles, what it replaces, feature overview
- [x] `quick-start.md` - Three setup options (solyto.app, local dev, self-hosting), first steps after signup

### Dashboard (2 pages)
- [x] `overview.md` - Three-column layout, all widgets, onboarding flow, welcome tour
- [x] `quick-add.md` - NEW - Smart content detection, confidence levels, examples

### Features (10 pages - all rewritten)
- [x] `todos.md` - Workspaces, kanban, smart score, subtasks, recurring, one-line syntax
- [x] `calendar.md` - Multiple views, sharing, recurring events, CalDAV import
- [x] `contacts.md` - Address books, photos, CardDAV import
- [x] `notes.md` - TipTap editor, hierarchical folders, drag-and-drop, favorites
- [x] `feeds.md` - Views, whitelist/blacklist, categories, friends feeds
- [x] `check-in.md` - 12 trackers detailed, sport types, trends, history
- [x] `time-tracking.md` - Projects, Pomodoro, start/stop, statistics
- [x] `finances.md` - Budget + Wealth tracking, historical charts
- [x] `clipboard.md` - Text + image clipboard, cross-device
- [x] `topics.md` - Guitar theory reference

### Libraries (9 pages - all rewritten)
- [x] `overview.md` - Common features, AI recommendations, release notifications
- [x] `music.md` - Deezer/Discogs import, AI recommendations, release alerts
- [x] `books.md` - Hardcover/Goodreads import, reading progress, series, lending
- [x] `movies.md` - IMDb import, trailers, release alerts
- [x] `games.md` - Steam/BGG import, platforms, playtime tracking
- [x] `recipes.md` - Chefkoch import, meal types
- [x] `quotes.md` - Random quote on dashboard
- [x] `links.md` - Categories, Telegram bot integration
- [x] `plants.md` - Care tracking, cover images

### Integrations (4 pages - all rewritten)
- [x] `telegram.md` - @SolytoBot, /connect flow, commands, alerts
- [x] `dav-sync.md` - CalDAV + CardDAV, server URLs, import stages, clients
- [x] `importing.md` - All 8 import sources with step-by-step instructions
- [x] `exporting.md` - Background jobs, rate limits, format table

### Customization (4 pages - all rewritten)
- [x] `themes.md` - All 10 actual themes (Default, Nord, Skyrim, Catppuccin Mocha/Latte, Gruvbox, Dracula, Terminal, Paper, Atari)
- [x] `notifications.md` - 9 notification types x 4 channels, per-type-per-channel config
- [x] `keyboard-shortcuts.md` - Ctrl+Space command palette, Enter Quick Add
- [x] `languages.md` - 4 languages (en/de/fr/es), detection priority

### Account (5 pages - ALL NEW)
- [x] `profile.md` - Profile image, password, 7 settings tabs
- [x] `friends.md` - Friend requests, calendar sharing
- [x] `ai-assistants.md` - Custom AI assistants, OpenAI API key
- [x] `dev-requests.md` - Bug reports, feature requests, voting
- [x] `pwa.md` - Install as app, desktop/mobile

### Self-Hosting (6 pages - ALL NEW)
- [x] `overview.md` - 10-service architecture, system requirements, networks
- [x] `installation.md` - One-step curl install, manual install, DNS setup
- [x] `configuration.md` - All environment variables by category
- [x] `secrets.md` - 20 Docker secrets, generation instructions
- [x] `upgrading.md` - Update, backup, rollback procedures
- [x] `troubleshooting.md` - Common issues, logs, fixes

### API Reference (17 pages - ALL NEW)
- [x] `authentication.md` - 8 endpoints (register, login, verify, tokens)
- [x] `users.md` - 16 endpoints (profile, settings, admin)
- [x] `todos.md` - 15 endpoints (CRUD, categories, workspaces, subtasks)
- [x] `notes.md` - 12 endpoints (CRUD, categories, import, export)
- [x] `calendars.md` - 17 endpoints (CRUD, events, sharing, import)
- [x] `contacts.md` - 13 endpoints (address books, contacts, photos, import)
- [x] `libraries.md` - 40+ endpoints across all 8 library types
- [x] `feeds.md` - 8 endpoints (subscriptions, items, search)
- [x] `finances.md` - 9 endpoints (budget, wealth)
- [x] `time-tracking.md` - 13 endpoints (projects, entries, timer, stats)
- [x] `check-in.md` - 3 endpoints (list, create, update)
- [x] `clipboard.md` - 5 endpoints (text, image, delete)
- [x] `notifications.md` - 8 endpoints (list, push, settings)
- [x] `export.md` - 3 endpoints (request, status, download)
- [x] `friends.md` - 6 endpoints (list, requests, accept/reject)
- [x] `telegram.md` - 4 endpoints (token, status, alerts)
- [x] `quick-add.md` - 2 endpoints (detect, commit)

---

## Remaining

- [x] Rewrite `privacy.md` (expanded with real external-service list)
- [x] Remove old `getting-started/self-hosting.md` (replaced by self-hosting/ section)
- [x] Update `index.mdx` splash page
- [x] Build and verify the site (`npm run build`) — passes, 64 pages
- [ ] Add favicon/logo (currently default Astro favicon)
- [ ] Consider: video placeholder sections for future video instructions
- [ ] Consider: i18n support for the docs site itself
- [ ] Consider: deployment config (no hosting provider configured yet)
