/* eslint-disable @typescript-eslint/no-explicit-any */
// https://github.com/voodoocreation/ts-deepmerge/blob/master/index.ts
type TAllKeys<T> = T extends any ? keyof T : never;

type TIndexValue<T, K extends PropertyKey, D = never> = T extends any
  ? K extends keyof T
    ? T[K]
    : D
  : never;

type TPartialKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>> extends infer O
  ? { [P in keyof O]: O[P] }
  : never;

type TFunction = (...a: any[]) => any;

type TPrimitives =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | Date
  | TFunction;

type TMerged<T> = [T] extends [Array<any>]
  ? { [K in keyof T]: TMerged<T[K]> }
  : [T] extends [TPrimitives]
  ? T
  : [T] extends [object]
  ? TPartialKeys<{ [K in TAllKeys<T>]: TMerged<TIndexValue<T, K>> }, never>
  : T;

interface IObject {
  [key: string]: any;
}

export const deepMerge = <T extends IObject[]>(...objects: T): TMerged<T[number]> => {
  return objects.reduce((target, source) => {
    for (const k in source) {
      const toMerge = source[k]
      if (k in target) {
        if (toMerge && typeof toMerge === 'object') {
          if (typeof target[k] === 'object' || target[k] == undefined || target[k] === null) {
            target[k] = deepMerge(target[k] as object, toMerge)
            continue
          }
          throw new Error(`target.${k} is not an object (${typeof target[k]}) and cannot be merged into`)
        } else {
          target[k] = toMerge
        }
      } else {
        target[k] = toMerge
      }
    }
    return target
  }, {}) as TMerged<T[number]>
}
