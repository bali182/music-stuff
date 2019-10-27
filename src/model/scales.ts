import { Note, KeyType, Key } from './models'
import { getNormalizedNote } from './Notes'

const ChromaticScaleFromC = [
  Note.C,
  Note.CSharp,
  Note.D,
  Note.DSharp,
  Note.E,
  Note.F,
  Note.FSharp,
  Note.G,
  Note.GSharp,
  Note.A,
  Note.ASharp,
  Note.B,
]

export const getChromaticScale = (root: Note): Note[] => {
  const rootNote = getNormalizedNote(root)
  const index = ChromaticScaleFromC.indexOf(rootNote)
  const end = ChromaticScaleFromC.slice(0, index)
  const start = ChromaticScaleFromC.slice(index)
  return start.concat(end)
}

const buildScaleFromDegrees = (chromaticIndices: number[]) => (root: Note): Note[] => {
  const chromaticScale = getChromaticScale(root)
  const scale = chromaticIndices.map((index) => chromaticScale[index])
  return scale
}

export const getIonianScale = buildScaleFromDegrees([0, 2, 4, 5, 7, 9, 11])
export const getDorianScale = buildScaleFromDegrees([0, 2, 3, 5, 7, 9, 10])
export const getPhrygianScale = buildScaleFromDegrees([0, 1, 3, 5, 7, 8, 10])
export const getLydianScale = buildScaleFromDegrees([0, 2, 4, 6, 7, 9, 11])
export const getMixolydianScale = buildScaleFromDegrees([0, 2, 4, 5, 7, 9, 10])
export const getAeolianScale = buildScaleFromDegrees([0, 2, 3, 5, 7, 8, 10])
export const getLocrianScale = buildScaleFromDegrees([0, 1, 3, 5, 6, 8, 10])

export const getMajorScale = getIonianScale
export const getMinorScale = getAeolianScale

export const getScale = ({ type, root }: Key): Note[] => {
  switch (type) {
    case KeyType.Ionian:
      return getIonianScale(root)
    case KeyType.Dorian:
      return getDorianScale(root)
    case KeyType.Phrygian:
      return getPhrygianScale(root)
    case KeyType.Lydian:
      return getLydianScale(root)
    case KeyType.Mixolydian:
      return getMixolydianScale(root)
    case KeyType.Aeolian:
      return getAeolianScale(root)
    case KeyType.Locrian:
      return getLocrianScale(root)
  }
}
