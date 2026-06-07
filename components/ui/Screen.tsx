import { PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ScreenProps = PropsWithChildren<{
  scrollable?: boolean
}>

export const Screen = ({ children, scrollable = true }: ScreenProps) => {
  const content = <View className="px-[18px] pb-8 pt-3">{children}</View>

  return (
    <SafeAreaView className="flex-1 bg-chrome dark:bg-chrome-dark">
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
