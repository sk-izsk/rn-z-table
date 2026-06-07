import { ELECTRON_COLORS } from '@/utils/atomModel'
import { View } from 'react-native'

export const OrbitElectrons = ({
  angles,
  orbitHeight,
  radius,
  shellIndex,
}: {
  angles: number[]
  orbitHeight: number
  radius: number
  shellIndex: number
}) => (
  <>
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
  </>
)
