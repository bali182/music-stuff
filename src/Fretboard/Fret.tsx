import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretBoardContext } from './FretboardContext'
import { getFretWidth } from './utils'

const fretStyle = (width: number) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: `${width}px`,
    height: '100%',
    label: 'fret',
  })

const fretWireStyle = css({
  height: '100%',
  width: '5px',
  backgroundColor: '#999',
  borderRadius: '5px',
  label: 'fret-wire',
})

const nutStyle = css({
  height: '100%',
  width: '8px',
  backgroundColor: '#e3dac9',
  borderRadius: '3px',
  marginLeft: '1px',
  label: 'nut',
})

export type FretProps = {
  fretNumber: number
}

export class Fret extends PureComponent<FretProps> {
  render() {
    const { fretNumber } = this.props
    return (
      <FretBoardContext.Consumer>
        {(context) => {
          const width = getFretWidth(context)(fretNumber)
          return (
            <div className={fretStyle(width)}>
              <div className={fretNumber === 0 ? nutStyle : fretWireStyle} />
            </div>
          )
        }}
      </FretBoardContext.Consumer>
    )
  }
}
