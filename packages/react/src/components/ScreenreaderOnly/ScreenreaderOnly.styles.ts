import { css } from '@emotion/react'

export const screenreaderOnlyStyles = css({
  position: 'absolute',
  left: -10000,
  top: 'auto',
  width: 1,
  height: 1,
  overflow: 'hidden',
})
