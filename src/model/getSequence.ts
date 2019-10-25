import { ChordSequence, Note, ChordShape, Chord, Key, ChordType, ChordProgression } from './models'
import sample from 'lodash/sample'
import range from 'lodash/range'
import { getScaleChords } from './getScaleChords'
import { moveChordShape } from './moveChordShape'

export type ProgressionGeneratorParams = {
  description: (key: Key) => string
  scale: (key: Key) => Note[]
  progressions: (key: Key) => ChordProgression[]
  key: () => Key
  shapes: (chord: ChordType) => ChordShape[]
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
      const chordShape = sample(shapes(chord.type))
      return moveChordShape(chordShape, chord.root, true)
    }),
  }
}