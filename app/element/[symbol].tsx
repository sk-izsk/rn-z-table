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
import { Platform, Text, View, useWindowDimensions } from 'react-native'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

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
  const isAndroid = Platform.OS === 'android'
  const overlayOpacity = useSharedValue(isAndroid ? 0 : 1)
  const panelOpacity = useSharedValue(isAndroid ? 0 : 1)
  const panelTranslateY = useSharedValue(isAndroid ? 28 : 0)
  const panelScale = useSharedValue(isAndroid ? 0.96 : 1)

  useEffect(() => {
    if (profile?.level2.isotopes.length && !selectedIsotope) {
      setSelectedIsotope(profile.level2.isotopes[0])
    }
  }, [profile, selectedIsotope, setSelectedIsotope])

  useEffect(() => {
    if (!isAndroid) {
      return
    }

    overlayOpacity.value = withTiming(1, { duration: 220, easing: Easing.out(Easing.cubic) })
    panelOpacity.value = withTiming(1, { duration: 220, easing: Easing.out(Easing.cubic) })
    panelTranslateY.value = withTiming(0, { duration: 280, easing: Easing.out(Easing.cubic) })
    panelScale.value = withTiming(1, { duration: 280, easing: Easing.out(Easing.cubic) })
  }, [isAndroid, overlayOpacity, panelOpacity, panelScale, panelTranslateY])

  const finishClose = () => {
    if (router.canGoBack()) {
      router.back()
      return
    }

    router.replace('/')
  }

  const closeRoute = () => {
    if (!isAndroid) {
      finishClose()
      return
    }

    overlayOpacity.value = withTiming(0, { duration: 180, easing: Easing.in(Easing.cubic) })
    panelOpacity.value = withTiming(0, { duration: 160, easing: Easing.in(Easing.cubic) })
    panelTranslateY.value = withTiming(22, { duration: 200, easing: Easing.in(Easing.cubic) })
    panelScale.value = withTiming(0.97, { duration: 200, easing: Easing.in(Easing.cubic) }, () => {
      runOnJS(finishClose)()
    })
  }

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }))

  const panelStyle = useAnimatedStyle(() => ({
    opacity: panelOpacity.value,
    transform: [{ translateY: panelTranslateY.value }, { scale: panelScale.value }],
  }))

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
      <Animated.View
        pointerEvents="none"
        style={[
          overlayStyle,
          {
            position: 'absolute',
            inset: 0,
            backgroundColor: isAndroid ? 'rgba(9, 18, 26, 0.28)' : 'transparent',
          },
        ]}
      />
      <Animated.View style={[{ flex: 1 }, panelStyle]}>
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
            onClose={closeRoute}
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
            <View style={{ minHeight: Math.max(320, height - 420), paddingBottom: 8 }}>
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
      </Animated.View>
    </Screen>
  )
}
