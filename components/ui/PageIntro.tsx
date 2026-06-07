import { Text, View } from 'react-native'
import { Panel } from './Panel'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => {
  return (
    <Panel>
      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-[4px] text-slate-500 dark:text-[#95abbb]">
          {eyebrow}
        </Text>
        <Text className="text-[24px] font-black tracking-[-0.8px] text-ink dark:text-ink-dark">
          {title}
        </Text>
        <Text className="text-[16px] leading-6 text-slate-500 dark:text-[#95abbb]">
          {description}
        </Text>
      </View>
    </Panel>
  )
}
