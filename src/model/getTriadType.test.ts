import { majorTriadsGuitar } from '../data/majorTriads'
import { ScaleDegree, ChordType } from './models'
import { getTriadType } from './getTriadType'
import { minorTriadsBass } from '../data/minorTriads'

describe('getTriadType', () => {
  it('should identify all major triads correctly', () => {
    for (const triad of majorTriadsGuitar) {
      const root = triad.notes.find((note) => note.scaleDegree === ScaleDegree.Root)
      const third = triad.notes.find((note) => note.scaleDegree === ScaleDegree.Third)
      const fifth = triad.notes.find((note) => note.scaleDegree === ScaleDegree.Fifth)
      expect(getTriadType(root.note, third.note, fifth.note)).toBe(ChordType.Major)
    }
  })
  it('should identify all minor triads correctly', () => {
    for (const triad of minorTriadsBass) {
      const root = triad.notes.find((note) => note.scaleDegree === ScaleDegree.Root)
      const third = triad.notes.find((note) => note.scaleDegree === ScaleDegree.Third)
      const fifth = triad.notes.find((note) => note.scaleDegree === ScaleDegree.Fifth)
      expect(getTriadType(root.note, third.note, fifth.note)).toBe(ChordType.Minor)
    }
  })
})
