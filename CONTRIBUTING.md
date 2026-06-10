# Contributing

## This SDK is generated

All SDK source in this repo is generated from the VerseDB public OpenAPI spec
(`https://versedb.com/api/docs.openapi`) by [Speakeasy](https://www.speakeasy.com).
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
  (daily + on demand) and opens a version-bump PR when the spec changed.
- [sdk_publish.yaml](.github/workflows/sdk_publish.yaml) publishes to npm when a
  generation PR merges to `main` (triggered by the `RELEASES.md` update).

Local generation: install the [Speakeasy CLI](https://www.speakeasy.com/docs/speakeasy-cli/getting-started),
authenticate, then run `speakeasy run` from the repo root.

## Maintainer setup (one-time)

1. Repo secrets for CI: `SPEAKEASY_API_KEY`, `NPM_TOKEN` (npm org `@versedbcom`).
2. Confirm the spec URL above serves the current OpenAPI 3.1 document.

## Versioning

The package is SemVer'd independently of the API and targets API v1
(`https://versedb.com/api/v1`). Additive API changes ship as minor bumps;
an SDK-only breaking change is a package major.
