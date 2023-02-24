import { KeyboardEvent, useCallback } from 'react'

type KeyboardEventType = 'keydown' | 'keyup'

export const useKeyboardEvents = <TElement extends Element>(
  keys: string | string[],
  handler: (e: KeyboardEvent<TElement>) => void,
  events: KeyboardEventType | KeyboardEventType[],
) => {
  if (!Array.isArray(keys)) keys = [keys]
  if (!Array.isArray(events)) events = [events]

  const bindHandler = useCallback((event: KeyboardEventType) => {
    const eventHandler = (e: KeyboardEvent<TElement>) => {
      if (!keys.length || keys.includes(e.key)) {
        handler?.(e)
      }
    }

    if (events.includes(event)) {
      return (e: KeyboardEvent<TElement>) => eventHandler(e)
    } else {
      return () => null
    }
  }, [events, handler, keys])

  return {
    onKeyDown: bindHandler('keydown'),
    onKeyPress: bindHandler('keyup'),
    onKeyUp: bindHandler('keyup'),
  }
}
