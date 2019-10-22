import { Note } from './models'
import { getChromaticScale } from './getChromaticScale'
import { getNormalizedNote } from './getNormalizedNote'

export function getDistanceBetweenNotes(a: Note, b: Note): number {
  const scale = getChromaticScale(getNormalizedNote(a))
  return scale.indexOf(getNormalizedNote(b))
}
