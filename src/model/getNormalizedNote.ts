import { Note, Notes } from './models'

export function getNormalizedNote(note: Note): Note {
  if (Notes.indexOf(note) < 0) {
    throw new TypeError(`Not a valid note: "${note}"`)
  }
  switch (note) {
    case Note.BFlat:
      return Note.ASharp
    case Note.BSharp:
      return Note.C
    case Note.CFlat:
      return Note.B
    case Note.DFlat:
      return Note.CSharp
    case Note.EFlat:
      return Note.DSharp
    case Note.ESharp:
      return Note.F
    case Note.FFlat:
      return Note.E
    case Note.GFlat:
      return Note.FSharp
    case Note.AFlat:
      return Note.GSharp
    default:
      return note
  }
}
