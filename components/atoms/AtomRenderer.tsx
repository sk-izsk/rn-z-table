import { AtomSvgRenderer } from '@/components/atoms/AtomSvgRenderer'
import type { Element } from '@/data/elements/elements'
import type { ElementIsotope } from '@/types/elementProfile'

export type AtomRendererProps = {
  element: Element
  isotope: ElementIsotope | null
  paused: boolean
  speed: number
  topView: boolean
  stageHeight?: number
}

export const AtomRenderer = (props: AtomRendererProps) => {
  return <AtomSvgRenderer {...props} />
}
