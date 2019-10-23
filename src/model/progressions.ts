import { getProgression } from './getProgression'
import { ChordType } from './models'
import { getRandomNote } from './getRandomNote'
import { getMajorScale, getMinorScale } from './scales'
import { cShape, aShape, gShape, eShape, dShape } from './majorCagedChords'
import { majorTriads } from './majorTriads'
import { minorTriads } from './minorTriads'

export const getMajorCagedProgression = getProgression({
  description: () => 'Major CAGED chords',
  filter: (chord) => chord.type === ChordType.Major,
  root: getRandomNote,
  numberOfChords: 4,
  scale: getMajorScale,
  shapes: [cShape, aShape, gShape, eShape, dShape],
})

export const getMajorTriads = getProgression({
  description: () => 'Major triads',
  filter: (chord) => chord.type === ChordType.Major,
  root: getRandomNote,
  numberOfChords: 4,
  scale: getMajorScale,
  shapes: majorTriads,
})

export const getMinorTriads = getProgression({
  description: () => 'Minor triads',
  filter: (chord) => chord.type === ChordType.Minor,
  root: getRandomNote,
  numberOfChords: 4,
  scale: getMinorScale,
  shapes: minorTriads,
})
