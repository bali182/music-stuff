import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { getStringOverhang } from './utils'
import { FretPositionMarker } from './FretPositionMarker'

export type FretPositionMarkersProps = {}

export class FretPositionMarkers extends PureComponent<FretPositionMarkersProps> {
  render() {
    return (
      <FretboardContext.Consumer>
        {(context) => <div className={this.getFretsStyle(context)}>{this.renderPositionMarkers(context)}</div>}
      </FretboardContext.Consumer>
    )
  }
  private getFretsStyle(context: FretboardContexType) {
    return css({
      label: 'fret-position-markers',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      top: '0px',
      left: `${getStringOverhang(context)}px`,
      bottom: '0px',
      right: `-${getStringOverhang(context)}px`,
    })
  }
  private renderPositionMarkers(context: FretboardContexType) {
    return range(context.firstVisibleFret, context.lastVisibleFret + 1).map((fret) => (
      <FretPositionMarker fret={fret} key={fret} />
    ))
  }
}
