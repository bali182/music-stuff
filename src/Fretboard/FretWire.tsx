import React, { PureComponent } from 'react'
import { css } from 'emotion'

const fretWireStyle = css({
  label: 'fret-wire',
  height: '100%',
  width: '5px',
  backgroundColor: '#999',
  borderRadius: '5px',
})

export class FretWire extends PureComponent {
  render() {
    return <div className={fretWireStyle} />
  }
}
