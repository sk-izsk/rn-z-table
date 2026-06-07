import { buildElectronAngles } from '@/utils/atomModel'
import { useMemo } from 'react'
import { View } from 'react-native'
import { createAnimatedComponent } from 'react-native-reanimated'
import { OrbitElectrons } from './OrbitElectrons'
import { OrbitRing } from './OrbitRing'
import { useOrbitAnimation } from './useOrbitAnimation'

const AnimatedView = createAnimatedComponent(View)

type OrbitLayerProps = {
  count: number
  paused: boolean
  radius: number
  shellIndex: number
  speed: number
  stageHeight: number
  stageWidth: number
  topView: boolean
}

export const OrbitLayer = ({
  count,
  paused,
  radius,
  shellIndex,
  speed,
  stageHeight,
  stageWidth,
  topView,
}: OrbitLayerProps) => {
  const orbitHeight = topView ? radius * 2 : radius * 1.1
  const angles = useMemo(() => buildElectronAngles(count), [count])
  const animatedStyle = useOrbitAnimation({ paused, shellIndex, speed })

  return (
    <AnimatedView
      style={[
        animatedStyle,
        {
          position: 'absolute',
          left: (stageWidth - radius * 2) / 2,
          top: (stageHeight - orbitHeight) / 2,
          width: radius * 2,
          height: orbitHeight,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <OrbitRing orbitHeight={orbitHeight} radius={radius} shellIndex={shellIndex} />
      <OrbitElectrons
        angles={angles}
        orbitHeight={orbitHeight}
        radius={radius}
        shellIndex={shellIndex}
      />
    </AnimatedView>
  )
}
