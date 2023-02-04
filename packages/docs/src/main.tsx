import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider, TopNavigation, Heading, CssBaseline, ColorScheme, Button } from '@objectively-ui/react'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider mode={ColorScheme.Light}>
      <CssBaseline>
        <TopNavigation>
          <Heading
            level='h1'
            subheading='A clean & minimal React component library.'
            action={
              <Button variant='primary'>Click me</Button>
            }
          >
            Objectively UI
          </Heading>
        </TopNavigation>
      </CssBaseline>
    </CssVarsProvider>
  </React.StrictMode>,
)
