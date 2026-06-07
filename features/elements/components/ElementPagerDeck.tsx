import { ElementPagerDeckProps } from './ElementPagerTypes'
import { ElementHistoryCard } from './ElementHistoryCard'
import { ElementIsotopeCard, ElementOverviewCard, ElementPhysicalCard } from './ElementStaticCards'

export const ElementPagerDeck = ({
  activeCard,
  cardWidth,
  hintStrength,
  massUnit,
  onContentSizeChange,
  onLayout,
  onScroll,
  onSelectIsotope,
  profile,
  scrollRef,
  selectedIsotope,
  showHint,
  t,
}: ElementPagerDeckProps) => (
  <>
    <ElementOverviewCard cardWidth={cardWidth} profile={profile} t={t} />
    <ElementIsotopeCard
      cardWidth={cardWidth}
      massUnit={massUnit}
      onSelectIsotope={(index) => onSelectIsotope(profile.level2.isotopes[index])}
      profile={profile}
      selectedIsotopeName={selectedIsotope?.name}
      t={t}
    />
    <ElementPhysicalCard cardWidth={cardWidth} profile={profile} t={t} />
    <ElementHistoryCard
      activeCard={activeCard}
      cardWidth={cardWidth}
      hintStrength={hintStrength}
      onContentSizeChange={onContentSizeChange}
      onLayout={onLayout}
      onScroll={onScroll}
      profile={profile}
      scrollRef={scrollRef}
      showHint={showHint}
      t={t}
    />
  </>
)
