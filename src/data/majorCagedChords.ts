import { ChordShape, Note, ScaleDegree, GuitarString, ChordType } from '../model/models'
import { getChordNote } from '../model/Chords'

export const cShape: ChordShape = {
  root: Note.C,
  type: ChordType.Major,
  description: 'C Shape',
  notes: [
    getChordNote(3, Note.C, ScaleDegree.Root, GuitarString.A),
    getChordNote(2, Note.E, ScaleDegree.Third, GuitarString.D),
    getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
    getChordNote(1, Note.C, ScaleDegree.Root, GuitarString.B),
    getChordNote(0, Note.E, ScaleDegree.Third, GuitarString.E1),
  ],
}

export const aShape: ChordShape = {
  root: Note.A,
  type: ChordType.Major,
  description: 'A Shape',
  notes: [
    getChordNote(0, Note.A, ScaleDegree.Root, GuitarString.A),
    getChordNote(2, Note.E, ScaleDegree.Fifth, GuitarString.D),
    getChordNote(2, Note.A, ScaleDegree.Root, GuitarString.G),
    getChordNote(2, Note.CSharp, ScaleDegree.Third, GuitarString.B),
    getChordNote(0, Note.E, ScaleDegree.Fifth, GuitarString.E1),
  ],
}

export const gShape: ChordShape = {
  root: Note.G,
  type: ChordType.Major,
  description: 'G Shape',
  notes: [
    getChordNote(3, Note.G, ScaleDegree.Root, GuitarString.E6),
    getChordNote(2, Note.B, ScaleDegree.Third, GuitarString.A),
    getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
    getChordNote(0, Note.G, ScaleDegree.Root, GuitarString.G),
    getChordNote(0, Note.B, ScaleDegree.Third, GuitarString.B),
    getChordNote(3, Note.G, ScaleDegree.Root, GuitarString.E1),
  ],
}

export const eShape: ChordShape = {
  root: Note.E,
  type: ChordType.Major,
  description: 'E Shape',
  notes: [
    getChordNote(0, Note.E, ScaleDegree.Root, GuitarString.E6),
    getChordNote(2, Note.B, ScaleDegree.Fifth, GuitarString.A),
    getChordNote(2, Note.E, ScaleDegree.Root, GuitarString.D),
    getChordNote(1, Note.GSharp, ScaleDegree.Third, GuitarString.G),
    getChordNote(0, Note.B, ScaleDegree.Fifth, GuitarString.B),
    getChordNote(0, Note.E, ScaleDegree.Root, GuitarString.E1),
  ],
}

export const dShape: ChordShape = {
  root: Note.D,
  type: ChordType.Major,
  description: 'D Shape',
  notes: [
    getChordNote(0, Note.D, ScaleDegree.Root, GuitarString.D),
    getChordNote(2, Note.A, ScaleDegree.Fifth, GuitarString.G),
    getChordNote(3, Note.D, ScaleDegree.Root, GuitarString.B),
    getChordNote(2, Note.FSharp, ScaleDegree.Third, GuitarString.E1),
  ],
}

export const majorCagedChords = [cShape, aShape, gShape, eShape, dShape]
