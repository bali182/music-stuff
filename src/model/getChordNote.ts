import { Note, ScaleDegree, AnyString, ChordNote } from './models'

export function getChordNote(fret: number, note: Note, tone: ScaleDegree, string: AnyString): ChordNote {
  return { fret, note, scaleDegree: tone, string }
}
