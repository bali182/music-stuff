import { getChordNote } from './getChordNote'
import { ChordShape, Note, ChordTone, GuitarString, ChordType } from './models'

export const cShape: ChordShape = {
  root: Note.C,
  type: ChordType.Major,
  notes: [
    getChordNote(3, Note.C, ChordTone.Root, GuitarString.A),
    getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
    getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
    getChordNote(1, Note.C, ChordTone.Root, GuitarString.B),
    getChordNote(0, Note.E, ChordTone.Third, GuitarString.E1),
  ],
}

export const aShape: ChordShape = {
  root: Note.A,
  type: ChordType.Major,
  notes: [
    getChordNote(0, Note.A, ChordTone.Root, GuitarString.A),
    getChordNote(2, Note.E, ChordTone.Fifth, GuitarString.D),
    getChordNote(2, Note.A, ChordTone.Root, GuitarString.G),
    getChordNote(2, Note.CSharp, ChordTone.Third, GuitarString.B),
    getChordNote(0, Note.E, ChordTone.Fifth, GuitarString.E1),
  ],
}

export const gShape: ChordShape = {
  root: Note.G,
  type: ChordType.Major,
  notes: [
    getChordNote(3, Note.G, ChordTone.Root, GuitarString.E6),
    getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
    getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
    getChordNote(0, Note.G, ChordTone.Root, GuitarString.G),
    getChordNote(0, Note.B, ChordTone.Third, GuitarString.B),
    getChordNote(3, Note.G, ChordTone.Root, GuitarString.E1),
  ],
}

export const eShape: ChordShape = {
  root: Note.E,
  type: ChordType.Major,
  notes: [
    getChordNote(0, Note.E, ChordTone.Root, GuitarString.E6),
    getChordNote(2, Note.B, ChordTone.Fifth, GuitarString.A),
    getChordNote(2, Note.E, ChordTone.Root, GuitarString.D),
    getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
    getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
    getChordNote(0, Note.E, ChordTone.Root, GuitarString.E1),
  ],
}

export const dShape: ChordShape = {
  root: Note.D,
  type: ChordType.Major,
  notes: [
    getChordNote(0, Note.D, ChordTone.Root, GuitarString.D),
    getChordNote(2, Note.A, ChordTone.Fifth, GuitarString.G),
    getChordNote(3, Note.D, ChordTone.Root, GuitarString.B),
    getChordNote(2, Note.FSharp, ChordTone.Third, GuitarString.E1),
  ],
}

export const majorCagedChords = [cShape, aShape, gShape, eShape, dShape]
