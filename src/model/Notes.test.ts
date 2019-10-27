import { moveNote, getNormalizedNote, getDistanceBetweenNotes } from './Notes'
import { getChromaticScale } from './Scales'
import { Note, Notes } from './models'

describe('Notes', () => {
  describe('moveNote', () => {
    it('should move note to same note when moving by octaves or 0', () => {
      for (const note of getChromaticScale(Note.C)) {
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
  describe('getNormalizedNote', () => {
    it('should throw when non-note passed in', () => {
      expect(() => getNormalizedNote('Cmaj' as any)).toThrowError()
      expect(() => getNormalizedNote('Frog' as any)).toThrowError()
      expect(() => getNormalizedNote(null)).toThrowError()
      expect(() => getNormalizedNote(undefined)).toThrowError()
    })
    it('should only return whole or sharp notes', () => {
      for (const originalNote of Notes) {
        const normalizedNote = getNormalizedNote(originalNote)
        expect(getChromaticScale(Note.C)).toContain(normalizedNote)
      }
    })
  })
  describe('getDistanceBetweenNodes', () => {
    it('should tell proper distance between nodes', () => {
      expect(getDistanceBetweenNotes(Note.C, Note.D)).toBe(2)
      expect(getDistanceBetweenNotes(Note.C, Note.E)).toBe(4)
      expect(getDistanceBetweenNotes(Note.C, Note.F)).toBe(5)
      expect(getDistanceBetweenNotes(Note.C, Note.G)).toBe(7)
      expect(getDistanceBetweenNotes(Note.C, Note.A)).toBe(9)
      expect(getDistanceBetweenNotes(Note.C, Note.B)).toBe(11)
    })
  })
})
