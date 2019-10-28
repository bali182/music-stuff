import { Note, GuitarString, TriadGroup, KeyType } from '../model/models'
import { getBassChordShape } from '../model/ChordShapes'

export const EAD: TriadGroup = {
  rootPosition: {
    description: 'Root position triad',
    key: { root: Note.G, type: KeyType.Aeolian },
    notes: [
      { fret: 3, string: GuitarString.E6 },
      { fret: 1, string: GuitarString.A },
      { fret: 0, string: GuitarString.D },
    ],
  },
  firstInversion: {
    description: 'First inversion triad',
    key: { root: Note.D, type: KeyType.Aeolian },
    notes: [
      { fret: 1, string: GuitarString.E6 },
      { fret: 0, string: GuitarString.A },
      { fret: 0, string: GuitarString.D },
    ],
  },
  secondInversion: {
    description: 'Second inversion triad',
    key: { root: Note.B, type: KeyType.Aeolian },
    notes: [
      { fret: 2, string: GuitarString.E6 },
      { fret: 2, string: GuitarString.A },
      { fret: 0, string: GuitarString.D },
    ],
  },
}

export const ADG: TriadGroup = {
  rootPosition: {
    description: 'Root position triad',
    key: { root: Note.C, type: KeyType.Aeolian },
    notes: [
      { fret: 3, string: GuitarString.A },
      { fret: 1, string: GuitarString.D },
      { fret: 0, string: GuitarString.G },
    ],
  },
  firstInversion: {
    description: 'First inversion triad',
    key: { root: Note.G, type: KeyType.Aeolian },
    notes: [
      { fret: 1, string: GuitarString.A },
      { fret: 0, string: GuitarString.D },
      { fret: 0, string: GuitarString.G },
    ],
  },
  secondInversion: {
    description: 'Second inversion triad',
    key: { root: Note.E, type: KeyType.Aeolian },
    notes: [
      { fret: 2, string: GuitarString.A },
      { fret: 2, string: GuitarString.D },
      { fret: 0, string: GuitarString.G },
    ],
  },
}

export const DGB: TriadGroup = {
  rootPosition: {
    description: 'Root position triad',
    key: { root: Note.E, type: KeyType.Aeolian },
    notes: [
      { fret: 2, string: GuitarString.D },
      { fret: 0, string: GuitarString.G },
      { fret: 0, string: GuitarString.B },
    ],
  },
  firstInversion: {
    description: 'First inversion triad',
    key: { root: Note.C, type: KeyType.Aeolian },
    notes: [
      { fret: 1, string: GuitarString.D },
      { fret: 0, string: GuitarString.G },
      { fret: 1, string: GuitarString.B },
    ],
  },
  secondInversion: {
    description: 'Second inversion triad',
    key: { root: Note.GSharp, type: KeyType.Aeolian },
    notes: [
      { fret: 1, string: GuitarString.D },
      { fret: 1, string: GuitarString.G },
      { fret: 0, string: GuitarString.B },
    ],
  },
}

export const GBE: TriadGroup = {
  rootPosition: {
    description: 'Root position triad',
    key: { root: Note.A, type: KeyType.Aeolian },
    notes: [
      { fret: 2, string: GuitarString.G },
      { fret: 1, string: GuitarString.B },
      { fret: 0, string: GuitarString.E1 },
    ],
  },
  firstInversion: {
    description: 'First inversion triad',
    key: { root: Note.E, type: KeyType.Aeolian },
    notes: [
      { fret: 0, string: GuitarString.G },
      { fret: 0, string: GuitarString.B },
      { fret: 0, string: GuitarString.E1 },
    ],
  },
  secondInversion: {
    description: 'Second inversion triad',
    key: { root: Note.CSharp, type: KeyType.Aeolian },
    notes: [
      { fret: 1, string: GuitarString.G },
      { fret: 2, string: GuitarString.B },
      { fret: 0, string: GuitarString.E1 },
    ],
  },
}

export const minorTriadsGuitar = [
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

export const minorTriadsBass = [
  getBassChordShape(EAD.rootPosition),
  getBassChordShape(EAD.firstInversion),
  getBassChordShape(EAD.secondInversion),

  getBassChordShape(ADG.rootPosition),
  getBassChordShape(ADG.firstInversion),
  getBassChordShape(ADG.secondInversion),
]
