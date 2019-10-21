import { ChordShape, ChordTone, Note, AnyString, ChordNote } from '../model/models'
import { getChromaticScale } from '../model/getChromaticScale'
import { getStringRootNote } from '../model/getStringRootNote'

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
