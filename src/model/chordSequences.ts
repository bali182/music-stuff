import { getSequence } from './getSequence'
import * as roman from 'tonal-roman-numeral'
import { KeyType, ChordShapeSequence, ChordShape, MusicalKey } from './models'
import { getMajorScale, getMinorScale } from './Scales'
import * as majCaged from '../data/majorCagedChords'
import * as minCaged from '../data/minorCagedChords'
import sample from 'lodash/sample'
import {
  majorChordsOnlyProgressions,
  minorChordsOnlyProgressions,
  mixedChordProgressions,
} from '../data/chordProgressions'
import { getRandomNote } from './Notes'
import { getRandomChordSequence } from './Chords'
import { getKeyName, getRandomKey } from './Keys'
import { moveChordShape } from './ChordShapes'

export const getMajorCagedSequence = getSequence({
  progressions: () => majorChordsOnlyProgressions,
  description: (key) => `CAGED Chords in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Ionian, root: getRandomNote() }),
  scale: (key) => getMajorScale(key.root),
  shapes: () => [majCaged.cShape, majCaged.aShape, majCaged.gShape, majCaged.eShape, majCaged.dShape],
})

export const getMinorCagedSequence = getSequence({
  progressions: () => minorChordsOnlyProgressions,
  description: (key) => `CAGED Chords in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Aeolian, root: getRandomNote() }),
  scale: (key) => getMinorScale(key.root),
  shapes: () => [minCaged.cShape, minCaged.aShape, minCaged.gShape, minCaged.eShape, minCaged.dShape],
})

export const getMajorTriadSequence = (majShapes: ChordShape[]) =>
  getSequence({
    progressions: () => majorChordsOnlyProgressions,
    description: (key) => `Major triads  in ${getKeyName(key)}`,
    key: () => ({ type: KeyType.Ionian, root: getRandomNote() }),
    scale: (key) => getMajorScale(key.root),
    shapes: () => majShapes,
  })

export const getMinorTriadSequence = (minShapes: ChordShape[]) =>
  getSequence({
    progressions: () => minorChordsOnlyProgressions,
    description: (key) => `Minor triads in ${getKeyName(key)}`,
    key: () => ({ type: KeyType.Aeolian, root: getRandomNote() }),
    scale: (key) => getMinorScale(key.root),
    shapes: () => minShapes,
  })

export const getMixedTriadSequence = (majShapes: ChordShape[], minShapes: ChordShape[]) =>
  getSequence({
    progressions: () => mixedChordProgressions,
    description: (key) => `Mixed triads in ${getKeyName(key)}`,
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
    shapes: (key: MusicalKey) => {
      switch (key.type) {
        case KeyType.Ionian:
          return majShapes
        case KeyType.Aeolian:
          return minShapes
        default:
          throw new TypeError(`Unexpected chord type: ${key.type}`)
      }
    },
  })

export const getRandomTriadSequence = (
  majShapes: ChordShape[],
  minShapes: ChordShape[],
  dimShapes: ChordShape[]
) => (): ChordShapeSequence => {
  const key: MusicalKey = getRandomKey()
  const chordSeq = getRandomChordSequence(key, 4)
  const chordSelection = {
    [KeyType.Ionian]: majShapes,
    [KeyType.Aeolian]: minShapes,
    [KeyType.Locrian]: dimShapes,
  }
  const chordShapes = chordSeq.chords.map(({ key }) => moveChordShape(sample(chordSelection[key.type]), key.root))
  return {
    key,
    description: `${getKeyName(key)}, ${chordSeq.chordNumbers.join('-')}`,
    chords: chordShapes,
  }
}
