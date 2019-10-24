import React, { PureComponent, ReactNode } from 'react'
import isNil from 'lodash/isNil'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFretboardWidth, getStringOverhang } from './utils'
import { InstrumentStrings } from './InstrumentStrings'
import { Frets } from './Frets'
import { FrettedNotes } from './FrettedNotes'
import { FretPositionMarkers } from './FretPositionMarkers'

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
      positionMarkers: markers,
    } = this.props

    const context: FretboardContexType = {
      dots,
      positionMarkers: markers,
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
          {context.positionMarkers ? <FretPositionMarkers /> : null}
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
      position: 'relative',
      width: `${width + stringOverhang}px`,
      margin: 'auto',
    })
  }

  static defaultProps: FretboardContexType = {
    dots: true,
    positionMarkers: false,
    firstFretWidth: 70,
    lastFretWidth: 12,
    numberOfFrets: 22,
    stringSpacing: 20,
    firstVisibleFret: 0,
    strings: [],
    lastVisibleFret: null,
  }
}
