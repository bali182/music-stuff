import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext } from './FretboardContext'
import { getFretWidth } from './utils'
import { FretDot } from './FretDot'

const fretStyle = (width: number) =>
  css({
    label: 'fret',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: `${width}px`,
    height: '100%',
  })

const fretWireStyle = css({
  label: 'fret-wire',
  height: '100%',
  width: '5px',
  backgroundColor: '#999',
  borderRadius: '5px',
})

const nutStyle = css({
  label: 'nut',
  height: '100%',
  width: '8px',
  backgroundColor: '#e3dac9',
  borderRadius: '3px',
  marginLeft: '1px',
})

export type FretProps = {
  fret: number
}

export class Fret extends PureComponent<FretProps> {
  render() {
    const { fret } = this.props
    return (
      <FretboardContext.Consumer>
        {(context) => {
          const width = getFretWidth(context)(fret)
          const separatorStyle = fret === 0 ? nutStyle : fretWireStyle
          return (
            <div className={fretStyle(width)}>
              <div className={separatorStyle} />
              {context.dots ? <FretDot fret={fret} /> : null}
            </div>
          )
        }}
      </FretboardContext.Consumer>
    )
  }
}
