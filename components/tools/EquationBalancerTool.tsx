import { ActionButton } from '@/components/tools/ActionButton'
import { ToolCard } from '@/components/tools/ToolCard'
import { ToolTextInput } from '@/components/tools/ToolTextInput'
import { useEquationBalancer } from '@/hooks/useEquationBalancer'
import { useAppTranslation } from '@/i18n/localize'
import { useState } from 'react'
import { Text, View } from 'react-native'

export const EquationBalancerTool = () => {
  const { t } = useAppTranslation()
  const [equation, setEquation] = useState('')
  const { pending, result, run } = useEquationBalancer()

  return (
    <ToolCard title={t('tools.balancerTitle')} description={t('tools.balancerDescription')}>
      <View className="gap-3">
        <ToolTextInput
          value={equation}
          onChangeText={setEquation}
          placeholder={t('tools.balancerPlaceholder')}
        />
        <ActionButton
          label={pending ? t('tools.balancing') : t('tools.balance')}
          disabled={pending || equation.trim().length === 0}
          onPress={() => {
            void run(equation)
          }}
        />
      </View>

      {result ? (
        <View className="mt-4 rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-4">
          {result.error ? (
            <Text className="text-[15px] leading-6 text-[#b44b43]">{result.error}</Text>
          ) : (
            <View className="gap-2">
              <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
                {t('tools.balancedEquation')}
              </Text>
              <Text className="text-[20px] font-black leading-8 text-ink">{result.balanced}</Text>
            </View>
          )}
        </View>
      ) : null}
    </ToolCard>
  )
}
