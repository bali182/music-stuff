import { FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
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
  return (
    getPartialFretboardWidth(context)(context.firstVisibleFret, context.lastVisibleFret) +
    2 * getStringOverhang(context)
  )
}

export const getStringOverhang = (context: FretboardContexType): number => {
  return 5
}

export const getFretOverhang = (context: FretboardContexType): number => {
  return context.stringSpacing / 2 - 2
}

export const getFrettedNoteSize = (context: FretboardContexType) => {
  return context.stringSpacing - 2
}

export const getFrettedNotePosition = (context: FretboardContexType) => (
  string: GuitarString | BassString,
  fret: number
): [number, number] => {
  const fretWidth = getFretWidth(context)(fret)
  const stringIndex = context.strings.indexOf(string)
  const frettedNoteSize = getFrettedNoteSize(context)
  const partialFretboardWidth = getPartialFretboardWidth(context)(context.firstVisibleFret, fret)
  const top = context.stringSpacing * stringIndex
  const left =
    fret === 0
      ? -frettedNoteSize
      : partialFretboardWidth - fretWidth / 2 - frettedNoteSize / 2 + getStringOverhang(context)
  return [top, left]
}
