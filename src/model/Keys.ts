import sample from 'lodash/sample'
import values from 'lodash/values'
import isNil from 'lodash/isNil'
import { MusicalKey, KeyType, Note, ScaleDegree, ScaleDegreeNum } from './models'
import { getScale } from './Scales'
import { NaturalNotes } from '../data/notes'

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

export function getKeyName({ root, type }: MusicalKey): string {
  return `${root} ${getKeyTypeName(type)}`
}

export function getScaleDegree(key: MusicalKey, note: Note): ScaleDegree {
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

const KeyTypes = [
  KeyType.Ionian,
  KeyType.Dorian,
  KeyType.Phrygian,
  KeyType.Lydian,
  KeyType.Mixolydian,
  KeyType.Aeolian,
  KeyType.Locrian,
]

export function getRelativeKey(sourceKey: MusicalKey, targetType: KeyType): MusicalKey {
  const keyTypesArranged = KeyTypes.slice(KeyTypes.indexOf(sourceKey.type), KeyTypes.length).concat(
    KeyTypes.slice(0, KeyTypes.indexOf(sourceKey.type))
  )
  const sourceTypeIdx = keyTypesArranged.indexOf(sourceKey.type)
  const targetTypeIdx = keyTypesArranged.indexOf(targetType)
  const rootIndex = (sourceTypeIdx + targetTypeIdx) % keyTypesArranged.length
  const scale = getScale(sourceKey)

  return {
    root: scale[rootIndex],
    type: targetType,
  }
}

export function getRandomKey(
  roots: Note[] = NaturalNotes,
  keyTypes: KeyType[] = [KeyType.Ionian, KeyType.Aeolian]
): MusicalKey {
  return {
    root: sample(roots),
    type: sample(keyTypes),
  }
}
