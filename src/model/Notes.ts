import sample from 'lodash/sample'
import values from 'lodash/values'
import { Note } from './models'
import { getChromaticScale } from './Scales'
import { Notes } from '../data/notes'

export function getNormalizedNote(note: Note): Note {
  if (Notes.indexOf(note) < 0) {
    throw new TypeError(`Not a valid note: "${note}"`)
  }
  switch (note) {
    case Note.BFlat:
      return Note.ASharp
    case Note.BSharp:
      return Note.C
    case Note.CFlat:
      return Note.B
    case Note.DFlat:
      return Note.CSharp
    case Note.EFlat:
      return Note.DSharp
    case Note.ESharp:
      return Note.F
    case Note.FFlat:
      return Note.E
    case Note.GFlat:
      return Note.FSharp
    case Note.AFlat:
      return Note.GSharp
    default:
      return note
  }
}

export function moveNote(note: Note, semitones: number): Note {
  const scale = getChromaticScale(note)
  const withoutOctaves = semitones % scale.length
  const moveBy = withoutOctaves >= 0 ? withoutOctaves : scale.length + withoutOctaves
  const chromaticFromNote = getChromaticScale(note)
  return chromaticFromNote[moveBy]
}

export function getDistanceBetweenNotes(a: Note, b: Note): number {
  const scale = getChromaticScale(getNormalizedNote(a))
  return scale.indexOf(getNormalizedNote(b))
}

export function getRandomNote(): Note {
  return sample(getChromaticScale(Note.C))
}

export function getExtendedRandomNote(): Note {
  return sample(values(Note))
}
