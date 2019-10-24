import sample from 'lodash/sample'
import values from 'lodash/values'
import { ChromaticScaleFromC, Note } from './models'

export function getRandomNote(): Note {
  return sample(ChromaticScaleFromC)
}

export function getExtendedRandomNote(): Note {
  return sample(values(Note))
}
