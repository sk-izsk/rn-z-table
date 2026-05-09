import { Ionicons } from '@expo/vector-icons'
import { useAppTranslation } from '@/i18n/localize'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'

type ScrollHintProps = {
  visible: boolean
  strength?: number
  onPress?: () => void
}

export const ScrollHint = ({ visible, strength = 1, onPress }: ScrollHintProps) => {
  const { t } = useAppTranslation()
  const progress = useSharedValue(visible ? 1 : 0)

  useEffect(() => {
    progress.value = withTiming(visible ? 1 : 0, { duration: 220 })
  }, [progress, visible])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value * strength,
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [10, 0]),
      },
    ],
  }))

  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={animatedStyle}
      className="absolute bottom-3 left-0 right-0 items-center"
    >
      <Pressable
        onPress={onPress}
        className="flex-row items-center gap-2 rounded-full border border-[#d6e5ed] bg-white/95 px-4 py-2 shadow-panel"
      >
        <Text className="text-[12px] font-semibold text-slate-500">{t('modal.moreBelow')}</Text>
        <View className="h-5 w-5 items-center justify-center rounded-full bg-[#eef4f8]">
          <Ionicons name="chevron-down" size={14} color="#5b6d80" />
        </View>
      </Pressable>
    </Animated.View>
  )
}
