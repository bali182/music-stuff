import { ChordShape, Note } from './models'
import minBy from 'lodash/minBy'
import { getChromaticScale } from './getChromaticScale'

export function moveChordRoot(chord: ChordShape, root: Note): ChordShape {
  const lowestNote = minBy(chord.notes, (note) => note.fret)
  const chromaticScale = getChromaticScale(root)
  // TODO
  return chord
}
