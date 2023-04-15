import { FC, createContext } from 'react'
import { TableProviderProps, TableProviderSection } from 'src/components/Table/types'

export const TableContext = createContext<TableProviderSection>('body')

export const TableProvider: FC<TableProviderProps> = ({ children, section = 'body' }) => {
  return (
    <TableContext.Provider value={section}>
      {children}
    </TableContext.Provider>
  )
}
