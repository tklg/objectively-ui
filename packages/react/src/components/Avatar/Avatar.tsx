import { forwardRef, useMemo } from 'react'
import { avatarStyles } from 'src/components/Avatar/Avatar.styles'
import { AvatarComponent, AvatarProps } from 'src/components/Avatar/types'
import { useTheme } from 'src/hooks'
import { useThemeColor } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Avatar'

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
  size = 'md',
  color = 'auto',
  src,
  initials: _initials,
  name = _initials ?? '',
  className: _className,
}, ref) => {
  const theme = useTheme()

  const className = buildClassName(ELEMENT_NAME, {
    image: Boolean(src),
    size,
    color,
  }, _className)

  const initials = useMemo(() => {
    if (_initials) {
      return _initials
    }
    return name.split(' ').map(str => str[0].toUpperCase()).slice(0, 2).join('')
  }, [name, _initials])

  const { value: _backgroundColor, contrastText } = useThemeColor(color)
  const backgroundColor = useMemo(() => {
    if (_backgroundColor !== 'auto') {
      return _backgroundColor
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const angle = Math.floor(name.toLowerCase().split('').reduce((a, c) => a + ((alphabet.indexOf(c) / alphabet.length) * 360), 0))
    return `hsl(${angle}, 50%, 60%)`
  }, [name, _backgroundColor])

  return (
    <div ref={ref} css={avatarStyles(theme, backgroundColor, contrastText)} className={className} title={name}>
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <span aria-label={name}>
          {initials}
        </span>
      )}
    </div>
  )
}) as AvatarComponent

if (process.env.NODE_ENV !== 'production') {
  Avatar.displayName = ELEMENT_NAME
}
