import { parse, walkIdentifiers } from '@vue/compiler-sfc'

export const parseSFC = (code: string, id: string) => {
    const { descriptor } = parse(code, {
      filename: id,
    })
    return descriptor
  }