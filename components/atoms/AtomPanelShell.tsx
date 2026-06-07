import { AtomRenderer } from '@/components/atoms/AtomRenderer'
import type { Element } from '@/data/elements/elements'
import { AtomPanelFooter } from '@/features/elements/components/atom/AtomPanelFooter'
import { AtomPanelHeader } from '@/features/elements/components/atom/AtomPanelHeader'
import { useAtomShells } from '@/hooks/useAtomShells'
import { useAppTranslation } from '@/i18n/localize'
import type { ElementIsotope } from '@/types/elementProfile'
import { View } from 'react-native'

type AtomPanelShellProps = {
  element: Element
  isotope: ElementIsotope | null
  paused: boolean
  speed: number
  topView: boolean
  onTogglePaused: () => void
  onToggleTopView: () => void
  onResetView: () => void
}

export const AtomPanelShell = ({
  element,
  isotope,
  paused,
  speed,
  topView,
  onTogglePaused,
  onToggleTopView,
  onResetView,
}: AtomPanelShellProps) => {
  const { t } = useAppTranslation()
  const neutronCount = isotope?.neutronCount ?? Math.max(0, Math.round(element.mass) - element.n)
  const shells = useAtomShells(element)

  return (
    <View className="overflow-hidden rounded-[30px] border border-[#d7e4ed] bg-[#f8fbfd] shadow-panel dark:border-line-dark dark:bg-panel-dark">
      <AtomPanelHeader element={element} isotope={isotope} shellModelLabel={t('atom.shellModel')} />
      <View className="items-center bg-[#eef6fb] px-4 py-10 dark:bg-panel-muted-dark">
        <AtomRenderer
          element={element}
          isotope={isotope}
          paused={paused}
          speed={speed}
          topView={topView}
        />
      </View>
      <AtomPanelFooter
        controlsHint={t('atom.controlsHint')}
        motionLabel={t('atom.motion')}
        motionValue={paused ? t('atom.paused') : topView ? t('atom.topView') : t('atom.orbiting')}
        neutronCount={neutronCount}
        neutronsLabel={t('atom.neutrons')}
        nucleusLabel={t('atom.nucleus')}
        onResetView={onResetView}
        onTogglePaused={onTogglePaused}
        onToggleTopView={onToggleTopView}
        paused={paused}
        protonsLabel={t('atom.protons')}
        protonCount={element.n}
        shells={shells}
        topView={topView}
      />
    </View>
  )
}
