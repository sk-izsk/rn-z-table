import { DetailPager } from '@/components/modal/DetailPager'
import { Panel } from '@/components/ui/Panel'
import { ScrollHint } from '@/components/ui/ScrollHint'
import { useScrollHint } from '@/hooks/useScrollHint'
import { useAppTranslation } from '@/i18n/localize'
import type { ElementIsotope, ElementProfile } from '@/types/elementProfile'
import { getMassValue, toSuperscript } from '@/utils/elementModalUtils'
import { useRef } from 'react'
import { Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native'

type ElementDetailCardsProps = {
  profile: ElementProfile
  massUnit: string
  selectedIsotope: ElementIsotope | null
  onSelectIsotope: (isotope: ElementIsotope) => void
  activeCard: number
  onCardChange: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

const CardSection = ({ label, value }: { label: string; value: string }) => (
  <View className="border-b border-[#e6eef3] py-3">
    <Text className="text-[11px] font-bold uppercase tracking-[3px] text-slate-400">{label}</Text>
    <Text className="mt-1 text-[17px] font-semibold text-ink">{value}</Text>
  </View>
)

const IsotopeButton = ({
  isotope,
  symbol,
  selected,
  onPress,
}: {
  isotope: ElementIsotope
  symbol: string
  selected: boolean
  onPress: () => void
}) => (
  <Pressable
    onPress={onPress}
    className={`mb-2 rounded-[18px] border px-4 py-3 ${selected ? 'border-accent bg-[#d9edf5]' : 'border-[#d6e5ed] bg-white'}`}
  >
    <View className="flex-row items-center justify-between">
      <Text className="text-[18px] font-black text-ink">
        {toSuperscript(isotope.massNumber)}
        {symbol}
      </Text>
      <Text className="text-[12px] font-semibold uppercase tracking-[2px] text-slate-500">
        {isotope.percent}
      </Text>
    </View>
    <Text className="mt-1 text-[13px] text-slate-500">
      {isotope.neutron} {isotope.note ? `· ${isotope.note}` : ''}
    </Text>
  </Pressable>
)

export const ElementDetailCards = ({
  profile,
  massUnit,
  selectedIsotope,
  onSelectIsotope,
  activeCard,
  onCardChange,
  onPrev,
  onNext,
}: ElementDetailCardsProps) => {
  const { t } = useAppTranslation()
  const { width } = useWindowDimensions()
  const cardWidth = Math.max(280, width - 36)
  const pagerRef = useRef<ScrollView | null>(null)
  const verticalScrollRef = useRef<ScrollView | null>(null)
  const { showHint, hintStrength, onContentSizeChange, onLayout, onScroll } = useScrollHint()

  const goToCard = (index: number) => {
    pagerRef.current?.scrollTo({ x: cardWidth * index, animated: true })
    onCardChange(index)
  }

  return (
    <View>
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
        <View style={{ width: cardWidth }} className="pr-3">
          <Panel className="mb-0 min-h-[420px]">
            <CardSection label={t('modal.type')} value={profile.level1.type} />
            <CardSection label={t('modal.groupPeriod')} value={profile.level1.groupPeriod} />
            <CardSection label={t('modal.phaseAtSTP')} value={profile.level1.phaseAtSTP} />
            <CardSection label={t('modal.electronBlock')} value={profile.level1.electronBlock} />
            <CardSection label={t('modal.commonIons')} value={profile.level1.commonIons} />
          </Panel>
        </View>

        <View style={{ width: cardWidth }} className="pr-3">
          <Panel className="mb-0 min-h-[420px]">
            <CardSection label={t('modal.avgAtomicMass')} value={getMassValue(profile, massUnit)} />
            <CardSection label={t('modal.protons')} value={String(profile.level2.protons)} />
            <CardSection
              label={t('modal.electrons')}
              value={String(profile.level2.electronsNeutral)}
            />
            <View className="pt-3">
              <Text className="text-[11px] font-bold uppercase tracking-[3px] text-slate-400">
                {t('modal.isotopes')}
              </Text>
              <View className="mt-3">
                {profile.level2.isotopes.map((isotope) => (
                  <IsotopeButton
                    key={isotope.name}
                    isotope={isotope}
                    symbol={profile.symbol}
                    selected={selectedIsotope?.name === isotope.name}
                    onPress={() => onSelectIsotope(isotope)}
                  />
                ))}
              </View>
            </View>
          </Panel>
        </View>

        <View style={{ width: cardWidth }} className="pr-3">
          <Panel className="mb-0 min-h-[420px]">
            <CardSection
              label={t('modal.configuration')}
              value={profile.level3.electronic.configuration}
            />
            <CardSection
              label={t('modal.oxidationStates')}
              value={
                profile.level3.electronic.oxidationStates.common.join(', ') ||
                t('modal.notAvailable')
              }
            />
            <CardSection label={t('modal.density')} value={profile.level3.physical.density} />
            <CardSection
              label={t('modal.meltingPoint')}
              value={profile.level3.physical.meltingPoint}
            />
            <CardSection
              label={t('modal.boilingPoint')}
              value={profile.level3.physical.boilingPoint}
            />
          </Panel>
        </View>

        <View style={{ width: cardWidth }}>
          <View className="relative">
            <Panel className="mb-0 min-h-[420px]">
              <ScrollView
                ref={verticalScrollRef}
                showsVerticalScrollIndicator={false}
                onLayout={onLayout}
                onContentSizeChange={onContentSizeChange}
                onScroll={onScroll}
                scrollEventThrottle={16}
              >
                <CardSection
                  label={t('modal.discoveryYear')}
                  value={profile.level4.history.discoveryYear}
                />
                <CardSection
                  label={t('modal.discoveredBy')}
                  value={profile.level4.history.discoveredBy}
                />
                <CardSection label={t('modal.namedBy')} value={profile.level4.history.namedBy} />
                <CardSection label={t('modal.uses')} value={profile.level4.uses.join(' · ')} />
                <CardSection
                  label={t('modal.hazards')}
                  value={profile.level4.hazards.join(' · ')}
                />
                <CardSection
                  label={t('modal.stse')}
                  value={profile.level4.stseContext.join(' · ')}
                />
              </ScrollView>
            </Panel>
            <ScrollHint
              visible={showHint && activeCard === 3}
              strength={hintStrength}
              onPress={() => verticalScrollRef.current?.scrollTo({ y: 220, animated: true })}
            />
          </View>
        </View>
      </ScrollView>

      <DetailPager activeCard={activeCard} onPrev={onPrev} onNext={onNext} onSelect={goToCard} />
    </View>
  )
}
