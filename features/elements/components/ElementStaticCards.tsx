import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Panel } from '@/components/ui/Panel'
import type { ElementProfile } from '@/types/elementProfile'
import { getMassValue } from '@/utils/elementModalUtils'
import { ScrollView, Text, View } from 'react-native'
import { ElementCardSection } from './ElementCardSection'
import { ElementIsotopeButton } from './ElementIsotopeButton'

export const ElementOverviewCard = ({
  cardWidth,
  profile,
  t,
}: {
  cardWidth: number
  profile: ElementProfile
  t: (key: string) => string
}) => (
  <View style={{ width: cardWidth }} className="pr-3">
    <Panel className="mb-0 min-h-[420px]">
      <ElementCardSection label={t('modal.type')} value={profile.level1.type} />
      <ElementCardSection label={t('modal.groupPeriod')} value={profile.level1.groupPeriod} />
      <ElementCardSection label={t('modal.phaseAtSTP')} value={profile.level1.phaseAtSTP} />
      <ElementCardSection label={t('modal.electronBlock')} value={profile.level1.electronBlock} />
      <ElementCardSection label={t('modal.commonIons')} value={profile.level1.commonIons} />
    </Panel>
  </View>
)

export const ElementIsotopeCard = ({
  cardWidth,
  massUnit,
  onSelectIsotope,
  profile,
  selectedIsotopeName,
  t,
}: {
  cardWidth: number
  massUnit: string
  onSelectIsotope: (index: number) => void
  profile: ElementProfile
  selectedIsotopeName: string | undefined
  t: (key: string) => string
}) => (
  <View style={{ width: cardWidth }} className="pr-3">
    <Panel className="mb-0 min-h-[420px]">
      <ElementCardSection
        label={t('modal.avgAtomicMass')}
        value={getMassValue(profile, massUnit)}
      />
      <ElementCardSection label={t('modal.protons')} value={String(profile.level2.protons)} />
      <ElementCardSection
        label={t('modal.electrons')}
        value={String(profile.level2.electronsNeutral)}
      />
      <View className="pt-3">
        <Text className="text-[11px] font-bold uppercase tracking-[3px] text-slate-400">
          {t('modal.isotopes')}
        </Text>
        <View className="mt-3">
          {profile.level2.isotopes.map((isotope, index) => (
            <ElementIsotopeButton
              key={isotope.name}
              isotope={isotope}
              symbol={profile.symbol}
              selected={selectedIsotopeName === isotope.name}
              onPress={() => onSelectIsotope(index)}
            />
          ))}
        </View>
      </View>
    </Panel>
  </View>
)

export const ElementPhysicalCard = ({
  cardWidth,
  profile,
  t,
}: {
  cardWidth: number
  profile: ElementProfile
  t: (key: string) => string
}) => (
  <View style={{ width: cardWidth }} className="pr-3">
    <Panel className="mb-0 min-h-[420px]">
      <ElementCardSection
        label={t('modal.configuration')}
        value={profile.level3.electronic.configuration}
      />
      <ElementCardSection
        label={t('modal.oxidationStates')}
        value={
          profile.level3.electronic.oxidationStates.common.join(', ') || t('modal.notAvailable')
        }
      />
      <ElementCardSection label={t('modal.density')} value={profile.level3.physical.density} />
      <ElementCardSection
        label={t('modal.meltingPoint')}
        value={profile.level3.physical.meltingPoint}
      />
      <ElementCardSection
        label={t('modal.boilingPoint')}
        value={profile.level3.physical.boilingPoint}
      />
    </Panel>
  </View>
)

export const ElementHistoryScroll = ({
  onContentSizeChange,
  onLayout,
  onScroll,
  profile,
  scrollRef,
  t,
}: {
  onContentSizeChange: (width: number, height: number) => void
  onLayout: (event: LayoutChangeEvent) => void
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  profile: ElementProfile
  scrollRef: React.RefObject<ScrollView | null>
  t: (key: string) => string
}) => (
  <ScrollView
    ref={scrollRef}
    showsVerticalScrollIndicator={false}
    onLayout={onLayout}
    onContentSizeChange={onContentSizeChange}
    onScroll={onScroll}
    scrollEventThrottle={16}
  >
    <ElementCardSection
      label={t('modal.discoveryYear')}
      value={profile.level4.history.discoveryYear}
    />
    <ElementCardSection
      label={t('modal.discoveredBy')}
      value={profile.level4.history.discoveredBy}
    />
    <ElementCardSection label={t('modal.namedBy')} value={profile.level4.history.namedBy} />
    <ElementCardSection label={t('modal.uses')} value={profile.level4.uses.join(' · ')} />
    <ElementCardSection label={t('modal.hazards')} value={profile.level4.hazards.join(' · ')} />
    <ElementCardSection label={t('modal.stse')} value={profile.level4.stseContext.join(' · ')} />
  </ScrollView>
)
