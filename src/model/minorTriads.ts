import { Note, ChordTone, GuitarString, TriadGroup, ChordType } from './models'
import { getChordNote } from './getChordNote'

export const EAD: TriadGroup = {
  rootPosition: {
    root: Note.G,
    type: ChordType.Minor,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.G, ChordTone.Root, GuitarString.E6),
      getChordNote(1, Note.ASharp, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
    ],
  },
  firstInversion: {
    root: Note.D,
    type: ChordType.Minor,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.F, ChordTone.Third, GuitarString.E6),
      getChordNote(0, Note.A, ChordTone.Fifth, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Root, GuitarString.D),
    ],
  },
  secondInversion: {
    root: Note.B,
    type: ChordType.Minor,
    description: 'Second inversion triad',
    notes: [
      getChordNote(2, Note.FSharp, ChordTone.Fifth, GuitarString.E6),
      getChordNote(2, Note.B, ChordTone.Root, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Third, GuitarString.D),
    ],
  },
}

export const ADG: TriadGroup = {
  rootPosition: {
    root: Note.C,
    type: ChordType.Minor,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.C, ChordTone.Root, GuitarString.A),
      getChordNote(1, Note.DSharp, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
    ],
  },
  firstInversion: {
    root: Note.G,
    type: ChordType.Minor,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.ASharp, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Root, GuitarString.G),
    ],
  },
  secondInversion: {
    root: Note.E,
    type: ChordType.Minor,
    description: 'Second inversion triad',
    notes: [
      getChordNote(2, Note.B, ChordTone.Fifth, GuitarString.A),
      getChordNote(2, Note.E, ChordTone.Root, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Third, GuitarString.G),
    ],
  },
}

export const DGB: TriadGroup = {
  rootPosition: {
    root: Note.E,
    type: ChordType.Minor,
    description: 'Root position triad',
    notes: [
      getChordNote(2, Note.E, ChordTone.Root, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
    ],
  },
  firstInversion: {
    root: Note.C,
    type: ChordType.Minor,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.DSharp, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
      getChordNote(1, Note.C, ChordTone.Root, GuitarString.B),
    ],
  },
  secondInversion: {
    root: Note.GSharp,
    type: ChordType.Minor,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.DSharp, ChordTone.Fifth, GuitarString.D),
      getChordNote(1, Note.GSharp, ChordTone.Root, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Third, GuitarString.B),
    ],
  },
}

export const GBE: TriadGroup = {
  rootPosition: {
    root: Note.A,
    type: ChordType.Minor,
    description: 'Root position triad',
    notes: [
      getChordNote(2, Note.A, ChordTone.Root, GuitarString.G),
      getChordNote(1, Note.C, ChordTone.Third, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Fifth, GuitarString.E1),
    ],
  },
  firstInversion: {
    root: Note.E,
    type: ChordType.Minor,
    description: 'First inversion triad',
    notes: [
      getChordNote(0, Note.G, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Root, GuitarString.E1),
    ],
  },
  secondInversion: {
    root: Note.CSharp,
    type: ChordType.Minor,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.GSharp, ChordTone.Fifth, GuitarString.G),
      getChordNote(2, Note.CSharp, ChordTone.Root, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Third, GuitarString.E1),
    ],
  },
}

export const minorTriads = [
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
