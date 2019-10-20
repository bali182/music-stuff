import { createContext } from 'react'
import { AnyString } from '../model/models'

export type FretboardContexType = {
  dots: boolean
  stringSpacing: number
  strings: (AnyString)[]
  numberOfFrets: number
  firstFretWidth: number
  lastFretWidth: number
  firstVisibleFret: number
  lastVisibleFret: number
}

export const FretboardContext = createContext<FretboardContexType>({
  dots: true,
  strings: [],
  stringSpacing: 20,
  numberOfFrets: 22,
  firstVisibleFret: 0,
  lastVisibleFret: null,
  firstFretWidth: 60,
  lastFretWidth: 12,
})
