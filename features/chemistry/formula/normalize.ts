const SUBSCRIPT_DIGITS: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
}

export const normalizeFormula = (formula: string): string =>
  formula
    .trim()
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/gu, (digit) => SUBSCRIPT_DIGITS[digit] ?? digit)
    .replace(/\s+/gu, '')
