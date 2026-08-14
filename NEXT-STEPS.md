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
- Deployment path added: `solyto/deployment` playbook `docs.yml`, templates under
  `templates/docs/`, and group_vars for production/development. Deploy with
  `make deploy-docs`. Site is served by nginx from the Astro static build.

## Immediate next steps (ordered)

1. **Verify `solyto` org workflow** — decide whether merged docs changes should go through
   the normal reviewer/quality gate via `mg` on future jobs, or be pushed directly.
2. **Documentation follow-ups from the job**:
   - Add a favicon/logo (currently the default Astro favicon).
   - Add video placeholder sections for future video instructions.
   - Consider i18n for the docs site itself (the app is translated; the docs are not).
   - Deploy the docs once (`make deploy-docs` in `solyto/deployment`) and point
     `docs.solyto.app` at the nginx listener.
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
