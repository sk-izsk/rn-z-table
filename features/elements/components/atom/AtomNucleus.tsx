import Svg, { Circle } from 'react-native-svg'

const NUCLEUS_CENTER = 160
const NUCLEUS_RADIUS = 40

const buildParticlePositions = (count: number) =>
  Array.from({ length: count }, (_, index) => {
    if (index === 0) {
      return { x: NUCLEUS_CENTER, y: NUCLEUS_CENTER }
    }

    const angle = index * 2.399963229728653
    const distance = Math.min(NUCLEUS_RADIUS, 8 + Math.sqrt(index) * 8)

    return {
      x: NUCLEUS_CENTER + Math.cos(angle) * distance,
      y: NUCLEUS_CENTER + Math.sin(angle) * distance,
    }
  })

const buildParticlePalette = (protonCount: number, neutronCount: number) => {
  const visualProtons = Math.max(1, Math.min(protonCount, 12))
  const visualNeutrons = Math.max(1, Math.min(neutronCount, 12))
  const total = visualProtons + visualNeutrons
  const protonRatio = visualProtons / total
  let usedProtons = 0
  let usedNeutrons = 0

  return Array.from({ length: total }, (_, index) => {
    const expectedProtons = Math.round((index + 1) * protonRatio)
    const shouldUseProton =
      usedProtons < visualProtons &&
      (usedNeutrons >= visualNeutrons || expectedProtons > usedProtons)

    if (shouldUseProton) {
      usedProtons += 1
      return {
        fill: '#f08b72',
        stroke: '#d1634d',
      }
    }

    usedNeutrons += 1
    return {
      fill: '#8aa7c4',
      stroke: '#5d7d9b',
    }
  })
}

export const AtomNucleus = ({
  neutronCount,
  protonCount,
}: {
  neutronCount: number
  protonCount: number
}) => {
  const particles = buildParticlePalette(protonCount, neutronCount)
  const positions = buildParticlePositions(particles.length)

  return (
    <Svg
      width={NUCLEUS_CENTER * 2}
      height={NUCLEUS_CENTER * 2}
      viewBox={`0 0 ${NUCLEUS_CENTER * 2} ${NUCLEUS_CENTER * 2}`}
      style={{ position: 'absolute', left: 0, top: 0 }}
    >
      {particles.map((particle, index) => (
        <Circle
          key={`${particle.fill}-${index}`}
          cx={positions[index].x}
          cy={positions[index].y}
          r="10"
          fill={particle.fill}
          stroke={particle.stroke}
          strokeWidth="2"
          opacity="0.96"
        />
      ))}
    </Svg>
  )
}
