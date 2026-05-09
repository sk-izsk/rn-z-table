import { Panel } from '@/components/ui/Panel'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import type { PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

type SettingsSectionProps = PropsWithChildren<{
  title: string
  description?: string
}>

export const SettingsSection = ({ title, description, children }: SettingsSectionProps) => {
  const { colors } = useAppPalette()

  return (
    <Panel>
      <View className="gap-2">
        <Text style={{ color: colors.text }} className="text-[18px] font-black tracking-[-0.4px]">
          {title}
        </Text>
        {description ? (
          <Text style={{ color: colors.textMuted }} className="text-[15px] leading-6">
            {description}
          </Text>
        ) : null}
      </View>
      <View className="mt-4">{children}</View>
    </Panel>
  )
}
