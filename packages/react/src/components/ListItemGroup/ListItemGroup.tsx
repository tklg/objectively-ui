import { forwardRef } from 'react'
import { useListContext } from 'src/components/List/useListContext'
import { listItemGroupInnerListStyles, listItemGroupStyles, listItemGroupSubheadingStyles } from 'src/components/ListItemGroup/ListItemGroup.styles'
import { ListItemGroupComponent, ListItemGroupProps } from 'src/components/ListItemGroup/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'ListItemGroup'

export const ListItemGroup = forwardRef<HTMLLIElement, ListItemGroupProps>(({
  children,
  subheading,
  className: _className,
}, ref) => {
  const { compact } = useListContext()
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    compact,
  }, _className)
  const innerListClassName = buildClassName(`${ELEMENT_NAME}InnerList`)
  const subheadingClassName = buildClassName(`${ELEMENT_NAME}Subheading`)

  return (
    <li
      ref={ref}
      className={className}
      css={listItemGroupStyles(theme)}
    >
      <ul className={innerListClassName} css={listItemGroupInnerListStyles(theme)}>
        <li className={subheadingClassName} css={listItemGroupSubheadingStyles(theme)}>{subheading}</li>
        {children}
      </ul>
    </li>
  )
}) as ListItemGroupComponent

if (process.env.NODE_ENV !== 'production') {
  ListItemGroup.displayName = ELEMENT_NAME
}
