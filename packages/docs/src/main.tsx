import React from 'react'
import ReactDOM from 'react-dom/client'
import { List, AppLayout, CssVarsProvider, TopNavigation, Heading, CssBaseline, Input, SideNavigation, ListItem } from '@objectively-ui/react'
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
              <List divided>
                <ListItem button>
                  one
                </ListItem>
                <ListItem button description='subheading'>
                  two
                </ListItem>
                <ListItem button selected description='subheading 2'>
                  three
                </ListItem>
                <ListItem button>
                  four
                </ListItem>
              </List>
            </SideNavigation>
          }
        />
      </CssBaseline>
    </CssVarsProvider>
  </React.StrictMode>,
)
