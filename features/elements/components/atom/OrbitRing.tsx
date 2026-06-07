import { SHELL_COLORS } from '@/utils/atomModel'
import Svg, { Ellipse } from 'react-native-svg'

export const OrbitRing = ({
  orbitHeight,
  radius,
  shellIndex,
}: {
  orbitHeight: number
  radius: number
  shellIndex: number
}) => (
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
)
