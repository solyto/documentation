# Implementation: Full documentation for all of solyto

id: worst
status: open
developer: developer
date: 2026-08-14

## Summary

Wrote full, accurate documentation for every solyto feature. Every claim in the docs was
verified against the actual app (`solyto/app`) and API (`solyto/api`) source, and against the
selfhosted deployment repo. The build passes (64 pages) and all internal links resolve.

## Changes

TASK-1: Synced the job worktree with the current docs state (64 pages) that existed only as
uncommitted work in the main documentation repo working tree.

TASK-2: Fixed Getting Started inaccuracies — corrected settings paths (Settings → Localization,
Settings → App), Telegram connection flow, and the local Docker setup steps.

TASK-3: Fixed dashboard overview — weather city configured from the widget, accurate Quick Glance
widgets (check-in scores, weekly time totals, shortcuts).

TASK-4: Rewrote Quick Add — todo-signal detection priority, Chefkoch → recipes, `/`/`#` → 50%
todo rule, all 12 destinations, confidence threshold.

TASK-5: Fixed todos — removed fabricated `!1/!2/!3` priority syntax (real syntax is
`#tag /category due: repeat: link:`), corrected smart-score effort bonus (low=+50), added
auto-generated todos behavior.

TASK-6: Fixed calendar — sharing is by friend (not invite link), occurrence edit options are
"This occurrence" / "All occurrences", added event attachments and DAV server URL.

TASK-7: Fixed contacts — typed multi phone/email fields, accurate detail view, real import flow.

TASK-8: Fixed notes — H1-H3 (not H1-H6), Ctrl+S save, import page, overview sections.

TASK-9: Fixed feeds — removed fabricated categories, added save-to-library, accurate browse/friends.

TASK-10: Fixed check-in — scored trackers, sports swap flow, history grid, natural-language summaries.

TASK-11: Fixed time-tracking — timer persistence, fixed Pomodoro 25/5/15, real statistics.

TASK-12: Fixed finances — overview charts, budget structure, wealth value history.

TASK-13: Fixed clipboard — 24h auto-cleanup, copy buttons, removed unverified claims.

TASK-14: Removed the dormant "Topics" page (guitar theory code exists but is not wired to any
route) and its sidebar/links.

TASK-15: Fixed library overview — real common features (search/filters, genres, ratings,
wishlist, views incl. 3D shelf/spine), recommender options.

TASK-16-21: Fixed all 8 library pages — real entry fields (removed nonexistent notes/tags
fields), accurate import/search flows, removed false export claims for movies/plants.

TASK-22: Fixed Telegram bot docs — real commands (/connect /day /todos /help), confidence-based
type picker, fixed alert times (07:00/20:00), correct bot secrets.

TASK-23: Fixed DAV sync — sync modal location, real CalDAV/CardDAV import flow.

TASK-24: Rewrote importing — search online + URL import (not username/CSV/ICS).

TASK-25: Fixed exporting — deduplicated section, correct feature set, non-exportable note
(movies/plants/clipboard).

TASK-26: Fixed themes settings path (Settings → App).

TASK-27: Rewrote notifications — real 9×4 matrix (UI/Email/Push/Bot), email is "coming soon",
removed fabricated prefs (quiet hours, digest content, sound).

TASK-28: Rewrote keyboard shortcuts — real KeyManager bindings, removed fabricated command
palette.

TASK-29: Enumerated the 4 languages, fixed settings path.

TASK-30: Fixed account pages — real settings tabs (8), AI page rewritten (no AI chat feature
exists; AI is library recommendations only), real dev-request statuses, PWA cleanup.

TASK-31: Fixed self-hosting — real required secrets (7, not 9), correct backup commands,
correct config defaults, first-user creation via `so users:create`.

TASK-32: Rewrote all 17 API reference pages to match the actual routes in `routes/api.php` —
removed fabricated endpoints (todo toggle/reorder, ICS/vCard import, etc.) and wrong base
paths (contacts → `/v1/address-books`).

TASK-33: Updated landing tagline (removed "No AI" — AI recommendations exist), expanded privacy
with the full external-service list, fixed profile admin link.

TASK-34: Final QA — `npm run build` passes (64 pages), all internal links resolve, sidebar and
content files are in sync, updated STATUS.md.

## Known issues / follow-ups

- The `features/topics.md` page was removed because the guitar-theory feature is dormant in the
  app (code exists, no route/nav). If/when it ships, the page should be re-added.
- The main documentation repo (`/home/leo/code/solyto/documentation`) still holds uncommitted
  changes (the original 64-page set). Those should be committed to `main` and the job branch
  merged, so the worktree baseline no longer diverges.
- A stale `src/content/docs.backup/` directory exists in the main repo working tree — not part
  of the site, could be deleted.
- Email notifications, quiet hours, and other "coming soon" items are documented as such.
