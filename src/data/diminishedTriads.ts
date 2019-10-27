import { Note, ScaleDegree, GuitarString, TriadGroup, ChordType } from '../model/models'
import { getChordNote, getBassChordShape } from '../model/Chords'

export const EAD: TriadGroup = {
  rootPosition: {
    root: Note.GSharp,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(4, Note.GSharp, ScaleDegree.Root, GuitarString.E6),
      getChordNote(2, Note.B, ScaleDegree.Third, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
    ],
  },
  firstInversion: {
    root: Note.DSharp,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.FSharp, ScaleDegree.Third, GuitarString.E6),
      getChordNote(0, Note.A, ScaleDegree.Fifth, GuitarString.A),
      getChordNote(1, Note.DSharp, ScaleDegree.Root, GuitarString.D),
    ],
  },
  secondInversion: {
    root: Note.B,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.F, ScaleDegree.Fifth, GuitarString.E6),
      getChordNote(2, Note.B, ScaleDegree.Root, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Third, GuitarString.D),
    ],
  },
}

export const ADG: TriadGroup = {
  rootPosition: {
    root: Note.CSharp,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(4, Note.CSharp, ScaleDegree.Root, GuitarString.A),
      getChordNote(2, Note.E, ScaleDegree.Third, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
    ],
  },
  firstInversion: {
    root: Note.GSharp,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.B, ScaleDegree.Third, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
      getChordNote(1, Note.GSharp, ScaleDegree.Root, GuitarString.G),
    ],
  },
  secondInversion: {
    root: Note.E,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.ASharp, ScaleDegree.Fifth, GuitarString.A),
      getChordNote(2, Note.E, ScaleDegree.Root, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Third, GuitarString.G),
    ],
  },
}

export const DGB: TriadGroup = {
  rootPosition: {
    root: Note.F,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.F, ScaleDegree.Root, GuitarString.D),
      getChordNote(1, Note.GSharp, ScaleDegree.Third, GuitarString.G),
      getChordNote(0, Note.B, ScaleDegree.Fifth, GuitarString.B),
    ],
  },
  firstInversion: {
    root: Note.CSharp,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.E, ScaleDegree.Third, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
      getChordNote(2, Note.CSharp, ScaleDegree.Root, GuitarString.B),
    ],
  },
  secondInversion: {
    root: Note.GSharp,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
      getChordNote(1, Note.GSharp, ScaleDegree.Root, GuitarString.G),
      getChordNote(0, Note.B, ScaleDegree.Third, GuitarString.B),
    ],
  },
}

export const GBE: TriadGroup = {
  rootPosition: {
    root: Note.ASharp,
    type: ChordType.Diminished,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.ASharp, ScaleDegree.Root, GuitarString.G),
      getChordNote(2, Note.CSharp, ScaleDegree.Third, GuitarString.B),
      getChordNote(0, Note.E, ScaleDegree.Fifth, GuitarString.E1),
    ],
  },
  firstInversion: {
    root: Note.F,
    type: ChordType.Diminished,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.GSharp, ScaleDegree.Third, GuitarString.G),
      getChordNote(0, Note.B, ScaleDegree.Fifth, GuitarString.B),
      getChordNote(1, Note.F, ScaleDegree.Root, GuitarString.E1),
    ],
  },
  secondInversion: {
    root: Note.CSharp,
    type: ChordType.Diminished,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
      getChordNote(2, Note.CSharp, ScaleDegree.Root, GuitarString.B),
      getChordNote(0, Note.E, ScaleDegree.Third, GuitarString.E1),
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
