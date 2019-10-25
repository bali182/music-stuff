import { Note, ChordTone, GuitarString, TriadGroup, ChordType } from '../model/models'
import { getChordNote } from '../model/getChordNote'
import { getBassChordShape } from '../model/getBassChordShape'

export const EAD: TriadGroup = {
  rootPosition: {
    root: Note.GSharp,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(4, Note.GSharp, ChordTone.Root, GuitarString.E6),
      getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
    ],
  },
  firstInversion: {
    root: Note.DSharp,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.FSharp, ChordTone.Third, GuitarString.E6),
      getChordNote(0, Note.A, ChordTone.Fifth, GuitarString.A),
      getChordNote(1, Note.DSharp, ChordTone.Root, GuitarString.D),
    ],
  },
  secondInversion: {
    root: Note.B,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.F, ChordTone.Fifth, GuitarString.E6),
      getChordNote(2, Note.B, ChordTone.Root, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Third, GuitarString.D),
    ],
  },
}

export const ADG: TriadGroup = {
  rootPosition: {
    root: Note.CSharp,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(4, Note.CSharp, ChordTone.Root, GuitarString.A),
      getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
    ],
  },
  firstInversion: {
    root: Note.GSharp,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.B, ChordTone.Third, GuitarString.A),
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(1, Note.GSharp, ChordTone.Root, GuitarString.G),
    ],
  },
  secondInversion: {
    root: Note.E,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.ASharp, ChordTone.Fifth, GuitarString.A),
      getChordNote(2, Note.E, ChordTone.Root, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Third, GuitarString.G),
    ],
  },
}

export const DGB: TriadGroup = {
  rootPosition: {
    root: Note.F,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.F, ChordTone.Root, GuitarString.D),
      getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
    ],
  },
  firstInversion: {
    root: Note.CSharp,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.E, ChordTone.Third, GuitarString.D),
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
      getChordNote(2, Note.CSharp, ChordTone.Root, GuitarString.B),
    ],
  },
  secondInversion: {
    root: Note.GSharp,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.D, ChordTone.Fifth, GuitarString.D),
      getChordNote(1, Note.GSharp, ChordTone.Root, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Third, GuitarString.B),
    ],
  },
}

export const GBE: TriadGroup = {
  rootPosition: {
    root: Note.ASharp,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.ASharp, ChordTone.Root, GuitarString.G),
      getChordNote(2, Note.CSharp, ChordTone.Third, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Fifth, GuitarString.E1),
    ],
  },
  firstInversion: {
    root: Note.F,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.GSharp, ChordTone.Third, GuitarString.G),
      getChordNote(0, Note.B, ChordTone.Fifth, GuitarString.B),
      getChordNote(1, Note.F, ChordTone.Root, GuitarString.E1),
    ],
  },
  secondInversion: {
    root: Note.CSharp,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.G, ChordTone.Fifth, GuitarString.G),
      getChordNote(2, Note.CSharp, ChordTone.Root, GuitarString.B),
      getChordNote(0, Note.E, ChordTone.Third, GuitarString.E1),
    ],
  },
}

export const diminishedTriadsGuitar = [
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

export const diminishedTriadsBass = [
  getBassChordShape(EAD.rootPosition),
  getBassChordShape(EAD.firstInversion),
  getBassChordShape(EAD.secondInversion),

  getBassChordShape(ADG.rootPosition),
  getBassChordShape(ADG.firstInversion),
  getBassChordShape(ADG.secondInversion),
]
