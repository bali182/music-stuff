import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { Fret } from './Fret'
import { getStringOverhang } from './utils'

export type FretsProps = {}

export class Frets extends PureComponent<FretsProps> {
  render() {
    return (
      <FretboardContext.Consumer>
        {(context) => <div className={this.getFretsStyle(context)}>{this.renderFrets(context)}</div>}
      </FretboardContext.Consumer>
    )
  }
  private getFretsStyle(context: FretboardContexType) {
    return css({
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      top: '0px',
      left: `${getStringOverhang(context)}px`,
      bottom: '0px',
      right: `-${getStringOverhang(context)}px`,
      label: 'frets',
    })
  }
  private renderFrets(context: FretboardContexType) {
    return range(context.firstVisibleFret, context.lastVisibleFret).map((fret) => <Fret fret={fret} key={fret} />)
  }
}
