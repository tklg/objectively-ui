export const capitalize = (str: string): string => {
  if (str) {
    return str.split('-').map(str => `${str[0].toUpperCase()}${str.slice(1)}`).join('')
  }
  return ''
}

export const hyphenate = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => {
    return `${p1}-${p2}`.toLowerCase()
  })
}
