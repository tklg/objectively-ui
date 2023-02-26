import { Switch } from 'src/components/Switch/Switch'
import { fireEvent, render, screen } from 'src/__test__/render'

describe('Switch', () => {
  it('renders a switch', async () => {
    render(
      <Switch data-testid='switch' inputProps={{ 'data-testid': 'checkbox' }} />,
    )

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByTestId('checkbox')).not.toBeChecked()

    fireEvent.click(screen.getByRole('switch'))

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByTestId('checkbox')).toBeChecked()

    expect(screen.getByTestId('switch')).toMatchSnapshot()
  })

  it('renders a disabled switch', async () => {
    render(
      <Switch inputProps={{ 'data-testid': 'checkbox' }} disabled />,
    )

    expect(screen.getByRole('switch')).toHaveAttribute('tabindex', '-1')
    expect(screen.getByTestId('checkbox')).toBeDisabled()
  })

  it('fires onChange', async () => {
    const handleChange = jest.fn()

    render(
      <Switch onChange={handleChange} />,
    )

    fireEvent.click(screen.getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), true)

    fireEvent.click(screen.getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), false)
  })

  it('respects external state', async () => {
    const handleChange = jest.fn()

    const { rerender } = render(
      <Switch checked={false} onChange={handleChange} inputProps={{ 'data-testid': 'checkbox' }} />,
    )

    expect(handleChange).not.toHaveBeenCalled()
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByTestId('checkbox')).not.toBeChecked()

    rerender(
      <Switch checked={true} onChange={handleChange} inputProps={{ 'data-testid': 'checkbox' }} />,
    )

    expect(handleChange).not.toHaveBeenCalled()
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByTestId('checkbox')).toBeChecked()
  })
})
