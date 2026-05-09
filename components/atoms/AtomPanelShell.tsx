import { Ionicons } from '@expo/vector-icons'
import { AtomRenderer } from '@/components/atoms/AtomRenderer'
import type { Element } from '@/data/elements/elements'
import { useAtomShells } from '@/hooks/useAtomShells'
import { useAppTranslation } from '@/i18n/localize'
import type { ElementIsotope } from '@/types/elementProfile'
import { SHELL_NAMES } from '@/utils/atomModel'
import { Pressable, Text, View } from 'react-native'

type AtomPanelShellProps = {
  element: Element
  isotope: ElementIsotope | null
  paused: boolean
  speed: number
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

const ShellChip = ({ label, electrons }: { label: string; electrons: number }) => (
  <View className="rounded-full border border-[#d7e4ed] bg-white px-3 py-1.5">
    <Text className="text-[12px] font-semibold text-slate-600">
      {label} · {electrons}e
    </Text>
  </View>
)

export const AtomPanelShell = ({
  element,
  isotope,
  paused,
  speed,
  topView,
  onTogglePaused,
  onToggleTopView,
  onResetView,
}: AtomPanelShellProps) => {
  const { t } = useAppTranslation()
  const neutronCount = isotope?.neutronCount ?? Math.max(0, Math.round(element.mass) - element.n)
  const shells = useAtomShells(element)

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
            {t('atom.shellModel')}
          </Text>
        </View>
      </View>

      <View className="items-center bg-[#eef6fb] px-4 py-10">
        <AtomRenderer
          element={element}
          isotope={isotope}
          paused={paused}
          speed={speed}
          topView={topView}
        />
      </View>

      <View className="border-t border-[#e2edf3] px-5 py-4">
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
              {t('atom.nucleus')}
            </Text>
            <Text className="mt-1 text-[16px] font-semibold text-ink">
              {element.n} {t('atom.protons')} · {neutronCount} {t('atom.neutrons')}
            </Text>
          </View>
          <View>
            <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
              {t('atom.motion')}
            </Text>
            <Text className="mt-1 text-right text-[16px] font-semibold text-ink">
              {paused ? t('atom.paused') : topView ? t('atom.topView') : t('atom.orbiting')}
            </Text>
          </View>
        </View>

        <View className="mb-4 flex-row flex-wrap gap-2">
          {shells.map((count, index) => (
            <ShellChip
              key={`${SHELL_NAMES[index] ?? index}-${count}`}
              label={SHELL_NAMES[index] ?? `S${index + 1}`}
              electrons={count}
            />
          ))}
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
        <Text className="mt-4 text-[12px] text-slate-500">{t('atom.controlsHint')}</Text>
      </View>
    </View>
  )
}
