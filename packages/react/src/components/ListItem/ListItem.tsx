import { css } from '@emotion/react'
import { forwardRef, useMemo } from 'react'
import { useListContext } from 'src/components/List/useListContext'
import { listItemButtonStyles, listItemStyles, listItemContentStyles, listItemTextStyles, listItemSubtextStyles } from 'src/components/ListItem/ListItem.styles'
import { ListItemComponent, ListItemProps } from 'src/components/ListItem/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'ListItem'

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({
  children,
  description,
  selected,
  button,
  className: _className,
  onClick,
}, ref) => {
  const { divided, compact } = useListContext()
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    selected,
    button,
    divided,
    joined: !divided,
    compact,
    description: Boolean(description),
  }, _className)
  const listItemTextClassName = buildClassName(`${ELEMENT_NAME}Text`)
  const listItemTextDesciptionClassName = buildClassName(`${ELEMENT_NAME}Subtext`)

  const content = useMemo(() => (
    <div
      css={listItemContentStyles(theme)}
      data-selected={selected}
    >
      <div css={css({ width: '100%' })}>
        <span className={listItemTextClassName} css={listItemTextStyles(theme)}>{children}</span>
        {description && <span className={listItemTextDesciptionClassName} css={listItemSubtextStyles(theme)}>{description}</span>}
      </div>
    </div>
  ), [description, children, listItemTextClassName, listItemTextDesciptionClassName, theme])

  return (
    <li
      ref={ref}
      className={className}
      css={listItemStyles(theme)}
    >
      {button ? (
        <button
          css={listItemButtonStyles(theme)}
          onClick={onClick}
        >
          {content}
        </button>
      ) : (
        content
      )}
    </li>
  )
}) as ListItemComponent

if (process.env.NODE_ENV !== 'production') {
  ListItem.displayName = ELEMENT_NAME
}
