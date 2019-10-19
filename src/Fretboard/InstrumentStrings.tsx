import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const stringsStyle = css({
  position: 'relative',
  width: '100%',
  paddingTop: '10px',
  paddingBottom: '10px',
  zIndex: 10,
})

export type InstrumentStringsProps = {
  children: ReactNode
}

export class InstrumentStrings extends PureComponent<InstrumentStringsProps> {
  render() {
    const { children } = this.props
    return <div className={stringsStyle}>{children}</div>
  }
}
