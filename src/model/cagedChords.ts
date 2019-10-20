import { ChordShape, ChordTone, chordNote } from './ChordShape'
import { GuitarString } from './GuitarString'
import { Note } from './Note'

export const OpenCShape: ChordShape = {
  root: Note.C,
  notes: [
    chordNote(3, Note.C, ChordTone.Root, GuitarString.A),
    chordNote(2, Note.E, ChordTone.Third, GuitarString.D),
    chordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
    chordNote(1, Note.C, ChordTone.Root, GuitarString.B),
    chordNote(0, Note.E, ChordTone.Third, GuitarString.E1),
  ],
}

export const OpenAShape: ChordShape = {
  root: Note.A,
  notes: [
    chordNote(0, Note.A, ChordTone.Root, GuitarString.A),
    chordNote(2, Note.E, ChordTone.Fifth, GuitarString.D),
    chordNote(2, Note.A, ChordTone.Root, GuitarString.G),
    chordNote(2, Note.CSharp, ChordTone.Third, GuitarString.B),
    chordNote(0, Note.E, ChordTone.Fifth, GuitarString.E1),
  ],
}

export const OpenGShape: ChordShape = {
  root: Note.G,
  notes: [
    chordNote(3, Note.G, ChordTone.Root, GuitarString.E6),
    chordNote(2, Note.B, ChordTone.Third, GuitarString.A),
    chordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
    chordNote(0, Note.G, ChordTone.Root, GuitarString.G),
    chordNote(0, Note.B, ChordTone.Third, GuitarString.B),
    chordNote(3, Note.G, ChordTone.Root, GuitarString.E1),
  ],
}

export const OpenEShape: ChordShape = {
  root: Note.E,
  notes: [
    chordNote(0, Note.E, ChordTone.Root, GuitarString.E6),
    chordNote(2, Note.B, ChordTone.Fifth, GuitarString.A),
    chordNote(2, Note.E, ChordTone.Root, GuitarString.D),
    chordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
    chordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
    chordNote(0, Note.E, ChordTone.Root, GuitarString.E1),
  ],
}

export const OpenDShape: ChordShape = {
  root: Note.D,
  notes: [
    chordNote(0, Note.D, ChordTone.Root, GuitarString.D),
    chordNote(2, Note.A, ChordTone.Fifth, GuitarString.G),
    chordNote(3, Note.D, ChordTone.Root, GuitarString.B),
    chordNote(2, Note.FSharp, ChordTone.Third, GuitarString.E1),
  ],
}
