# Contributing

## This SDK is generated

All SDK source in this repo is generated from the VerseDB public OpenAPI spec
(`https://versedb.com/api/v1/openapi.json`) by [Speakeasy](https://www.speakeasy.com).
Hand edits to generated files are overwritten on the next generation run.

- **API behavior or field changes** belong in the VerseDB API itself, not here.
- **Bug reports and feature requests** — open an issue in this repo.
- **README, examples, and docs** — PRs welcome; these files are not generated.

## How generation works

- [.speakeasy/workflow.yaml](.speakeasy/workflow.yaml) points at the public spec and
  targets TypeScript with output at the repo root.
- [.speakeasy/gen.yaml](.speakeasy/gen.yaml) holds package config (`@versedbcom/sdk`,
  SDK class name `VerseDB`).
- [sdk_generation.yaml](.github/workflows/sdk_generation.yaml) regenerates the SDK
  (daily at 06:00 UTC and on demand, with `force` to regenerate an unchanged spec). It runs in
  `mode: direct`: when the spec changed it commits the version bump to `main` and publishes to
  npm in the same run.
- [sdk_publish.yaml](.github/workflows/sdk_publish.yaml) publishes the version on `main` to npm
  without regenerating. Run it by hand (`workflow_dispatch`) to retry a failed publish; it also
  fires on a push to `main` that changes `RELEASES.md`.

Local generation: install the [Speakeasy CLI](https://www.speakeasy.com/docs/speakeasy-cli/getting-started),
authenticate, then run `speakeasy run` from the repo root.

## Maintainer setup (one-time)

1. Repo secrets for CI: `SPEAKEASY_API_KEY` and `NPM_TOKEN`, a granular npm access token with
   read and write on `@versedbcom/sdk` (npm org `versedbcom`) that can publish without 2FA.
   Granular write tokens expire (90 days at most). When one lapses, the "Publish Typescript
   SDK" step fails with `E404` on the registry `PUT`. Make a new token, run
   `gh secret set NPM_TOKEN --repo versedbcom/versedb-node`, then run Publish SDK by hand.
   The Speakeasy action (v15) publishes to npm only with a token, not npm trusted publishing.
2. Confirm the spec URL above serves the current OpenAPI 3.1 document.

## Versioning

The package is SemVer'd independently of the API and targets API v1
(`https://versedb.com/api/v1`). Additive API changes ship as minor bumps;
an SDK-only breaking change is a package major.
