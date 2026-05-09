import { Ionicons } from '@expo/vector-icons'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { Pressable, View } from 'react-native'

type ScrollHintProps = {
  visible: boolean
  strength?: number
  onPress?: () => void
}

export const ScrollHint = ({ visible, strength = 1, onPress }: ScrollHintProps) => {
  const { colors } = useAppPalette()
  const progress = useSharedValue(visible ? 1 : 0)
  const bob = useSharedValue(0)

  useEffect(() => {
    progress.value = withTiming(visible ? 1 : 0, { duration: 220 })
  }, [progress, visible])

  useEffect(() => {
    if (!visible) {
      bob.value = 0
      return
    }

    bob.value = withRepeat(withTiming(1, { duration: 680 }), -1, true)
  }, [bob, visible])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value * strength,
    transform: [
      {
        translateY:
          interpolate(progress.value, [0, 1], [10, 0]) + interpolate(bob.value, [0, 1], [0, 6]),
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
        style={{
          borderColor: colors.line,
          backgroundColor: `${colors.surface}F2`,
        }}
        className="h-10 w-10 items-center justify-center rounded-full border shadow-panel"
      >
        <View
          style={{ backgroundColor: colors.surfaceMuted }}
          className="h-6 w-6 items-center justify-center rounded-full"
        >
          <Ionicons name="chevron-down" size={14} color={colors.textMuted} />
        </View>
      </Pressable>
    </Animated.View>
  )
}
