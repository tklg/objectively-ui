import { render } from 'src/__test__/render'
import { Heading } from './Heading'
import '@testing-library/jest-dom'

describe('Heading', () => {
  it('renders its children as a h1', async () => {
    const { container } = render(
      <Heading>
        Text
      </Heading>,
    )

    expect(container.querySelector('h1')).toHaveTextContent('Text')
  })

  it('renders a subheading in an h2', async () => {
    const { container } = render(
      <Heading subheading='Subheading'>
        Text
      </Heading>,
    )

    expect(container.querySelector('h1')).toHaveTextContent('Text')
    expect(container.querySelector('h2')).toHaveTextContent('Subheading')
  })

  it('renders a subheading in an h3 if the heading is an h2', async () => {
    const { container } = render(
      <Heading subheading='Subheading' level='h2'>
        Text
      </Heading>,
    )

    expect(container.querySelector('h2')).toHaveTextContent('Text')
    expect(container.querySelector('h3')).toHaveTextContent('Subheading')
  })

  it('renders a subheading in a p if the heading is an h6', async () => {
    const { container } = render(
      <Heading subheading='Subheading' level='h6'>
        Text
      </Heading>,
    )

    expect(container.querySelector('h6')).toHaveTextContent('Text')
    expect(container.querySelector('p')).toHaveTextContent('Subheading')
  })
})
