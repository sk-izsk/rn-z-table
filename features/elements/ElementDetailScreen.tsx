import { ElementRouteHeader } from '@/components/modal/ElementRouteHeader'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { Text } from 'react-native'
import { ElementDetailContent } from './components/ElementDetailContent'
import { useElementDetailScreenState } from './hooks/useElementDetailScreenState'

const ElementNotFoundState = () => (
  <Screen>
    <ElementRouteHeader />
    <Panel>
      <Text className="text-[16px] text-slate-600">Element not found.</Text>
    </Panel>
  </Screen>
)

const buildScreenProps = (
  {
    animationSpeed,
    animationsPaused,
    atomPanelState,
    cardState,
    detailView,
    massUnit,
    navigation,
    setAnimationsPaused,
    setDetailView,
  }: ReturnType<typeof useElementDetailScreenState>,
  {
    element,
    profile,
  }: {
    element: NonNullable<ReturnType<typeof useElementDetailScreenState>['element']>
    profile: NonNullable<ReturnType<typeof useElementDetailScreenState>['profile']>
  },
) => ({
  activeCard: cardState.activeCard,
  animationSpeed,
  animationsPaused,
  detailView,
  element,
  hasNext: navigation.hasNext,
  hasPrev: navigation.hasPrev,
  massUnit,
  onCardChange: cardState.goToCard,
  onNavigateNext: navigation.navigateNext,
  onNavigatePrev: navigation.navigatePrev,
  onNextCard: cardState.goNextCard,
  onPrevCard: cardState.goPrevCard,
  onResetView: () => {
    atomPanelState.reset()
    setAnimationsPaused(false)
  },
  onSelectIsotope: cardState.setSelectedIsotope,
  onSetDetailView: setDetailView,
  onTogglePaused: () => setAnimationsPaused(!animationsPaused),
  onToggleTopView: atomPanelState.toggleTopView,
  profile,
  selectedIsotope: cardState.selectedIsotope,
  topView: atomPanelState.topView,
})

export const ElementDetailScreen = () => {
  const screenState = useElementDetailScreenState()
  const { element, profile } = screenState

  if (!element || !profile) {
    return <ElementNotFoundState />
  }

  return (
    <Screen>
      <ElementRouteHeader />
      <ElementDetailContent {...buildScreenProps(screenState, { element, profile })} />
    </Screen>
  )
}
