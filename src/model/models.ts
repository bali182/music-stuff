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

export enum ScaleDegree {
  Root = 'R',
  Second = 2,
  Third = 3,
  Fourth = 4,
  Fifth = 5,
  Sixth = 6,
  Seventh = 7,
}

export enum ChordType {
  Major = 'Major',
  Minor = 'Minor',
  Diminished = 'Diminished',
}

export enum KeyType {
  Ionian = 'Ionian',
  Dorian = 'Dorian',
  Phrygian = 'Phrygian',
  Lydian = 'Lydian',
  Mixolydian = 'Mixolydian',
  Aeolian = 'Aeolian',
  Locrian = 'Locrian',
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
  scaleDegree: ScaleDegree
  note: Note
  string: AnyString
}

export type ChordShape = {
  root: Note
  type: ChordType
  notes: ChordNote[]
  description: string
}

export type Key = {
  type: KeyType
  root: Note
}

export type ChordSequence = {
  key: Key
  description: string
  chords: ChordShape[]
}

export type ChordProgression = {
  name: string
  keyType: KeyType
  // Array indices
  scaleDegrees: number[]
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

export const BassStrings = [BassString.E, BassString.A, BassString.D, BassString.G]

export const GuitarStrings = [
  GuitarString.E6,
  GuitarString.A,
  GuitarString.D,
  GuitarString.G,
  GuitarString.B,
  GuitarString.E1,
]
