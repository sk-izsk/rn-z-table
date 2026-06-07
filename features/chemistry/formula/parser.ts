import { addCount, mergeCounts } from './counts'
import { normalizeFormula } from './normalize'
import { readElementSymbol } from './tokenizer'
import type { FormulaCounts, FormulaParseResult, ParseGroupResult } from './types'

const readNumber = (formula: string, index: number): { value: number; nextIndex: number } => {
  let end = index
  while (/\d/u.test(formula[end] ?? '')) {
    end++
  }

  if (end === index) {
    return { value: 1, nextIndex: index }
  }

  return { value: Number(formula.slice(index, end)), nextIndex: end }
}

const parseNestedGroup = ({
  counts,
  formula,
  index,
}: {
  counts: FormulaCounts
  formula: string
  index: number
}): ParseGroupResult => {
  const close = formula[index] === '(' ? ')' : ']'
  const group = parseGroup({ formula, startIndex: index + 1, terminator: close })
  if (!group.ok) {
    return group
  }

  const multiplier = readNumber(formula, group.nextIndex)
  mergeCounts({ target: counts, source: group.counts, multiplier: multiplier.value })
  return { ok: true, counts, nextIndex: multiplier.nextIndex }
}

const parseGroup = ({
  formula,
  startIndex,
  terminator,
}: {
  formula: string
  startIndex: number
  terminator?: ')' | ']'
}): ParseGroupResult => {
  const counts: FormulaCounts = {}
  let index = startIndex

  while (index < formula.length) {
    const char = formula[index]

    if (terminator && char === terminator) {
      return { ok: true, counts, nextIndex: index + 1 }
    }

    if (char === ')' || char === ']') {
      return { ok: false, error: `Unexpected "${char}" in formula.` }
    }

    if (char === '(' || char === '[') {
      const group = parseNestedGroup({ counts, formula, index })
      if (!group.ok) {
        return group
      }
      index = group.nextIndex
      continue
    }

    if (!/[A-Z]/u.test(char)) {
      return { ok: false, error: `Invalid token "${char}" in formula.` }
    }

    const { nextIndex, symbol } = readElementSymbol(formula, index)
    index = nextIndex
    const amount = readNumber(formula, index)
    addCount({ counts, symbol, count: amount.value })
    index = amount.nextIndex
  }

  if (terminator) {
    return { ok: false, error: `Missing "${terminator}" in formula.` }
  }

  return { ok: true, counts, nextIndex: index }
}

export const parseChemicalFormula = (formula: string): FormulaParseResult => {
  const normalized = normalizeFormula(formula)

  if (!normalized) {
    return { ok: false, error: 'Formula is empty.' }
  }

  const parsed = parseGroup({ formula: normalized, startIndex: 0 })
  if (!parsed.ok) {
    return parsed
  }

  return { ok: true, counts: parsed.counts }
}
