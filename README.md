# z-table

`z-table` is an Expo + React Native chemistry reference app with a periodic table, localized element details, atom-shell visualization, ion references, and classroom-oriented chemistry tools.

## Stack

- Expo Router
- React Native
- TypeScript
- Zustand
- NativeWind
- Bun tooling

## Project Structure

The routing layer stays in `app/`, but route files are intentionally thin. Most behavior now lives in feature modules.

```text
app/                     Expo Router entrypoints and route shells
features/
  app/                   bootstrap + shared route stack wiring
  chemistry/             formula parsing, balancing, molar mass
  elements/              element detail screen, atom/hero/detail UI, profile builders
  settings/              settings screen sections + state wiring
  table/                 periodic table filtering, grid, and series views
  tools/                 worksheet, solubility, ion reference feature UI
components/              shared UI primitives and stable compatibility exports
data/                    static chemistry datasets
hooks/                   reusable app hooks and store selectors
i18n/                    translation loaders and locale dictionaries
test/chemistry/          chemistry and worksheet domain tests
```

## Folder Rules

- Keep `app/` route files thin. Screen orchestration belongs in `features/*`.
- Keep `components/ui` and other shared component folders generic and reusable.
- Put chemistry/domain logic in `features/chemistry`, not inside route or screen components.
- Keep old import paths stable only as compatibility re-exports when needed during refactors.
- Split large locale/data dictionaries by stable content ranges instead of growing single files indefinitely.

## Chemistry Modules

### `features/chemistry/formula`

- Unicode subscript normalization
- formula tokenization and grouped parsing
- count aggregation helpers
- small math helpers used by chemistry tools

### `features/chemistry/balancer`

- equation-side parsing
- fraction arithmetic
- matrix / RREF utilities
- null-space solving
- balanced equation formatting

### `features/chemistry/molar-mass`

- cached molar-mass calculation
- result breakdown generation

## Refactor Achievements

- Extracted chemistry logic out of `utils/*` into dedicated feature modules while preserving the existing public APIs.
- Split the periodic table, worksheet builder, solubility tool, atom renderer, settings screen, and element detail flow into smaller components and hooks.
- Refactored element profile construction into focused profile builders, isotope assembly, constants, and formatting helpers.
- Converted `app/settings.tsx` and `app/element/[symbol].tsx` into thin route shells backed by feature screens.
- Split the English element locale dictionary into 7 atomic-number range modules behind the same loader contract.
- Added `bun test` coverage for formula parsing, equation balancing, molar mass, worksheet generation, and solubility mappings.
- Brought `typecheck` and `lint:check` back to green after the reorganization.

## Quality Gates

Run these before shipping changes:

```bash
bun run typecheck
bun run lint:check
bun run fmt:check
bun test
```

## Development

```bash
bun install
bun run start
```

Useful scripts:

- `bun run ios`
- `bun run android`
- `bun run web`
- `bun run typecheck`
- `bun run lint:check`
- `bun run fmt:check`
- `bun test`

## Test Coverage Added In This Refactor

- grouped and malformed chemical formulas
- unicode subscript parsing
- standard and polyatomic equation balancing
- molar mass totals and unknown element handling
- worksheet filtering and export formatting
- solubility lookup and label mapping

Current automated suite: `12` passing tests across `5` chemistry-focused test files.
