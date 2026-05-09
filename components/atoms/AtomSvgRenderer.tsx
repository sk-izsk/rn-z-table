import type { AtomRendererProps } from '@/components/atoms/AtomRenderer'
import {
  buildAtomRenderModel,
  buildElectronAngles,
  ELECTRON_COLORS,
  SHELL_COLORS,
} from '@/utils/atomModel'
import { useEffect, useMemo } from 'react'
import { Text, View } from 'react-native'
import {
  Easing,
  createAnimatedComponent,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle, Defs, Ellipse, LinearGradient, RadialGradient, Stop } from 'react-native-svg'

const AnimatedView = createAnimatedComponent(View)

const OrbitLayer = ({
  count,
  radius,
  shellIndex,
  paused,
  speed,
  topView,
}: {
  count: number
  radius: number
  shellIndex: number
  paused: boolean
  speed: number
  topView: boolean
}) => {
  const progress = useSharedValue(0)
  const orbitHeight = topView ? radius * 2 : radius * 1.1
  const angles = useMemo(() => buildElectronAngles(count), [count])

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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${progress.value * 360 * (shellIndex % 2 === 0 ? 1 : -1)}deg`,
      },
    ],
  }))

  return (
    <AnimatedView
      style={[
        animatedStyle,
        {
          position: 'absolute',
          width: radius * 2,
          height: orbitHeight,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Svg width={radius * 2} height={orbitHeight}>
        <Ellipse
          cx={radius}
          cy={orbitHeight / 2}
          rx={radius - 3}
          ry={orbitHeight / 2 - 3}
          stroke={SHELL_COLORS[shellIndex % SHELL_COLORS.length]}
          strokeWidth={4}
          fill="none"
          opacity={0.66}
        />
      </Svg>

      {angles.map((angle, index) => {
        const x = Math.cos(angle) * (radius - 6)
        const y = Math.sin(angle) * (orbitHeight / 2 - 6)

        return (
          <View
            key={`${shellIndex}-${index}`}
            style={{
              position: 'absolute',
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: ELECTRON_COLORS[shellIndex % ELECTRON_COLORS.length],
              transform: [{ translateX: x }, { translateY: y }],
            }}
          />
        )
      })}
    </AnimatedView>
  )
}

export const AtomSvgRenderer = ({
  element,
  isotope,
  paused,
  speed,
  topView,
}: AtomRendererProps) => {
  const model = useMemo(
    () => buildAtomRenderModel(element, isotope?.neutronCount),
    [element, isotope?.neutronCount],
  )

  return (
    <View className="h-[360px] w-full items-center justify-center overflow-hidden rounded-[26px] bg-[#edf5fb]">
      <Svg width="100%" height="100%" viewBox="0 0 320 360" style={{ position: 'absolute' }}>
        <Defs>
          <LinearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.72" />
            <Stop offset="100%" stopColor="#d6ecf8" stopOpacity="0.2" />
          </LinearGradient>
          <RadialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#f6938b" stopOpacity="0.9" />
            <Stop offset="100%" stopColor="#efc7d5" stopOpacity="0.32" />
          </RadialGradient>
        </Defs>
        <Circle cx="160" cy="182" r="46" fill="url(#nucleusGlow)" />
        <Circle cx="160" cy="182" r="18" fill="#303846" opacity="0.92" />
        <Ellipse
          cx="160"
          cy="182"
          rx="38"
          ry="12"
          stroke="url(#orbitGlow)"
          strokeWidth="6"
          fill="none"
        />
      </Svg>

      {model.shellRadii
        .slice()
        .reverse()
        .map((radius, reverseIndex) => {
          const shellIndex = model.shellRadii.length - reverseIndex - 1
          return (
            <OrbitLayer
              key={`${shellIndex}-${radius}`}
              count={model.shells[shellIndex]}
              radius={radius}
              shellIndex={shellIndex}
              paused={paused}
              speed={speed}
              topView={topView}
            />
          )
        })}

      <View className="absolute left-4 top-4 rounded-full border border-[#d7e4ed] bg-white/92 px-3 py-1.5">
        <Text className="font-mono text-[13px] text-slate-600">{element.config}</Text>
      </View>
      <View className="absolute right-4 top-4 rounded-full border border-[#d7e4ed] bg-white/92 px-3 py-1.5">
        <Text className="font-mono text-[13px] text-slate-600">
          {isotope?.name ?? `${element.sym}-${Math.round(element.mass)}`}
        </Text>
      </View>
      <View className="absolute bottom-4 left-4 rounded-full border border-[#d7e4ed] bg-white/90 px-3 py-1.5">
        <Text className="text-[12px] font-semibold uppercase tracking-[2px] text-slate-500">
          {model.element.n}p · {model.neutronCount}n
        </Text>
      </View>
    </View>
  )
}
