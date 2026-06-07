export type FormulaCounts = Record<string, number>

export type FormulaParseResult = { ok: true; counts: FormulaCounts } | { ok: false; error: string }

export type ParseGroupResult =
  | { ok: true; counts: FormulaCounts; nextIndex: number }
  | { ok: false; error: string }
