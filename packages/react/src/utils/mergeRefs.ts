import { MutableRefObject, Ref, RefCallback } from 'react'

export function mergeRefs<T = unknown> (
  ...refs: (MutableRefObject<T> | Ref<T> | undefined)[]
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = value
      }
    })
  }
}
