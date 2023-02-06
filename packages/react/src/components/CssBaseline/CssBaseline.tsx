import { Global } from '@emotion/react'
import { FC } from 'react'
import { baselineStyles } from './CssBaseline.styles'
import { useTheme } from 'src/hooks'

export const CssBaseline: FC = () => {
  const theme = useTheme()
  return (
    <Global
      styles={baselineStyles(theme)}
    />
  )
}
