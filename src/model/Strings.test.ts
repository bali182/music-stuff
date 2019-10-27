import { getStringRootNote } from './Strings'
import { GuitarString, Note, BassString } from './models'

describe('Strings', () => {
  describe('getStringRootNote', () => {
    it('should get proper root note for each string', () => {
      expect(getStringRootNote(GuitarString.E1)).toBe(Note.E)
      expect(getStringRootNote(GuitarString.B)).toBe(Note.B)
      expect(getStringRootNote(GuitarString.G)).toBe(Note.G)
      expect(getStringRootNote(GuitarString.D)).toBe(Note.D)
      expect(getStringRootNote(GuitarString.A)).toBe(Note.A)
      expect(getStringRootNote(GuitarString.E6)).toBe(Note.E)

      expect(getStringRootNote(BassString.G)).toBe(Note.G)
      expect(getStringRootNote(BassString.D)).toBe(Note.D)
      expect(getStringRootNote(BassString.A)).toBe(Note.A)
      expect(getStringRootNote(BassString.E)).toBe(Note.E)
    })
  })
})
