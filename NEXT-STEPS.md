# Next Steps — solyto Documentation

Status as of 2026-08-14 after the "Full documentation for all of solyto" job
(`worst_full_documentation-for-all-of-solyto`) was completed, reviewed (APPROVED), and merged
to `main`.

## Done

- All 34 documentation tasks implemented, verified against `solyto/app`, `solyto/api`,
  and `solyto/selfhosted` source.
- `npm run build` passes (64 pages); internal links resolve; sidebar ↔ content in sync.
- `verdict.md` written (APPROVED, no security findings).
- Job branch `feature/worst_full_documentation-for-all-of-solyto` merged into `main`.
- `main` pushed to `origin` and in sync; job branch deleted and its worktree removed.
- Main-repo working tree committed; `docs.backup/` deleted; `.manigot/`, root `AGENTS.md`,
  and the stray `docs/` helper project gitignored.

## Immediate next steps (ordered)

1. **Verify `solyto` org workflow** — decide whether merged docs changes should go through
   the normal reviewer/quality gate via `mg` on future jobs, or be pushed directly.
2. **Documentation follow-ups from the job**:
   - Done — favicon/logo: solyto logo used as `public/favicon.png` (already wired in
     `astro.config.mjs`).
   - Done — video placeholders: `src/components/VideoPlaceholder.astro` + sections on
     `getting-started/how.mdx`, `getting-started/first-steps.mdx`,
     `self-hosting/installation.mdx` (converted to `.mdx` to import the component).
   - Done — i18n infrastructure: English at root, `de`/`fr`/`es` locales scaffolded in
     `astro.config.mjs`, `src/content/docs/{de,fr,es}/` dirs, language switcher enabled,
     and untranslated pages fall back to English with a notice. Content translation is
     still pending — per-language checklists live in `translations/`.
   - Pending — translate the docs content into `de`/`fr`/`es` using a competent
     translation model, filling in the `translations/{de,fr,es}.md` checklists.
   - Pending — configure deployment (no hosting provider configured yet).
   - Pending — re-add a `Topics`/guitar-theory page if/when the app wires that feature
     to a route (currently dormant code only).

## Ongoing maintenance notes

- Docs must stay in sync with the app: any new feature or changed setting in
  `solyto/app` / `solyto/api` should be reflected in `src/content/docs/`.
- Keep `astro.config.mjs` sidebar entries and `src/content/docs/` files in sync when
  adding/renaming pages.
- `STATUS.md` at the repo root tracks content progress — update it as pages change.
- The app integration points that change most often: notification settings (9 types × 4
  channels), export formats, import services, and self-hosting env vars/secrets.
