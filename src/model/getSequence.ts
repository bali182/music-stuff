import sample from 'lodash/sample'
import { ChordShapeSequence, Note, ChordShape, MusicalKey, ChordProgression } from './models'
import { getScaleChords } from './Chords'
import { moveChordShape } from './ChordShapes'

export type ProgressionGeneratorParams = {
  description: (key: MusicalKey) => string
  scale: (key: MusicalKey) => Note[]
  progressions: (key: MusicalKey) => ChordProgression[]
  key: () => MusicalKey
  shapes: (chordParentKey: MusicalKey) => ChordShape[]
}

export const getSequence = (params: ProgressionGeneratorParams) => (): ChordShapeSequence => {
  const { key, shapes, scale, description, progressions } = params
  const scaleKey = key()
  const scaleNotes = scale(scaleKey)
  const chords = getScaleChords(scaleNotes)
  const possibleProgressions = progressions(scaleKey).filter((progression) => progression.keyType === scaleKey.type)
  const progression = sample(possibleProgressions)
  return {
    key: scaleKey,
    description: `${description(scaleKey)}, ${progression.name} progression`,
    chords: progression.scaleDegrees.map((scaleDegree) => {
      const chord = chords[scaleDegree]
      const chordShape = sample(shapes(chord.key))
      return moveChordShape(chordShape, chord.key.root, true)
    }),
  }
}
