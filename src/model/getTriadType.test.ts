import { majorTriads } from './majorTriads'
import { ChordTone, ChordType } from './models'
import { getTriadType } from './getTriadType'
import { minorTriads } from './minorTriads'

describe('getTriadType', () => {
  it('should identify all major triads correctly', () => {
    for (const triad of majorTriads) {
      const root = triad.notes.find((note) => note.tone === ChordTone.Root)
      const third = triad.notes.find((note) => note.tone === ChordTone.Third)
      const fifth = triad.notes.find((note) => note.tone === ChordTone.Fifth)
      expect(getTriadType(root.note, third.note, fifth.note)).toBe(ChordType.Major)
    }
  })
  it('should identify all minor triads correctly', () => {
    for (const triad of minorTriads) {
      const root = triad.notes.find((note) => note.tone === ChordTone.Root)
      const third = triad.notes.find((note) => note.tone === ChordTone.Third)
      const fifth = triad.notes.find((note) => note.tone === ChordTone.Fifth)
      expect(getTriadType(root.note, third.note, fifth.note)).toBe(ChordType.Minor)
    }
  })
})
