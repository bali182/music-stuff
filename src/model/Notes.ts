import sample from 'lodash/sample'
import values from 'lodash/values'
import { Note } from './models'
import { getChromaticScale } from './Scales'
import { Notes, NaturalNotes } from '../data/notes'

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

// TODO hacky stuff
export function isSharpNote(note: Note): boolean {
  return Notes.indexOf(note) >= 0 && note.toString().indexOf('#') === 1
}

export function isFlatNote(note: Note): boolean {
  return Notes.indexOf(note) >= 0 && note.toString().indexOf('b') === 1
}

export function isBaseNote(note: Note): boolean {
  return Notes.indexOf(note) >= 0 && note.length === 1
}

export function asBaseNote(note: Note): Note {
  const str = note.toString()
  return str.length === 1 ? note : (str.slice(0, 1) as Note)
}

export function asSharpNote(note: Note): Note {
  return isBaseNote(note) ? (`${note}#` as Note) : (note.replace('b', '#') as Note)
}

export function asFlatNote(note: Note): Note {
  return isBaseNote(note) ? (`${note}b` as Note) : (note.replace('#', 'b') as Note)
}

const BaseNotes = [Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B]

export function getHigherBaseNote(note: Note): Note {
  return BaseNotes[(BaseNotes.indexOf(asBaseNote(note)) + 1) % BaseNotes.length]
}

export function getLowerBaseNote(note: Note): Note {
  const index = BaseNotes.indexOf(asBaseNote(note)) - 1
  return BaseNotes[index < 0 ? BaseNotes.length - 1 : index]
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
  return sample(NaturalNotes)
}

export function getExtendedRandomNote(): Note {
  return sample(values(Note))
}

export function getAllNotes(): Note[] {
  return values(Note)
}
