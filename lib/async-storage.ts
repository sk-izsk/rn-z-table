import AsyncStorage from '@react-native-async-storage/async-storage'
import type { StateStorage } from 'zustand/middleware'
import { createJSONStorage } from 'zustand/middleware'

export const appStorage: StateStorage = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name)
    return value ?? null
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, value)
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name)
  },
}

export const zustandStorage = createJSONStorage(() => appStorage)

export const readPersistedJSON = async <T>(key: string): Promise<T | null> => {
  const raw = await AsyncStorage.getItem(key)
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
