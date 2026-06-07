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
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'

type DetailView = 'model' | 'details'

export const useElementDetailScreenState = () => {
  const { symbol } = useLocalSearchParams<{ symbol: string }>()
  const massUnit = useMassUnit()
  const animationSpeed = useAnimationSpeed()
  const animationsPaused = useAnimationsPaused()
  const setAnimationsPaused = useSetAnimationsPaused()
  const { element, profile } = useElementProfile(symbol)
  const [detailView, setDetailView] = useState<DetailView>('model')
  const cardState = useCardState(element?.n)
  const navigation = useElementNavigation(element?.n)
  const atomPanelState = useAtomPanelState()

  useEffect(() => {
    if (profile?.level2.isotopes.length && !cardState.selectedIsotope) {
      cardState.setSelectedIsotope(profile.level2.isotopes[0])
    }
  }, [cardState, profile])

  return {
    animationSpeed,
    animationsPaused,
    atomPanelState,
    cardState,
    detailView,
    element,
    massUnit,
    navigation,
    profile,
    setAnimationsPaused,
    setDetailView,
  }
}
