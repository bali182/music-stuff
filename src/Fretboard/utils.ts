import { FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { Size as FrettedNoteSize } from './FrettedNote'
import { FretOverhang } from './Frets'
import { GuitarString } from '../model/GuitarString'
import { BassString } from '../model/BassString'

function linearInterpolation(start: number, end: number, fret: number): number {
  return (1 - fret) * start + fret * end
}

export const getStringThickness = (string: GuitarString | BassString): number => {
  switch (string) {
    case GuitarString.E1:
    case GuitarString.B:
      return 1
    case GuitarString.G:
    case BassString.G:
      return 2
    case GuitarString.D:
    case GuitarString.A:
    case BassString.D:
    case BassString.A:
      return 3
    case GuitarString.E6:
    case BassString.E:
      return 4
  }
}

export const getFretWidth = (context: FretboardContexType) => (fret: number) => {
  return linearInterpolation(context.firstFretWidth, context.lastFretWidth, fret / context.numberOfFrets)
}

export const getPartialFretboardWidth = (context: FretboardContexType) => (firstFret: number, lastFret: number) => {
  return range(firstFret, lastFret)
    .map(getFretWidth(context))
    .reduce((fullFretWidth, width) => fullFretWidth + width, 0)
}

export const getFretboardWidth = (context: FretboardContexType): number => {
  return getPartialFretboardWidth(context)(context.firstVisibleFret, context.lastVisibleFret) + 2 * FretOverhang
}

export const getFrettedNotePosition = (context: FretboardContexType) => (
  string: GuitarString | BassString,
  fret: number
): [number, number] => {
  const fretWidth = getFretWidth(context)(fret)
  const stringIndex = context.strings.indexOf(string)
  const partialFretboardWidth = getPartialFretboardWidth(context)(context.firstVisibleFret, fret)
  const extraTopSpacing = context.strings
    .slice(0, Math.max(stringIndex - 1, 0))
    .map((string) => getStringThickness(string))
    .reduce((fullFretWidth, width) => fullFretWidth + width, 0)

  const top = context.stringSpacing * stringIndex + extraTopSpacing
  const left = partialFretboardWidth - fretWidth / 2 - FrettedNoteSize / 2 + FretOverhang

  return [top, left]
}
