import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { Fret } from './Fret'
import { getStringOverhang } from './utils'
import { Nut } from './Nut'

export type FretsProps = {}

export class Frets extends PureComponent<FretsProps> {
  render() {
    return (
      <FretboardContext.Consumer>
        {(context) => (
          <div className={this.getFretsStyle(context)}>
            {this.renderNut(context)}
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
  private renderNut(context: FretboardContexType) {
    return context.firstVisibleFret === 0 ? <Nut /> : null
  }
  private renderFrets(context: FretboardContexType) {
    return range(context.firstVisibleFret, context.lastVisibleFret).map((fret) => <Fret fret={fret} key={fret} />)
  }
}
