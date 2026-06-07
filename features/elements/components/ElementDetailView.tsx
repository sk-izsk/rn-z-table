import { DetailPager } from '@/components/modal/DetailPager'
import { useAppTranslation } from '@/i18n/localize'
import { View } from 'react-native'
import { ElementCardsPager } from './ElementCardsPager'
import { ElementDetailViewProps } from './ElementDetailViewTypes'
import { useElementDetailPager } from './useElementDetailPager'

export const ElementDetailView = ({
  activeCard,
  massUnit,
  onCardChange,
  onNext,
  onPrev,
  onSelectIsotope,
  profile,
  selectedIsotope,
}: ElementDetailViewProps) => {
  const { t } = useAppTranslation()
  const {
    cardWidth,
    hintStrength,
    onContentSizeChange,
    onLayout,
    onScroll,
    pagerRef,
    showHint,
    verticalScrollRef,
  } = useElementDetailPager()

  const goToCard = (index: number) => {
    pagerRef.current?.scrollTo({ x: cardWidth * index, animated: true })
    onCardChange(index)
  }

  return (
    <View>
      <ElementCardsPager
        activeCard={activeCard}
        cardWidth={cardWidth}
        hintStrength={hintStrength}
        massUnit={massUnit}
        onCardChange={onCardChange}
        onContentSizeChange={onContentSizeChange}
        onLayout={onLayout}
        onScroll={onScroll}
        onSelectIsotope={onSelectIsotope}
        pagerRef={pagerRef}
        profile={profile}
        scrollRef={verticalScrollRef}
        selectedIsotope={selectedIsotope}
        showHint={showHint}
        t={t}
      />
      <DetailPager activeCard={activeCard} onPrev={onPrev} onNext={onNext} onSelect={goToCard} />
    </View>
  )
}
