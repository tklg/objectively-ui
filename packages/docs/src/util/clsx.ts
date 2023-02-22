type classNameType = string | boolean | undefined

export const clsx = (...classNames: classNameType[]) => {
  return classNames.filter(Boolean).join(' ')
}
