import { AnyString, Note, GuitarString, BassString } from './models'

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
