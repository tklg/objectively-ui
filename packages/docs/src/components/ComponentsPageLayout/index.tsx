import { AppLayout, PageContent } from '@objectively-ui/react'
import { FC } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ComponentDocsPage } from 'src/components/ComponentDocsPage'
import { ComponentsDocsSidebar } from 'src/components/ComponentDocsPage/Sidebar'
import { Header } from 'src/components/Header'
import styles from './index.module.scss'

export const ComponentsPageLayout: FC = () => {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <AppLayout
            className={styles.layout}
            header={<Header />}
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
