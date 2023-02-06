import { css } from '@emotion/react'

export const appLayoutStyles = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflowY: 'hidden',
})

export const appLayoutContentStyles = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  overflowY: 'auto',
})
