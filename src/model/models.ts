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
  key: MusicalKey
  notes: Note[]
}

export type TriadGroup = {
  rootPosition: ChordShape
  firstInversion: ChordShape
  secondInversion: ChordShape
}

export enum ScaleDegreeModifier {
  Flat = 'b',
  Sharp = '#',
}

export type ScaleDegreeNum = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type ScaleDegree = {
  degree: ScaleDegreeNum
  modifier?: ScaleDegreeModifier
}

export type FrettedNote = {
  string: AnyString
  fret: number
}

export type ChordShape = {
  key: MusicalKey
  notes: FrettedNote[]
  description: string
}

export type ScaleShape = {
  key: MusicalKey
  notes: FrettedNote[]
}

export type MusicalKey = {
  type: KeyType
  root: Note
}

export type ChordSequence = {
  key: MusicalKey
  description: string
  chords: ChordShape[]
}

export type ChordProgression = {
  name: string
  keyType: KeyType
  // Array indices
  scaleDegrees: number[]
}
