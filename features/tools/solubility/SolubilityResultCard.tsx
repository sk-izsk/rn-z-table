import type { SolubilityCode } from '@/data/tools/solubility'
import { Text, View } from 'react-native'
import { CODE_STYLES } from './constants'

export const SolubilityResultCard = ({
  anion,
  cation,
  code,
  legend,
  resultLabel,
}: {
  anion: string
  cation: string
  code: SolubilityCode
  legend: string
  resultLabel: string
}) => {
  const styles = CODE_STYLES[code]

  return (
    <View className="rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-4">
      <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
        {resultLabel}
      </Text>
      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-[18px] font-black text-ink">
          {cation} + {anion}
        </Text>
        <View className={`rounded-full px-3 py-1.5 ${styles.badge}`}>
          <Text className={`text-[13px] font-bold ${styles.text}`}>{code}</Text>
        </View>
      </View>
      <Text className="mt-2 text-[15px] text-slate-600">{styles.label}</Text>
      <Text className="mt-3 text-[13px] leading-6 text-slate-500">{legend}</Text>
    </View>
  )
}
