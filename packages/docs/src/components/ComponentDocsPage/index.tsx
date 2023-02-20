import { FC, JSXElementConstructor, lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ComponentPreviewContainer } from 'src/components/ComponentPreview'
import { SpaceBetween } from '@objectively-ui/react'
import styles from './index.module.scss'
// const pagePaths = import.meta.glob('/src/Pages/**/index.mdx', { as: 'url', eager: true })

const mdxComponents = {
  ComponentPreview: ComponentPreviewContainer,
  SpaceBetween: SpaceBetween,
}

export const ComponentDocsPage: FC = () => {
  const { component: componentParam } = useParams()
  const [Component, setComponent] = useState<JSXElementConstructor<unknown> | null>(null)

  useEffect(() => {
    (async () => {
      if (componentParam) {
        setComponent(lazy(() => import(`./../../Pages/${componentParam}/index.mdx`)))
      } else {
        setComponent(null)
      }
    })()
  }, [componentParam])

  return (
    <MDXProvider components={mdxComponents}>
      <div className={styles.docs}>
        <Suspense>
          {Component && <Component />}
        </Suspense>
      </div>
    </MDXProvider>
  )
}
