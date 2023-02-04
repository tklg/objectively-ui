import { forwardRef, useMemo } from 'react'
import { headingActionStyles, headingContainerStyles, headingStyles, headingSubHeadingStyles, headingTopHeadingStyles } from 'src/components/Heading/Heading.styles'
import { HeadingProps } from 'src/components/Heading/types'
import { useTheme } from 'src/hooks/useTheme'
import { HtmlHeadingLevel } from 'src/types/headings'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Heading'

export const Heading = forwardRef<HTMLDivElement, HeadingProps>(({
  children,
  className: _className,
  level = 'h1',
  subheading,
  action,
}, ref) => {
  const theme = useTheme()
  const HeadingTag = level
  const SubheadingTag = useMemo<HtmlHeadingLevel | 'p'>(() => level === 'h6' ? 'p' : `h${+level[1] + 1}` as HtmlHeadingLevel, [level])
  const className = buildClassName(ELEMENT_NAME, {
    [level]: true,
    withSubHeading: Boolean(subheading),
  }, _className)

  return (
    <div
      ref={ref}
      className={className}
      css={headingStyles(theme)}
    >
      <div css={headingContainerStyles(theme)}>
        <HeadingTag css={headingTopHeadingStyles(theme)}>{children}</HeadingTag>
        {subheading && <SubheadingTag css={headingSubHeadingStyles(theme)}>{subheading}</SubheadingTag>}
      </div>
      {action && (
        <div className={buildClassName(`${ELEMENT_NAME}Action`)} css={headingActionStyles(theme)}>
          {action}
        </div>
      )}
    </div>
  )
})

Heading.displayName = ELEMENT_NAME
