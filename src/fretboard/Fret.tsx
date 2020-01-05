import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext } from './FretboardContext'
import { getFretWidth } from './utils'
import { FretDot } from './FretDot'
import { FretWire } from './FretWire'
import { FretPositionMarker } from './FretPositionMarker'

const fretStyle = (width: number) =>
  css({
    label: 'fret',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: `${width}px`,
    height: '100%',
    flexShrink: 0,
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
            <div className={fretStyle(width)} data-fret={fret}>
              <FretWire />
              {context.dots ? <FretDot fret={fret} /> : null}
            </div>
          )
        }}
      </FretboardContext.Consumer>
    )
  }
}
