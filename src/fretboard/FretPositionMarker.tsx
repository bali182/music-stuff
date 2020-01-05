import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContexType, FretboardContext } from './FretboardContext'
import { getFretPositionMarkerLeft } from './utils'

export type FretPositionMarkerProps = {
  fret: number
}

export class FretPositionMarker extends PureComponent<FretPositionMarkerProps> {
  render() {
    const { fret } = this.props
    return (
      <FretboardContext.Consumer>
        {(contex) => <div className={this.getMarkerStyle(contex)}>{fret}</div>}
      </FretboardContext.Consumer>
    )
  }

  private getMarkerStyle(context: FretboardContexType) {
    const left = getFretPositionMarkerLeft(context)(this.props.fret)
    return css({
      label: 'fret-position-marker',
      position: 'absolute',
      bottom: '0px',
      left: `${left}px`,
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      justifyContent: 'center',
      width: '14px',
      height: '14px',
      background: '#fff',
      borderRadius: '14px',
      fontSize: '9px',
      border: '1px solid gray',
      zIndex: 3,
      opacity: 0.8,
    })
  }
}
