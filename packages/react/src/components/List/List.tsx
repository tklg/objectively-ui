import { createContext, forwardRef, useMemo } from 'react'
import { listStyles } from 'src/components/List/List.styles'
import { ListComponent, ListContextProps, ListProps } from 'src/components/List/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'List'

export const ListContext = createContext<ListContextProps>({
  compact: false,
  divided: false,
})

export const List = forwardRef<HTMLUListElement, ListProps>(({
  children,
  className: _className,
  compact,
  divided,
  noPadding,
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    compact,
    divided,
    noPadding,
  }, _className)

  const contextValue = useMemo(() => ({
    compact: compact ?? false,
    divided: divided ?? false,
  }), [compact])

  return (
    <ListContext.Provider value={contextValue}>
      <ul
        ref={ref}
        className={className}
        css={listStyles(theme)}
      >
        {children}
      </ul>
    </ListContext.Provider>
  )
}) as ListComponent

if (process.env.NODE_ENV !== 'production') {
  List.displayName = ELEMENT_NAME
}
