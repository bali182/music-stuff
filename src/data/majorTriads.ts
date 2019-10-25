import { Note, ChordTone, GuitarString, TriadGroup, ChordType } from '../model/models'
import { getChordNote } from '../model/getChordNote'

export const EAD: TriadGroup = {
  rootPosition: {
    root: Note.G,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.G, ChordTone.Root, GuitarString.E6),
      getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
    ],
  },
  firstInversion: {
    root: Note.D,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.FSharp, ChordTone.Third, GuitarString.E6),
      getChordNote(0, Note.A, ChordTone.Fifth, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Root, GuitarString.D),
    ],
  },
  secondInversion: {
    root: Note.ASharp,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.F, ChordTone.Fifth, GuitarString.E6),
      getChordNote(1, Note.ASharp, ChordTone.Root, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Third, GuitarString.D),
    ],
  },
}

export const ADG: TriadGroup = {
  rootPosition: {
    root: Note.C,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.C, ChordTone.Root, GuitarString.A),
      getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
    ],
  },
  firstInversion: {
    root: Note.G,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Root, GuitarString.G),
    ],
  },
  secondInversion: {
    root: Note.DSharp,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.ASharp, ChordTone.Fifth, GuitarString.A),
      getChordNote(1, Note.DSharp, ChordTone.Root, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Third, GuitarString.G),
    ],
  },
}

export const DGB: TriadGroup = {
  rootPosition: {
    root: Note.E,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(2, Note.E, ChordTone.Root, GuitarString.D),
      getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
    ],
  },
  firstInversion: {
    root: Note.C,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
      getChordNote(1, Note.C, ChordTone.Root, GuitarString.B),
    ],
  },
  secondInversion: {
    root: Note.G,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Root, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Third, GuitarString.B),
    ],
  },
}

export const GBE: TriadGroup = {
  rootPosition: {
    root: Note.A,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(2, Note.A, ChordTone.Root, GuitarString.G),
      getChordNote(2, Note.CSharp, ChordTone.Third, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Fifth, GuitarString.E1),
    ],
  },
  firstInversion: {
    root: Note.E,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Root, GuitarString.E1),
    ],
  },
  secondInversion: {
    root: Note.C,
    type: ChordType.Major,
    description: 'Second inversion triad',
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
