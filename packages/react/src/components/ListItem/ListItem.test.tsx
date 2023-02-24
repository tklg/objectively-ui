import { fireEvent, render, screen } from 'src/__test__/render'
import { ListItem } from 'src/components/ListItem'
import { List } from 'src/components/List/List'

describe('ListItem', () => {
  it('renders a list item', async () => {
    render(
      <List>
        <ListItem>List item 1</ListItem>
      </List>,
    )

    expect(screen.getByRole('listitem')).toHaveTextContent('List item 1')
    expect(screen.getByRole('list')).toMatchSnapshot()
  })

  it('renders a list item with a description', async () => {
    render(
      <List>
        <ListItem description='Description'>List item 1</ListItem>
      </List>,
    )

    expect(screen.getByRole('listitem')).toHaveTextContent('List item 1')
    expect(screen.getByRole('listitem')).toHaveTextContent('Description')
    expect(screen.getByRole('list')).toMatchSnapshot()
  })

  it('renders a button list item', async () => {
    const handleClick = jest.fn()

    render(
      <List>
        <ListItem button onClick={handleClick}>List item 1</ListItem>
      </List>,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button')).toHaveTextContent('List item 1')
    expect(screen.getByRole('list')).toMatchSnapshot()
  })

  it('renders a button list item with a description', async () => {

    render(
      <List>
        <ListItem description='Description' button onClick={jest.fn()}>List item 1</ListItem>
      </List>,
    )

    expect(screen.getByRole('button')).toHaveTextContent('List item 1')
    expect(screen.getByRole('button')).toHaveTextContent('Description')
    expect(screen.getByRole('list')).toMatchSnapshot()
  })
})
