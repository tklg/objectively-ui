import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import ButtonDocs from 'src/Pages/Button/index.mdx'
import { ComponentPreviewContainer } from 'src/components/ComponentPreview'
import { SpaceBetween } from '@objectively-ui/react'
import styles from './index.module.scss'

const mdxComponents = {
  ComponentPreview: ComponentPreviewContainer,
  SpaceBetween: SpaceBetween,
}

export const ComponentDocsPage: FC = () => {
  const { component } = useParams()
  return (
    <MDXProvider components={mdxComponents}>
      <div className={styles.docs}>
        <ButtonDocs />
      </div>
    </MDXProvider>
  )
}
