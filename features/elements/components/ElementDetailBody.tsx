import { ElementDetailContentProps } from './ElementDetailTypes'
import { ElementDetailView } from './ElementDetailView'
import { ElementModelPanel } from './ElementModelPanel'

type ElementDetailBodyProps = Pick<
  ElementDetailContentProps,
  | 'activeCard'
  | 'animationSpeed'
  | 'animationsPaused'
  | 'detailView'
  | 'element'
  | 'massUnit'
  | 'onCardChange'
  | 'onNextCard'
  | 'onPrevCard'
  | 'onResetView'
  | 'onSelectIsotope'
  | 'onTogglePaused'
  | 'onToggleTopView'
  | 'profile'
  | 'selectedIsotope'
  | 'topView'
>

export const ElementDetailBody = ({
  activeCard,
  animationSpeed,
  animationsPaused,
  detailView,
  element,
  massUnit,
  onCardChange,
  onNextCard,
  onPrevCard,
  onResetView,
  onSelectIsotope,
  onTogglePaused,
  onToggleTopView,
  profile,
  selectedIsotope,
  topView,
}: ElementDetailBodyProps) =>
  detailView === 'model' ? (
    <ElementModelPanel
      animationSpeed={animationSpeed}
      animationsPaused={animationsPaused}
      element={element}
      onResetView={onResetView}
      onTogglePaused={onTogglePaused}
      onToggleTopView={onToggleTopView}
      selectedIsotope={selectedIsotope}
      topView={topView}
    />
  ) : (
    <ElementDetailView
      activeCard={activeCard}
      massUnit={massUnit}
      onCardChange={onCardChange}
      onNext={onNextCard}
      onPrev={onPrevCard}
      onSelectIsotope={onSelectIsotope}
      profile={profile}
      selectedIsotope={selectedIsotope}
    />
  )
