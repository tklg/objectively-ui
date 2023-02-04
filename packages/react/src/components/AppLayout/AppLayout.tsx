import { FC } from 'react'
import { appLayoutContentStyles, appLayoutStyles } from 'src/components/AppLayout/AppLayout.styles'
import { AppLayoutProps } from 'src/components/AppLayout/types'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'AppLayout'

export const AppLayout: FC<AppLayoutProps> = ({
  content,
  header,
  footer,
  leftNavigation,
  rightNavigation,
  className: _className,
}) => {

  const className = buildClassName(ELEMENT_NAME, {
    withContent: Boolean(content),
    withHeader: Boolean(header),
    withFooter: Boolean(footer),
    withLeftNavigation: Boolean(leftNavigation),
    withRightNavigation: Boolean(rightNavigation),
  }, _className)

  return (
    <div className={className} css={appLayoutStyles}>
      {header}
      {(content || leftNavigation || rightNavigation) && (
        <main css={appLayoutContentStyles}>
          {leftNavigation}
          {content}
          {rightNavigation}
        </main>
      )}
      {footer}
    </div>
  )
}
