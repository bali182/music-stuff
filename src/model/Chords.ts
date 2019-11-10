import shuffle from 'lodash/shuffle'
import * as roman from 'tonal-roman-numeral'
import { Note, Chord, MusicalKey, KeyType, ChordSequence, ChordShape } from './models'
import { getIonianScale, getAeolianScale, getLocrianScale, getScale } from './Scales'
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

export function getRandomChordSequence(
  key: MusicalKey,
  amount: number,
  filter: (shape: Chord) => boolean = () => true
): ChordSequence {
  const scale = getScale(key)
  const allChords = getScaleChords(scale).map((chord, i) => [chord, i + 1]) as [Chord, number][]
  const [rootChord, ...restOfChords] = allChords.filter(([shape, scaleDegree]) => {
    const result = filter(shape)
    if (!result && scaleDegree === 1) {
      throw new Error(`Filter disallows root chord!`)
    }
    return result
  })
  const chordsWithNumbers = [rootChord, ...shuffle(restOfChords).slice(0, amount - 1)]
  const chordNumbers = chordsWithNumbers.map(([chord, degree]) => {
    const romanNum = roman.fromDegree(degree, chord.key.type === KeyType.Ionian)
    return chord.key.type === KeyType.Locrian ? `${romanNum}°` : romanNum
  })
  const chords = chordsWithNumbers.map(([chord]) => chord)
  return {
    key,
    chordNumbers,
    chords,
  }
}
