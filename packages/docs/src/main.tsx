import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppLayout, CssVarsProvider, TopNavigation, Heading, CssBaseline, Input, SideNavigation } from '@objectively-ui/react'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider mode='light'>
      <CssBaseline>
        <AppLayout
          header={
            <TopNavigation>
              <Heading
                level='h1'
                subheading='A clean & minimal React component library.'
                action={
                  <Input
                    placeholder='searchy search'
                  />
                }
              >
                Objectively UI
              </Heading>
            </TopNavigation>
          }
          leftNavigation={
            <SideNavigation>
              asda
            </SideNavigation>
          }
        />
      </CssBaseline>
    </CssVarsProvider>
  </React.StrictMode>,
)
