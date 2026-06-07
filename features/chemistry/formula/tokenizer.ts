export const readElementSymbol = (formula: string, index: number) => {
  let symbol = formula[index]
  let nextIndex = index + 1

  if (/[a-z]/u.test(formula[nextIndex] ?? '')) {
    symbol += formula[nextIndex]
    nextIndex++
  }

  return {
    symbol,
    nextIndex,
  }
}
