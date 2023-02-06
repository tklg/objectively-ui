import { List, ListItem, ListItemGroup, SideNavigation } from '@objectively-ui/react'
import { FC, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { componentsList } from 'src/util/componentslist'

export const ComponentsDocsSidebar: FC = () => {
  const navigate = useNavigate()
  const { component } = useParams()
  const handleNavigate = useCallback((path: string) => {
    navigate(`/components/${path}`)
  }, [navigate])

  return (
    <SideNavigation>
      <List compact>
        {componentsList.map(({ group, name, items }) => (
          <ListItemGroup key={group} subheading={name}>
            {items.map(({ path, name }) => (
              <ListItem
                key={path}
                button
                onClick={() => handleNavigate(path)}
                selected={component === path}
              >
                {name}
              </ListItem>
            ))}
          </ListItemGroup>
        ))}
      </List>
    </SideNavigation>
  )
}
