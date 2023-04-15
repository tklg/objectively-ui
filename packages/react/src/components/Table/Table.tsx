import { jsx } from '@emotion/react'
import { forwardRef } from 'react'
import { tableStyles } from 'src/components/Table/Table.styles'
import { TableComponent, TableProps } from 'src/components/Table/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Table'

export const Table = forwardRef<HTMLElement, TableProps>(({
  className: _className,
  children,
  as = 'table',
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)

  return jsx(as, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref,
    className,
    ...props,
    css: tableStyles(theme),
  }, children)
}) as TableComponent

if (process.env.NODE_ENV !== 'production') {
  Table.displayName = ELEMENT_NAME
}
