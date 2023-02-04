export function deepFreeze<T extends object> (obj: T) {
  Object.values(obj).forEach(v => Object.isFrozen(v) || deepFreeze(v))
  return Object.freeze(obj) as T
}
