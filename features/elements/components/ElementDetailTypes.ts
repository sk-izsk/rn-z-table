import type { Element } from '@/data/elements/elements'
import type { ElementIsotope, ElementProfile } from '@/types/elementProfile'

export type ElementDetailContentProps = {
  activeCard: number
  animationSpeed: number
  animationsPaused: boolean
  detailView: 'model' | 'details'
  element: Element
  hasNext: boolean
  hasPrev: boolean
  massUnit: string
  onCardChange: (index: number) => void
  onNavigateNext: () => void
  onNavigatePrev: () => void
  onNextCard: () => void
  onPrevCard: () => void
  onResetView: () => void
  onSelectIsotope: (isotope: ElementIsotope) => void
  onSetDetailView: (value: 'model' | 'details') => void
  onTogglePaused: () => void
  onToggleTopView: () => void
  profile: ElementProfile
  selectedIsotope: ElementIsotope | null
  topView: boolean
}
