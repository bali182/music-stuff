import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const frettedNotesStyle = css({
  label: 'fretted-notes',
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  zIndex: 3,
})

export type FrettedNotesProps = {
  children: ReactNode
}

export class FrettedNotes extends PureComponent<FrettedNotesProps> {
  render() {
    const { children } = this.props
    return <div className={frettedNotesStyle}>{children}</div>
  }
}
