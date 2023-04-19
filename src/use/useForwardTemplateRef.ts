import { MaybeElement, UnRefElementReturn } from '@vueuse/core'

export interface UseForwardTemplateRefResult {
  ref: globalThis.Ref<UnRefElementReturn>
  refFn: (el: MaybeElement) => void
}

export const useForwardTemplateRef = (onElementSet?: (el: UnRefElementReturn | undefined) => void): UseForwardTemplateRefResult => {
  const element = ref<UnRefElementReturn>()

  const refFn = (el: MaybeElement): void => {
    element.value = el ? unrefElement(el) : undefined
    if (onElementSet) onElementSet(element.value)
  }

  return { ref: element, refFn }
}
