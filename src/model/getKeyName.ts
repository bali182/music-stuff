import { Key, KeyType } from './models'

export function getKeyName({ root, type }: Key): string {
  let typeAsString: string = type.toString()
  if (type === KeyType.Ionian) {
    typeAsString = 'Major'
  } else if (type === KeyType.Aeolian) {
    typeAsString = 'Minor'
  }
  return `${root} ${typeAsString}`
}
