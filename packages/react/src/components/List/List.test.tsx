import { render, screen } from 'src/__test__/render'
import { List } from './List'

describe('List', () => {
  it('renders an empty list', async () => {
    render(
      <List />,
    )

    expect(screen.getByRole('list')).toMatchSnapshot()
  })
})
