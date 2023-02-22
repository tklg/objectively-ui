import { FC, Fragment, useCallback, useEffect, useState, useMemo } from 'react'
import styles from './index.module.scss'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import { AppLayout, Button, CssBaseline, Heading, Input, List, ListItem, ListItemGroup, PageContent, SideNavigation, SpaceBetween, Switch, TopNavigation, useColorScheme } from '@objectively-ui/react'
import darkTheme from 'prism-react-renderer/themes/vsDark'
import lightTheme from 'prism-react-renderer/themes/vsLight'
import { Inline } from 'src/components/Inline'

interface ComponentPreviewContainerProps {
  code: string;
}

const liveScope = {
  useState,
  useEffect,
  useMemo,
  // docs components
  Inline: Inline,
  //  objui components
  AppLayout: AppLayout,
  Button: Button,
  CssBaseline: CssBaseline,
  Heading: Heading,
  Input: Input,
  List: List,
  ListItem: ListItem,
  ListItemGroup: ListItemGroup,
  PageContent: PageContent,
  SideNavigation: SideNavigation,
  SpaceBetween: SpaceBetween,
  Switch: Switch,
  TopNavigation: TopNavigation,
}

export const ComponentPreviewContainer: FC<ComponentPreviewContainerProps> = ({
  code,
}) => {
  const [showEditor, setShowEditor] = useState(false)
  const { mode } = useColorScheme()

  const toggleShowEditor = useCallback(() => setShowEditor(current => !current), [])

  return (
    <div className={styles.componentPreview}>
      <LiveProvider code={code.trim()} scope={liveScope} theme={mode === 'dark' ? darkTheme : lightTheme}>
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
