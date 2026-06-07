import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import { AtomPanelShellList } from './AtomPanelControls'
import { AtomPanelStatus } from './AtomPanelStatus'

const AtomControl = ({
  active,
  icon,
  onPress,
}: {
  active?: boolean
  icon: keyof typeof Ionicons.glyphMap
  onPress: () => void
}) => (
  <Pressable
    onPress={onPress}
    className={`h-12 w-12 items-center justify-center rounded-full border ${
      active ? 'border-accent bg-[#dbeff5]' : 'border-[#d6e5ed] bg-white'
    }`}
  >
    <Ionicons name={icon} size={18} color={active ? '#176d89' : '#627487'} />
  </Pressable>
)

export type AtomPanelFooterProps = {
  controlsHint: string
  motionLabel: string
  motionValue: string
  neutronCount: number
  neutronsLabel: string
  nucleusLabel: string
  onResetView: () => void
  onTogglePaused: () => void
  onToggleTopView: () => void
  paused: boolean
  protonsLabel: string
  protonCount: number
  shells: number[]
  topView: boolean
}

export const AtomPanelControls = ({
  controlsHint,
  onResetView,
  onTogglePaused,
  onToggleTopView,
  paused,
  topView,
}: Pick<
  AtomPanelFooterProps,
  'controlsHint' | 'onResetView' | 'onTogglePaused' | 'onToggleTopView' | 'paused' | 'topView'
>) => (
  <>
    <View className="flex-row items-center justify-between">
      <View className="flex-row gap-3">
        <AtomControl active={paused} icon={paused ? 'play' : 'pause'} onPress={onTogglePaused} />
        <AtomControl active={topView} icon="layers-outline" onPress={onToggleTopView} />
      </View>
      <AtomControl icon="refresh" onPress={onResetView} />
    </View>
    <Text className="mt-4 text-[12px] text-slate-500">{controlsHint}</Text>
  </>
)

export const AtomPanelFooter = ({
  controlsHint,
  motionLabel,
  motionValue,
  neutronCount,
  neutronsLabel,
  nucleusLabel,
  onResetView,
  onTogglePaused,
  onToggleTopView,
  paused,
  protonsLabel,
  protonCount,
  shells,
  topView,
}: AtomPanelFooterProps) => (
  <View className="border-t border-[#e2edf3] px-5 py-4">
    <AtomPanelStatus
      motionLabel={motionLabel}
      motionValue={motionValue}
      neutronCount={neutronCount}
      neutronsLabel={neutronsLabel}
      nucleusLabel={nucleusLabel}
      protonCount={protonCount}
      protonsLabel={protonsLabel}
    />
    <AtomPanelShellList shells={shells} />
    <AtomPanelControls
      controlsHint={controlsHint}
      onResetView={onResetView}
      onTogglePaused={onTogglePaused}
      onToggleTopView={onToggleTopView}
      paused={paused}
      topView={topView}
    />
  </View>
)
