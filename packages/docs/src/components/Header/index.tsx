import { Heading, SpaceBetween, Switch, TopNavigation, useColorScheme } from '@objectively-ui/react'
import { FC } from 'react'
import styles from './index.module.scss'
import icon from 'src/img/icon.svg'

export const Header: FC = () => {
  const { mode, setMode } = useColorScheme()
  return (
    <TopNavigation
      className={styles.topNavigation}
      icon={icon}
    >
      <Heading
        level='h1'
        subheading='Components'
        action={
          <SpaceBetween>
            <Switch
              checked={mode === 'dark'}
              onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')}
              label={mode === 'dark' ? '🌙' : '🌞'}
            />
          </SpaceBetween>
        }
      >
        Objectively UI
      </Heading>
    </TopNavigation>
  )
}
