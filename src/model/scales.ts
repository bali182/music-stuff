import { Note } from './models'
import { getChromaticScale } from './getChromaticScale'

const getScale = (chromaticIndices: number[]) => (root: Note): Note[] => {
  const chromaticScale = getChromaticScale(root)
  const scale = chromaticIndices.map((index) => chromaticScale[index])
  return scale
}

export const getIonianScale = getScale([0, 2, 4, 5, 7, 9, 11])
export const getDorianScale = getScale([0, 2, 3, 5, 7, 9, 10])
export const getPhrygianScale = getScale([0, 1, 3, 5, 7, 8, 10])
export const getLydianScale = getScale([0, 2, 4, 6, 7, 9, 11])
export const getMixolydianScale = getScale([0, 2, 4, 5, 7, 9, 10])
export const getAeolianScale = getScale([0, 2, 3, 5, 7, 8, 10])
export const getLocrianScale = getScale([0, 1, 3, 5, 6, 8, 10])

export const getMajorScale = getIonianScale
export const getMinorScale = getAeolianScale
