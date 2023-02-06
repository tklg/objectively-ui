import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider, CssBaseline } from '@objectively-ui/react'
import './main.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ComponentsPageLayout } from 'src/components/ComponentsPageLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider mode='dark'>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/components/:component?/*' element={<ComponentsPageLayout />} />
          <Route path='*' element={<Navigate to='/components/button' replace />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
)
