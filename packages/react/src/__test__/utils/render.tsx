import { CssVarsProvider } from 'src/providers'
import { render, RenderOptions } from '@testing-library/react'
import { FC, PropsWithChildren, ReactElement } from 'react'

const AllTheProviders: FC<PropsWithChildren> = ({children}) => {
  return <CssVarsProvider>{children}</CssVarsProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
