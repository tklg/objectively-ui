import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider, TopNavigation, Heading, CssBaseline, ColorScheme } from '@objectively-ui/react'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider mode={ColorScheme.Light}>
      <CssBaseline>
        <TopNavigation>
          <Heading
            level='h1'
            subheading='This is a nice subheader'
          >
            This is g header
          </Heading>
        </TopNavigation>
      </CssBaseline>
    </CssVarsProvider>
  </React.StrictMode>,
)
