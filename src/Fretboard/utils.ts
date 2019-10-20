import { FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { GuitarString, BassString } from '../model/models'
import { sum } from '../utils'

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
    .reduce(sum, 0)
}

export const getFretboardWidth = (context: FretboardContexType): number => {
  return (
    getPartialFretboardWidth(context)(context.firstVisibleFret, context.lastVisibleFret) +
    2 * getStringOverhang(context) +
    getFretboardLeftSpacing(context)
  )
}

export const getFretboardLeftSpacing = (context: FretboardContexType): number => {
  return context.firstVisibleFret === 0 ? getFrettedNoteSize(context) : 0
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

export const getFrettedNoteTop = (context: FretboardContexType) => (string: GuitarString | BassString): number => {
  const stringIndex = context.strings.indexOf(string)
  const top = context.stringSpacing * stringIndex
  return top
}

export const getFrettedNoteLeft = (context: FretboardContexType) => (fret: number): number => {
  const fretWidth = getFretWidth(context)(fret)
  const frettedNoteSize = getFrettedNoteSize(context)
  const partialFretboardWidth = getPartialFretboardWidth(context)(context.firstVisibleFret, fret)
  let left = partialFretboardWidth - fretWidth / 2 - frettedNoteSize / 2
  if (fret === 0) {
    return getStringOverhang(context) / 2
  }
  if (context.firstVisibleFret === 0) {
    left += getFretboardLeftSpacing(context) + getStringOverhang(context) * 2
  }
  return left
}

export const getFretPositionMarkerLeft = (context: FretboardContexType) => (fret: number): number => {
  const partialFretboardWidth = getPartialFretboardWidth(context)(context.firstVisibleFret, fret)
  let left = partialFretboardWidth - 5
  if (fret === 0) {
    return getFretboardLeftSpacing(context) + getStringOverhang(context) - 8
  }
  if (context.firstVisibleFret === 0) {
    left += getFretboardLeftSpacing(context) + getStringOverhang(context) - 2
  }
  return left
}
