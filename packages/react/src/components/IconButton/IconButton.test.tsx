import { IconButton } from 'src/components/IconButton/IconButton'
import { IconButtonVariant } from 'src/components/IconButton/types'
import { CommonColor, CommonSize } from 'src/types/props'
import { render, screen } from 'src/__test__/render'

describe('IconButton', () => {
  it('renders an iconbutton', () => {
    render(<IconButton icon='icon' />)
    expect(screen.getByRole('button')).toHaveTextContent('icon')
  })

  it('renders a disabled iconbutton', () => {
    render(<IconButton icon='icon' disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('with an icon', () => {
    render(<IconButton icon='icon' />)
    expect(screen.getByRole('button')).toHaveTextContent('icon')
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  describe('sizes', () => {
    it.each([['sm'], ['md'], ['lg']])('%s', (args) => {
      const size = args[0] as CommonSize

      render(<IconButton icon='icon' size={size} />)
      expect(screen.getByRole('button')).toMatchSnapshot(size)
    })
  })

  describe('variants', () => {
    it.each([['default'], ['solid'], ['text']])('%s', (args) => {
      const variant = args[0] as IconButtonVariant

      render(<IconButton icon='icon' variant={variant} />)
      expect(screen.getByRole('button')).toMatchSnapshot(variant)
    })
  })

  describe('colors', () => {
    it.each([['default'], ['primary'], ['secondary'], ['info'], ['warning'], ['error'], ['success']])('%s', (args) => {
      const color = args[0] as CommonColor

      render(<IconButton icon='icon' color={color} />)
      expect(screen.getByRole('button')).toMatchSnapshot(color)
    })
  })
})
