import {
  pentatonicShape1,
  pentatonicShape2,
  pentatonicShape3,
  pentatonicShape4,
  pentatonicShape5,
} from '../data/pentatonicScaleShapes'
import { getScaleShapeInKey } from './ScaleShapes'
import { KeyType, Note } from './models'
import { expectScaleShape } from '../test/testUtils'

describe('ScaleShapes', () => {
  describe('getScaleShapeInKey', () => {
    it('should move the notes to the right key', () => {
      expectScaleShape(getScaleShapeInKey(pentatonicShape1, { type: KeyType.Ionian, root: Note.B }))
      expectScaleShape(getScaleShapeInKey(pentatonicShape2, { type: KeyType.Dorian, root: Note.A }))
      expectScaleShape(getScaleShapeInKey(pentatonicShape3, { type: KeyType.Phrygian, root: Note.G }))
      expectScaleShape(getScaleShapeInKey(pentatonicShape4, { type: KeyType.Lydian, root: Note.F }))
      expectScaleShape(getScaleShapeInKey(pentatonicShape5, { type: KeyType.Mixolydian, root: Note.E }))
      expectScaleShape(getScaleShapeInKey(pentatonicShape1, { type: KeyType.Aeolian, root: Note.D }))
      expectScaleShape(getScaleShapeInKey(pentatonicShape2, { type: KeyType.Phrygian, root: Note.C }))
    })
  })
})
