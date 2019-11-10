import random from 'lodash/random'
import range from 'lodash/range'
import sample from 'lodash/sample'
import { KeyType, ChordShape, ScaleWithChords, Chord } from './models'
import { getRandomKey, getKeyName } from './Keys'
import { pentatonicShapes } from '../data/pentatonicScaleShapes'
import { diatonicShapes } from '../data/diatonicScaleShapes'
import { getScaleShapeInKey, mergeScaleShapes, isOnScaleShape } from './ScaleShapes'
import { getRandomChordSequence } from './Chords'
import { moveChordShape, shiftChordShape } from './ChordShapes'
import flatMap from 'lodash/flatMap'

function randomIndices(max: number, amount: number): number[] {
  const firstIndex = random(0, max - 1, false)
  const indices = [firstIndex].concat(range(1, amount).map((i) => (firstIndex + i) % max))
  return indices
}

export const getRandomPentatonicScaleWithTriads = (
  majShapes: ChordShape[],
  minShapes: ChordShape[],
  dimShapes: ChordShape[]
) => (): ScaleWithChords => {
  const key = getRandomKey()
  const withOctaves = (shape: ChordShape) => [shiftChordShape(shape, -12), shape, shiftChordShape(shape, 12)]
  const chordSelection = {
    [KeyType.Ionian]: flatMap(majShapes, withOctaves),
    [KeyType.Aeolian]: flatMap(minShapes, withOctaves),
    [KeyType.Locrian]: flatMap(dimShapes, withOctaves),
  }
  const indices = randomIndices(pentatonicShapes.length, 2)

  const [diShape1, diShape2] = indices
    .map((index) => diatonicShapes[index])
    .map((shape) => getScaleShapeInKey(shape, key, false))
  const diShape = mergeScaleShapes(diShape1, diShape2)
  const [pentShape1, pentShape2] = indices
    .map((index) => pentatonicShapes[index])
    .map((shape) => getScaleShapeInKey(shape, key, false))
  const pentShape = mergeScaleShapes(pentShape1, pentShape2)

  const chordFilter = (chord: Chord): boolean => {
    const possibleShapes = (chordSelection[chord.key.type] as ChordShape[])
      .map((shape) => moveChordShape(shape, chord.key.root))
      .filter((shape) => isOnScaleShape(diShape, shape))
    return possibleShapes.length > 0
  }

  const chordSeq = getRandomChordSequence(key, 4, chordFilter)
  const chordShapes = chordSeq.chords.map((chord) => {
    const possibleShapes = (chordSelection[chord.key.type] as ChordShape[])
      .map((shape) => moveChordShape(shape, chord.key.root))
      .filter((shape) => isOnScaleShape(diShape, shape))
    return sample(possibleShapes)
  })

  return {
    chords: chordShapes,
    scale: pentShape,
    description: `${getKeyName(key)}, ${chordSeq.chordNumbers.join('-')}`,
  }
}
