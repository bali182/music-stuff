import { getSequence } from './getSequence'
import { ChordType, KeyType } from './models'
import { getRandomNote } from './getRandomNote'
import { getMajorScale, getMinorScale } from './scales'
import { cShape, aShape, gShape, eShape, dShape } from './majorCagedChords'
import { majorTriads } from './majorTriads'
import { minorTriads } from './minorTriads'
import { getKeyName } from './getKeyName'
import sample from 'lodash/sample'
import { majorChordsOnlyProgressions, minorChordsOnlyProgressions, mixedChordProgressions } from './chordProgressions'

export const getMajorCagedProgression = getSequence({
  progressions: () => majorChordsOnlyProgressions,
  description: (key) => `CAGED Chords in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Ionian, root: getRandomNote() }),
  scale: (key) => getMajorScale(key.root),
  shapes: () => [cShape, aShape, gShape, eShape, dShape],
})

export const getMajorTriads = getSequence({
  progressions: () => majorChordsOnlyProgressions,
  description: (key) => `Major triads  in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Ionian, root: getRandomNote() }),
  scale: (key) => getMajorScale(key.root),
  shapes: () => majorTriads,
})

export const getMinorTriads = getSequence({
  progressions: () => minorChordsOnlyProgressions,
  description: (key) => `Minor triads  in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Aeolian, root: getRandomNote() }),
  scale: (key) => getMinorScale(key.root),
  shapes: () => minorTriads,
})

export const getMixedTriads = getSequence({
  progressions: () => mixedChordProgressions,
  description: (key) => `Mixed triads  in ${getKeyName(key)}`,
  key: () => ({ type: sample([KeyType.Ionian, KeyType.Aeolian]), root: getRandomNote() }),
  scale: (key) => {
    switch (key.type) {
      case KeyType.Ionian:
        return getMajorScale(key.root)
      case KeyType.Aeolian:
        return getMinorScale(key.root)
      default:
        throw new TypeError(`Unexpected key type: ${key.type}`)
    }
  },
  shapes: (type: ChordType) => {
    switch (type) {
      case ChordType.Major:
        return majorTriads
      case ChordType.Minor:
        return minorTriads
      default:
        throw new TypeError(`Unexpected chord type: ${type}`)
    }
  },
})
