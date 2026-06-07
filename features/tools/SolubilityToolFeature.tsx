import { ToolCard } from '@/components/tools/ToolCard'
import { SOLUBILITY_ANIONS, SOLUBILITY_CATIONS, SOLUBILITY_DATA } from '@/data/tools/solubility'
import { useAppTranslation } from '@/i18n/localize'
import { IonSelectorRow } from './solubility/IonSelectorRow'
import { SolubilityResultCard } from './solubility/SolubilityResultCard'
import { View } from 'react-native'

type SolubilityToolProps = {
  cation: (typeof SOLUBILITY_CATIONS)[number]
  anion: (typeof SOLUBILITY_ANIONS)[number]
  onSelectCation: (value: (typeof SOLUBILITY_CATIONS)[number]) => void
  onSelectAnion: (value: (typeof SOLUBILITY_ANIONS)[number]) => void
}

export const SolubilityToolFeature = ({
  cation,
  anion,
  onSelectCation,
  onSelectAnion,
}: SolubilityToolProps) => {
  const { t } = useAppTranslation()
  const code = SOLUBILITY_DATA[cation][anion]

  return (
    <ToolCard title={t('tools.solubilityTitle')} description={t('tools.solubilityDescription')}>
      <View className="gap-4">
        <IonSelectorRow
          activeValue={cation}
          items={SOLUBILITY_CATIONS}
          label={t('tools.cation')}
          onSelect={onSelectCation}
        />
        <IonSelectorRow
          activeValue={anion}
          items={SOLUBILITY_ANIONS}
          label={t('tools.anion')}
          onSelect={onSelectAnion}
        />
        <SolubilityResultCard
          anion={anion}
          cation={cation}
          code={code}
          legend={t('tools.solubilityLegend')}
          resultLabel={t('tools.lookupResult')}
        />
      </View>
    </ToolCard>
  )
}
