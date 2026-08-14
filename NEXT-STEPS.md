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
- Main-repo working tree committed; `docs.backup/` deleted; `.manigot/`, root `AGENTS.md`,
  and the stray `docs/` helper project gitignored.

## Immediate next steps (ordered)

1. **Push `main` to the remote** — `git push origin main` (currently only local).
2. **Clean up the job branch** — after the merge, delete
   `feature/worst_full_documentation-for-all-of-solyto`:
   `git branch -d feature/worst_full_documentation-for-all-of-solyto`
   (use `-D` only if needed). Optionally prune the job worktree:
   `git worktree remove <path>`.
3. **Verify `solyto` org workflow** — decide whether the merged branch should go through
   the normal reviewer/quality gate via `mg` before pushing, or push directly.
4. **Documentation follow-ups from the job**:
   - Add a favicon/logo (currently the default Astro favicon).
   - Add video placeholder sections for future video instructions.
   - Consider i18n for the docs site itself (the app is translated; the docs are not).
   - Configure deployment (no hosting provider configured yet).
   - Re-add a `Topics`/guitar-theory page if/when the app wires that feature to a route
     (currently dormant code only).

## Ongoing maintenance notes

- Docs must stay in sync with the app: any new feature or changed setting in
  `solyto/app` / `solyto/api` should be reflected in `src/content/docs/`.
- Keep `astro.config.mjs` sidebar entries and `src/content/docs/` files in sync when
  adding/renaming pages.
- `STATUS.md` at the repo root tracks content progress — update it as pages change.
- The app integration points that change most often: notification settings (9 types × 4
  channels), export formats, import services, and self-hosting env vars/secrets.
