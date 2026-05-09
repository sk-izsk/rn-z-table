import { Platform } from 'react-native'
import { createWorkletRuntime, runOnRuntime, scheduleOnRN } from 'react-native-worklets'

type Resolver = {
  resolve: (value: unknown) => void
  reject: (error: Error) => void
}

const pendingTasks = new Map<number, Resolver>()
let nextTaskId = 1
let workerRuntime: ReturnType<typeof createWorkletRuntime> | null = null

const getWorkerRuntime = () => {
  if (Platform.OS === 'web') {
    return null
  }

  if (!workerRuntime) {
    workerRuntime = createWorkletRuntime({
      name: 'chemistry-background',
    })
  }

  return workerRuntime
}

export const resolveWorkerTask = <T>(taskId: number, value: T) => {
  const pending = pendingTasks.get(taskId)
  if (!pending) {
    return
  }

  pending.resolve(value)
  pendingTasks.delete(taskId)
}

export const rejectWorkerTask = (taskId: number, message: string) => {
  const pending = pendingTasks.get(taskId)
  if (!pending) {
    return
  }

  pending.reject(new Error(message))
  pendingTasks.delete(taskId)
}

export const runOnNativeWorker = <Input, Output>(
  input: Input,
  task: (input: Input) => Output,
): Promise<Output> => {
  const runtime = getWorkerRuntime()

  if (!runtime) {
    return Promise.reject(new Error('Native worker runtime unavailable.'))
  }

  const taskId = nextTaskId++

  return new Promise<Output>((resolve, reject) => {
    pendingTasks.set(taskId, {
      resolve: (value) => resolve(value as Output),
      reject,
    })

    runOnRuntime(runtime, (payload: Input, id: number) => {
      'worklet'

      try {
        const result = task(payload)
        scheduleOnRN(resolveWorkerTask<Output>, id, result)
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Worker task failed.'
        scheduleOnRN(rejectWorkerTask, id, message)
      }
    })(input, taskId)
  })
}
