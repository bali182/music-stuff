import { createContext } from 'react'
import { GuitarString } from '../model/GuitarString'
import { BassString } from '../model/BassString'

export type FretboardContexType = {
  dots: boolean
  stringSpacing: number
  strings: (GuitarString | BassString)[]
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
