import { FC } from 'react'
import { createPortal } from 'react-dom'
import { PortalProps } from 'src/components/Portal/types'

const ELEMENT_NAME = 'Portal'

export const Portal: FC<PortalProps> = ({
  children,
  skipPortal = false,
  containerEl = document.body,
}) => {
  if (skipPortal) {
    return <>{children}</>
  }
  return <>{createPortal(children, containerEl)}</>
}

if (process.env.NODE_ENV !== 'production') {
  Portal.displayName = ELEMENT_NAME
}
