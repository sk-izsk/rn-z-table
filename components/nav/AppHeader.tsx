import { brand } from '@/constants/theme'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { Link, usePathname } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export const AppHeader = () => {
  const pathname = usePathname()
  const showSettingsShortcut = pathname !== '/settings'
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
      }}
      className="mb-4 flex-row items-center justify-between rounded-[20px] border border-[#cfe0ea] bg-panel/95 px-4 py-3"
    >
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-accent">
          <Ionicons name="flash" color="#f7fbfd" size={20} />
        </View>
        <View>
          <Text style={{ color: colors.text }} className="text-[28px] font-black tracking-[-0.5px]">
            {brand.title}
          </Text>
          <Text
            style={{ color: colors.textMuted }}
            className="text-[11px] uppercase tracking-[3px]"
          >
            {brand.subtitle}
          </Text>
        </View>
      </View>

      {showSettingsShortcut ? (
        <Link href="/settings" asChild>
          <Pressable
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="h-12 w-12 items-center justify-center rounded-xl border border-[#d8e4ec] bg-white"
          >
            <Ionicons name="menu" color={colors.textMuted} size={22} />
          </Pressable>
        </Link>
      ) : null}
    </View>
  )
}
