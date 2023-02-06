import { AppLayout, Heading, Input, PageContent, TopNavigation } from '@objectively-ui/react'
import { FC } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ComponentDocsPage } from 'src/components/ComponentDocsPage'
import { ComponentsDocsSidebar } from 'src/components/ComponentDocsPage/Sidebar'

export const ComponentsPageLayout: FC = () => {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <AppLayout
            header={
              <TopNavigation>
                <Heading
                  level='h1'
                  subheading='Components'
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
            leftNavigation={<ComponentsDocsSidebar />}
            content={
              <PageContent>
                <Outlet />
              </PageContent>
            }
          />
        }
      >
        <Route path='*' element={<ComponentDocsPage />} />
      </Route>
    </Routes>

  )
}
