import { render, screen } from 'src/__test__/render'
import { List } from './List'
import { ListItem } from 'src/components/ListItem'

describe('List', () => {
  it('renders a list item', async () => {
    render(
      <List>
        <ListItem>List item 1</ListItem>
      </List>,
    )

    expect(screen.getByRole('listitem')).toHaveTextContent('List item 1')
  })
})
