import { useEffect } from 'react'
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export const useOrbitAnimation = ({
  paused,
  shellIndex,
  speed,
}: {
  paused: boolean
  shellIndex: number
  speed: number
}) => {
  const progress = useSharedValue(0)

  useEffect(() => {
    if (paused) {
      return
    }

    const duration = Math.max(2400, 11000 / Math.max(speed, 0.1) + shellIndex * 600)
    progress.value = 0
    progress.value = withRepeat(
      withTiming(1, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      false,
    )
  }, [paused, progress, shellIndex, speed])

  return useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${progress.value * 360 * (shellIndex % 2 === 0 ? 1 : -1)}deg`,
      },
    ],
  }))
}
