import { AtomPanelShell } from '@/components/atoms/AtomPanelShell'
import { ElementHero } from '@/components/modal/ElementHero'
import { ElementDetailCards } from '@/components/modal/ElementDetailCards'
import { ElementRouteHeader } from '@/components/modal/ElementRouteHeader'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { useAtomPanelState } from '@/hooks/elementModal/useAtomPanelState'
import { useCardState } from '@/hooks/elementModal/useCardState'
import { useElementNavigation } from '@/hooks/elementModal/useElementNavigation'
import { useElementProfile } from '@/hooks/elementModal/useElementProfile'
import {
  useAnimationsPaused,
  useAnimationSpeed,
  useSetAnimationsPaused,
} from '@/hooks/store/useAnimationStore'
import { useMassUnit } from '@/hooks/store/useSettingsStore'
import { useAppTranslation } from '@/i18n/localize'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

type DetailView = 'model' | 'details'

export default function ElementDetailRoute() {
  const { symbol } = useLocalSearchParams<{ symbol: string }>()
  const { t } = useAppTranslation()
  const massUnit = useMassUnit()
  const animationSpeed = useAnimationSpeed()
  const animationsPaused = useAnimationsPaused()
  const setAnimationsPaused = useSetAnimationsPaused()
  const { element, profile } = useElementProfile(symbol)
  const [detailView, setDetailView] = useState<DetailView>('model')
  const { activeCard, selectedIsotope, setSelectedIsotope, goNextCard, goPrevCard, goToCard } =
    useCardState(element?.n)
  const { hasPrev, hasNext, navigatePrev, navigateNext } = useElementNavigation(element?.n)
  const { topView, toggleTopView, reset } = useAtomPanelState()

  useEffect(() => {
    if (profile?.level2.isotopes.length && !selectedIsotope) {
      setSelectedIsotope(profile.level2.isotopes[0])
    }
  }, [profile, selectedIsotope, setSelectedIsotope])

  if (!element || !profile) {
    return (
      <Screen>
        <ElementRouteHeader />
        <Panel>
          <Text className="text-[16px] text-slate-600">Element not found.</Text>
        </Panel>
      </Screen>
    )
  }

  return (
    <Screen>
      <ElementRouteHeader />
      <View className="rounded-[34px] border border-[#e0eaef] bg-[#fffcf7] p-3 shadow-panel">
        <ElementHero
          profile={profile}
          activeIsotope={selectedIsotope}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onPrev={navigatePrev}
          onNext={navigateNext}
        />
        <Panel className="mt-3 py-3">
          <SegmentedControl
            value={detailView}
            onValueChange={setDetailView}
            options={[
              { value: 'model', label: t('modal.model3d') },
              { value: 'details', label: t('modal.details') },
            ]}
          />
        </Panel>
        {detailView === 'model' ? (
          <AtomPanelShell
            element={element}
            isotope={selectedIsotope}
            paused={animationsPaused}
            speed={animationSpeed}
            topView={topView}
            onTogglePaused={() => setAnimationsPaused(!animationsPaused)}
            onToggleTopView={toggleTopView}
            onResetView={() => {
              reset()
              setAnimationsPaused(false)
            }}
          />
        ) : (
          <ElementDetailCards
            profile={profile}
            massUnit={massUnit}
            selectedIsotope={selectedIsotope}
            onSelectIsotope={setSelectedIsotope}
            activeCard={activeCard}
            onCardChange={goToCard}
            onPrev={goPrevCard}
            onNext={goNextCard}
          />
        )}
      </View>
    </Screen>
  )
}
