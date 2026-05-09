const SUBSCRIPT_DIGITS: Record<string, string> = {
  '0': '₀',
  '1': '₁',
  '2': '₂',
  '3': '₃',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '₇',
  '8': '₈',
  '9': '₉',
}

const SUPERSCRIPT_DIGITS: Record<string, string> = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
}

const toSubscript = (value: string): string =>
  value
    .split('')
    .map((char) => SUBSCRIPT_DIGITS[char] ?? char)
    .join('')

const toSuperscript = (value: string): string =>
  value
    .split('')
    .map((char) => SUPERSCRIPT_DIGITS[char] ?? char)
    .join('')

export const formatFormulaDisplay = (formula: string): string =>
  formula
    .replace(/(\d+)/gu, (_, digits: string) => toSubscript(digits))
    .replace(/\^(\d+)([+-])/gu, (_, digits: string, sign: string) => {
      return `${toSuperscript(digits)}${sign === '+' ? '⁺' : '⁻'}`
    })
    .replace(/([A-Za-z)\]])([+-])/gu, (_, prefix: string, sign: string) => {
      return `${prefix}${sign === '+' ? '⁺' : '⁻'}`
    })
