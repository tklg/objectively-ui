import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider, CssBaseline, ColorTheme } from '@objectively-ui/react'
import './main.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ComponentsPageLayout } from 'src/components/ComponentsPageLayout'
import { componentsList } from './componentslist'
import { DeepPartial } from 'src/types'

const darkTheme: DeepPartial<ColorTheme> = {
  colors: {
    border: '#778397',
    divider: '#1d527e',

    backgroundDisabled: '#243d54',
    special: {
      codeBackground: '#22385e',
    },
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider darkTheme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/components/:component?/*' element={<ComponentsPageLayout />} />
          <Route path='*' element={<Navigate to={`/components/${componentsList[0].items[0].path}`} replace />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
)
