import { DetailPager } from '@/components/modal/DetailPager'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { Panel } from '@/components/ui/Panel'
import { ScrollHint } from '@/components/ui/ScrollHint'
import { useScrollHint } from '@/hooks/useScrollHint'
import { useAppTranslation } from '@/i18n/localize'
import type { ElementIsotope, ElementProfile } from '@/types/elementProfile'
import { getMassValue, toSuperscript } from '@/utils/elementModalUtils'
import { PropsWithChildren, useRef, useState } from 'react'
import {
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'

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

const CardSection = ({ label, value }: { label: string; value: string }) => {
  const { colors } = useAppPalette()

  return (
    <View style={{ borderBottomColor: colors.line }} className="border-b py-3">
      <Text
        style={{ color: colors.textMuted }}
        className="text-[11px] font-bold uppercase tracking-[3px]"
      >
        {label}
      </Text>
      <Text style={{ color: colors.text }} className="mt-1 text-[17px] font-semibold">
        {value}
      </Text>
    </View>
  )
}

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
}) => {
  const { colors, resolvedTheme } = useAppPalette()

  return (
    <Pressable
      onPress={onPress}
      style={{
        borderColor: selected ? colors.accent : colors.line,
        backgroundColor: selected
          ? resolvedTheme === 'dark'
            ? colors.accentSoft
            : '#d9edf5'
          : colors.surface,
      }}
      className="mb-2 rounded-[18px] border px-4 py-3"
    >
      <View className="flex-row items-center justify-between">
        <Text style={{ color: colors.text }} className="text-[18px] font-black">
          {toSuperscript(isotope.massNumber)}
          {symbol}
        </Text>
        <Text
          style={{ color: colors.textMuted }}
          className="text-[12px] font-semibold uppercase tracking-[2px]"
        >
          {isotope.percent}
        </Text>
      </View>
      <Text style={{ color: colors.textMuted }} className="mt-1 text-[13px]">
        {isotope.neutron} {isotope.note ? `· ${isotope.note}` : ''}
      </Text>
    </Pressable>
  )
}

const ScrollableCardPanel = ({
  height,
  active,
  children,
}: PropsWithChildren<{ height: number; active: boolean }>) => {
  const scrollRef = useRef<ScrollView | null>(null)
  const { showHint, hintStrength, onContentSizeChange, onLayout, onScroll } = useScrollHint()

  return (
    <View style={{ height }} className="relative">
      <Panel className="mb-0 h-full overflow-hidden px-0 py-0">
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 18, paddingBottom: 48 }}
          onLayout={onLayout}
          onContentSizeChange={onContentSizeChange}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
      </Panel>
      <ScrollHint
        visible={active && showHint}
        strength={hintStrength}
        onPress={() => scrollRef.current?.scrollTo({ y: height * 0.62, animated: true })}
      />
    </View>
  )
}

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
  const { colors } = useAppPalette()
  const { height } = useWindowDimensions()
  const [viewportWidth, setViewportWidth] = useState(0)
  const pageWidth = viewportWidth || 320
  const cardWidth = Math.max(280, pageWidth - 18)
  const cardHeight = Math.max(360, Math.min(height * 0.5, 500))
  const pagerRef = useRef<ScrollView | null>(null)

  const handleLayout = (event: LayoutChangeEvent) => {
    setViewportWidth(event.nativeEvent.layout.width)
  }

  const goToCard = (index: number) => {
    pagerRef.current?.scrollTo({ x: pageWidth * index, animated: true })
    onCardChange(index)
  }

  return (
    <View onLayout={handleLayout}>
      <ScrollView
        ref={pagerRef}
        horizontal
        snapToInterval={pageWidth}
        decelerationRate="fast"
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const nextIndex = Math.round(event.nativeEvent.contentOffset.x / pageWidth)
          onCardChange(nextIndex)
        }}
        contentContainerStyle={{ paddingBottom: 2 }}
      >
        <View style={{ width: pageWidth, paddingRight: 10 }}>
          <View style={{ width: cardWidth }}>
            <ScrollableCardPanel height={cardHeight} active={activeCard === 0}>
              <CardSection label={t('modal.type')} value={profile.level1.type} />
              <CardSection label={t('modal.groupPeriod')} value={profile.level1.groupPeriod} />
              <CardSection label={t('modal.phaseAtSTP')} value={profile.level1.phaseAtSTP} />
              <CardSection label={t('modal.electronBlock')} value={profile.level1.electronBlock} />
              <CardSection label={t('modal.commonIons')} value={profile.level1.commonIons} />
            </ScrollableCardPanel>
          </View>
        </View>

        <View style={{ width: pageWidth, paddingRight: 10 }}>
          <View style={{ width: cardWidth }}>
            <ScrollableCardPanel height={cardHeight} active={activeCard === 1}>
              <CardSection
                label={t('modal.avgAtomicMass')}
                value={getMassValue(profile, massUnit)}
              />
              <CardSection label={t('modal.protons')} value={String(profile.level2.protons)} />
              <CardSection
                label={t('modal.electrons')}
                value={String(profile.level2.electronsNeutral)}
              />
              <View className="pt-3">
                <Text
                  style={{ color: colors.textMuted }}
                  className="text-[11px] font-bold uppercase tracking-[3px]"
                >
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
            </ScrollableCardPanel>
          </View>
        </View>

        <View style={{ width: pageWidth, paddingRight: 10 }}>
          <View style={{ width: cardWidth }}>
            <ScrollableCardPanel height={cardHeight} active={activeCard === 2}>
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
            </ScrollableCardPanel>
          </View>
        </View>

        <View style={{ width: pageWidth }}>
          <View style={{ width: cardWidth }}>
            <ScrollableCardPanel height={cardHeight} active={activeCard === 3}>
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
              <CardSection label={t('modal.hazards')} value={profile.level4.hazards.join(' · ')} />
              <CardSection label={t('modal.stse')} value={profile.level4.stseContext.join(' · ')} />
            </ScrollableCardPanel>
          </View>
        </View>
      </ScrollView>

      <DetailPager activeCard={activeCard} onPrev={onPrev} onNext={onNext} onSelect={goToCard} />
    </View>
  )
}
