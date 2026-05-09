import { brand } from '@/constants/theme'
import { Link, usePathname } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export const AppHeader = () => {
  const pathname = usePathname()
  const showSettingsShortcut = pathname !== '/settings'

  return (
    <View className="mb-4 flex-row items-center justify-between rounded-[20px] border border-[#cfe0ea] bg-panel/95 px-4 py-3">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-accent">
          <Ionicons name="flash" color="#f7fbfd" size={20} />
        </View>
        <View>
          <Text className="text-[28px] font-black tracking-[-0.5px] text-ink">{brand.title}</Text>
          <Text className="text-[11px] uppercase tracking-[3px] text-slate-500">
            {brand.subtitle}
          </Text>
        </View>
      </View>

      {showSettingsShortcut ? (
        <Link href="/settings" asChild>
          <Pressable className="h-12 w-12 items-center justify-center rounded-xl border border-[#d8e4ec] bg-white">
            <Ionicons name="menu" color="#607184" size={22} />
          </Pressable>
        </Link>
      ) : null}
    </View>
  )
}
