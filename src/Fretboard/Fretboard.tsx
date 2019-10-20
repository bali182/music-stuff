import React, { PureComponent, ReactNode } from 'react'
import isNil from 'lodash/isNil'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFretboardWidth, getFretboardLeftSpacing, getStringOverhang } from './utils'
import { InstrumentStrings } from './InstrumentStrings'
import { Frets } from './Frets'
import { FrettedNotes } from './FrettedNotes'

export type FretboardProps = Partial<FretboardContexType> & {
  children: ReactNode
}

export class Fretboard extends PureComponent<FretboardProps> {
  render() {
    const {
      dots,
      firstFretWidth,
      stringSpacing,
      numberOfFrets,
      lastFretWidth,
      firstVisibleFret,
      lastVisibleFret,
      strings,
      children,
    } = this.props

    const context: FretboardContexType = {
      dots,
      strings,
      firstFretWidth,
      stringSpacing,
      numberOfFrets,
      lastFretWidth,
      firstVisibleFret,
      lastVisibleFret: isNil(lastVisibleFret) ? numberOfFrets : lastVisibleFret,
    }
    return (
      <div className={this.getFretboardStyle(context)}>
        <FretboardContext.Provider value={context}>
          <Frets />
          <InstrumentStrings />
          <FrettedNotes>{children}</FrettedNotes>
        </FretboardContext.Provider>
      </div>
    )
  }

  getFretboardStyle(context: FretboardContexType) {
    const width = getFretboardWidth(context)
    const stringOverhang = getStringOverhang(context)
    return css({
      label: 'fretboard',
      background: 'white',
      position: 'relative',
      width: `${width + stringOverhang}px`,
      overflow: 'hidden',
    })
  }

  static defaultProps: FretboardContexType = {
    dots: true,
    firstFretWidth: 70,
    lastFretWidth: 12,
    numberOfFrets: 22,
    stringSpacing: 20,
    firstVisibleFret: 0,
    strings: [],
    lastVisibleFret: null,
  }
}
