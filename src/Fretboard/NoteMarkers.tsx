import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const noteMarkersStyle = css({
  label: 'note-markers',
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  zIndex: 3,
})

export type NoteMarkersProps = {
  children: ReactNode
}

export class NoteMarkers extends PureComponent<NoteMarkersProps> {
  render() {
    const { children } = this.props
    return <div className={noteMarkersStyle}>{children}</div>
  }
}
