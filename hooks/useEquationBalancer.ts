import { runDeferredTask } from '@/lib/worker-fallback'
import { balanceEquation, type BalanceResult } from '@/utils/balancer'
import { useCallback, useState } from 'react'

type EquationBalancerState = {
  pending: boolean
  result: BalanceResult | null
  run: (input: string) => Promise<void>
}

export const useEquationBalancer = (): EquationBalancerState => {
  const [pending, setPending] = useState(false)
  const [result, setResult] = useState<BalanceResult | null>(null)

  const run = useCallback(async (input: string) => {
    setPending(true)

    try {
      const nextResult = await runDeferredTask(() => balanceEquation(input))
      setResult(nextResult)
    } finally {
      setPending(false)
    }
  }, [])

  return {
    pending,
    result,
    run,
  }
}
