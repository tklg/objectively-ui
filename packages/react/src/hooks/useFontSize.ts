import { useMemo } from 'react'

export const useFontSize = (el: Element | undefined): number => {
  return useMemo(() => el ? parseFloat(getComputedStyle(el.parentElement ?? document.documentElement).fontSize) : 0, [el])
}

export const useSizeAsPx = (el: Element | undefined, size: number | string): number => {
  if (typeof size === 'number') {
    return size
  } else if (size.endsWith('rem')) {
    const scale = +size.replace('rem', '')
    const htmlSize = +getComputedStyle(document.documentElement).fontSize
    return htmlSize * scale
  } else if (size.endsWith('em')) {
    const scale = +size.replace('em', '')
    const parentSize = +getComputedStyle(el?.parentElement ?? document.documentElement).fontSize
    return parentSize * scale
  } else if (size.endsWith('px')) {
    return +size.replace('px', '')
  } else {
    throw new Error(`Unsupported size: ${size}`)
  }
}
