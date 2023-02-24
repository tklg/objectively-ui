import { List } from 'src/components/List/List'
import { ListItem } from 'src/components/ListItem/ListItem'
import { ListItemGroup } from 'src/components/ListItemGroup/ListItemGroup'
import { render, screen } from 'src/__test__/render'

describe('ListItemGroup', () => {
  it('renders a list with a group and 1 item', async () => {
    render(
      <List data-testid='list'>
        <ListItemGroup subheading='Group 1'>
          <ListItem>Item 1</ListItem>
        </ListItemGroup>
      </List>,
    )

    expect(screen.getByTestId('list')).toMatchSnapshot()
  })
})
