import { Ionicons } from '@expo/vector-icons'
import { AtomRenderer } from '@/components/atoms/AtomRenderer'
import type { Element } from '@/data/elements/elements'
import { useAtomShells } from '@/hooks/useAtomShells'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useAppTranslation } from '@/i18n/localize'
import type { ElementIsotope } from '@/types/elementProfile'
import { SHELL_NAMES } from '@/utils/atomModel'
import { Pressable, Text, View, useWindowDimensions } from 'react-native'

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
}) => {
  const { colors } = useAppPalette()

  return (
    <Pressable
      onPress={onPress}
      style={{
        borderColor: active ? colors.accent : colors.line,
        backgroundColor: active ? colors.accentSoft : colors.surface,
      }}
      className="h-12 w-12 items-center justify-center rounded-full border"
    >
      <Ionicons name={icon} size={18} color={active ? colors.accent : colors.textMuted} />
    </Pressable>
  )
}

const ShellChip = ({ label, electrons }: { label: string; electrons: number }) => {
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
      }}
      className="rounded-full border px-3 py-1.5"
    >
      <Text style={{ color: colors.textMuted }} className="text-[12px] font-semibold">
        {label} · {electrons}e
      </Text>
    </View>
  )
}

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
  const { colors } = useAppPalette()
  const { height } = useWindowDimensions()
  const neutronCount = isotope?.neutronCount ?? Math.max(0, Math.round(element.mass) - element.n)
  const shells = useAtomShells(element)
  const stageHeight = height < 900 ? 316 : 360

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surfaceMuted,
      }}
      className="overflow-hidden rounded-[30px] border shadow-panel"
    >
      <View style={{ borderBottomColor: colors.line }} className="border-b px-4 py-3">
        <View className="flex-row items-center justify-between gap-3">
          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surface,
            }}
            className="min-w-0 flex-1 rounded-full border px-3 py-1.5"
          >
            <Text
              numberOfLines={1}
              style={{ color: colors.textMuted }}
              className="font-mono text-[13px]"
            >
              {element.config}
            </Text>
          </View>
          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surface,
            }}
            className="rounded-full border px-3 py-1.5"
          >
            <Text style={{ color: colors.textMuted }} className="font-mono text-[13px]">
              {isotope?.name ?? `${element.sym}-${Math.round(element.mass)}`}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: colors.background }} className="items-center px-4 py-8">
        <AtomRenderer
          element={element}
          isotope={isotope}
          paused={paused}
          speed={speed}
          topView={topView}
          stageHeight={stageHeight}
        />
      </View>

      <View style={{ borderTopColor: colors.line }} className="border-t px-5 pt-4 pb-10">
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text
              style={{ color: colors.textMuted }}
              className="text-[12px] font-bold uppercase tracking-[3px]"
            >
              {t('atom.nucleus')}
            </Text>
            <Text style={{ color: colors.text }} className="mt-1 text-[16px] font-semibold">
              {element.n} {t('atom.protons')} · {neutronCount} {t('atom.neutrons')}
            </Text>
          </View>
          <View>
            <Text
              style={{ color: colors.textMuted }}
              className="text-[12px] font-bold uppercase tracking-[3px]"
            >
              {t('atom.motion')}
            </Text>
            <Text
              style={{ color: colors.text }}
              className="mt-1 text-right text-[16px] font-semibold"
            >
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
        <Text style={{ color: colors.textMuted }} className="mt-4 text-[12px]">
          {t('atom.controlsHint')}
        </Text>
      </View>
    </View>
  )
}
