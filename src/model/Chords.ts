import minBy from 'lodash/minBy'
import { Note, AnyString, Chord, FrettedNote, MusicalKey, KeyType, ScaleShape } from './models'
import { getDistanceBetweenNotes } from './Notes'
import { ChordShape, GuitarString } from './models'
import { getBassString } from './Strings'
import { getChromaticScale, getMajorScale, getIonianScale, getAeolianScale, getLocrianScale } from './Scales'
import { getNormalizedNote } from './Notes'
import { getChordTypeName } from './Keys'

export function getScaleChords(scale: Note[]): Chord[] {
  return scale.map((root: Note, degree: number) => {
    const third = scale[(degree + 2) % scale.length]
    const fifth = scale[(degree + 4) % scale.length]
    return {
      root,
      key: getChordKey(root, third, fifth),
      notes: [root, third, fifth],
    }
  })
}

export function isParentScale(root: Note, third: Note, fifth: Note, scale: Note[]): boolean {
  return scale[0] === root && scale[2] === third && scale[4] === fifth
}

export function getChordKey(root: Note, third: Note, fifth: Note): MusicalKey {
  if (isParentScale(root, third, fifth, getIonianScale(root))) {
    return { type: KeyType.Ionian, root }
  } else if (isParentScale(root, third, fifth, getAeolianScale(root))) {
    return { type: KeyType.Aeolian, root }
  } else if (isParentScale(root, third, fifth, getLocrianScale(root))) {
    return { type: KeyType.Locrian, root }
  }
  throw new TypeError(`Cant identify parent key for (${root}, ${third}, ${fifth})`)
}

export function getChordKeyName(key: MusicalKey): string {
  return `${key.root} ${getChordTypeName(key.type)}`
}
