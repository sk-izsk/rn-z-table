import { AtomPanelShell } from '@/components/atoms/AtomPanelShell'
import type { Element } from '@/data/elements/elements'
import type { ElementIsotope } from '@/types/elementProfile'

export const ElementModelPanel = ({
  animationSpeed,
  animationsPaused,
  element,
  onResetView,
  onTogglePaused,
  onToggleTopView,
  selectedIsotope,
  topView,
}: {
  animationSpeed: number
  animationsPaused: boolean
  element: Element
  onResetView: () => void
  onTogglePaused: () => void
  onToggleTopView: () => void
  selectedIsotope: ElementIsotope | null
  topView: boolean
}) => (
  <AtomPanelShell
    element={element}
    isotope={selectedIsotope}
    paused={animationsPaused}
    speed={animationSpeed}
    topView={topView}
    onTogglePaused={onTogglePaused}
    onToggleTopView={onToggleTopView}
    onResetView={onResetView}
  />
)
