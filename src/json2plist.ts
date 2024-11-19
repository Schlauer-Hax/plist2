import { jsonParse } from './lib.ts'
import js2plist from './js2plist'

export default (source: string, indent: number | string = 2): string =>
  js2plist(jsonParse(source), indent)
