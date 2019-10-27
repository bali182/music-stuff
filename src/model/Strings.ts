import { AnyString, BassString, GuitarString, Note, FrettedNote } from './models'
import { moveNote } from './Notes'

export function getBassString(string: AnyString): BassString {
  switch (string) {
    case GuitarString.E6:
      return BassString.E
    case GuitarString.A:
      return BassString.A
    case GuitarString.D:
      return BassString.D
    case GuitarString.G:
      return BassString.G
    case GuitarString.B:
    case GuitarString.E1:
      throw new TypeError(`Unexpected Guitar string ${string}!`)
    default:
      return string
  }
}

export function getStringRootNote(string: AnyString): Note {
  switch (string) {
    case GuitarString.E1:
    case GuitarString.E6:
    case BassString.E:
      return Note.E
    case GuitarString.A:
    case BassString.A:
      return Note.A
    case GuitarString.D:
    case BassString.D:
      return Note.D
    case GuitarString.G:
    case BassString.G:
      return Note.G
    case GuitarString.B:
      return Note.B
  }
}

export function getNoteOnString({ string, fret }: FrettedNote): Note {
  return moveNote(getStringRootNote(string), fret)
}
