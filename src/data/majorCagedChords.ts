import { ChordShape, Note, GuitarString, KeyType } from '../model/models'

export const cShape: ChordShape = {
  description: 'C Shape',
  key: { root: Note.C, type: KeyType.Ionian },
  notes: [
    { fret: 3, string: GuitarString.A },
    { fret: 2, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 1, string: GuitarString.B },
    { fret: 0, string: GuitarString.E1 },
  ],
}

export const aShape: ChordShape = {
  description: 'A Shape',
  key: { root: Note.A, type: KeyType.Ionian },
  notes: [
    { fret: 0, string: GuitarString.A },
    { fret: 2, string: GuitarString.D },
    { fret: 2, string: GuitarString.G },
    { fret: 2, string: GuitarString.B },
    { fret: 0, string: GuitarString.E1 },
  ],
}

export const gShape: ChordShape = {
  description: 'G Shape',
  key: { root: Note.G, type: KeyType.Ionian },
  notes: [
    { fret: 3, string: GuitarString.E6 },
    { fret: 2, string: GuitarString.A },
    { fret: 0, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 0, string: GuitarString.B },
    { fret: 3, string: GuitarString.E1 },
  ],
}

export const eShape: ChordShape = {
  description: 'E Shape',
  key: { root: Note.E, type: KeyType.Ionian },
  notes: [
    { fret: 0, string: GuitarString.E6 },
    { fret: 2, string: GuitarString.A },
    { fret: 2, string: GuitarString.D },
    { fret: 1, string: GuitarString.G },
    { fret: 0, string: GuitarString.B },
    { fret: 0, string: GuitarString.E1 },
  ],
}

export const dShape: ChordShape = {
  description: 'D Shape',
  key: { root: Note.D, type: KeyType.Ionian },
  notes: [
    { fret: 0, string: GuitarString.D },
    { fret: 2, string: GuitarString.G },
    { fret: 3, string: GuitarString.B },
    { fret: 2, string: GuitarString.E1 },
  ],
}

export const majorCagedChords = [cShape, aShape, gShape, eShape, dShape]
