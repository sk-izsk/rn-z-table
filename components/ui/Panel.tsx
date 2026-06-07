import { PropsWithChildren } from 'react'
import { View } from 'react-native'

type PanelProps = PropsWithChildren<{
  className?: string
}>

export const Panel = ({ children, className = '' }: PanelProps) => {
  return (
    <View
      className={`mb-4 rounded-[22px] border border-[#cfe0ea] bg-panel px-5 py-5 shadow-panel dark:border-line-dark dark:bg-panel-dark ${className}`}
    >
      {children}
    </View>
  )
}
