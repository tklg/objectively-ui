import { List, ListItem, ListItemGroup, SideNavigation } from '@objectively-ui/react'
import { FC, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { componentsList } from 'src/componentslist'
import styles from './index.module.scss'

export const ComponentsDocsSidebar: FC = () => {
  const navigate = useNavigate()
  const { component } = useParams()
  const handleNavigate = useCallback((path: string) => {
    navigate(`/components/${path}`)
  }, [navigate])

  return (
    <SideNavigation className={styles.sideNavigation}>
      <List compact>
        {componentsList.map(({ group, name, items }) => (
          <ListItemGroup key={group} subheading={name}>
            {items.map(({ path, name, wip }) => (
              <ListItem
                key={path}
                button
                onClick={() => handleNavigate(path)}
                selected={component === path}
                disabled={wip}
              >
                {name}{wip && ' 🚧'}
              </ListItem>
            ))}
          </ListItemGroup>
        ))}
      </List>
    </SideNavigation>
  )
}
