import { PROJECT_SHORTNAME } from 'src/utils/constants'
import { capitalize } from 'src/utils/stringUtils'

const GLOBAL_PREFIX = `${PROJECT_SHORTNAME}-`

/**
 * @param elementName The name of the element the className is for
 * @param variants Variants for this element - small, error, round, etc
 * @param extraClasses Extra css classes to add
 * @returns A className
 */
export const buildClassName = (elementName: string, variants: Record<string, boolean | string | undefined> = {}, ...extraClasses: (string | undefined)[]): string => {
  const classPrefix = `${GLOBAL_PREFIX}${elementName}`
  return [
    classPrefix,
    ...Object.keys(variants).filter(key => variants[key]).map(key => {
      if (typeof variants[key] === 'string') {
        return `${classPrefix}-${key}${capitalize(variants[key] as string)}`
      } else {
        return `${classPrefix}-${key}`
      }
    }),
    ...extraClasses,
  ].join(' ').trim()
}
