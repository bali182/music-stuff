import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext } from './FretboardContext'

const stringStyle = (thickness: number, spacing: number) =>
  css({
    label: 'instrument-string',
    backgroundColor: '#ccc',
    height: `${thickness}px`,
    marginBottom: `${spacing - thickness / 2}px`,
    ':last-child': {
      marginBottom: '0px',
    },
  })

export type InstrumentStringProps = {
  thickness: number
}

export class InstrumentString extends PureComponent<InstrumentStringProps> {
  render() {
    const { thickness } = this.props
    return (
      <FretboardContext.Consumer>
        {({ stringSpacing }) => <div className={stringStyle(thickness, stringSpacing)} />}
      </FretboardContext.Consumer>
    )
  }
}
