import React, { PureComponent } from 'react'
import { Note, AnyString } from '../model/models'
import { Card } from '../Ux/Card'
import { css } from 'emotion'
import { NoteFretboard } from './NoteFretboard'
import { getNormalizedNote } from '../model/Notes'
import { noteColors } from './noteColors'

const noteCardStyle = css({
  minWidth: '200px',
  height: '200px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  marginBottom: '20px',
})

const noteStyle = (color: string) =>
  css({
    fontWeight: 'bold',
    fontSize: '120px',
    color,
    alignSelf: 'center',
    justifySelf: 'center',
    margin: '20px',
  })
const fretboardContainerStyle = css({
  margin: '20px',
})

export type NoteViewProps = {
  note: Note
  strings: AnyString[]
  fretboard: boolean
}

export class NoteView extends PureComponent<NoteViewProps> {
  render() {
    return (
      <Card className={noteCardStyle}>
        {this.renderNote()}
        {this.renderFretboard()}
      </Card>
    )
  }
  private renderNote() {
    const { note } = this.props
    return <div className={noteStyle(noteColors[getNormalizedNote(note)])}>{note}</div>
  }
  private renderFretboard() {
    const { strings, fretboard, note } = this.props
    if (!fretboard) {
      return null
    }
    return (
      <div className={fretboardContainerStyle}>
        <NoteFretboard note={note} strings={strings} />
      </div>
    )
  }
}
