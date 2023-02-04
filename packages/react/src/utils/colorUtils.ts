import Color from 'color'

const steps = [0.2, .5, .7]
type Step = 1 | 2 | 3

export const lightenColor = (value: string, step: Step) => {
  return new Color(value).lighten(steps[step - 1]).toString()
}

export const darkenColor = (value: string, step: Step) => {
  return new Color(value).darken(steps[step - 1]).toString()
}

export const fadeColor = (value: string) => {
  return new Color(value).fade(0.7).toString()
}

export const tintColor = (value: string, tint: string) => {
  return new Color(value).mix(new Color(tint).lighten(0.7)).toString()
}

export const isLightColor = (value: string) => {
  return new Color(value).isLight()
}
