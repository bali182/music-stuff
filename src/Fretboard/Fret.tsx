import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretBoardContext } from './FretboardContext'

const fretStyle = (margin: number) =>
  css({
    height: '100%',
    width: '5px',
    backgroundColor: '#999',
    borderRadius: '5px',
    marginRight: margin,
    ':last-child': {
      marginRight: '0px',
    },
  })

export type FretProps = {
  fretNumber: number
}

export class Fret extends PureComponent<FretProps> {
  render() {
    const { fretNumber } = this.props
    return (
      <FretBoardContext.Consumer>
        {({ firstFretWidth, lastFretWidth, numberOfFrets }) => (
          <div
            className={fretStyle(this.linearInterpolation(firstFretWidth, lastFretWidth, fretNumber / numberOfFrets))}
          />
        )}
      </FretBoardContext.Consumer>
    )
  }

  private linearInterpolation(start: number, end: number, fret: number): number {
    return (1 - fret) * start + fret * end
  }
}
