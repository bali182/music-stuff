import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import range from 'lodash/range'
import { Fret } from './Fret'

export const FretOverhang = 5

const fretsStyle = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  position: 'absolute',
  top: '3px',
  left: `${FretOverhang}px`,
  bottom: '3px',
  right: `-${FretOverhang}px`,
  label: 'frets',
})

export type FretsProps = {}

export class Frets extends PureComponent<FretsProps> {
  render() {
    return (
      <div className={fretsStyle}>
        <FretboardContext.Consumer>{(context) => this.renderFrets(context)}</FretboardContext.Consumer>
      </div>
    )
  }
  private renderFrets(context: FretboardContexType) {
    return range(context.firstVisibleFret, context.lastVisibleFret).map((fret) => <Fret fret={fret} key={fret} />)
  }
}
