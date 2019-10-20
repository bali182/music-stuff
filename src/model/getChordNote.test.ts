import { Note, ChordTone, GuitarString } from './models'
import { getChordNote } from './getChordNote'

describe('getChordNote', () => {
  it('should create a ChordNote', () => {
    const note = getChordNote(1, Note.A, ChordTone.Root, GuitarString.B)
    expect(note.fret).toBe(1)
    expect(note.note).toBe(Note.A)
    expect(note.tone).toBe(ChordTone.Root)
    expect(note.string).toBe(GuitarString.B)
  })
})
