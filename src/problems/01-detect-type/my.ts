type DetectType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'undefined'
  | 'null'
  | 'array'
  | 'object'
  | 'function'
  | 'date'
  | 'symbol'
  | 'bigint'
  | 'regexp'
  | 'map'
  | 'set'
  | 'weakmap'
  | 'weakset'
  | 'error'
  | 'promise'
  | 'arraybuffer'
  | string

// export function detectType(value: any): DetectType {
//   if (value == null) {
//     return `${value}`
//   }
//   return (Object.getPrototypeOf(value)?.constructor?.name ?? 'object').toLowerCase()
// }
