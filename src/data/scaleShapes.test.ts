import { expectScaleShape } from '../test/testUtils'
import {
  pentatonicShape1,
  pentatonicShape2,
  pentatonicShape3,
  pentatonicShape4,
  pentatonicShape5,
} from './pentatonicScaleShapes'

describe('Scale shapes', () => {
  describe('Pentatonic', () => {
    it('first (major) shape should match the correct scale', () => expectScaleShape(pentatonicShape1))
    it('second shape should match the correct scale', () => expectScaleShape(pentatonicShape2))
    it('third shape should match the correct scale', () => expectScaleShape(pentatonicShape3))
    it('fourth shape should match the correct scale', () => expectScaleShape(pentatonicShape4))
    it('fifth (minor) shape should match the correct scale', () => expectScaleShape(pentatonicShape5))
  })
})
