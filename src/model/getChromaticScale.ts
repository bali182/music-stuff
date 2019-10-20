import { getNormalizedNote } from './getNormalizedNote'
import { Note, ChromaticScaleFromC } from './models'

export function getChromaticScale(root: Note): Note[] {
  const rootNote = getNormalizedNote(root)
  const index = ChromaticScaleFromC.indexOf(rootNote)
  const end = ChromaticScaleFromC.slice(0, index)
  const start = ChromaticScaleFromC.slice(index)
  return start.concat(end)
}
