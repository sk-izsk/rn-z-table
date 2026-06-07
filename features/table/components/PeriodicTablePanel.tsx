import { Panel } from '@/components/ui/Panel'
import type { Element } from '@/data/elements/elements'
import { ScrollView, View } from 'react-native'
import { PeriodicTableGrid, periodicTableGridSize } from './PeriodicTableGrid'
import { PeriodicTablePanelHeader } from './PeriodicTablePanelHeader'
import { PeriodicTableSeries } from './PeriodicTableSeries'

export const PeriodicTablePanel = ({
  indexedLabel,
  matrixLabel,
  lanthanidesLabel,
  actinidesLabel,
  lanthanidesRangeLabel,
  actinidesRangeLabel,
  matchedElementNumbers,
  hasFilter,
  onPressElement,
}: {
  indexedLabel: string
  matrixLabel: string
  lanthanidesLabel: string
  actinidesLabel: string
  lanthanidesRangeLabel: string
  actinidesRangeLabel: string
  matchedElementNumbers: Set<number>
  hasFilter: boolean
  onPressElement: (element: Element) => void
}) => (
  <Panel className="overflow-hidden px-4 py-4">
    <View className="absolute left-[-24] top-[-12] h-28 w-32 rounded-full bg-[#dff2f8]" />
    <View className="absolute right-[-36] top-12 h-36 w-36 rounded-full bg-[#eef8fb]" />
    <PeriodicTablePanelHeader indexedLabel={indexedLabel} matrixLabel={matrixLabel} />

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ width: periodicTableGridSize.width }} className="pr-2">
        <PeriodicTableGrid
          matchedElementNumbers={matchedElementNumbers}
          hasFilter={hasFilter}
          onPressElement={onPressElement}
        />
        <PeriodicTableSeries
          actinidesLabel={actinidesLabel}
          actinidesRangeLabel={actinidesRangeLabel}
          hasFilter={hasFilter}
          lanthanidesLabel={lanthanidesLabel}
          lanthanidesRangeLabel={lanthanidesRangeLabel}
          matchedElementNumbers={matchedElementNumbers}
          onPressElement={onPressElement}
        />
      </View>
    </ScrollView>
  </Panel>
)
