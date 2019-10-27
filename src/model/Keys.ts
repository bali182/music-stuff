import sample from 'lodash/sample'
import values from 'lodash/values'
import { Key, KeyType } from './models'

export function getKeyTypeName(type: KeyType): string {
  switch (type) {
    case KeyType.Ionian:
      return 'Major'
    case KeyType.Aeolian:
      return 'Minor'
    default:
      return type.toString()
  }
}

export function getKeyName({ root, type }: Key): string {
  return `${root} ${getKeyTypeName(type)}`
}

export function getRandomKeyType(): KeyType {
  return sample(values(KeyType))
}
