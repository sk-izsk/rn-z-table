import { Ionicons } from '@expo/vector-icons'
import type { Element } from '@/data/elements/elements'
import type { ElementIsotope } from '@/types/elementProfile'
import { Pressable, Text, View } from 'react-native'

type AtomPanelShellProps = {
  element: Element
  isotope: ElementIsotope | null
  paused: boolean
  topView: boolean
  onTogglePaused: () => void
  onToggleTopView: () => void
  onResetView: () => void
}

const AtomControl = ({
  active,
  icon,
  onPress,
}: {
  active?: boolean
  icon: keyof typeof Ionicons.glyphMap
  onPress: () => void
}) => (
  <Pressable
    onPress={onPress}
    className={`h-12 w-12 items-center justify-center rounded-full border ${
      active ? 'border-accent bg-[#dbeff5]' : 'border-[#d6e5ed] bg-white'
    }`}
  >
    <Ionicons name={icon} size={18} color={active ? '#176d89' : '#627487'} />
  </Pressable>
)

const OrbitRing = ({ size, tilt }: { size: number; tilt: string }) => (
  <View
    style={{ width: size, height: size, transform: [{ rotate: tilt }] }}
    className="absolute rounded-full border-[4px] border-[#e7d36c]/70"
  />
)

export const AtomPanelShell = ({
  element,
  isotope,
  paused,
  topView,
  onTogglePaused,
  onToggleTopView,
  onResetView,
}: AtomPanelShellProps) => {
  const neutronCount = isotope?.neutronCount ?? Math.max(0, Math.round(element.mass) - element.n)

  return (
    <View className="overflow-hidden rounded-[30px] border border-[#d7e4ed] bg-[#f8fbfd] shadow-panel">
      <View className="border-b border-[#e2edf3] px-4 py-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-row gap-2">
            <View className="rounded-full border border-[#d3e2eb] bg-white px-3 py-1.5">
              <Text className="font-mono text-[13px] text-slate-600">{element.config}</Text>
            </View>
            <View className="rounded-full border border-[#d3e2eb] bg-white px-3 py-1.5">
              <Text className="font-mono text-[13px] text-slate-600">
                {isotope?.name ?? `${element.sym}-${Math.round(element.mass)}`}
              </Text>
            </View>
          </View>
          <Text className="text-[12px] font-semibold uppercase tracking-[3px] text-slate-400">
            atom shell
          </Text>
        </View>
      </View>

      <View className="items-center bg-[#eef6fb] px-4 py-10">
        <View className="relative h-[360px] w-full items-center justify-center overflow-hidden rounded-[26px] bg-[#edf5fb]">
          <OrbitRing size={320} tilt={topView ? '0deg' : '8deg'} />
          <OrbitRing size={230} tilt={topView ? '0deg' : '-15deg'} />
          <OrbitRing size={130} tilt={topView ? '0deg' : '22deg'} />

          <View className="absolute h-16 w-16 items-center justify-center rounded-full bg-[#f7c1c0]">
            <View className="h-11 w-11 rounded-full bg-[#2c3442]" />
          </View>

          <View className="absolute left-[14%] top-[38%] h-3 w-3 rounded-full bg-[#d6ac35]" />
          <View className="absolute right-[16%] top-[32%] h-3 w-3 rounded-full bg-[#d6ac35]" />
          <View className="absolute bottom-[30%] left-[28%] h-3 w-3 rounded-full bg-[#d2852e]" />
          <View className="absolute bottom-[36%] right-[24%] h-3 w-3 rounded-full bg-[#d2852e]" />
          <View className="absolute bottom-[22%] right-[38%] h-3.5 w-3.5 rounded-full bg-[#c9ab39]" />
        </View>
      </View>

      <View className="border-t border-[#e2edf3] px-5 py-4">
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
              nucleus
            </Text>
            <Text className="mt-1 text-[16px] font-semibold text-ink">
              {element.n} protons · {neutronCount} neutrons
            </Text>
          </View>
          <View>
            <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
              motion
            </Text>
            <Text className="mt-1 text-right text-[16px] font-semibold text-ink">
              {paused ? 'Paused' : topView ? 'Top view' : 'Orbiting'}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row gap-3">
            <AtomControl
              active={paused}
              icon={paused ? 'play' : 'pause'}
              onPress={onTogglePaused}
            />
            <AtomControl active={topView} icon="layers-outline" onPress={onToggleTopView} />
          </View>
          <AtomControl icon="refresh" onPress={onResetView} />
        </View>
      </View>
    </View>
  )
}
