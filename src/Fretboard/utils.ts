import { FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { Size as FrettedNoteSize } from './FrettedNote'

function linearInterpolation(start: number, end: number, fret: number): number {
  return (1 - fret) * start + fret * end
}

export const getFretWidth = (context: FretboardContexType) => (fretNumber: number) => {
  return linearInterpolation(context.firstFretWidth, context.lastFretWidth, fretNumber / context.numberOfFrets)
}

export const getPartialFretboardWidth = (context: FretboardContexType) => (firstFret: number, lastFret: number) => {
  return range(firstFret, lastFret)
    .map(getFretWidth(context))
    .reduce((fullFretWidth, width) => fullFretWidth + width, 0)
}

export const getFretboardWidth = (context: FretboardContexType): number => {
  return getPartialFretboardWidth(context)(context.firstVisibleFret, context.lastVisibleFret)
}

export const getFrettedNotePosition = (context: FretboardContexType) => (
  stringNumber: number,
  fretNumber: number
): [number, number] => {
  const fretWidth = getFretWidth(context)(fretNumber)
  const top = context.stringSpacing * stringNumber
  const left =
    getPartialFretboardWidth(context)(context.firstVisibleFret, fretNumber) - fretWidth / 2 - FrettedNoteSize / 2
  return [top, left]
}
