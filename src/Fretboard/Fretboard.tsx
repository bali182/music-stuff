import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { FretBoardContext } from './FretboardContext'

const fretboardStyle = css({
  background: 'white',
  position: 'relative',
})

export type FretboardProps = {
  children: ReactNode
  stringSpacing?: number
  numberOfFrets?: number
  firstFretWidth?: number
  lastFretWidth?: number
}

export class Fretboard extends PureComponent<FretboardProps> {
  render() {
    const { firstFretWidth, stringSpacing, numberOfFrets, lastFretWidth, children } = this.props
    return (
      <div className={fretboardStyle}>
        <FretBoardContext.Provider value={{ firstFretWidth, stringSpacing, numberOfFrets, lastFretWidth }}>
          {children}
        </FretBoardContext.Provider>
      </div>
    )
  }

  static defaultProps: Partial<FretboardProps> = {
    firstFretWidth: 70,
    lastFretWidth: 12,
    numberOfFrets: 22,
    stringSpacing: 14,
  }
}
