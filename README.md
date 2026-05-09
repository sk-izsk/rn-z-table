# ZTable Native

Expo React Native rebuild of the original ZTable chemistry web app, using the existing root-level Expo layout and keeping domain logic outside the router layer.

## Stack

- Expo Router
- React Native + NativeWind
- Zustand with AsyncStorage persistence
- i18next + react-i18next
- Reanimated + Gesture Handler
- Bun for package management and scripts
- OXC (`oxlint`, `oxfmt`) for lint and formatting

## Root structure

- `app/`: route layer only
- `components/`: reusable UI and feature components
- `data/`: chemistry datasets and worksheet seed data
- `hooks/`: focused hooks, including store selectors and modal/tool hooks
- `stores/`: Zustand stores for persisted and transient state
- `utils/`: pure chemistry and profile logic
- `i18n/`: translation resources and bootstrap flow
- `lib/`: storage and deferred-worker fallback helpers
- `test/`: Bun-based core logic tests

## Implemented product areas

- searchable periodic table
- element detail route with card paging and scroll hint
- atom renderer abstraction with SVG/Reanimated implementation
- ions reference
- chemistry tools
  - molar mass
  - equation balancer
  - solubility lookup
- worksheet generator with native share export
- persisted settings
  - language
  - theme
  - mass unit
  - animation preferences

## Architecture notes

### Router boundary

`app/` owns only route composition. Reusable screens and view logic live in `components/`, `hooks/`, and `utils/`.

### State model

Settings are split into focused stores:

- `languageStore`
- `themeStore`
- `massUnitStore`
- `animationStore`
- `searchStore`
- `filterStore`
- `elementSelectionStore`

Selector hooks in `hooks/store/` keep rerender scope tight.

### Chemistry logic reuse

Web-transferable chemistry logic was preserved in `utils/` where possible:

- `chemistry.ts`
- `molarMass.ts`
- `balancer.ts`
- `elementProfile.ts`

The balancer is wrapped by `useEquationBalancer()` so the UI can move off-thread later without route rewrites.

### Atom rendering

Atom math is kept separate from rendering:

- `utils/atomModel.ts`: shell parsing, neutron count, render model
- `components/atoms/AtomRenderer.tsx`: abstraction entry
- `components/atoms/AtomSvgRenderer.tsx`: first native implementation

### Localization

The app uses `i18next` and `react-i18next`, not the previous web i18n package. Language is bootstrapped before the app shell renders and persisted with Zustand + AsyncStorage.

## Commands

```bash
bun install
bun run start
bun run typecheck
bun run lint:check
bun run fmt:check
bun run test
```

## Testing

Core logic tests use Bun's built-in runner:

- `test/chemistry.test.js`
- `test/molarMass.test.js`
- `test/balancer.test.js`
- `test/elementProfile.test.js`

These cover the highest-value transferable domain logic without introducing a full RN component test runner yet.

## Current limits

- dark mode is applied at the app shell and major reusable surface level, but some feature-specific components still use light-biased hardcoded colors
- worksheet export currently uses native share text output, not PDF generation
- runtime/device verification is still needed on iOS/Android/web
- OXC warnings remain in several long files and some legacy helper files

## Migration decisions

- web modal detail flow -> native route modal presentation
- web worker balancer -> deferred service hook boundary
- browser export flow -> native share flow
- CSS and vanilla-extract -> NativeWind + theme palette hook
