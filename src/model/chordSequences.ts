import { getSequence } from './getSequence'
import * as roman from 'tonal-roman-numeral'
import { ChordType, KeyType, ChordSequence, ChordShape, Chord, Key } from './models'
import { getRandomNote } from './getRandomNote'
import { getMajorScale, getMinorScale, getDiatonicScale } from './scales'
import { cShape, aShape, gShape, eShape, dShape } from './majorCagedChords'
import { majorTriads } from './majorTriads'
import { minorTriads } from './minorTriads'
import { getKeyName } from './getKeyName'
import sample from 'lodash/sample'
import shuffle from 'lodash/shuffle'
import { majorChordsOnlyProgressions, minorChordsOnlyProgressions, mixedChordProgressions } from './chordProgressions'
import { getScaleChords } from './getScaleChords'
import { diminishedTriads } from './diminishedTriads'
import { moveChordShape } from './moveChordShape'
import { getRandomKeyType } from './getRandomKeyType'

export const getMajorCagedSequence = getSequence({
  progressions: () => majorChordsOnlyProgressions,
  description: (key) => `CAGED Chords in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Ionian, root: getRandomNote() }),
  scale: (key) => getMajorScale(key.root),
  shapes: () => [cShape, aShape, gShape, eShape, dShape],
})

export const getMajorTriadSequence = getSequence({
  progressions: () => majorChordsOnlyProgressions,
  description: (key) => `Major triads  in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Ionian, root: getRandomNote() }),
  scale: (key) => getMajorScale(key.root),
  shapes: () => majorTriads,
})

export const getMinorTriadSequence = getSequence({
  progressions: () => minorChordsOnlyProgressions,
  description: (key) => `Minor triads in ${getKeyName(key)}`,
  key: () => ({ type: KeyType.Aeolian, root: getRandomNote() }),
  scale: (key) => getMinorScale(key.root),
  shapes: () => minorTriads,
})

export const getMixedTriadSequence = getSequence({
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

export function getRandomMajorTriadSequence(): ChordSequence {
  const key: Key = { root: getRandomNote(), type: getRandomKeyType() }
  const scale = getDiatonicScale(key)
  const [rootChord, ...chords] = getScaleChords(scale).map((chord, i) => [chord, i + 1]) as [Chord, number][]
  const randomChords = [rootChord, ...shuffle(chords).slice(3)]
  const chordSelection = {
    [ChordType.Major]: majorTriads,
    [ChordType.Minor]: minorTriads,
    [ChordType.Diminished]: diminishedTriads,
  }
  const progression = randomChords
    .map(([chord, degree]) => {
      const romanNum = roman.fromDegree(degree, chord.type === ChordType.Major)
      return chord.type === ChordType.Diminished ? `${romanNum}°` : romanNum
    })
    .join('-')
  const chordShapes = randomChords
    .map(([chord]) => chord)
    .map(
      ({ root: chordRoot, type: chordType }): ChordShape => {
        const shape = sample(chordSelection[chordType])
        return moveChordShape(shape, chordRoot)
      }
    )
  return {
    key,
    description: `Random triads in ${getKeyName(key)}, ${progression} progression`,
    chords: chordShapes,
  }
}
