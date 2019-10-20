import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { InstrumentString } from './InstrumentString'
import { getStringThickness, getFretOverhang } from './utils'

export type InstrumentStringsProps = {}

export class InstrumentStrings extends PureComponent<InstrumentStringsProps> {
  render() {
    return (
      <FretboardContext.Consumer>
        {(context) => <div className={this.getStringsStyle(context)}>{this.renderStrings(context)}</div>}
      </FretboardContext.Consumer>
    )
  }
  private getStringsStyle(context: FretboardContexType) {
    return css({
      label: 'instrument-strings',
      position: 'relative',
      width: '100%',
      paddingTop: `${getFretOverhang(context)}px`,
      paddingBottom: `${getFretOverhang(context)}px`,
      zIndex: 2,
    })
  }
  private renderStrings(context: FretboardContexType) {
    return context.strings.map((string) => {
      return <InstrumentString thickness={getStringThickness(string)} key={string.toString()} />
    })
  }
}
