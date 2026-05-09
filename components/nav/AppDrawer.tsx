import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { routes } from '@/constants/routes'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useLanguage, useSetLanguage } from '@/hooks/store/useLanguageStore'
import { useSetThemeMode, useThemeMode } from '@/hooks/store/useThemeStore'
import { useAppTranslation } from '@/i18n/localize'
import type { AppLanguage } from '@/i18n/types'
import type { ThemeMode } from '@/stores/themeStore'
import { Ionicons } from '@expo/vector-icons'
import { usePathname, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Modal, Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

type AppDrawerProps = {
  open: boolean
  onClose: () => void
}

const items = [
  { href: routes.home, key: 'table', icon: 'grid' },
  { href: routes.ions, key: 'ions', icon: 'flask' },
  { href: routes.tools, key: 'tools', icon: 'construct' },
  { href: routes.worksheet, key: 'worksheet', icon: 'document-text' },
  { href: routes.settings, key: 'settings', icon: 'settings' },
] as const

export const AppDrawer = ({ open, onClose }: AppDrawerProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const { width } = useWindowDimensions()
  const { colors } = useAppPalette()
  const { t } = useAppTranslation()
  const language = useLanguage()
  const setLanguage = useSetLanguage()
  const themeMode = useThemeMode()
  const setThemeMode = useSetThemeMode()
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withTiming(open ? 1 : 0, { duration: 220 })
  }, [open, progress])

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, 1]),
  }))

  const panelStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(progress.value, [0, 1], [width, 0]),
      },
    ],
  }))

  if (!open) {
    return null
  }

  return (
    <Modal transparent visible onRequestClose={onClose} animationType="none">
      <View className="flex-1 items-end">
        <Animated.View
          style={[
            backdropStyle,
            {
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(7, 15, 23, 0.42)',
            },
          ]}
        >
          <Pressable className="flex-1" onPress={onClose} />
        </Animated.View>

        <Animated.View
          style={[
            panelStyle,
            {
              width: Math.min(width * 0.84, 352),
              borderColor: colors.line,
              backgroundColor: `${colors.surface}F2`,
            },
          ]}
          className="h-full border-l px-4 pb-6 pt-5 shadow-panel"
        >
          <View className="mb-4 flex-row items-start justify-between">
            <View className="pr-4">
              <Text
                style={{ color: colors.textMuted }}
                className="text-[11px] font-bold uppercase tracking-[4px]"
              >
                {t('nav.navigate')}
              </Text>
              <Text style={{ color: colors.text }} className="mt-1 text-[28px] font-black">
                {t('nav.menuTitle')}
              </Text>
            </View>
            <Pressable
              onPress={onClose}
              style={{
                borderColor: colors.line,
                backgroundColor: colors.surfaceMuted,
              }}
              className="h-12 w-12 items-center justify-center rounded-xl border"
            >
              <Ionicons name="close" size={20} color={colors.textMuted} />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                borderColor: colors.line,
                backgroundColor: colors.surface,
              }}
              className="rounded-[24px] border p-2"
            >
              {items.map(({ href, key, icon }) => {
                const active = pathname === href
                return (
                  <Pressable
                    key={href}
                    onPress={() => {
                      onClose()
                      router.push(href)
                    }}
                    style={{
                      backgroundColor: active ? colors.accent : 'transparent',
                    }}
                    className="mb-1.5 flex-row items-center justify-center gap-3 rounded-[18px] px-4 py-4 last:mb-0"
                  >
                    <Ionicons name={icon} size={16} color={active ? '#ffffff' : colors.textMuted} />
                    <Text
                      style={{ color: active ? '#ffffff' : colors.textMuted }}
                      className="text-[16px] font-semibold"
                    >
                      {t(`nav.${key}`)}
                    </Text>
                  </Pressable>
                )
              })}
            </View>

            <View
              style={{
                borderColor: colors.line,
                backgroundColor: colors.surface,
              }}
              className="mt-4 rounded-[24px] border px-4 py-4"
            >
              <View className="mb-4">
                <Text
                  style={{ color: colors.textMuted }}
                  className="text-[11px] font-bold uppercase tracking-[4px]"
                >
                  {t('nav.appearance')}
                </Text>
                <Text style={{ color: colors.textMuted }} className="mt-2 text-[15px] leading-6">
                  {t('nav.appearanceDescription')}
                </Text>
              </View>

              <View className="mb-4">
                <SegmentedControl<ThemeMode>
                  value={themeMode}
                  onValueChange={setThemeMode}
                  options={[
                    { value: 'system', label: t('settings.system') },
                    { value: 'light', label: t('common.light') },
                    { value: 'dark', label: t('common.dark') },
                  ]}
                />
              </View>

              <SegmentedControl<AppLanguage>
                value={language}
                onValueChange={(value) => {
                  void setLanguage(value)
                }}
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'fr', label: 'Francais' },
                ]}
              />
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  )
}
