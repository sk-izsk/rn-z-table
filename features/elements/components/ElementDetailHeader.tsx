import { ElementHero } from '@/components/modal/ElementHero'
import { ElementDetailToggle } from './ElementDetailToggle'
import { ElementDetailContentProps } from './ElementDetailTypes'

export const ElementDetailHeader = ({
  detailView,
  hasNext,
  hasPrev,
  onNavigateNext,
  onNavigatePrev,
  onSetDetailView,
  profile,
  selectedIsotope,
}: Pick<
  ElementDetailContentProps,
  | 'detailView'
  | 'hasNext'
  | 'hasPrev'
  | 'onNavigateNext'
  | 'onNavigatePrev'
  | 'onSetDetailView'
  | 'profile'
  | 'selectedIsotope'
>) => (
  <>
    <ElementHero
      profile={profile}
      activeIsotope={selectedIsotope}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onNavigatePrev}
      onNext={onNavigateNext}
    />
    <ElementDetailToggle detailView={detailView} onSetDetailView={onSetDetailView} />
  </>
)
