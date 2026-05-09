import type { AtomRendererProps } from '@/components/atoms/AtomRenderer'
import {
  buildAtomRenderModel,
  buildElectronAngles,
  buildNucleusParticles,
  ELECTRON_COLORS,
  SHELL_COLORS,
} from '@/utils/atomModel'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
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
const AnimatedElectron = createAnimatedComponent(View)
const ORBIT_TILTS = [12, -22, 34, -40, 48, -58, 66] as const

const ElectronDot = ({
  angle,
  orbitHeight,
  progress,
  radius,
  shellIndex,
}: {
  angle: number
  orbitHeight: number
  progress: { value: number }
  radius: number
  shellIndex: number
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const direction = shellIndex % 2 === 0 ? 1 : -1
    const theta = angle + progress.value * Math.PI * 2 * direction
    const x = Math.cos(theta) * (radius - 6)
    const y = Math.sin(theta) * (orbitHeight / 2 - 6)

    return {
      transform: [{ translateX: x }, { translateY: y }],
    }
  })

  return (
    <AnimatedElectron
      style={[
        animatedStyle,
        {
          position: 'absolute',
          width: 9,
          height: 9,
          borderRadius: 999,
          backgroundColor: ELECTRON_COLORS[shellIndex % ELECTRON_COLORS.length],
        },
      ]}
    />
  )
}

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
  const orbitHeight = topView ? radius * 2 : radius * 1.05
  const angles = useMemo(() => buildElectronAngles(count), [count])
  const tilt = ORBIT_TILTS[shellIndex % ORBIT_TILTS.length]

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

  return (
    <AnimatedView
      style={{
        position: 'absolute',
        width: radius * 2,
        height: orbitHeight,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotateZ: `${tilt}deg` }],
      }}
    >
      <Svg width={radius * 2} height={orbitHeight}>
        <Ellipse
          cx={radius}
          cy={orbitHeight / 2}
          rx={radius - 3}
          ry={orbitHeight / 2 - 3}
          stroke={SHELL_COLORS[shellIndex % SHELL_COLORS.length]}
          strokeWidth={3}
          fill="none"
          opacity={0.68}
        />
        <Ellipse
          cx={radius}
          cy={orbitHeight / 2}
          rx={radius - 1}
          ry={orbitHeight / 2 - 1}
          stroke="#ffffff"
          strokeWidth={1}
          fill="none"
          opacity={0.25}
        />
      </Svg>

      {angles.map((angle, index) => (
        <ElectronDot
          key={`${shellIndex}-${index}`}
          angle={angle}
          orbitHeight={orbitHeight}
          progress={progress}
          radius={radius}
          shellIndex={shellIndex}
        />
      ))}
    </AnimatedView>
  )
}

export const AtomSvgRenderer = ({
  element,
  isotope,
  paused,
  speed,
  topView,
  stageHeight = 360,
}: AtomRendererProps) => {
  const { resolvedTheme } = useAppPalette()
  const model = useMemo(
    () => buildAtomRenderModel(element, isotope?.neutronCount),
    [element, isotope?.neutronCount],
  )
  const nucleusParticles = useMemo(
    () => buildNucleusParticles(model.element.n, model.neutronCount),
    [model.element.n, model.neutronCount],
  )
  const baseScale = 1
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(1)

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = Math.max(0.8, Math.min(2.4, savedScale.value * event.scale))
    })
    .onEnd(() => {
      savedScale.value = scale.value
    })

  const zoomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: baseScale * scale.value }],
  }))

  return (
    <GestureDetector gesture={pinchGesture}>
      <View
        style={{
          backgroundColor: resolvedTheme === 'dark' ? '#dfeaf3' : '#edf5fb',
          height: stageHeight,
        }}
        className="w-full items-center justify-center overflow-hidden rounded-[26px]"
      >
        <AnimatedView style={zoomStyle} className="h-full w-full items-center justify-center">
          <Svg width="100%" height="100%" viewBox="0 0 320 360" style={{ position: 'absolute' }}>
            <Defs>
              <LinearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.72" />
                <Stop offset="100%" stopColor="#d6ecf8" stopOpacity="0.2" />
              </LinearGradient>
              <RadialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#ffb39d" stopOpacity="0.92" />
                <Stop offset="100%" stopColor="#efc7d5" stopOpacity="0.26" />
              </RadialGradient>
            </Defs>
            <Circle cx="160" cy="182" r="46" fill="url(#nucleusGlow)" />
            <Circle cx="160" cy="182" r="17" fill="#303846" opacity="0.84" />
            {nucleusParticles.map((particle, index) => (
              <Circle
                key={`${particle.type}-${index}`}
                cx={160 + particle.x}
                cy={182 + particle.y}
                r={particle.type === 'proton' ? 4.1 : 3.9}
                fill={particle.type === 'proton' ? '#ff6b4b' : '#404654'}
                opacity={0.96}
              />
            ))}
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
        </AnimatedView>
      </View>
    </GestureDetector>
  )
}
