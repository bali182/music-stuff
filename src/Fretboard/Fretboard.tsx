import React, { PureComponent, ReactNode } from 'react'
import isNil from 'lodash/isNil'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFretboardWidth } from './utils'

const fretboardStyle = (width: number) =>
  css({
    label: 'fretboard',
    background: 'white',
    position: 'relative',
    width: `${width}px`,
    margin: 'auto',
  })

export type FretboardProps = Partial<FretboardContexType> & {
  children: ReactNode
}

export class Fretboard extends PureComponent<FretboardProps> {
  render() {
    const {
      firstFretWidth,
      stringSpacing,
      numberOfFrets,
      lastFretWidth,
      firstVisibleFret,
      lastVisibleFret,
      children,
    } = this.props

    const context: FretboardContexType = {
      firstFretWidth,
      stringSpacing,
      numberOfFrets,
      lastFretWidth,
      firstVisibleFret,
      lastVisibleFret: isNil(lastVisibleFret) ? numberOfFrets : lastVisibleFret,
    }
    return (
      <div className={fretboardStyle(getFretboardWidth(context))}>
        <FretboardContext.Provider value={context}>{children}</FretboardContext.Provider>
      </div>
    )
  }

  static defaultProps: Partial<FretboardProps> = {
    firstFretWidth: 70,
    lastFretWidth: 12,
    numberOfFrets: 22,
    stringSpacing: 18,
    firstVisibleFret: 0,
    lastVisibleFret: null,
  }
}
