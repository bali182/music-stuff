import { FretboardContexType } from './FretboardContext'
import range from 'lodash/range'

function linearInterpolation(start: number, end: number, fret: number): number {
  return (1 - fret) * start + fret * end
}

export const getFretWidth = (context: FretboardContexType) => (fretNumber: number) => {
  return linearInterpolation(context.firstFretWidth, context.lastFretWidth, fretNumber / context.numberOfFrets)
}

export const getFretboardWidth = (context: FretboardContexType): number => {
  return range(context.firstVisibleFret, context.lastVisibleFret)
    .map(getFretWidth(context))
    .reduce((fullFretWidth, width) => fullFretWidth + width, 0)
}
