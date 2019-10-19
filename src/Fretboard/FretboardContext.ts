import { createContext } from 'react'

export type FretboardContexType = {
  stringSpacing: number
  numberOfFrets: number
  firstFretWidth: number
  lastFretWidth: number
}

export const FretBoardContext = createContext<FretboardContexType>({
  stringSpacing: 20,
  numberOfFrets: 22,
  firstFretWidth: 60,
  lastFretWidth: 12,
})
