# Tasks: Full documentation for all of solyto

id: worst
status: open
analyst: analyst
date: 2026-08-14

## Task breakdown

### Phase 0 — Baseline

TASK-1: Bring the job worktree up to date with the current documentation state
     files: src/content/docs/** (all), astro.config.mjs, STATUS.md
     depends: none
     risk: high — the job branch was cut from commit 11144e3 (33 content pages), but the
     main documentation repo working tree holds ~64 pages (account/, api-reference/,
     self-hosting/, features/libraries/, dashboard/quick-add, getting-started/what-why-how-
     first-steps-community) as uncommitted work. The developer must reconcile these (commit
     main repo work to main, then rebase/merge the job branch, or copy the pages into the
     worktree) or every later task edits a stale site.

### Phase 1 — Getting Started & Dashboard

TASK-2: Rewrite Getting Started to a coherent narrative
     files: src/content/docs/getting-started/introduction.md, quick-start.md,
     self-hosting.md, what.md, why.md, how.md, first-steps.md, community.md
     depends: TASK-1
     risk: low — mostly reorganisation; must not invent claims about setup steps.

TASK-3: Expand the Dashboard docs to cover all three columns and their widgets
     files: src/content/docs/dashboard/overview.md
     depends: TASK-1
     risk: medium — many widgets (weather+city picker, due/relevant todos with confetti,
     quotes, releases, check-in stats, time-tracking breakdown, shortcuts) and the
     onboarding modal + welcome tour need accurate detail from the app.

TASK-4: Document the dashboard Quick Add feature fully
     files: src/content/docs/dashboard/quick-add.md
     depends: TASK-1
     risk: medium — content-type detection with confidence, all 12 destinations
     (music/books/movies/games/links/recipes/plants/quotes/todo/note/feed/clipboard),
     Enter key + FAB entry, "choose type" fallback; verify against app + API.

### Phase 2 — Core features

TASK-5: Full todos documentation
     files: src/content/docs/features/todos.md
     depends: TASK-1
     risk: medium — quick-create one-line syntax (#tag /category due: repeat: link:),
     smart relevance score, workspaces + hideable, Kanban drag-and-drop, subtasks,
     recurrence rules, auto-generated todos, filters, URL sharing.

TASK-6: Full calendar documentation
     files: src/content/docs/features/calendar.md
     depends: TASK-1
     risk: medium — month/week/day/list views, recurring events + single-occurrence edits,
     multi-calendar management, sharing + invites, attachments (todos/notes), CalDAV import,
     todos on calendar.

TASK-7: Full contacts documentation
     files: src/content/docs/features/contacts.md
     depends: TASK-1
     risk: low — address books, contact fields (multi phone/email, groups, photo), CardDAV
     import, search.

TASK-8: Full notes documentation
     files: src/content/docs/features/notes.md
     depends: TASK-1
     risk: low — TipTap editor (markdown + tables + images), folders with drag-and-drop,
     favorites, import/export, Ctrl+S save.

TASK-9: Full feeds documentation
     files: src/content/docs/features/feeds.md
     depends: TASK-1
     risk: low — subscriptions, whitelist/blacklist keywords, test feed, browse directory,
     friends feeds, view modes, save-to-library.

TASK-10: Full check-in documentation
     files: src/content/docs/features/check-in.md
     depends: TASK-1
     risk: medium — 12 trackers, scored vs unscored, sports selection/replace flow, daily
     history grid, natural-language summaries, trend charts.

TASK-11: Full time-tracking documentation
     files: src/content/docs/features/time-tracking.md
     depends: TASK-1
     risk: low — projects/categories, timer that survives navigation, manual entries,
     Pomodoro (25/5/15 cycle), statistics.

TASK-12: Full finances documentation
     files: src/content/docs/features/finances.md
     depends: TASK-1
     risk: low — budget income/expense, wealth fields with value history, charts.

TASK-13: Full clipboard documentation
     files: src/content/docs/features/clipboard.md
     depends: TASK-1
     risk: low — text + image entries, cross-device sync.

TASK-14: Resolve the Topics page (guitar theory)
     files: src/content/docs/features/topics.md
     depends: TASK-1
     risk: high — the app has MusicTheory helpers + guitar components but they are NOT wired
     to any route (dormant). Confirm with the owner whether the feature ships; if it does not,
     remove or rewrite the page rather than fabricate a feature.

### Phase 3 — Libraries

TASK-15: Library overview (common capabilities)
     files: src/content/docs/libraries/overview.md
     depends: TASK-1
     risk: low — shared features: search, genres, ratings, wishlist, tags, view switcher
     (list/cards/shelf/spine 3D), recommendations, releases.

TASK-16: Music library full docs
     files: src/content/docs/libraries/music.md
     depends: TASK-1
     risk: low — fields, Deezer/Discogs search + import, AI recommender, releases, preview.

TASK-17: Books library full docs
     files: src/content/docs/libraries/books.md
     depends: TASK-1
     risk: low — fields (current page, lent to, series), Hardcover/Goodreads import,
     recommender, releases.

TASK-18: Movies library full docs
     files: src/content/docs/libraries/movies.md
     depends: TASK-1
     risk: low — fields, TMDB/IMDb import, trailers, releases.

TASK-19: Games library full docs
     files: src/content/docs/libraries/games.md
     depends: TASK-1
     risk: low — fields, Steam/BGG import, platforms incl. boardgames, playtime, completed.

TASK-20: Recipes library full docs
     files: src/content/docs/libraries/recipes.md
     depends: TASK-1
     risk: low — structured ingredients/steps, kcal per serving, Chefkoch import.

TASK-21: Links, Quotes and Plants library docs
     files: src/content/docs/libraries/links.md, quotes.md, plants.md
     depends: TASK-1
     risk: low — link categories + drag-and-drop + Telegram bot, quote dashboard widget,
     plant care + unidentified filter + cover upload.

### Phase 4 — Integrations

TASK-22: Telegram bot full docs
     files: src/content/docs/integrations/telegram.md
     depends: TASK-1
     risk: medium — pairing flow (/connect + token), commands (/day /todos /help),
     free-text quick-add with confidence + type picker, alerts, notification delivery.

TASK-23: DAV sync full docs
     files: src/content/docs/integrations/dav-sync.md
     depends: TASK-1
     risk: low — CalDAV + CardDAV, server URLs/credentials, two-way sync, external import.

TASK-24: Importing docs (all sources)
     files: src/content/docs/integrations/importing.md
     depends: TASK-1
     risk: low — Deezer, Discogs, Hardcover, Goodreads, IMDb, TMDB, Steam, BGG, Chefkoch,
     notes md/zip, CalDAV/CardDAV; step-by-step per source.

TASK-25: Exporting docs — fix omissions
     files: src/content/docs/integrations/exporting.md
     depends: TASK-1
     risk: low — the format table omits movies/plants/clipboard; document the real 15
     exported features, 24h rate limit, 48h expiry, background job + notification.

### Phase 5 — Customization

TASK-26: Themes docs — list all 10 real themes
     files: src/content/docs/customization/themes.md
     depends: TASK-1
     risk: low — currently lists 5; app has 10 (add Nord, Gruvbox, Dracula, Terminal,
     Catppuccin variants) + dark-mode behavior + animations toggle.

TASK-27: Notifications docs — full 9x4 matrix
     files: src/content/docs/customization/notifications.md
     depends: TASK-1
     risk: medium — currently lists 6 types; document all 9 types x 4 channels
     (UI/Email/Push/Bot), per-type-per-channel toggles, channel setup.

TASK-28: Keyboard shortcuts docs — real keymap
     files: src/content/docs/customization/keyboard-shortcuts.md
     depends: TASK-1
     risk: low — document the actual KeyManager bindings (Ctrl+S, Ctrl+F, Enter/Escape,
     F1/?, g-* navigation, etc.) from the app rather than a short guess list.

TASK-29: Languages docs — enumerate the 4 languages
     files: src/content/docs/customization/languages.md
     depends: TASK-1
     risk: low — list en/de/fr/es, detection priority, contribution path.

### Phase 6 — Account

TASK-30: Account section full docs
     files: src/content/docs/account/profile.md, friends.md, ai-assistants.md,
     dev-requests.md, pwa.md
     depends: TASK-1
     risk: medium — profile image/password/settings tabs, friend requests, custom AI
     assistants + OpenAI key, dev-request voting/comments/statuses, PWA install.

### Phase 7 — Self-Hosting

TASK-31: Self-hosting section full docs
     files: src/content/docs/self-hosting/overview.md, installation.md, configuration.md,
     secrets.md, upgrading.md, troubleshooting.md
     depends: TASK-1
     risk: high — verify env vars, docker secrets, and service topology against the
     selfhosted/localdocker repos; do not invent variables. Remove/replace the old
     getting-started/self-hosting.md.

### Phase 8 — API Reference

TASK-32: Verify and complete the API reference pages
     files: src/content/docs/api-reference/**.md (17 pages)
     depends: TASK-1
     risk: high — check every page against routes/api.php + OpenApiSpec; fix inaccurate
     endpoint lists, add auth/base-URL/rate-limit notes; reconcile with the exported
     feature list.

### Phase 9 — Final QA

TASK-33: Update landing page, privacy page, and site config
     files: src/content/docs/index.mdx, privacy.md, astro.config.mjs
     depends: TASK-2..TASK-32
     risk: low — refresh splash cards to match final page set, expand privacy with real
     external-service contacts (Open-Meteo, Nominatim, Deezer/Discogs/etc), keep sidebar
     in sync with content files.

TASK-34: Final QA — build, links, consistency
     files: src/content/docs/** (all), astro.config.mjs, STATUS.md
     depends: all prior tasks
     risk: medium — run `npm run build`, check internal links resolve, fix cross-page
     inconsistencies (e.g. library pages lacking export sections, claims that contradict
     the app), update STATUS.md and archive the stale quick-start duplication.

## Notes

- Docs must match the documented feature set: verify every claim against the app
  (/home/leo/code/solyto/app) and API (/home/leo/code/solyto/api) code — do not invent
  endpoints, commands, or features.
- Keep the Starlight sidebar (astro.config.mjs) and content files in sync when adding or
  renaming pages.
- Do not edit generated output (dist/, .astro/, node_modules/).
- If the owner cannot confirm whether "Topics" ships, TASK-14 should default to removing
  the page rather than documenting an unreleased feature.
