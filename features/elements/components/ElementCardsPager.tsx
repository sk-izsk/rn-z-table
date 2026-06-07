import { ScrollView } from 'react-native'
import { ElementCardsPagerProps } from './ElementPagerTypes'
import { ElementPagerDeck } from './ElementPagerDeck'

export const ElementCardsPager = ({
  activeCard,
  cardWidth,
  hintStrength,
  massUnit,
  onCardChange,
  onContentSizeChange,
  onLayout,
  onScroll,
  onSelectIsotope,
  pagerRef,
  profile,
  scrollRef,
  selectedIsotope,
  showHint,
  t,
}: ElementCardsPagerProps) => (
  <ScrollView
    ref={pagerRef}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    onMomentumScrollEnd={(event) => {
      const nextIndex = Math.round(event.nativeEvent.contentOffset.x / cardWidth)
      onCardChange(nextIndex)
    }}
    contentContainerStyle={{ paddingBottom: 2 }}
  >
    <ElementPagerDeck
      activeCard={activeCard}
      cardWidth={cardWidth}
      hintStrength={hintStrength}
      massUnit={massUnit}
      onContentSizeChange={onContentSizeChange}
      onLayout={onLayout}
      onScroll={onScroll}
      onSelectIsotope={onSelectIsotope}
      profile={profile}
      scrollRef={scrollRef}
      showHint={showHint}
      selectedIsotope={selectedIsotope}
      t={t}
    />
  </ScrollView>
)
