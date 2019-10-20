import { getChromaticScale } from './getChromaticScale'
import { Note, ChromaticScaleFromC } from './models'

describe('getChromaticScale', () => {
  it('should return the chromatic scale from C', () => {
    const scale = getChromaticScale(Note.C)
    expect(scale).toEqual(ChromaticScaleFromC)
  })

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
