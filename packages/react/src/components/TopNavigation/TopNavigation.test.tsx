import { render, screen } from 'src/__test__/render'
import { TopNavigation } from './TopNavigation'

describe('TopNavigation', () => {
  it('renders a header', async () => {
    render(
      <TopNavigation data-testid='nav'>
        Text
      </TopNavigation>,
    )

    expect(screen.getByTestId('nav')).toMatchSnapshot()
  })
})
