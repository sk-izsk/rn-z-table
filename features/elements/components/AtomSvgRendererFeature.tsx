import type { AtomRendererProps } from '@/components/atoms/AtomRenderer'
import { buildAtomRenderModel } from '@/utils/atomModel'
import { useMemo } from 'react'
import { View } from 'react-native'
import { AtomBackdrop } from './atom/AtomBackdrop'
import { AtomNucleus } from './atom/AtomNucleus'
import { OrbitLayer } from './atom/OrbitLayer'

const ATOM_STAGE_WIDTH = 320
const ATOM_STAGE_HEIGHT = 320

const AtomStage = ({
  neutronCount,
  paused,
  protonCount,
  shellRadii,
  shells,
  speed,
  topView,
}: {
  neutronCount: number
  paused: boolean
  protonCount: number
  shellRadii: number[]
  shells: number[]
  speed: number
  topView: boolean
}) => (
  <View
    style={{
      width: ATOM_STAGE_WIDTH,
      height: ATOM_STAGE_HEIGHT,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <AtomBackdrop height={ATOM_STAGE_HEIGHT} width={ATOM_STAGE_WIDTH} />
    <AtomNucleus neutronCount={neutronCount} protonCount={protonCount} />
    {shellRadii
      .slice()
      .reverse()
      .map((radius, reverseIndex) => {
        const shellIndex = shellRadii.length - reverseIndex - 1
        return (
          <OrbitLayer
            key={`${shellIndex}-${radius}`}
            count={shells[shellIndex]}
            paused={paused}
            radius={radius}
            shellIndex={shellIndex}
            speed={speed}
            stageHeight={ATOM_STAGE_HEIGHT}
            stageWidth={ATOM_STAGE_WIDTH}
            topView={topView}
          />
        )
      })}
  </View>
)

export const AtomSvgRendererFeature = ({
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
      <AtomStage
        neutronCount={model.neutronCount}
        paused={paused}
        protonCount={model.element.n}
        shellRadii={model.shellRadii}
        shells={model.shells}
        speed={speed}
        topView={topView}
      />
    </View>
  )
}
