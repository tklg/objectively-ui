/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SpaceBetween } from 'src/components/SpaceBetween/SpaceBetween'
import { render, screen } from 'src/__test__/render'

describe('SpaceBetween', () => {
  it('renders a single item', async () => {
    render(
      <SpaceBetween>
        <button>text 1</button>
      </SpaceBetween>,
    )

    expect(screen.getByText('text 1')).toHaveAttribute('data-spacebetween-first')
  })

  it('renders multiple items', async () => {
    render(
      <SpaceBetween>
        <button>text 1</button>
        <button>text 2</button>
      </SpaceBetween>,
    )

    expect(screen.getByText('text 1')).toHaveAttribute('data-spacebetween-first')
    expect(screen.getByText('text 2')).not.toHaveAttribute('data-spacebetween-first')
  })

  it('wraps items in a span if they are not a component', async () => {
    // @ts-ignore
    render(<SpaceBetween data-testid='test'>text 1<button>text 2</button></SpaceBetween>)

    expect(screen.getByText('text 1')).toHaveAttribute('data-spacebetween-first')
    expect(screen.getByText('text 2')).not.toHaveAttribute('data-spacebetween-first')
    expect(screen.getByTestId('test')).toMatchSnapshot()
  })
})
