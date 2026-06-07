import { ElementCell, elementCellSize } from '@/components/table/ElementCell'
import { MAIN_GRID_CELLS } from '@/data/periodicTableData'
import type { Element } from '@/data/elements/elements'
import { PlaceholderCell } from './PlaceholderCell'
import { View } from 'react-native'

const { width: cellWidth, height: cellHeight, gap } = elementCellSize
const gridWidth = 18 * cellWidth + 17 * gap
const gridHeight = 7 * cellHeight + 6 * gap

export const periodicTableGridSize = {
  width: gridWidth,
  height: gridHeight,
}

const getCellPosition = (col: number, row: number) => ({
  left: 8 + (col - 1) * (cellWidth + gap),
  top: 8 + (row - 1) * (cellHeight + gap),
})

export const PeriodicTableGrid = ({
  matchedElementNumbers,
  hasFilter,
  onPressElement,
}: {
  matchedElementNumbers: Set<number>
  hasFilter: boolean
  onPressElement: (element: Element) => void
}) => (
  <View
    style={{ width: gridWidth, height: gridHeight }}
    className="relative rounded-[24px] border border-[#dde9f0] bg-[#f6fbfd] p-2 dark:border-line-dark dark:bg-panel-dark"
  >
    {MAIN_GRID_CELLS.map((cell) => {
      const position = getCellPosition(cell.col, cell.row)

      if (cell.kind === 'placeholder') {
        return (
          <View key={cell.key} style={{ position: 'absolute', ...position }}>
            <PlaceholderCell label={cell.label} />
          </View>
        )
      }

      const isMatch = matchedElementNumbers.has(cell.element.n)

      return (
        <View key={cell.key} style={{ position: 'absolute', ...position }}>
          <ElementCell
            element={cell.element}
            dimmed={hasFilter && !isMatch}
            highlighted={hasFilter && isMatch}
            onPress={onPressElement}
          />
        </View>
      )
    })}
  </View>
)
