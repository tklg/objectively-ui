import { render } from 'src/__test__/utils/render'
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
