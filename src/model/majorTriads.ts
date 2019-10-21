import { Note, ChordTone, GuitarString, ThreeStringTriad } from './models'
import { getChordNote } from './getChordNote'

export const EAD: ThreeStringTriad = {
  rootPosition: {
    root: Note.G,
    notes: [
      getChordNote(3, Note.G, ChordTone.Root, GuitarString.E6),
      getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
    ],
  },
  firstInversion: {
    root: Note.D,
    notes: [
      getChordNote(2, Note.FSharp, ChordTone.Third, GuitarString.E6),
      getChordNote(0, Note.A, ChordTone.Fifth, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Root, GuitarString.D),
    ],
  },
  secondInversion: {
    root: Note.ASharp,
    notes: [
      getChordNote(1, Note.F, ChordTone.Fifth, GuitarString.E6),
      getChordNote(1, Note.ASharp, ChordTone.Root, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Third, GuitarString.D),
    ],
  },
}

export const ADG: ThreeStringTriad = {
  rootPosition: {
    root: Note.C,
    notes: [
      getChordNote(3, Note.C, ChordTone.Root, GuitarString.A),
      getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
    ],
  },
  firstInversion: {
    root: Note.G,
    notes: [
      getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Root, GuitarString.G),
    ],
  },
  secondInversion: {
    root: Note.DSharp,
    notes: [
      getChordNote(1, Note.ASharp, ChordTone.Fifth, GuitarString.A),
      getChordNote(1, Note.DSharp, ChordTone.Root, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Third, GuitarString.G),
    ],
  },
}

export const DGB: ThreeStringTriad = {
  rootPosition: {
    root: Note.E,
    notes: [
      getChordNote(2, Note.E, ChordTone.Root, GuitarString.D),
      getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
    ],
  },
  firstInversion: {
    root: Note.C,
    notes: [
      getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
      getChordNote(1, Note.C, ChordTone.Root, GuitarString.B),
    ],
  },
  secondInversion: {
    root: Note.G,
    notes: [
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Root, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Third, GuitarString.B),
    ],
  },
}

export const GBE: ThreeStringTriad = {
  rootPosition: {
    root: Note.A,
    notes: [
      getChordNote(2, Note.A, ChordTone.Root, GuitarString.G),
      getChordNote(2, Note.CSharp, ChordTone.Third, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Fifth, GuitarString.E1),
    ],
  },
  firstInversion: {
    root: Note.E,
    notes: [
      getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Root, GuitarString.E1),
    ],
  },
  secondInversion: {
    root: Note.C,
    notes: [
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
      getChordNote(1, Note.C, ChordTone.Root, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Third, GuitarString.E1),
    ],
  },
}

export const majorTriads = [
  EAD.rootPosition,
  EAD.firstInversion,
  EAD.secondInversion,

  ADG.rootPosition,
  ADG.firstInversion,
  ADG.secondInversion,

  DGB.rootPosition,
  DGB.firstInversion,
  DGB.secondInversion,

  GBE.rootPosition,
  GBE.firstInversion,
  GBE.secondInversion,
]
