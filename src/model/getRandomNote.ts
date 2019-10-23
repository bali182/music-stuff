import sample from 'lodash/sample'
import { ChromaticScaleFromC, Note } from './models'

export function getRandomNote(): Note {
  return sample(ChromaticScaleFromC)
}
