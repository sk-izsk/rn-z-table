import type { ElementIsotope, ElementProfile } from '@/types/elementProfile'

export type ElementDetailViewProps = {
  activeCard: number
  massUnit: string
  onCardChange: (index: number) => void
  onNext: () => void
  onPrev: () => void
  onSelectIsotope: (isotope: ElementIsotope) => void
  profile: ElementProfile
  selectedIsotope: ElementIsotope | null
}
