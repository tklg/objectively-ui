import { Heading, Input, SpaceBetween, Switch, TopNavigation, useColorScheme } from '@objectively-ui/react'
import { FC } from 'react'
import styles from './index.module.scss'

export const Header: FC = () => {
  const { mode, setMode } = useColorScheme()
  return (
    <TopNavigation>
      <Heading
        className={styles.header}
        level='h1'
        subheading='Components'
        action={
          <SpaceBetween>
            <Switch
              checked={mode === 'dark'}
              onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')}
              label={mode === 'dark' ? '🌙' : '🌞'}
            />
            <Input
              placeholder='searchy search'
            />
          </SpaceBetween>
        }
      >
        Objectively UI
      </Heading>
    </TopNavigation>
  )
}
