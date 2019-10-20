import { Note, ChordTone, AnyString, ChordNote } from './models'

export function getChordNote(fret: number, note: Note, tone: ChordTone, string: AnyString): ChordNote {
  return { fret, note, tone, string }
}
