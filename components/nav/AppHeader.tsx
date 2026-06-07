import { brand } from '@/constants/theme'
import { Link, usePathname, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export const AppHeader = () => {
  const pathname = usePathname()
  const router = useRouter()
  const showSettingsShortcut = pathname !== '/settings'

  return (
    <View className="mb-4 flex-row items-center justify-between rounded-[20px] border border-[#cfe0ea] bg-panel/95 px-4 py-3 dark:border-line-dark dark:bg-panel-dark">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-accent">
          <Ionicons name="flash" color="#f7fbfd" size={20} />
        </View>
        <View>
          <Text className="text-[28px] font-black tracking-[-0.5px] text-ink dark:text-ink-dark">
            {brand.title}
          </Text>
          <Text className="text-[11px] uppercase tracking-[3px] text-slate-500 dark:text-[#95abbb]">
            {brand.subtitle}
          </Text>
        </View>
      </View>

      {showSettingsShortcut ? (
        <Link href="/settings" asChild>
          <Pressable className="h-12 w-12 items-center justify-center rounded-xl border border-[#d8e4ec] bg-white dark:border-line-dark dark:bg-panel-muted-dark">
            <Ionicons name="menu" color="#607184" size={22} />
          </Pressable>
        </Link>
      ) : (
        <Pressable
          accessibilityLabel="Close settings"
          accessibilityRole="button"
          className="h-12 w-12 items-center justify-center rounded-xl border border-[#d8e4ec] bg-white dark:border-line-dark dark:bg-panel-muted-dark"
          onPress={() => {
            if (router.canGoBack()) {
              router.back()
              return
            }

            router.replace('/')
          }}
        >
          <Ionicons name="close" color="#607184" size={22} />
        </Pressable>
      )}
    </View>
  )
}
