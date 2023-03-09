import { useEffect, useState } from 'react'
import { createPopper, Instance } from '@popperjs/core'
import { useRawTheme } from 'src/hooks/useTheme'

export const usePopper2 = (containerEl: Element | null, popperEl: HTMLElement | null) => {
  const [popperInstance, setPopperInstance] = useState<Instance | null>(null)
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({
    styles: {
      popper: {
        position: 'absolute',
        left: 0,
        top: 0,
      },
      arrow: {
        position: 'absoute',
      },
    },
    attributes: {},
  })

  const rawTheme = useRawTheme()
  const offset = rawTheme.spacing.sm

  useEffect(() => {
    const setEventListenersEnabled = (enabled: boolean) => {
      popperInstance?.setOptions(options => ({
        ...options,
        modifiers: [
          ...(options.modifiers ?? []),
          { name: 'eventListeners', enabled },
        ],
      }))
    }
    const handleFocus = () => {
      if (popperInstance) {
        setOpen(true)
        setEventListenersEnabled(true)
        popperInstance.update()
      }
    }
    const handleBlur = () => {
      if (popperInstance) {
        setOpen(false)
        setEventListenersEnabled(false)
        popperInstance.update()
      }
    }

    containerEl?.addEventListener('mouseenter', handleFocus)
    containerEl?.addEventListener('focus', handleFocus)
    containerEl?.addEventListener('mouseleave', handleBlur)
    containerEl?.addEventListener('blur', handleBlur)
    return () => {
      containerEl?.removeEventListener('mouseenter', handleFocus)
      containerEl?.removeEventListener('focus', handleFocus)
      containerEl?.removeEventListener('mouseleave', handleBlur)
      containerEl?.removeEventListener('blur', handleBlur)
    }
  }, [containerEl, popperInstance])

  useEffect(() => {
    if (containerEl && popperEl) {
      const instance = createPopper(containerEl, popperEl, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, offset],
            },
          },
        ],
      })
      setPopperInstance(instance)
    }
  }, [containerEl, popperEl, offset])

  popperInstance?.state.styles
}
