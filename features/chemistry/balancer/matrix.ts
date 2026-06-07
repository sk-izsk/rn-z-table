import {
  add,
  divide,
  fraction,
  isZero,
  multiply,
  one,
  subtract,
  zero,
  type Fraction,
} from './fractions'

export type Matrix = Fraction[][]

export type RrefResult = {
  matrix: Matrix
  pivotColumns: number[]
  freeColumns: number[]
}

export const toRref = (matrix: Matrix): RrefResult => {
  const rows = matrix.map((row) => row.map((value) => fraction(value.numerator, value.denominator)))
  const pivotColumns: number[] = []
  let pivotRow = 0
  const columnCount = rows[0]?.length ?? 0

  for (let col = 0; col < columnCount && pivotRow < rows.length; col++) {
    let rowWithPivot = -1
    for (let row = pivotRow; row < rows.length; row++) {
      if (!isZero(rows[row][col])) {
        rowWithPivot = row
        break
      }
    }

    if (rowWithPivot === -1) {
      continue
    }

    ;[rows[pivotRow], rows[rowWithPivot]] = [rows[rowWithPivot], rows[pivotRow]]

    const pivot = rows[pivotRow][col]
    for (let c = col; c < rows[pivotRow].length; c++) {
      rows[pivotRow][c] = divide(rows[pivotRow][c], pivot)
    }

    for (let row = 0; row < rows.length; row++) {
      if (row === pivotRow || isZero(rows[row][col])) {
        continue
      }

      const factor = rows[row][col]
      for (let c = col; c < rows[row].length; c++) {
        rows[row][c] = subtract(rows[row][c], multiply(factor, rows[pivotRow][c]))
      }
    }

    pivotColumns.push(col)
    pivotRow++
  }

  const pivotSet = new Set(pivotColumns)
  const freeColumns = Array.from({ length: columnCount }, (_, index) => index).filter(
    (index) => !pivotSet.has(index),
  )

  return { matrix: rows, pivotColumns, freeColumns }
}

export const buildNullSpaceBasis = ({
  matrix: rref,
  pivotColumns,
  freeColumns,
}: RrefResult): Matrix => {
  const columnCount = rref[0]?.length ?? 0

  return freeColumns.map((freeColumn) => {
    const solution = Array.from({ length: columnCount }, zero)
    solution[freeColumn] = one()

    for (let row = pivotColumns.length - 1; row >= 0; row--) {
      const pivotColumn = pivotColumns[row]
      let value = zero()

      for (const col of freeColumns) {
        value = subtract(value, multiply(rref[row][col], solution[col]))
      }

      solution[pivotColumn] = value
    }

    return solution
  })
}

export const combineBasis = ({
  basis,
  weights,
}: {
  basis: Matrix
  weights: number[]
}): Fraction[] =>
  basis[0].map((_, coefficientIndex) =>
    weights.reduce(
      (sum, weight, basisIndex) =>
        add(sum, multiply(fraction(weight), basis[basisIndex][coefficientIndex])),
      zero(),
    ),
  )
