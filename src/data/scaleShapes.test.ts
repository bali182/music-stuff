import { expectScaleShape } from '../test/testUtils'
import * as pentatonic from './pentatonicScaleShapes'
import * as diatonic from './diatonicScaleShapes'

describe('Scale shapes', () => {
  describe('Pentatonic', () => {
    it('first (major) shape should match the correct scale', () => expectScaleShape(pentatonic.pentatonicShape1))
    it('second shape should match the correct scale', () => expectScaleShape(pentatonic.pentatonicShape2))
    it('third shape should match the correct scale', () => expectScaleShape(pentatonic.pentatonicShape3))
    it('fourth shape should match the correct scale', () => expectScaleShape(pentatonic.pentatonicShape4))
    it('fifth (minor) shape should match the correct scale', () => expectScaleShape(pentatonic.pentatonicShape5))
  })
  describe('Diatonic', () => {
    it('first shape should match the correct scale', () => expectScaleShape(diatonic.diatonicShape1))
    it('second shape should match the correct scale', () => expectScaleShape(diatonic.diatonicShape2))
    it('third shape should match the correct scale', () => expectScaleShape(diatonic.diatonicShape3))
    it('fourth shape should match the correct scale', () => expectScaleShape(diatonic.diatonicShape4))
    it('fifth shape should match the correct scale', () => expectScaleShape(diatonic.diatonicShape5))
  })
})
