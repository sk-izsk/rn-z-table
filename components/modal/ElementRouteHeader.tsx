import { brand } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export const ElementRouteHeader = () => {
  const router = useRouter()

  return (
    <View className="mb-4 flex-row items-center justify-between rounded-[26px] border border-[#d7e4ed] bg-panel/95 px-4 py-3 shadow-panel">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-accent">
          <Ionicons name="flash" size={20} color="#f7fbfd" />
        </View>
        <View>
          <Text className="text-[27px] font-black tracking-[-0.5px] text-ink">{brand.title}</Text>
          <Text className="text-[11px] uppercase tracking-[3px] text-slate-500">
            {brand.subtitle}
          </Text>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close element detail"
        className="h-12 w-12 items-center justify-center rounded-xl border border-[#d8e4ec] bg-white"
        onPress={() => {
          if (router.canGoBack()) {
            router.back()
            return
          }

          router.replace('/')
        }}
      >
        <Ionicons name="close" size={22} color="#607184" />
      </Pressable>
    </View>
  )
}
