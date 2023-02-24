import { createContext, forwardRef, useMemo } from 'react'
import { appLayoutContentStyles, appLayoutStyles } from 'src/components/AppLayout/AppLayout.styles'
import { AppLayoutContextProps, AppLayoutProps } from 'src/components/AppLayout/types'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'AppLayout'

export const AppLayoutContext = createContext<AppLayoutContextProps>({
  maxWidth: '900px',
})

export const AppLayout = forwardRef<HTMLDivElement, AppLayoutProps>(({
  content,
  header,
  footer,
  leftNavigation,
  rightNavigation,
  fullWidth = false,
  maxWidth = 1200,
  className: _className,
}, ref) => {
  const className = buildClassName(ELEMENT_NAME, {
    withContent: Boolean(content),
    withHeader: Boolean(header),
    withFooter: Boolean(footer),
    withLeftNavigation: Boolean(leftNavigation),
    withRightNavigation: Boolean(rightNavigation),
    fullWidth,
  }, _className)

  const value = useMemo(() => ({
    maxWidth: fullWidth ? '100%' : typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
  }), [maxWidth, fullWidth])

  return (
    <AppLayoutContext.Provider value={value}>
      <div className={className} css={appLayoutStyles} ref={ref}>
        {header}
        {(content || leftNavigation || rightNavigation) && (
          <main css={appLayoutContentStyles(value.maxWidth)}>
            {leftNavigation}
            {content}
            {rightNavigation}
          </main>
        )}
        {footer}
      </div>
    </AppLayoutContext.Provider>
  )
})

if (process.env.NODE_ENV !== 'production') {
  AppLayout.displayName = ELEMENT_NAME
}
