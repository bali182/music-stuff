import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretBoardContext } from './FretboardContext'

const stringStyle = (thickness: number, spacing: number) =>
  css({
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
      <FretBoardContext.Consumer>
        {({ stringSpacing }) => <div className={stringStyle(thickness, stringSpacing)} />}
      </FretBoardContext.Consumer>
    )
  }
}
