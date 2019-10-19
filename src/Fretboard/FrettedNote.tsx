import React, { PureComponent } from 'react'
import { css } from 'emotion'

const noteStyle = css({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  fontFamily: 'monospace',
  label: 'fret-dot',
  width: '18px',
  height: '18px',
  color: '#fff',
  borderRadius: '22px',
  backgroundColor: '#ca3433',
})

export type FrettedNoteProps = {
  label: string
}

export class FrettedNote extends PureComponent<FrettedNoteProps> {
  render() {
    const { label } = this.props
    return <div className={noteStyle}>{label}</div>
  }
}
