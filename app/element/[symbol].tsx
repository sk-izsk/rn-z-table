import { AtomPanelShell } from '@/components/atoms/AtomPanelShell'
import { ElementHero } from '@/components/modal/ElementHero'
import { AppHeader } from '@/components/nav/AppHeader'
import { ElementDetailCards } from '@/components/modal/ElementDetailCards'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { useAtomPanelState } from '@/hooks/elementModal/useAtomPanelState'
import { useCardState } from '@/hooks/elementModal/useCardState'
import { useElementNavigation } from '@/hooks/elementModal/useElementNavigation'
import { useElementProfile } from '@/hooks/elementModal/useElementProfile'
import { useMassUnit } from '@/hooks/store/useSettingsStore'
import { useAppTranslation } from '@/i18n/localize'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'

type DetailView = 'model' | 'details'

export default function ElementDetailRoute() {
  const { symbol } = useLocalSearchParams<{ symbol: string }>()
  const { t } = useAppTranslation()
  const massUnit = useMassUnit()
  const { element, profile } = useElementProfile(symbol)
  const [detailView, setDetailView] = useState<DetailView>('model')
  const { activeCard, selectedIsotope, setSelectedIsotope, goNextCard, goPrevCard, goToCard } =
    useCardState(element?.n)
  const { hasPrev, hasNext, navigatePrev, navigateNext } = useElementNavigation(element?.n)
  const { paused, topView, togglePaused, toggleTopView, reset } = useAtomPanelState()

  useEffect(() => {
    if (profile?.level2.isotopes.length && !selectedIsotope) {
      setSelectedIsotope(profile.level2.isotopes[0])
    }
  }, [profile, selectedIsotope, setSelectedIsotope])

  if (!element || !profile) {
    return (
      <Screen>
        <AppHeader />
        <Panel>
          <Text className="text-[16px] text-slate-600">Element not found.</Text>
        </Panel>
      </Screen>
    )
  }

  return (
    <Screen>
      <AppHeader />
      <ElementHero
        profile={profile}
        activeIsotope={selectedIsotope}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPrev={navigatePrev}
        onNext={navigateNext}
      />
      <Panel className="mt-4 py-3">
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
          paused={paused}
          topView={topView}
          onTogglePaused={togglePaused}
          onToggleTopView={toggleTopView}
          onResetView={reset}
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
    </Screen>
  )
}
