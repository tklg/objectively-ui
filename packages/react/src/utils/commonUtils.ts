export const isCommonSize = (size: string) => {
  return ['sm', 'md', 'lg'].includes(size)
}

export const isCommonColor = (color: string) => {
  return [ 'default', 'primary', 'secondary', 'info', 'warning', 'error', 'success'].includes(color)
}
