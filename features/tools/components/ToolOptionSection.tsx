import type { ReactNode } from 'react'
import { Text, View } from 'react-native'

export const ToolOptionSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <View>
    <Text className="mb-3 text-[16px] font-semibold text-ink">{title}</Text>
    {children}
  </View>
)
