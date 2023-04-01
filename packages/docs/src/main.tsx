import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider, CssBaseline } from '@objectively-ui/react'
import './main.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ComponentsPageLayout } from 'src/components/ComponentsPageLayout'
import { componentsList } from './componentslist'

const darkTheme = {
  colors: {
    border: '#778397',
    divider: '#48647c',
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
