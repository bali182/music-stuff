import sample from 'lodash/sample'
import { ChordSequence, Note, ChordShape, Key, ChordProgression } from './models'
import { getScaleChords, moveChordShape } from './Chords'

export type ProgressionGeneratorParams = {
  description: (key: Key) => string
  scale: (key: Key) => Note[]
  progressions: (key: Key) => ChordProgression[]
  key: () => Key
  shapes: (chordParentKey: Key) => ChordShape[]
}

export const getSequence = (params: ProgressionGeneratorParams) => (): ChordSequence => {
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
