import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { Fret } from './Fret'
import { getStringOverhang } from './utils'
import { Nut } from './Nut'
import { FretWire } from './FretWire'
import { max } from '../utils'
import { FretPositionMarker } from './FretPositionMarker'

export type FretsProps = {}

export class Frets extends PureComponent<FretsProps> {
  render() {
    return (
      <FretboardContext.Consumer>
        {(context) => (
          <div className={this.getFretsStyle(context)}>
            {this.renderNutOrFirstFret(context)}
            {this.renderFrets(context)}
          </div>
        )}
      </FretboardContext.Consumer>
    )
  }
  private getFretsStyle(context: FretboardContexType) {
    return css({
      label: 'frets',
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
  private renderNutOrFirstFret(context: FretboardContexType) {
    return context.firstVisibleFret === 0 ? <Nut /> : <FretWire />
  }
  private renderFrets(context: FretboardContexType) {
    return range(context.firstVisibleFret, context.lastVisibleFret).map((fret) => <Fret fret={fret} key={fret} />)
  }
}
