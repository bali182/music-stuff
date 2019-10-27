import { Note, ScaleDegree, GuitarString } from './models'
import { getChordNote } from './getChordNote'

describe('getChordNote', () => {
  it('should create a ChordNote', () => {
    const note = getChordNote(1, Note.A, ScaleDegree.Root, GuitarString.B)
    expect(note.fret).toBe(1)
    expect(note.note).toBe(Note.A)
    expect(note.scaleDegree).toBe(ScaleDegree.Root)
    expect(note.string).toBe(GuitarString.B)
  })
})
