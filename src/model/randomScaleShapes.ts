import range from 'lodash/range'
import random from 'lodash/random'
import {
  pentatonicShape5,
  pentatonicShape1,
  pentatonicShape2,
  pentatonicShape3,
  pentatonicShape4,
} from '../data/pentatonicScaleShapes'
import { getRandomKey } from './Keys'
import { ScaleShape } from './models'
import { getScaleShapeInKey } from './ScaleShapes'

function getRandomJoiningScaleShapes(shapes: ScaleShape[], amount: number): ScaleShape[] {
  const firstShapeIdx = random(0, shapes.length - 1, false)
  const indices = [firstShapeIdx].concat(range(1, amount).map((i) => (firstShapeIdx + i) % shapes.length))
  return indices.map((index) => shapes[index])
}

describe('randomScaleShapes', () => {
  it('should do something eventually', () => {
    const key = getRandomKey()
    const pentatonics = [pentatonicShape1, pentatonicShape2, pentatonicShape3, pentatonicShape4, pentatonicShape5]
    const shapes = getRandomJoiningScaleShapes(pentatonics, 2).map((shape) => getScaleShapeInKey(shape, key))
    console.log(shapes)
  })
})
