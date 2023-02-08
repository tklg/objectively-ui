import { Button, Heading, Input, SpaceBetween, TopNavigation } from '@objectively-ui/react'
import { FC } from 'react'
import styles from './index.module.scss'

export const Header: FC = () => {
  return (
    <TopNavigation>
      <Heading
        className={styles.header}
        level='h1'
        subheading='Components'
        action={
          <SpaceBetween>
            <Button>
              Button
            </Button>
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
