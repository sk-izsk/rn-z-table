export const runDeferredTask = async <T>(task: () => T | Promise<T>): Promise<T> => {
  await Promise.resolve()
  return task()
}
