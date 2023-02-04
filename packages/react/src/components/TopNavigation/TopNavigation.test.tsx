import { render } from 'src/__test__/render'
import { TopNavigation } from './TopNavigation'

describe('TopNavigation', () => {
  it('renders its children', async () => {
    render(
      <TopNavigation>
        Text
      </TopNavigation>,
    )
  })
})
