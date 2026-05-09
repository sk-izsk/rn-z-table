import { DetailPager } from '@/components/modal/DetailPager'
import { Panel } from '@/components/ui/Panel'
import { ScrollHint } from '@/components/ui/ScrollHint'
import { useScrollHint } from '@/hooks/useScrollHint'
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
      >
        <View style={{ width: cardWidth }} className="pr-3">
          <Panel className="mb-0 min-h-[420px]">
            <CardSection label="Type" value={profile.level1.type} />
            <CardSection label="Group / Period" value={profile.level1.groupPeriod} />
            <CardSection label="Phase @ STP" value={profile.level1.phaseAtSTP} />
            <CardSection label="Electron Block" value={profile.level1.electronBlock} />
            <CardSection label="Common Ions" value={profile.level1.commonIons} />
          </Panel>
        </View>

        <View style={{ width: cardWidth }} className="pr-3">
          <Panel className="mb-0 min-h-[420px]">
            <CardSection label="Avg Atomic Mass" value={getMassValue(profile, massUnit)} />
            <CardSection label="Protons" value={String(profile.level2.protons)} />
            <CardSection label="Electrons" value={String(profile.level2.electronsNeutral)} />
            <View className="pt-3">
              <Text className="text-[11px] font-bold uppercase tracking-[3px] text-slate-400">
                Isotopes
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
            <CardSection label="Configuration" value={profile.level3.electronic.configuration} />
            <CardSection
              label="Oxidation States"
              value={profile.level3.electronic.oxidationStates.common.join(', ') || 'N/A'}
            />
            <CardSection label="Density" value={profile.level3.physical.density} />
            <CardSection label="Melting Point" value={profile.level3.physical.meltingPoint} />
            <CardSection label="Boiling Point" value={profile.level3.physical.boilingPoint} />
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
                <CardSection label="Discovery Year" value={profile.level4.history.discoveryYear} />
                <CardSection label="Discovered By" value={profile.level4.history.discoveredBy} />
                <CardSection label="Named By" value={profile.level4.history.namedBy} />
                <CardSection label="Uses" value={profile.level4.uses.join(' · ')} />
                <CardSection label="Hazards" value={profile.level4.hazards.join(' · ')} />
                <CardSection label="STSE" value={profile.level4.stseContext.join(' · ')} />
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
