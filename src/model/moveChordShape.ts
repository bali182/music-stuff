import { ChordShape, Note, ChromaticScaleFromC, ChordNote } from './models'
import minBy from 'lodash/minBy'
import { getChromaticScale } from './getChromaticScale'
import { getNormalizedNote } from './getNormalizedNote'
import { moveNote } from './moveNote'

export function moveChordShape(chord: ChordShape, root: Note, allowOpenStrings: boolean = true): ChordShape {
  const normalizedRoot = getNormalizedNote(root)
  const chromaticScale = getChromaticScale(getNormalizedNote(chord.root))
  const lowestNote = minBy(chord.notes, (note) => note.fret)
  let shift = chromaticScale.indexOf(normalizedRoot)
  if (shift === 0 && lowestNote.fret === 0 && !allowOpenStrings) {
    shift = chromaticScale.length
  }
  const movedChord: ChordShape = {
    root: root,
    notes: chord.notes.map(
      (note): ChordNote => ({
        tone: note.tone,
        string: note.string,
        fret: note.fret + shift,
        note: moveNote(note.note, shift),
      })
    ),
  }
  return movedChord
}
