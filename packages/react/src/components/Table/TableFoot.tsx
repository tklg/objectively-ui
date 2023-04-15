import { jsx } from '@emotion/react'
import { forwardRef } from 'react'
import { tableFootStyles } from 'src/components/Table/Table.styles'
import { TableProvider } from 'src/components/Table/TableContext'
import { TableFootComponent, TableFootProps } from 'src/components/Table/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TableFoot'

export const TableFoot = forwardRef<HTMLDivElement, TableFootProps>(({
  className: _className,
  children,
  as = 'tfoot',
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)

  return (
    <TableProvider section='foot'>
      {jsx(as, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref,
        className,
        ...props,
        css: tableFootStyles(theme),
      }, children)
      }
    </TableProvider>
  )
}) as TableFootComponent

if (process.env.NODE_ENV !== 'production') {
  TableFoot.displayName = ELEMENT_NAME
}
