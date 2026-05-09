import { Panel } from '@/components/ui/Panel'
import type { PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

type ToolCardProps = PropsWithChildren<{
  title: string
  description?: string
}>

export const ToolCard = ({ title, description, children }: ToolCardProps) => {
  return (
    <Panel>
      <View className="gap-2">
        <Text className="text-[18px] font-black tracking-[-0.4px] text-ink">{title}</Text>
        {description ? (
          <Text className="text-[15px] leading-6 text-slate-500">{description}</Text>
        ) : null}
      </View>
      <View className="mt-4">{children}</View>
    </Panel>
  )
}
