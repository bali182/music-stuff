import { ScaleShape, Note, KeyType, GuitarString } from '../model/models'

export const pentatonicShape1: ScaleShape = {
  key: { root: Note.F, type: KeyType.Ionian },
  notes: [
    { fret: 1, string: GuitarString.E6 },
    { fret: 3, string: GuitarString.E6 },
    { fret: 0, string: GuitarString.A },
    { fret: 3, string: GuitarString.A },
    { fret: 0, string: GuitarString.D },
    { fret: 3, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 2, string: GuitarString.G },
    { fret: 1, string: GuitarString.B },
    { fret: 3, string: GuitarString.B },
    { fret: 1, string: GuitarString.E1 },
    { fret: 3, string: GuitarString.E1 },
  ],
}

export const pentatonicShape2: ScaleShape = {
  key: { root: Note.DSharp, type: KeyType.Ionian },
  notes: [
    { fret: 1, string: GuitarString.E6 },
    { fret: 3, string: GuitarString.E6 },
    { fret: 1, string: GuitarString.A },
    { fret: 3, string: GuitarString.A },
    { fret: 1, string: GuitarString.D },
    { fret: 3, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 3, string: GuitarString.G },
    { fret: 1, string: GuitarString.B },
    { fret: 4, string: GuitarString.B },
    { fret: 1, string: GuitarString.E1 },
    { fret: 3, string: GuitarString.E1 },
  ],
}

export const pentatonicShape3: ScaleShape = {
  key: { root: Note.C, type: KeyType.Ionian },
  notes: [
    { fret: 0, string: GuitarString.E6 },
    { fret: 3, string: GuitarString.E6 },
    { fret: 0, string: GuitarString.A },
    { fret: 3, string: GuitarString.A },
    { fret: 0, string: GuitarString.D },
    { fret: 2, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 2, string: GuitarString.G },
    { fret: 1, string: GuitarString.B },
    { fret: 3, string: GuitarString.B },
    { fret: 0, string: GuitarString.E1 },
    { fret: 3, string: GuitarString.E1 },
  ],
}

export const pentatonicShape4: ScaleShape = {
  key: { root: Note.ASharp, type: KeyType.Ionian },
  notes: [
    { fret: 1, string: GuitarString.E6 },
    { fret: 3, string: GuitarString.E6 },
    { fret: 1, string: GuitarString.A },
    { fret: 3, string: GuitarString.A },
    { fret: 0, string: GuitarString.D },
    { fret: 3, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 3, string: GuitarString.G },
    { fret: 1, string: GuitarString.B },
    { fret: 3, string: GuitarString.B },
    { fret: 1, string: GuitarString.E1 },
    { fret: 3, string: GuitarString.E1 },
  ],
}

export const pentatonicShape5: ScaleShape = {
  key: { root: Note.G, type: KeyType.Ionian },
  notes: [
    { fret: 0, string: GuitarString.E6 },
    { fret: 3, string: GuitarString.E6 },
    { fret: 0, string: GuitarString.A },
    { fret: 2, string: GuitarString.A },
    { fret: 0, string: GuitarString.D },
    { fret: 2, string: GuitarString.D },
    { fret: 0, string: GuitarString.G },
    { fret: 2, string: GuitarString.G },
    { fret: 0, string: GuitarString.B },
    { fret: 3, string: GuitarString.B },
    { fret: 0, string: GuitarString.E1 },
    { fret: 3, string: GuitarString.E1 },
  ],
}
