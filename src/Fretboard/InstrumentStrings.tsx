import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { InstrumentString } from './InstrumentString'
import { getStringThickness } from './utils'

const stringsStyle = css({
  label: 'instrument-strings',
  position: 'relative',
  width: '100%',
  paddingTop: '8px',
  paddingBottom: '8px',
  zIndex: 2,
})

export type InstrumentStringsProps = {}

export class InstrumentStrings extends PureComponent<InstrumentStringsProps> {
  render() {
    return (
      <div className={stringsStyle}>
        <FretboardContext.Consumer>{(context) => this.renderStrings(context)}</FretboardContext.Consumer>
      </div>
    )
  }
  private renderStrings(context: FretboardContexType) {
    return context.strings.map((string) => {
      return <InstrumentString thickness={getStringThickness(string)} key={string.toString()} />
    })
  }
}
