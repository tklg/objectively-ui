import { FC, JSXElementConstructor, lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ComponentPreviewContainer } from 'src/components/ComponentPreview'
import { SpaceBetween } from '@objectively-ui/react'
import styles from './index.module.scss'
import { UnknownImportErrorBoundary } from 'src/components/ErrorBoundary/UnknownImportErrorBoundary'
import { Inline } from 'src/components/DisplayContainers/Inline'
// const pagePaths = import.meta.glob('/src/Pages/**/index.mdx', { as: 'url', eager: true })

const mdxComponents = {
  ComponentPreview: ComponentPreviewContainer,
  Inline: Inline,
  SpaceBetween: SpaceBetween,
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
      <div className={styles.docs}>
        <UnknownImportErrorBoundary page={componentParam}>
          <Suspense fallback='Loading'>
            {Component && <Component />}
          </Suspense>
        </UnknownImportErrorBoundary>
      </div>
    </MDXProvider>
  )
}
