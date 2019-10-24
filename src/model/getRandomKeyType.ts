import { KeyType } from './models'
import sample from 'lodash/sample'
import values from 'lodash/values'

export function getRandomKeyType(): KeyType {
  return sample(values(KeyType))
}
