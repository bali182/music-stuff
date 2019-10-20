import { ChromaticScaleFromC, Note } from './models'
import { moveNote } from './moveNote'

describe('moveNote', () => {
  it('should move note to same note when moving by octaves or 0', () => {
    for (const note of ChromaticScaleFromC) {
      expect(moveNote(note, 0)).toBe(note)
      expect(moveNote(note, 12)).toBe(note)
      expect(moveNote(note, 24)).toBe(note)
      expect(moveNote(note, 36)).toBe(note)
      expect(moveNote(note, -12)).toBe(note)
      expect(moveNote(note, -24)).toBe(note)
      expect(moveNote(note, -36)).toBe(note)
    }
  })

  it('should move note up by 3 steps', () => {
    expect(moveNote(Note.C, 3)).toBe(Note.DSharp)
    expect(moveNote(Note.CSharp, 3)).toBe(Note.E)
    expect(moveNote(Note.E, 3)).toBe(Note.G)
    expect(moveNote(Note.A, 3)).toBe(Note.C)
  })

  it('should move note down by 6 steps', () => {
    expect(moveNote(Note.C, -6)).toBe(Note.FSharp)
    expect(moveNote(Note.E, -6)).toBe(Note.ASharp)
    expect(moveNote(Note.G, -6)).toBe(Note.CSharp)
    expect(moveNote(Note.F, -6)).toBe(Note.B)
  })
})
