export enum GuitarString {
  E6 = 'E6',
  A = 'A',
  D = 'D',
  G = 'G',
  B = 'B',
  E1 = 'E1',
}

export enum BassString {
  E = 'E',
  A = 'A',
  D = 'D',
  G = 'G',
}

export type AnyString = BassString | GuitarString

export enum Note {
  A = 'A',
  ASharp = 'A#',
  BFlat = 'Bb',
  B = 'B',
  BSharp = 'B#',
  CFlat = 'Cb',
  C = 'C',
  CSharp = 'C#',
  DFlat = 'Db',
  D = 'D',
  DSharp = 'D#',
  EFlat = 'Eb',
  E = 'E',
  ESharp = 'E#',
  FFlat = 'Fb',
  F = 'F',
  FSharp = 'F#',
  GFlat = 'Gb',
  G = 'G',
  GSharp = 'G#',
  AFlat = 'Ab',
}

export enum ChordTone {
  Root = 'R',
  Third = '3',
  Fifth = '5',
}

export enum ChordType {
  Major = 'Major',
  Minor = 'Minor',
  Diminished = 'Diminished',
}

export type Chord = {
  root: Note
  type: ChordType
  notes: Note[]
}

export type TriadGroup = {
  rootPosition: ChordShape
  firstInversion: ChordShape
  secondInversion: ChordShape
}

export type ChordNote = {
  fret: number
  tone: ChordTone
  note: Note
  string: AnyString
}

export type ChordShape = {
  root: Note
  type: ChordType
  notes: ChordNote[]
  description: string
}

export const Notes = [
  Note.A,
  Note.ASharp,
  Note.BFlat,
  Note.B,
  Note.BSharp,
  Note.CFlat,
  Note.C,
  Note.CSharp,
  Note.DFlat,
  Note.D,
  Note.DSharp,
  Note.EFlat,
  Note.E,
  Note.ESharp,
  Note.FFlat,
  Note.F,
  Note.FSharp,
  Note.GFlat,
  Note.G,
  Note.GSharp,
  Note.AFlat,
]

export const ChromaticScaleFromC = [
  Note.C,
  Note.CSharp,
  Note.D,
  Note.DSharp,
  Note.E,
  Note.F,
  Note.FSharp,
  Note.G,
  Note.GSharp,
  Note.A,
  Note.ASharp,
  Note.B,
]

export const BassStrings = [BassString.E, BassString.A, BassString.D, BassString.G]

export const GuitarStrings = [
  GuitarString.E1,
  GuitarString.B,
  GuitarString.G,
  GuitarString.D,
  GuitarString.A,
  GuitarString.E6,
]
