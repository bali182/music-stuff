import { ScaleShape, MusicalKey, ChordShape, GuitarString, Note, FrettedNote } from './models'
import { getRelativeKey, getKeyName, keysEqual } from './Keys'
import { getDistanceBetweenNotes } from './Notes'
import { moveFrettedNote, getBassString, notesEqual } from './Strings'
import uniqBy from 'lodash/uniqBy'
import sortBy from 'lodash/sortBy'
import flatMap from 'lodash/flatMap'

export function getScaleShapeInKey(shape: ScaleShape, key: MusicalKey, allowZeroFret: boolean = true): ScaleShape {
  const relativeTargetKey = getRelativeKey(shape.key, key.type)
  const hasZeroFret = shape.notes.some((note) => note.fret === 0)
  const shift = getDistanceBetweenNotes(relativeTargetKey.root, key.root)
  const adjustedShift = hasZeroFret && allowZeroFret ? shift + 12 : shift
  return {
    key,
    notes: shape.notes.map(moveFrettedNote(adjustedShift)),
  }
}

export function isOnScaleShape(scale: ScaleShape, chord: ChordShape): boolean {
  return chord.notes.every((cNote) =>
    scale.notes.some((sNote) => sNote.fret === cNote.fret && sNote.string === cNote.string)
  )
}

function hasMatchingNotes(notesA: FrettedNote[], notesB: FrettedNote[]): boolean {
  return notesA.some((noteA) => notesB.some((noteB) => notesEqual(noteA, noteB)))
}

function adjustNotes(notesA: FrettedNote[], notesB: FrettedNote[]): [FrettedNote[], FrettedNote[]] {
  if (hasMatchingNotes(notesA, notesB)) {
    return [notesA, notesB]
  }
  const notesAPlusOctave = notesA.map(moveFrettedNote(12))
  if (hasMatchingNotes(notesAPlusOctave, notesB)) {
    return [notesAPlusOctave, notesB]
  }
  const notesBPlusOctave = notesB.map(moveFrettedNote(12))
  if (hasMatchingNotes(notesA, notesBPlusOctave)) {
    return [notesA, notesBPlusOctave]
  }
  throw new Error(`Scale shapes can't be merged.`)
}

export function mergeScaleShapes(shapeA: ScaleShape, shapeB: ScaleShape): ScaleShape {
  if (!keysEqual(shapeA.key, shapeB.key)) {
    throw new Error(`Multiple keys in the given shapes: ${getKeyName(shapeA.key)} and ${getKeyName(shapeB.key)}`)
  }
  const [notesA, notesB] = adjustNotes(shapeA.notes, shapeB.notes)
  return {
    key: shapeA.key,
    notes: sortBy(uniqBy(notesA.concat(notesB), (note) => `${note.string}-${note.fret}`), ['string', 'fret']),
  }
}

export function getBassScaleShape(guitarChord: ScaleShape): ScaleShape {
  return {
    ...guitarChord,
    notes: guitarChord.notes
      .filter((note) => note.string !== GuitarString.E1 && note.string !== GuitarString.B)
      .map((note) => ({
        ...note,
        string: getBassString(note.string),
      })),
  }
}
