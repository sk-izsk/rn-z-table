import { AppHeader } from '@/components/nav/AppHeader'
import { AppDrawer } from '@/components/nav/AppDrawer'
import { EquationBalancerTool } from '@/components/tools/EquationBalancerTool'
import { MolarMassTool } from '@/components/tools/MolarMassTool'
import { SolubilityTool } from '@/components/tools/SolubilityTool'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'
import { SOLUBILITY_ANIONS, SOLUBILITY_CATIONS } from '@/data/tools/solubility'
import { useState } from 'react'

export default function ToolsRoute() {
  const { t } = useAppTranslation()
  const [cation, setCation] = useState<(typeof SOLUBILITY_CATIONS)[number]>('Li⁺')
  const [anion, setAnion] = useState<(typeof SOLUBILITY_ANIONS)[number]>('Cl⁻')
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Screen>
      <AppHeader onMenuPress={() => setDrawerOpen(true)} />
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageIntro
        eyebrow={t('tools.eyebrow')}
        title={t('tools.screenTitle')}
        description={t('tools.screenDescription')}
      />
      <MolarMassTool />
      <EquationBalancerTool />
      <SolubilityTool
        cation={cation}
        anion={anion}
        onSelectCation={setCation}
        onSelectAnion={setAnion}
      />
    </Screen>
  )
}
