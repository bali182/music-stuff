import sample from 'lodash/sample'
import values from 'lodash/values'
import isNil from 'lodash/isNil'
import { Key, KeyType, Note, ScaleDegree, ScaleDegreeNum } from './models'
import { getScale } from './Scales'

export function getKeyTypeName(type: KeyType): string {
  return type.toString()
}

export function getChordTypeName(type: KeyType): string {
  switch (type) {
    case KeyType.Ionian:
      return 'Major'
    case KeyType.Aeolian:
      return 'Minor'
    case KeyType.Locrian:
      return 'Diminished'
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

export function getScaleDegree(key: Key, note: Note): ScaleDegree {
  const scale = getScale(key)
  const index = scale.indexOf(note)
  if (index >= 0) {
    return {
      degree: (index + 1) as ScaleDegreeNum,
      modifier: undefined,
    }
  }
  throw new TypeError('Sharp/Flat scale degrees are not yet supported.')
}

export function isRootScaleDegree(degree: ScaleDegree): Boolean {
  return degree.degree === 1 && isNil(degree.modifier)
}

export function getScaleDegreeName(degree: ScaleDegree): string {
  if (isNil(degree.modifier)) {
    return degree.degree.toString()
  }
  return `${degree.degree}${degree.modifier}`
}
