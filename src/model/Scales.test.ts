import { Note } from './models'
import {
  getIonianScale,
  getDorianScale,
  getAeolianScale,
  getPhrygianScale,
  getLydianScale,
  getMixolydianScale,
  getLocrianScale,
  getChromaticScale,
} from './Scales'

describe('Scales', () => {
  describe('Natural scales', () => {
    function expectDiatonicScale(mode: string, root: Note, scale: (root: Note) => Note[]) {
      it(`should generate the natural (${root}) ${mode} scale`, () => {
        const notes = scale(root)
        expect(notes[0]).toBe(root)
        expect(new Set(notes)).toEqual(new Set([Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B]))
      })
    }
    expectDiatonicScale('ionian', Note.C, getIonianScale)
    expectDiatonicScale('dorian', Note.D, getDorianScale)
    expectDiatonicScale('phrygian', Note.E, getPhrygianScale)
    expectDiatonicScale('lydian', Note.F, getLydianScale)
    expectDiatonicScale('mixolydian', Note.G, getMixolydianScale)
    expectDiatonicScale('aeolian', Note.A, getAeolianScale)
    expectDiatonicScale('locrian', Note.B, getLocrianScale)
  })

  describe('Chromatic scales', () => {
    it('should return the chromatic scale from G', () => {
      const ChromaticScaleFromG = [
        Note.G,
        Note.GSharp,
        Note.A,
        Note.ASharp,
        Note.B,
        Note.C,
        Note.CSharp,
        Note.D,
        Note.DSharp,
        Note.E,
        Note.F,
        Note.FSharp,
      ]
      const scale = getChromaticScale(Note.G)
      expect(scale).toEqual(ChromaticScaleFromG)
    })

    it('should return the chromatic scale from E# (F)', () => {
      const ChromaticScaleFromF = [
        Note.F,
        Note.FSharp,
        Note.G,
        Note.GSharp,
        Note.A,
        Note.ASharp,
        Note.B,
        Note.C,
        Note.CSharp,
        Note.D,
        Note.DSharp,
        Note.E,
      ]
      const scale = getChromaticScale(Note.ESharp)
      expect(scale).toEqual(ChromaticScaleFromF)
    })

    it('should return the chromatic scale from B', () => {
      const ChromaticScaleFromB = [
        Note.B,
        Note.C,
        Note.CSharp,
        Note.D,
        Note.DSharp,
        Note.E,
        Note.F,
        Note.FSharp,
        Note.G,
        Note.GSharp,
        Note.A,
        Note.ASharp,
      ]
      const scale = getChromaticScale(Note.B)
      expect(scale).toEqual(ChromaticScaleFromB)
    })
  })
})
