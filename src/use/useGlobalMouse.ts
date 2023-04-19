import { throttleRequestAnimationFrame } from '@/utils/utils'

const x = ref(0)
const y = ref(0)
const lastComposedPath = ref<EventTarget[]>([])
const [throttledOnMouseMove, clear] = throttleRequestAnimationFrame((e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
})

const onMouseMove = (e: MouseEvent): void => {
  e.composedPath()
  // composed path will be empty if used not sync
  lastComposedPath.value = e.composedPath()
  throttledOnMouseMove(e)
}

export interface UseGlobalMouseResult {
  x: Readonly<Ref<number>>
  y: Readonly<Ref<number>>
  lastComposedPath: Readonly<Ref<EventTarget[]>>
}

let usedHandlers = 0
export const useGlobalMouse = (): UseGlobalMouseResult => {
  if (usedHandlers === 0) {
    document.addEventListener('mousemove', onMouseMove, false)
  }
  usedHandlers++
  onBeforeUnmount(() => {
    usedHandlers--
    if (usedHandlers === 0) {
      document.removeEventListener('mousemove', onMouseMove, false)
      clear()
    }
  })

  return { x, y, lastComposedPath }
}
