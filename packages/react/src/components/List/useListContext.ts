import { useContext } from 'react'
import { ListContext } from 'src/components/List/List'

export const useListContext = () => useContext(ListContext)
