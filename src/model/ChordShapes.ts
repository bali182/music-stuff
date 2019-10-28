import minBy from 'lodash/minBy'
import { ChordShape, GuitarString, Note } from './models'
import { getBassString, moveFrettedNote } from './Strings'
import { getNormalizedNote } from './Notes'
import { getChromaticScale } from './Scales'

export function getBassChordShape(guitarChord: ChordShape): ChordShape {
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

export function moveChordShape(chord: ChordShape, root: Note, allowOpenStrings: boolean = true): ChordShape {
  const normalizedRoot = getNormalizedNote(root)
  const chromaticScale = getChromaticScale(getNormalizedNote(chord.key.root))
  const lowestNote = minBy(chord.notes, (note) => note.fret)
  let shift = chromaticScale.indexOf(normalizedRoot)
  if (shift === 0 && lowestNote.fret === 0 && !allowOpenStrings) {
    shift = chromaticScale.length
  }
  const movedChord: ChordShape = {
    ...chord,
    key: { root, type: chord.key.type },
    notes: chord.notes.map(moveFrettedNote(shift)),
  }
  return movedChord
}
