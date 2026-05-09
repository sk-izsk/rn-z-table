import AsyncStorage from '@react-native-async-storage/async-storage'
import type { StateStorage } from 'zustand/middleware'
import { createJSONStorage } from 'zustand/middleware'

const memoryStorage = new Map<string, string>()
let nativeStorageAvailable = true

const getFallbackItem = (name: string) => memoryStorage.get(name) ?? null

const markNativeStorageUnavailable = () => {
  nativeStorageAvailable = false
}

const safeGetItem = async (name: string) => {
  if (!nativeStorageAvailable) {
    return getFallbackItem(name)
  }

  try {
    const value = await AsyncStorage.getItem(name)
    return value ?? null
  } catch {
    markNativeStorageUnavailable()
    return getFallbackItem(name)
  }
}

const safeSetItem = async (name: string, value: string) => {
  memoryStorage.set(name, value)

  if (!nativeStorageAvailable) {
    return
  }

  try {
    await AsyncStorage.setItem(name, value)
  } catch {
    markNativeStorageUnavailable()
  }
}

const safeRemoveItem = async (name: string) => {
  memoryStorage.delete(name)

  if (!nativeStorageAvailable) {
    return
  }

  try {
    await AsyncStorage.removeItem(name)
  } catch {
    markNativeStorageUnavailable()
  }
}

export const appStorage: StateStorage = {
  getItem: async (name) => safeGetItem(name),
  setItem: async (name, value) => safeSetItem(name, value),
  removeItem: async (name) => safeRemoveItem(name),
}

export const zustandStorage = createJSONStorage(() => appStorage)

export const readPersistedJSON = async <T>(key: string): Promise<T | null> => {
  const raw = await safeGetItem(key)
  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export const readPersistedStoreState = async <T>(key: string): Promise<Partial<T> | null> => {
  const persisted = await readPersistedJSON<{ state?: Partial<T> } | Partial<T>>(key)

  if (!persisted) {
    return null
  }

  if (
    typeof persisted === 'object' &&
    'state' in persisted &&
    typeof persisted.state === 'object' &&
    persisted.state
  ) {
    return persisted.state as Partial<T>
  }

  return persisted as Partial<T>
}
