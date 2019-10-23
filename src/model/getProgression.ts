import { ChordProgression, Note, ChordShape, Chord } from './models'
import sample from 'lodash/sample'
import range from 'lodash/range'
import { getScaleChords } from './getScaleChords'
import { moveChordShape } from './moveChordShape'

export type ProgressionGeneratorParams = {
  shapes: ChordShape[]
  numberOfChords: number
  description: (root: Note) => string
  root: () => Note
  scale: (root: Note) => Note[]
  filter: (chord: Chord) => boolean
}

export const getProgression = (params: ProgressionGeneratorParams) => (): ChordProgression => {
  const { root, shapes, numberOfChords, filter, scale, description } = params
  const rootNote = root()
  const scaleNotes = scale(rootNote)
  const chords = getScaleChords(scaleNotes)
  const chordRoots = chords.filter(filter).map((chord) => chord.root)
  return {
    description: description(rootNote),
    chords: range(0, numberOfChords).map(() => {
      const chordShape = sample(shapes)
      const chordRoot = sample(chordRoots)
      return moveChordShape(chordShape, chordRoot, true)
    }),
  }
}
