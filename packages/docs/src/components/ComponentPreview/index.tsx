import { FC, Fragment, useCallback, useState } from 'react'
import styles from './index.module.scss'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import { Button, SpaceBetween } from '@objectively-ui/react'
import theme from 'prism-react-renderer/themes/vsDark'

interface ComponentPreviewContainerProps {
  code: string;
}

const liveScope = {
  SpaceBetween: SpaceBetween,
  Button: Button,
}

export const ComponentPreviewContainer: FC<ComponentPreviewContainerProps> = ({
  code,
}) => {
  const [showEditor, setShowEditor] = useState(false)

  const toggleShowEditor = useCallback(() => setShowEditor(current => !current), [])

  return (
    <div className={styles.componentPreview}>
      <LiveProvider code={code.trim()} scope={liveScope} theme={theme}>
        <div className={styles.componentPreviewContainer}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <LivePreview Component={Fragment} />
        </div>

        <div className={styles.componentPreviewToolbar}>
          <Button size='sm' onClick={toggleShowEditor}>Edit</Button>
        </div>

        {showEditor && (
          <div className={styles.componentPreviewEditor}>
            <LiveEditor />
            <LiveError />
          </div>
        )}
      </LiveProvider>
    </div>
  )
}
