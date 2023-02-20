import { css } from '@emotion/react'

export const appLayoutStyles = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflowY: 'hidden',
})

export const appLayoutContentStyles = (maxWidth: string) => css({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  overflowY: 'auto',
  width: maxWidth,
  maxWidth: '100%',
  // margin: '0 auto',
  marginLeft: 'auto',
  marginRight: 'auto',
})
