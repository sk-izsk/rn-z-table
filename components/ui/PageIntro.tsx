import { useAppPalette } from '@/hooks/store/useAppPalette'
import { Text, View } from 'react-native'
import { Panel } from './Panel'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => {
  const { colors } = useAppPalette()

  return (
    <Panel>
      <View className="gap-2">
        <Text
          style={{ color: colors.textMuted }}
          className="text-xs font-bold uppercase tracking-[4px]"
        >
          {eyebrow}
        </Text>
        <Text style={{ color: colors.text }} className="text-[24px] font-black tracking-[-0.8px]">
          {title}
        </Text>
        <Text style={{ color: colors.textMuted }} className="text-[16px] leading-6">
          {description}
        </Text>
      </View>
    </Panel>
  )
}
