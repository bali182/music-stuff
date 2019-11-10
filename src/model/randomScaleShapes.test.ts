import range from 'lodash/range'
import random from 'lodash/random'
import {
  pentatonicShape5,
  pentatonicShape1,
  pentatonicShape2,
  pentatonicShape3,
  pentatonicShape4,
} from '../data/pentatonicScaleShapes'
import { ScaleShape, MusicalKey, Chord, KeyType, ChordShape, Note } from './models'
import { getScaleShapeInKey, mergeScaleShapes, isOnScaleShape } from './ScaleShapes'
import { majorTriadsGuitar } from '../data/majorTriads'
import { minorTriadsGuitar } from '../data/minorTriads'
import { diminishedTriadsGuitar } from '../data/diminishedTriads'
import { getScale } from './Scales'
import { getScaleChords, getChordKeyName } from './Chords'
import { moveChordShape } from './ChordShapes'
import shuffle from 'lodash/shuffle'
import sample from 'lodash/sample'
import {
  diatonicShape1,
  diatonicShape2,
  diatonicShape3,
  diatonicShape4,
  diatonicShape5,
} from '../data/diatonicScaleShapes'

function getRandomProgression(key: MusicalKey, scaleShape: ScaleShape): ChordShape[] {
  const scale = getScale(key)
  const chordSelection = {
    [KeyType.Ionian]: majorTriadsGuitar,
    [KeyType.Aeolian]: minorTriadsGuitar,
    [KeyType.Locrian]: diminishedTriadsGuitar,
  }
  const [root, ...chords] = getScaleChords(scale)
    .map((chord): [Chord, ChordShape[]] => {
      const possibleShapes = (chordSelection[chord.key.type] as ChordShape[])
        .map((shape) => moveChordShape(shape, chord.key.root))
        .filter((shape) => isOnScaleShape(scaleShape, shape))
      return [chord, possibleShapes]
    })
    .filter(([, shapes]) => shapes.length > 0)
  const randomChords = [root, ...shuffle(chords).slice(0, 3)].map(([, chordShapes]) => sample(chordShapes))
  return randomChords
}

describe('randomScaleShapes', () => {
  it('should do something eventually', () => {
    const key: MusicalKey = { root: Note.A, type: KeyType.Ionian }
    const pentatonics = [pentatonicShape1, pentatonicShape2, pentatonicShape3, pentatonicShape4, pentatonicShape5]
    const diatonics = [diatonicShape1, diatonicShape2, diatonicShape3, diatonicShape4, diatonicShape5]
    const indices = [4, 0]
    const shapes = indices.map((index) => diatonics[index]).map((shape) => getScaleShapeInKey(shape, key))
    //const megaShape = mergeScaleShapes(shapes)
    //const progression = getRandomProgression(key, megaShape)
    // console.log(JSON.stringify(progression, null, 2))
  })
})
