import { Note, ScaleDegree, GuitarString, TriadGroup, ChordType } from '../model/models'
import { getChordNote, getBassChordShape } from '../model/Chords'

export const EAD: TriadGroup = {
  rootPosition: {
    root: Note.G,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.G, ScaleDegree.Root, GuitarString.E6),
      getChordNote(2, Note.B, ScaleDegree.Third, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
    ],
  },
  firstInversion: {
    root: Note.D,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.FSharp, ScaleDegree.Third, GuitarString.E6),
      getChordNote(0, Note.A, ScaleDegree.Fifth, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Root, GuitarString.D),
    ],
  },
  secondInversion: {
    root: Note.ASharp,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.F, ScaleDegree.Fifth, GuitarString.E6),
      getChordNote(1, Note.ASharp, ScaleDegree.Root, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Third, GuitarString.D),
    ],
  },
}

export const ADG: TriadGroup = {
  rootPosition: {
    root: Note.C,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(3, Note.C, ScaleDegree.Root, GuitarString.A),
      getChordNote(2, Note.E, ScaleDegree.Third, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
    ],
  },
  firstInversion: {
    root: Note.G,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.B, ScaleDegree.Third, GuitarString.A),
      getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Root, GuitarString.G),
    ],
  },
  secondInversion: {
    root: Note.DSharp,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(1, Note.ASharp, ScaleDegree.Fifth, GuitarString.A),
      getChordNote(1, Note.DSharp, ScaleDegree.Root, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Third, GuitarString.G),
    ],
  },
}

export const DGB: TriadGroup = {
  rootPosition: {
    root: Note.E,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(2, Note.E, ScaleDegree.Root, GuitarString.D),
      getChordNote(1, Note.GSharp, ScaleDegree.Third, GuitarString.G),
      getChordNote(0, Note.B, ScaleDegree.Fifth, GuitarString.B),
    ],
  },
  firstInversion: {
    root: Note.C,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(2, Note.E, ScaleDegree.Third, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
      getChordNote(1, Note.C, ScaleDegree.Root, GuitarString.B),
    ],
  },
  secondInversion: {
    root: Note.G,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.D, ScaleDegree.Fifth, GuitarString.D),
      getChordNote(0, Note.G, ScaleDegree.Root, GuitarString.G),
      getChordNote(0, Note.B, ScaleDegree.Third, GuitarString.B),
    ],
  },
}

export const GBE: TriadGroup = {
  rootPosition: {
    root: Note.A,
    type: ChordType.Major,
    description: 'Root position triad',
    notes: [
      getChordNote(2, Note.A, ScaleDegree.Root, GuitarString.G),
      getChordNote(2, Note.CSharp, ScaleDegree.Third, GuitarString.B),
      getChordNote(0, Note.E, ScaleDegree.Fifth, GuitarString.E1),
    ],
  },
  firstInversion: {
    root: Note.E,
    type: ChordType.Major,
    description: 'First inversion triad',
    notes: [
      getChordNote(1, Note.GSharp, ScaleDegree.Third, GuitarString.G),
      getChordNote(0, Note.B, ScaleDegree.Fifth, GuitarString.B),
      getChordNote(0, Note.E, ScaleDegree.Root, GuitarString.E1),
    ],
  },
  secondInversion: {
    root: Note.C,
    type: ChordType.Major,
    description: 'Second inversion triad',
    notes: [
      getChordNote(0, Note.G, ScaleDegree.Fifth, GuitarString.G),
      getChordNote(1, Note.C, ScaleDegree.Root, GuitarString.B),
      getChordNote(0, Note.E, ScaleDegree.Third, GuitarString.E1),
    ],
  },
}

export const majorTriadsGuitar = [
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

export const majorTriadsBass = [
  getBassChordShape(EAD.rootPosition),
  getBassChordShape(EAD.firstInversion),
  getBassChordShape(EAD.secondInversion),

  getBassChordShape(ADG.rootPosition),
  getBassChordShape(ADG.firstInversion),
  getBassChordShape(ADG.secondInversion),
]
