import { ACTINIDES, LANTHANIDES } from '@/data/periodicTableData'
import type { Element } from '@/data/elements/elements'
import { View } from 'react-native'
import { TableSeriesRow } from './TableSeriesRow'

export const PeriodicTableSeries = ({
  actinidesLabel,
  actinidesRangeLabel,
  hasFilter,
  lanthanidesLabel,
  lanthanidesRangeLabel,
  matchedElementNumbers,
  onPressElement,
}: {
  actinidesLabel: string
  actinidesRangeLabel: string
  hasFilter: boolean
  lanthanidesLabel: string
  lanthanidesRangeLabel: string
  matchedElementNumbers: Set<number>
  onPressElement: (element: Element) => void
}) => (
  <View>
    <TableSeriesRow
      title={`${lanthanidesLabel} (${lanthanidesRangeLabel})`}
      elements={LANTHANIDES}
      matchedNumbers={matchedElementNumbers}
      hasFilter={hasFilter}
      onPressElement={onPressElement}
    />
    <TableSeriesRow
      title={`${actinidesLabel} (${actinidesRangeLabel})`}
      elements={ACTINIDES}
      matchedNumbers={matchedElementNumbers}
      hasFilter={hasFilter}
      onPressElement={onPressElement}
    />
  </View>
)
