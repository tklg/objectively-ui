import { useContext } from 'react'
import { CssVarsContext } from 'src/providers/CssVarsProvider/CssVarsProvider'

export const useColorScheme = () => {
  const { mode, setMode } = useContext(CssVarsContext)
  return { mode, setMode }
}
