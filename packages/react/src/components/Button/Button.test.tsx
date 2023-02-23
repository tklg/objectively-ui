import { Button } from 'src/components/Button/Button'
import { ButtonVariant } from 'src/components/Button/Button.types'
import { CommonColor, CommonSize } from 'src/types/props'
import { render, screen } from 'src/__test__/render'

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>text</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('text')
  })

  it('renders a disabled button', () => {
    render(<Button disabled>text</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('with a start icon', () => {
    render(<Button iconStart='icon'>text</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('icon')
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('with an end icon', () => {
    render(<Button iconEnd='icon'>text</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('icon')
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  describe('sizes', () => {
    it.each([['sm'], ['md'], ['lg']])('%s', (args) => {
      const size = args[0] as CommonSize

      render(<Button size={size}>text</Button>)
      expect(screen.getByRole('button')).toMatchSnapshot(size)
    })
  })

  describe('variants', () => {
    it.each([['default'], ['solid'], ['text'], ['link']])('%s', (args) => {
      const variant = args[0] as ButtonVariant

      render(<Button variant={variant}>text</Button>)
      expect(screen.getByRole('button')).toMatchSnapshot(variant)
    })
  })

  describe('colors', () => {
    it.each([['default'], ['primary'], ['secondary'], ['info'], ['warning'], ['error'], ['success']])('%s', (args) => {
      const color = args[0] as CommonColor

      render(<Button color={color}>text</Button>)
      expect(screen.getByRole('button')).toMatchSnapshot(color)
    })
  })
})
