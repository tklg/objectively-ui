import { Global } from '@emotion/react'
import { FC, PropsWithChildren } from 'react'
import { baselineStyles } from './CssBaseline.styles'
import { useTheme } from 'src/hooks'

export const CssBaseline: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Global
        styles={baselineStyles(theme)}
      />
      {children}
    </>
  )
}
