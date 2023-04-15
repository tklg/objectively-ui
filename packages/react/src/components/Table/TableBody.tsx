import { jsx } from '@emotion/react'
import { forwardRef } from 'react'
import { tableBodyStyles } from 'src/components/Table/Table.styles'
import { TableProvider } from 'src/components/Table/TableContext'
import { TableBodyComponent, TableBodyProps } from 'src/components/Table/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TableBody'

export const TableBody = forwardRef<HTMLDivElement, TableBodyProps>(({
  className: _className,
  children,
  as = 'tbody',
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)

  return (
    <TableProvider section='body'>
      {
        jsx(as, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref,
          className,
          ...props,
          css: tableBodyStyles(theme),
        }, children)
      }
    </TableProvider>
  )
}) as TableBodyComponent

if (process.env.NODE_ENV !== 'production') {
  TableBody.displayName = ELEMENT_NAME
}
