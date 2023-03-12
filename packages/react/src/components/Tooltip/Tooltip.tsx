import { Modifier } from '@popperjs/core'
import { cloneElement, forwardRef, useEffect, useId, useMemo, useState } from 'react'
import { usePopper } from 'react-popper'
import { Portal } from 'src/components/Portal'
import { tooltipArrowStyles, tooltipStyles } from 'src/components/Tooltip/Tooltip.styles'
import { TooltipProps } from 'src/components/Tooltip/types'
import { useRawTheme, useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'
import { mergeRefs } from 'src/utils/mergeRefs'

const ELEMENT_NAME = 'Tooltip'

export const Tooltip = forwardRef<Element, TooltipProps>(({
  children,
  title = '',
  placement = 'top',
  arrow = false,
  open: controlledOpen = undefined,
  className: _className,
}, ref) => {
  const [containerEl, setContainerEl] = useState<Element | null>(null)
  const [tooltipEl, setTooltipEl] = useState<HTMLElement | null>(null)
  const [arrowEl, setArrowEl] = useState<HTMLElement | null>(null)
  const theme = useTheme()
  const rawTheme = useRawTheme()
  const id = useId()
  const offset = rawTheme.spacing.xs
  const [open, setOpen] = useState(controlledOpen ?? false)

  const isOpen = Boolean(open || controlledOpen)

  const popperModifiers = useMemo(() => {
    return [
      arrowEl && { name: 'arrow', options: { element: arrowEl }},
      { name: 'eventListeners', enabled: isOpen },
      { name: 'offset', options: { offset: [0, offset]}},
    ].filter(Boolean) as Partial<Modifier<string, object>>[]
  }, [arrowEl, offset, isOpen])

  const { styles, attributes, update: updatePopper } = usePopper(containerEl, tooltipEl, {
    modifiers: popperModifiers,
    placement,
    strategy: 'fixed',
  })

  useEffect(() => {
    if (isOpen) {
      updatePopper?.()
    }
  }, [isOpen, updatePopper])

  useEffect(() => {
    const handleFocus = () => setOpen(true)
    const handleBlur = () => setOpen(false)

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
  }, [containerEl, updatePopper])

  const className = buildClassName(ELEMENT_NAME, {
    arrow,
  }, _className)

  const getChildProps = () => {
    const props: Record<string, unknown> = {}
    if (children.props?.children) {
      return props
    }

    if (isOpen) {
      props['aria-labelledby'] = id
    } else {
      props['aria-label'] = children.props?.['aria-label'] || (typeof title === 'string' ? title : undefined)
    }

    return props
  }

  const childElement = cloneElement(children, {
    ref: mergeRefs(ref, el => setContainerEl(el)),
    ...getChildProps(),
  })

  return (
    <>
      {childElement}
      {isOpen && (
        <Portal>
          <div
            ref={setTooltipEl}
            style={styles.popper}
            {...attributes.popper}
            css={tooltipStyles(theme, isOpen)}
            className={className}
            id={id}
          >
            <span>{title}</span>
            {arrow && (
              <span
                ref={setArrowEl}
                style={styles.arrow}
                css={tooltipArrowStyles}
              />
            )}
          </div>
        </Portal>
      )}
    </>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = ELEMENT_NAME
}
