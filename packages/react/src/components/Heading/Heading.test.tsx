import { render } from 'src/__test__/utils/render'
import { Heading } from './Heading'

describe('Heading', () => {
  it('renders its children', async () => {
    render(
      <Heading>
          Text
      </Heading>,
    )
  })
})
