import { forwardRef, useMemo } from 'react'
import { headerStyles, headerSubHeadingStyles, headerTopHeadingStyles } from 'src/components/Heading/Heading.styles'
import { HeadingProps } from 'src/components/Heading/types'
import { useTheme } from 'src/hooks/useTheme'
import { ColorTheme } from 'src/types/ColorTheme'
import { HtmlHeadingLevel } from 'src/types/headings'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Heading'

export const Heading = forwardRef<HTMLDivElement, HeadingProps>(({
  children,
  className: _className,
  level = 'h1',
  subheading,
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
      css={headerStyles(theme)}
    >
      <HeadingTag css={headerTopHeadingStyles(theme)}>{children}</HeadingTag>
      {subheading && <SubheadingTag css={headerSubHeadingStyles(theme)}>{subheading}</SubheadingTag>}
    </div>
  )
})

Heading.displayName = ELEMENT_NAME
