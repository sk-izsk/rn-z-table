import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import type { ElementIsotope, ElementProfile } from '@/types/elementProfile'

export type ElementCardsPagerProps = {
  activeCard: number
  cardWidth: number
  hintStrength: number
  massUnit: string
  onCardChange: (index: number) => void
  onContentSizeChange: (width: number, height: number) => void
  onLayout: (event: LayoutChangeEvent) => void
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onSelectIsotope: (isotope: ElementIsotope) => void
  pagerRef: React.RefObject<any>
  profile: ElementProfile
  scrollRef: React.RefObject<any>
  selectedIsotope: ElementIsotope | null
  showHint: boolean
  t: (key: string) => string
}

export type ElementPagerDeckProps = Omit<ElementCardsPagerProps, 'onCardChange' | 'pagerRef'>
