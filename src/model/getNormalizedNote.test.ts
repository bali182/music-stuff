import { getNormalizedNote } from './getNormalizedNote'
import { Notes, ChromaticScaleFromC } from './Note'

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
      expect(ChromaticScaleFromC).toContain(normalizedNote)
    }
  })
})
