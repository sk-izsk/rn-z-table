import { View } from 'react-native'
import { ElementDetailBody } from './ElementDetailBody'
import { ElementDetailHeader } from './ElementDetailHeader'
import { ElementDetailContentProps } from './ElementDetailTypes'

export const ElementDetailContent = (props: ElementDetailContentProps) => (
  <View className="rounded-[34px] border border-[#e0eaef] bg-[#fffcf7] p-3 shadow-panel">
    <ElementDetailHeader
      detailView={props.detailView}
      hasNext={props.hasNext}
      hasPrev={props.hasPrev}
      onNavigateNext={props.onNavigateNext}
      onNavigatePrev={props.onNavigatePrev}
      onSetDetailView={props.onSetDetailView}
      profile={props.profile}
      selectedIsotope={props.selectedIsotope}
    />
    <ElementDetailBody
      activeCard={props.activeCard}
      animationSpeed={props.animationSpeed}
      animationsPaused={props.animationsPaused}
      detailView={props.detailView}
      element={props.element}
      massUnit={props.massUnit}
      onCardChange={props.onCardChange}
      onNextCard={props.onNextCard}
      onPrevCard={props.onPrevCard}
      onResetView={props.onResetView}
      onSelectIsotope={props.onSelectIsotope}
      onTogglePaused={props.onTogglePaused}
      onToggleTopView={props.onToggleTopView}
      profile={props.profile}
      selectedIsotope={props.selectedIsotope}
      topView={props.topView}
    />
  </View>
)
