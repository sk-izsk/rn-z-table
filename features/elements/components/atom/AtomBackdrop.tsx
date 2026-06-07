import Svg, { Circle, Defs, Ellipse, LinearGradient, RadialGradient, Stop } from 'react-native-svg'

export const AtomBackdrop = ({
  height,
  width,
}: {
  height: number
  width: number
}) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    style={{ position: 'absolute', left: 0, top: 0 }}
  >
    <Defs>
      <LinearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.72" />
        <Stop offset="100%" stopColor="#d6ecf8" stopOpacity="0.2" />
      </LinearGradient>
      <RadialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
        <Stop offset="0%" stopColor="#fff8fb" stopOpacity="0.95" />
        <Stop offset="55%" stopColor="#f8dbe6" stopOpacity="0.72" />
        <Stop offset="100%" stopColor="#efc7d5" stopOpacity="0.22" />
      </RadialGradient>
    </Defs>
    <Circle cx={width / 2} cy={height / 2} r="46" fill="url(#nucleusGlow)" />
    <Ellipse
      cx={width / 2}
      cy={height / 2}
      rx="38"
      ry="12"
      stroke="url(#orbitGlow)"
      strokeWidth="6"
      fill="none"
    />
  </Svg>
)
