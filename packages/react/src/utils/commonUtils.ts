export const isCommonSize = (size: string) => {
  return ['sm', 'md', 'lg'].includes(size)
}

export const isCommonColor = (color: string) => {
  return ['default', 'primary', 'secondary', 'info', 'warning', 'error', 'success'].includes(color)
}

export const commonColorKeys = ['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].map(k => {
  return {
    propKey: k,
    themeKey: k === 'Primary' || k === 'Secondary'
      ? (`accent${k}` as 'accentPrimary' | 'accentSecondary')
      : (`status${k}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess'),
  }
})

export const commonSizeKeys = ['Sm', 'Md', 'Lg'].map(k => {
  return {
    propKey: k as 'Sm' | 'Md' | 'Lg',
    themeKey: k.toLowerCase() as 'sm' | 'md' | 'lg',
  }
})

export const px = (value: string | number) => {
  if (typeof value === 'number') {
    return value + 'px'
  }
  if (/^\d+$/.test(value)) {
    return value + 'px'
  }
  return value
}
