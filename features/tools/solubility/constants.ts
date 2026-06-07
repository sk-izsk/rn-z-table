import type { SolubilityCode } from '@/data/tools/solubility'

export const CODE_STYLES: Record<SolubilityCode, { badge: string; text: string; label: string }> = {
  S: { badge: 'bg-[#d2f5d8]', text: 'text-[#157347]', label: 'Soluble' },
  I: { badge: 'bg-[#f7d6d8]', text: 'text-[#b02a37]', label: 'Insoluble' },
  Sl: { badge: 'bg-[#f9edc8]', text: 'text-[#9d6700]', label: 'Slightly soluble' },
  D: { badge: 'bg-[#ddd9fb]', text: 'text-[#5b4abd]', label: 'Decomposes' },
}
