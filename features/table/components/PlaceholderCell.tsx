import { elementCellSize } from '@/components/table/ElementCell'
import { memo } from 'react'
import { Text, View } from 'react-native'

const { width: cellWidth, height: cellHeight } = elementCellSize

export const PlaceholderCell = memo(({ label }: { label?: string }) => (
  <View
    style={{ width: cellWidth, height: cellHeight }}
    className={`items-center justify-center rounded-[14px] ${label ? 'bg-[#eef4f8]' : ''}`}
  >
    {label ? <Text className="text-[12px] font-semibold text-slate-400">{label}</Text> : null}
  </View>
))

PlaceholderCell.displayName = 'PlaceholderCell'
