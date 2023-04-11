import { FC, Fragment, useCallback, useEffect, useState, useMemo } from 'react'
import styles from './index.module.scss'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import { Alert, AppLayout, Avatar, Badge, Button, Callout, CssBaseline, Heading, Icon, IconButton, Input, Kbd, List, ListItem, ListItemGroup, Lozenge, PageContent, Portal, Progress, ScreenreaderOnly, SideNavigation, SpaceBetween, Stat, StatArrow, StatDetail, StatLabel, StatNumber, Switch, Tooltip, TopNavigation, Uptime, useColorScheme, useTheme } from '@objectively-ui/react'
import darkTheme from 'prism-react-renderer/themes/vsDark'
import lightTheme from 'prism-react-renderer/themes/vsLight'
import { Inline } from 'src/components/DisplayContainers/Inline'
import { mdiPencil } from '@mdi/js'
import { Align } from 'src/components/DisplayContainers/Align'

interface ComponentPreviewContainerProps {
  name?: string;
  code: string;
  imports?: Record<string, unknown>;
}

const liveScope = {
  useState,
  useEffect,
  useMemo,
  // docs components
  Inline,
  Align,
  //  objui components
  useColorScheme,
  useTheme,
  Alert,
  AppLayout,
  Avatar,
  Badge,
  Button,
  Callout,
  CssBaseline,
  Heading,
  Icon,
  IconButton,
  Input,
  Kbd,
  List,
  ListItem,
  ListItemGroup,
  Lozenge,
  PageContent,
  Portal,
  Progress,
  ScreenreaderOnly,
  SideNavigation,
  Stat,
  StatArrow,
  StatDetail,
  StatLabel,
  StatNumber,
  SpaceBetween,
  Switch,
  Tooltip,
  TopNavigation,
  Uptime,
}

export const ComponentPreviewContainer: FC<ComponentPreviewContainerProps> = ({
  name,
  code,
  imports,
}) => {
  const [showEditor, setShowEditor] = useState(false)
  const { mode } = useColorScheme()

  const toggleShowEditor = useCallback(() => setShowEditor(current => !current), [])

  return (
    <div className={styles.componentPreview}>
      <LiveProvider code={code.trim()} scope={{ ...liveScope, ...imports }} theme={mode === 'dark' ? darkTheme : lightTheme}>
        <div className={styles.componentPreviewContainer}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <LivePreview Component={Fragment} />
        </div>

        <div className={styles.componentPreviewToolbar}>
          <IconButton size='sm' onClick={toggleShowEditor} aria-label={`Edit ${name}`} icon={<Icon path={mdiPencil} size='sm' />} />
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
