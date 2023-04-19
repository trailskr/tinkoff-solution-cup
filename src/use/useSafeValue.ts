import { MaybeRef } from '@vueuse/core'
import { WritableComputedRef } from 'vue'

import { Path, get, set } from '@/utils/path'

export const useSafeValue = <T>(data: MaybeRef<unknown>, path: Path, defaultValue?: T): WritableComputedRef<T> => {
  return computed({
    get: () => (get(unref(data), path) ?? defaultValue) as T,
    set: (v: T) => {
      set(unref(data), path, v)
    }
  })
}
