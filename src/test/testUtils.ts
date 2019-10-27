import { ChordShape, Note, ChordNote, TriadGroup } from '../model/models'
import { getChromaticScale } from '../model/Scales'
import { getStringRootNote } from '../model/Strings'

export function expectDistance(noteA: Note, noteB: Note, distance: number) {
  const scale = getChromaticScale(noteA)
  expect(noteB).toBe(scale[distance])
}

export function expectCorrectNoteOnString(note: ChordNote) {
  const root = getStringRootNote(note.string)
  const scale = getChromaticScale(root)
  const expectedNote = scale[note.fret % scale.length]
  expect(note.note).toBe(expectedNote)
}

// TODO test if inversion is correct
export function testTriadGroup(name: string, triads: TriadGroup, asserter: (triad: ChordShape) => void) {
  describe(name, () => {
    it('should have proper root position', () => {
      asserter(triads.rootPosition)
    })
    it('should have proper first inversion', () => {
      asserter(triads.firstInversion)
    })
    it('should have proper second inversion', () => {
      asserter(triads.secondInversion)
    })
  })
}
