import { jsx } from '@emotion/react'
import { forwardRef, useContext, useMemo } from 'react'
import { tableCellStyles } from 'src/components/Table/Table.styles'
import { TableContext } from 'src/components/Table/TableContext'
import { TableCellComponent, TableCellProps } from 'src/components/Table/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TableCell'

export const TableCell = forwardRef<HTMLDivElement, TableCellProps>(({
  className: _className,
  children,
  as = 'td',
  colSpan,
  rowSpan,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)
  const tableSection = useContext(TableContext)

  if (as === 'td' && tableSection === 'head') {
    as = 'th'
  }

  const tableElementProps = useMemo(() => {
    if (as === 'td' || as === 'th') {
      return {
        colSpan,
        rowSpan,
        scope: as === 'td'
          ? 'row'
          : (tableSection === 'head'
            ? 'col'
            : 'row'),
      }
    }
  }, [as, colSpan, rowSpan, tableSection])

  return jsx(as, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref,
    className,
    ...props,
    ...tableElementProps,
    css: tableCellStyles(theme),
  }, children)
}) as TableCellComponent

if (process.env.NODE_ENV !== 'production') {
  TableCell.displayName = ELEMENT_NAME
}
