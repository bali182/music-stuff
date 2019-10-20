import { GuitarString } from './GuitarString'
import { Note } from './Note'
import { BassString } from './BassString'

export enum ChordTone {
  Root = 'R',
  Third = '3',
  Fifth = '5',
  Seventh = '7',
  Ninth = '9',
}

export type ChordNote = {
  fret: number
  tone: ChordTone
  note: Note
  string: GuitarString | BassString
}

export type ChordShape = {
  root: Note
  notes: ChordNote[]
}

export function chordNote(fret: number, note: Note, tone: ChordTone, string: GuitarString | BassString): ChordNote {
  return { fret, note, tone, string }
}
