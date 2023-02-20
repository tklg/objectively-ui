import { useContext } from 'react'
import { AppLayoutContext } from 'src/components/AppLayout/AppLayout'

export const useAppLayout = () => {
  return useContext(AppLayoutContext)
}
