import { PropsWithChildren } from 'react'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ScreenProps = PropsWithChildren<{
  scrollable?: boolean
}>

export const Screen = ({ children, scrollable = true }: ScreenProps) => {
  const { colors } = useAppPalette()
  const content = (
    <View className={`px-[18px] pb-8 pt-3 ${scrollable ? '' : 'flex-1'}`}>{children}</View>
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {scrollable ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  )
}
