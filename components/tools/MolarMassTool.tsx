import { ActionButton } from '@/components/tools/ActionButton'
import { ToolCard } from '@/components/tools/ToolCard'
import { ToolTextInput } from '@/components/tools/ToolTextInput'
import { useAppTranslation } from '@/i18n/localize'
import { calcMolarMass, type MolarMassResult } from '@/utils/molarMass'
import { useState } from 'react'
import { Text, View } from 'react-native'

export const MolarMassTool = () => {
  const { t } = useAppTranslation()
  const [formula, setFormula] = useState('')
  const [result, setResult] = useState<MolarMassResult | null>(null)

  return (
    <ToolCard title={t('tools.molarTitle')} description={t('tools.molarDescription')}>
      <View className="gap-3">
        <ToolTextInput
          value={formula}
          onChangeText={setFormula}
          placeholder={t('tools.molarPlaceholder')}
        />
        <ActionButton
          label={t('tools.calculate')}
          onPress={() => {
            setResult(calcMolarMass(formula))
          }}
        />
      </View>

      {result ? (
        <View className="mt-4 rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-4">
          {result.error ? (
            <Text className="text-[15px] leading-6 text-[#b44b43]">{result.error}</Text>
          ) : (
            <View className="gap-3">
              <Text className="text-[20px] font-black text-ink">
                {t('tools.molarTotal')}: {result.total.toFixed(4)} g/mol
              </Text>
              {result.breakdown.map((item) => (
                <View
                  key={item.element}
                  className="flex-row items-center justify-between border-t border-[#e1ebf1] pt-3"
                >
                  <Text className="text-[15px] font-semibold text-ink">
                    {item.element} × {item.count}
                  </Text>
                  <Text className="text-[14px] text-slate-500">
                    {item.contribution.toFixed(4)} g/mol
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ) : null}
    </ToolCard>
  )
}
