import { ChordShape, GuitarString, AnyString, BassString } from './models'

function asBassString(string: AnyString): BassString {
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

export function getBassChordShape(guitarChord: ChordShape): ChordShape {
  return {
    ...guitarChord,
    notes: guitarChord.notes
      .filter((note) => note.string !== GuitarString.E1 && note.string !== GuitarString.B)
      .map((note) => ({
        ...note,
        string: asBassString(note.string),
      })),
  }
}
