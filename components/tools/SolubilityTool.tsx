import { ActionButton } from '@/components/tools/ActionButton'
import { ToolCard } from '@/components/tools/ToolCard'
import {
  SOLUBILITY_ANIONS,
  SOLUBILITY_CATIONS,
  SOLUBILITY_DATA,
  type SolubilityCode,
} from '@/data/tools/solubility'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useAppTranslation } from '@/i18n/localize'
import { ScrollView, Text, View } from 'react-native'

type SolubilityToolProps = {
  cation: (typeof SOLUBILITY_CATIONS)[number]
  anion: (typeof SOLUBILITY_ANIONS)[number]
  onSelectCation: (value: (typeof SOLUBILITY_CATIONS)[number]) => void
  onSelectAnion: (value: (typeof SOLUBILITY_ANIONS)[number]) => void
}

const CODE_COLORS: Record<SolubilityCode, string> = {
  S: 'bg-[#d2f5d8] text-[#157347]',
  I: 'bg-[#f7d6d8] text-[#b02a37]',
  Sl: 'bg-[#f9edc8] text-[#9d6700]',
  D: 'bg-[#ddd9fb] text-[#5b4abd]',
}

const solubilityLabel = (code: SolubilityCode): string => {
  switch (code) {
    case 'S':
      return 'Soluble'
    case 'I':
      return 'Insoluble'
    case 'Sl':
      return 'Slightly soluble'
    default:
      return 'Decomposes'
  }
}

export const SolubilityTool = ({
  cation,
  anion,
  onSelectCation,
  onSelectAnion,
}: SolubilityToolProps) => {
  const { t } = useAppTranslation()
  const { colors } = useAppPalette()
  const code = SOLUBILITY_DATA[cation][anion]

  return (
    <ToolCard title={t('tools.solubilityTitle')} description={t('tools.solubilityDescription')}>
      <View className="gap-4">
        <View>
          <Text
            style={{ color: colors.textMuted }}
            className="mb-2 text-[12px] font-bold uppercase tracking-[3px]"
          >
            {t('tools.cation')}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2 pr-2">
              {SOLUBILITY_CATIONS.map((item) => {
                const active = item === cation
                return (
                  <ActionButton
                    key={item}
                    label={item}
                    variant={active ? 'accent' : 'ghost'}
                    onPress={() => onSelectCation(item)}
                  />
                )
              })}
            </View>
          </ScrollView>
        </View>

        <View>
          <Text
            style={{ color: colors.textMuted }}
            className="mb-2 text-[12px] font-bold uppercase tracking-[3px]"
          >
            {t('tools.anion')}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2 pr-2">
              {SOLUBILITY_ANIONS.map((item) => {
                const active = item === anion
                return (
                  <ActionButton
                    key={item}
                    label={item}
                    variant={active ? 'accent' : 'ghost'}
                    onPress={() => onSelectAnion(item)}
                  />
                )
              })}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            borderColor: colors.line,
            backgroundColor: colors.surfaceMuted,
          }}
          className="rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-4"
        >
          <Text
            style={{ color: colors.textMuted }}
            className="text-[12px] font-bold uppercase tracking-[3px]"
          >
            {t('tools.lookupResult')}
          </Text>
          <View className="mt-3 flex-row items-center justify-between">
            <Text style={{ color: colors.text }} className="text-[18px] font-black">
              {cation} + {anion}
            </Text>
            <View className={`rounded-full px-3 py-1.5 ${CODE_COLORS[code].split(' ')[0]}`}>
              <Text className={`text-[13px] font-bold ${CODE_COLORS[code].split(' ')[1]}`}>
                {code}
              </Text>
            </View>
          </View>
          <Text style={{ color: colors.textMuted }} className="mt-2 text-[15px]">
            {solubilityLabel(code)}
          </Text>
          <Text style={{ color: colors.textMuted }} className="mt-3 text-[13px] leading-6">
            {t('tools.solubilityLegend')}
          </Text>
        </View>
      </View>
    </ToolCard>
  )
}
