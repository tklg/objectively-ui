import { KeyboardEvent, useCallback } from 'react'

type KeyboardEventType = 'keydown' | 'keyup'

export const useKeyboardEvents = (
  keys: string | string[],
  handler: (e: KeyboardEvent) => void,
  events: KeyboardEventType | KeyboardEventType[],
) => {
  if (!Array.isArray(keys)) keys = [keys]
  if (!Array.isArray(events)) events = [events]

  const bindHandler = useCallback((event: KeyboardEventType) => {
    const eventHandler = (e: KeyboardEvent) => {
      if (!keys.length || keys.includes(e.key)) {
        handler?.(e)
      }
    }

    if (events.includes(event)) {
      return (e: KeyboardEvent) => eventHandler(e)
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
