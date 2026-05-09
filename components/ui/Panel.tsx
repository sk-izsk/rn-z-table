import { PropsWithChildren } from 'react'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { View } from 'react-native'

type PanelProps = PropsWithChildren<{
  className?: string
}>

export const Panel = ({ children, className = '' }: PanelProps) => {
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
      }}
      className={`mb-4 rounded-[22px] border border-[#cfe0ea] bg-panel px-5 py-5 shadow-panel ${className}`}
    >
      {children}
    </View>
  )
}
