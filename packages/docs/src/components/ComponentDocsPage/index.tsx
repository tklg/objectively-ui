import { FC, JSXElementConstructor, lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ComponentPreviewContainer } from 'src/components/ComponentPreview'
import { Button, SpaceBetween } from '@objectively-ui/react'
import styles from './index.module.scss'
import { UnknownImportErrorBoundary } from 'src/components/ErrorBoundary/UnknownImportErrorBoundary'
import { Inline } from 'src/components/DisplayContainers/Inline'
// const pagePaths = import.meta.glob('/src/Pages/**/index.mdx', { as: 'url', eager: true })

const mdxComponents = {
  ComponentPreview: ComponentPreviewContainer,
  Inline,
  SpaceBetween,
  Button,
}

export const ComponentDocsPage: FC = () => {
  const { component: componentParam } = useParams()
  const [Component, setComponent] = useState<JSXElementConstructor<unknown> | null>(null)

  useEffect(() => {
    (async () => {
      try {
        if (componentParam) {
          setComponent(lazy(() => import(`./../../Pages/${componentParam}/index.mdx`)))
        } else {
          setComponent(null)
        }
      } catch (e) {
        console.warn(e)
      }
    })()
  }, [componentParam])

  return (
    <MDXProvider components={mdxComponents}>
      <UnknownImportErrorBoundary page={componentParam}>
        <div className={styles.docs}>
          <Suspense fallback='Loading'>
            {Component && <Component />}
          </Suspense>
        </div>
      </UnknownImportErrorBoundary>
    </MDXProvider>
  )
}
