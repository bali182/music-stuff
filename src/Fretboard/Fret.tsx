import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFretWidth, getFretboardLeftSpacing } from './utils'
import { FretDot } from './FretDot'

const fretStyle = (width: number) =>
  css({
    label: 'fret',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
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
          return (
            <div className={fretStyle(width)}>
              <div className={fretWireStyle} />
              {context.dots ? <FretDot fret={fret} /> : null}
            </div>
          )
        }}
      </FretboardContext.Consumer>
    )
  }
}
