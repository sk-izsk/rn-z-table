import { Platform } from 'react-native'
import { runOnNativeWorker } from '@/workers/runtimeBridge'

export const runDeferredTask = async <T>(task: () => T | Promise<T>): Promise<T> => {
  await Promise.resolve()
  return task()
}

export const runNativeTaskWithFallback = async <Input, Output>(
  input: Input,
  nativeTask: (input: Input) => Output,
  fallbackTask: (input: Input) => Output | Promise<Output>,
): Promise<Output> => {
  if (Platform.OS === 'web') {
    return fallbackTask(input)
  }

  try {
    return await runOnNativeWorker(input, nativeTask)
  } catch {
    return fallbackTask(input)
  }
}
