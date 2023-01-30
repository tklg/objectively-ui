import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@linui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider>
      foo
    </CssVarsProvider>
  </React.StrictMode>,
)
