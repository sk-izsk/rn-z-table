import { AtomPanelShell } from '@/components/atoms/AtomPanelShell'
import { ElementHero } from '@/components/modal/ElementHero'
import { ElementDetailCards } from '@/components/modal/ElementDetailCards'
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
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useMassUnit } from '@/hooks/store/useSettingsStore'
import { useAppTranslation } from '@/i18n/localize'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View, useWindowDimensions } from 'react-native'

type DetailView = 'model' | 'details'

export default function ElementDetailRoute() {
  const { symbol } = useLocalSearchParams<{ symbol: string }>()
  const router = useRouter()
  const { t } = useAppTranslation()
  const { height } = useWindowDimensions()
  const { colors } = useAppPalette()
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
      <Screen scrollable={false}>
        <Panel>
          <Text className="text-[16px] text-slate-600">Element not found.</Text>
        </Panel>
      </Screen>
    )
  }

  return (
    <Screen scrollable={false}>
      <View
        style={{
          borderColor: colors.line,
          backgroundColor: colors.surface,
        }}
        className="flex-1 rounded-[34px] border p-3 shadow-panel"
      >
        <ElementHero
          profile={profile}
          activeIsotope={selectedIsotope}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onPrev={navigatePrev}
          onNext={navigateNext}
          onClose={() => {
            if (router.canGoBack()) {
              router.back()
              return
            }

            router.replace('/')
          }}
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
          <View style={{ minHeight: Math.max(360, height - 360) }}>
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
          </View>
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
