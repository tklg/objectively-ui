import { jsx } from '@emotion/react'
import { forwardRef } from 'react'
import { tableRowStyles } from 'src/components/Table/Table.styles'
import { TableRowComponent, TableRowProps } from 'src/components/Table/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TableRow'

export const TableRow = forwardRef<HTMLDivElement, TableRowProps>(({
  className: _className,
  children,
  as = 'tr',
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
    css: tableRowStyles(theme),
  }, children)
}) as TableRowComponent

if (process.env.NODE_ENV !== 'production') {
  TableRow.displayName = ELEMENT_NAME
}
