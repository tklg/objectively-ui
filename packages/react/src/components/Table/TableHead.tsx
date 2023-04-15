import { jsx } from '@emotion/react'
import { forwardRef } from 'react'
import { tableHeadStyles } from 'src/components/Table/Table.styles'
import { TableProvider } from 'src/components/Table/TableContext'
import { TableHeadComponent, TableHeadProps } from 'src/components/Table/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TableHead'

export const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(({
  className: _className,
  children,
  as = 'thead',
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)

  return (
    <TableProvider section='head'>
      {jsx(as, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref,
        className,
        ...props,
        css: tableHeadStyles(theme),
      }, children)
      }
    </TableProvider>
  )
}) as TableHeadComponent

if (process.env.NODE_ENV !== 'production') {
  TableHead.displayName = ELEMENT_NAME
}
