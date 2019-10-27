import { Note, ScaleDegree, GuitarString, ChordType } from './models'
import { getChordNote, getScaleChords, getTriadType } from './Chords'
import { getMajorScale, getMinorScale } from './Scales'
import { majorTriadsGuitar } from '../data/majorTriads'
import { minorTriadsBass } from '../data/minorTriads'

describe('Chords', () => {
  describe('getChordNote', () => {
    it('should create a ChordNote', () => {
      const note = getChordNote(1, Note.A, ScaleDegree.Root, GuitarString.B)
      expect(note.fret).toBe(1)
      expect(note.note).toBe(Note.A)
      expect(note.scaleDegree).toBe(ScaleDegree.Root)
      expect(note.string).toBe(GuitarString.B)
    })
  })
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

  describe('getScaleChords', () => {
    it('should identify major scale chords properly', () => {
      const scale = getMajorScale(Note.C)
      const chords = getScaleChords(scale)

      expect(chords).toHaveLength(7)

      const [c, dm, em, f, g, am, bdim] = chords

      expect(c.root).toBe(Note.C)
      expect(c.type).toBe(ChordType.Major)

      expect(dm.root).toBe(Note.D)
      expect(dm.type).toBe(ChordType.Minor)

      expect(em.root).toBe(Note.E)
      expect(em.type).toBe(ChordType.Minor)

      expect(f.root).toBe(Note.F)
      expect(f.type).toBe(ChordType.Major)

      expect(g.root).toBe(Note.G)
      expect(g.type).toBe(ChordType.Major)

      expect(am.root).toBe(Note.A)
      expect(am.type).toBe(ChordType.Minor)

      expect(bdim.root).toBe(Note.B)
      expect(bdim.type).toBe(ChordType.Diminished)
    })

    it('should identify minor scale chords properly', () => {
      const scale = getMinorScale(Note.A)
      const chords = getScaleChords(scale)

      expect(chords).toHaveLength(7)

      const [am, bdim, c, dm, em, f, g] = chords

      expect(am.root).toBe(Note.A)
      expect(am.type).toBe(ChordType.Minor)

      expect(bdim.root).toBe(Note.B)
      expect(bdim.type).toBe(ChordType.Diminished)

      expect(c.root).toBe(Note.C)
      expect(c.type).toBe(ChordType.Major)

      expect(dm.root).toBe(Note.D)
      expect(dm.type).toBe(ChordType.Minor)

      expect(em.root).toBe(Note.E)
      expect(em.type).toBe(ChordType.Minor)

      expect(f.root).toBe(Note.F)
      expect(f.type).toBe(ChordType.Major)

      expect(g.root).toBe(Note.G)
      expect(g.type).toBe(ChordType.Major)
    })
  })
})
