import { ScaleShape, MusicalKey, ChordShape } from './models'
import { getRelativeKey } from './Keys'
import { getDistanceBetweenNotes } from './Notes'
import { moveFrettedNote } from './Strings'

export function getScaleShapeInKey(shape: ScaleShape, key: MusicalKey): ScaleShape {
  const relativeTargetKey = getRelativeKey(shape.key, key.type)
  const shift = getDistanceBetweenNotes(relativeTargetKey.root, key.root)
  return {
    key,
    notes: shape.notes.map(moveFrettedNote(shift)),
  }
}

export function isOnScaleShape(scale: ScaleShape, chord: ChordShape): boolean {
  return chord.notes.every((cNote) =>
    scale.notes.some((sNote) => sNote.fret === cNote.fret && sNote.string === cNote.string)
  )
}
