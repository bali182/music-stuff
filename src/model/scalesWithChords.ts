import random from 'lodash/random'
import range from 'lodash/range'
import sample from 'lodash/sample'
import { KeyType, ChordShape, ScaleWithChords, Chord, ScaleShape } from './models'
import { getRandomKey, getKeyName } from './Keys'
import { getScaleShapeInKey, isOnScaleShape, shiftScaleShape, mergeScaleShapes } from './ScaleShapes'
import { getRandomChordSequence } from './Chords'
import { moveChordShape, shiftChordShape } from './ChordShapes'
import flatMap from 'lodash/flatMap'
import { min } from '../utils'
import { diminishedTriadsGuitar } from '../data/diminishedTriads'
import { majorTriadsGuitar } from '../data/majorTriads'
import { minorTriadsGuitar } from '../data/minorTriads'
import { diatonicShapes } from '../data/diatonicScaleShapes'
import { pentatonicShapes } from '../data/pentatonicScaleShapes'
import { majorCagedChords } from '../data/majorCagedChords'
import { minorCagedChords } from '../data/minorCagedChords'

function randomIndices(max: number, amount: number): number[] {
  const firstIndex = random(0, max - 1, false)
  const indices = [firstIndex].concat(range(1, amount).map((i) => (firstIndex + i) % max))
  return indices
}

function adjustScaleShape(shape: ScaleShape): ScaleShape {
  const minFret = shape.notes.map((note) => note.fret).reduce(min, Infinity)
  if (minFret > 12) {
    return adjustScaleShape(shiftScaleShape(shape, -12))
  } else if (minFret < 0) {
    return adjustScaleShape(shiftScaleShape(shape, 12))
  }
  return shape
}

export type TriadsWithScalesConfig = {
  majShapes: ChordShape[]
  minShapes: ChordShape[]
  dimShapes: ChordShape[]
  pentatonicShapes: ScaleShape[]
  diatonicShapes: ScaleShape[]
  amountOfChords: number
  useDiatonicForLookup: boolean
}

export const getRandomScaleShapes = (amount: number, length: number) => {
  const indices = randomIndices(length, amount)
  return (scales: ScaleShape[]): ScaleShape[] => indices.map((index) => scales[index])
}

export const getRandomTriadsWithScales = (config: TriadsWithScalesConfig): ScaleWithChords => {
  const key = getRandomKey()
  const withOctaves = (shape: ChordShape) => [shiftChordShape(shape, -12), shape, shiftChordShape(shape, 12)]
  const chordSelection = {
    [KeyType.Ionian]: flatMap(config.majShapes, withOctaves),
    [KeyType.Aeolian]: flatMap(config.minShapes, withOctaves),
    [KeyType.Locrian]: flatMap(config.dimShapes, withOctaves),
  }
  const diShapes = config.diatonicShapes.map((shape) => getScaleShapeInKey(shape, key, false))
  const diShape = adjustScaleShape(mergeScaleShapes(diShapes))
  const pentShapes = config.pentatonicShapes.map((shape) => getScaleShapeInKey(shape, key, false))
  const pentShape = adjustScaleShape(mergeScaleShapes(pentShapes))

  const chordFilter = (chord: Chord): boolean => {
    const possibleShapes = (chordSelection[chord.key.type] as ChordShape[])
      .map((shape) => moveChordShape(shape, chord.key.root))
      .filter((shape) => isOnScaleShape(config.useDiatonicForLookup ? diShape : pentShape, shape))
    return possibleShapes.length > 0
  }

  const chordSeq = getRandomChordSequence(key, config.amountOfChords, chordFilter)
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

export function getRandomTriadsOnPentatonicScale() {
  const getShapes = getRandomScaleShapes(2, 5)
  return getRandomTriadsWithScales({
    amountOfChords: 4,
    useDiatonicForLookup: true,
    majShapes: majorTriadsGuitar,
    minShapes: minorTriadsGuitar,
    dimShapes: diminishedTriadsGuitar,
    diatonicShapes: getShapes(diatonicShapes),
    pentatonicShapes: getShapes(pentatonicShapes),
  })
}

export function getRandomCagedChordsOnPentatonicScale() {
  const getShapes = getRandomScaleShapes(1, 5)
  return getRandomTriadsWithScales({
    amountOfChords: 2,
    useDiatonicForLookup: false,
    majShapes: majorCagedChords,
    minShapes: minorCagedChords,
    dimShapes: [],
    diatonicShapes: getShapes(diatonicShapes),
    pentatonicShapes: getShapes(pentatonicShapes),
  })
}
