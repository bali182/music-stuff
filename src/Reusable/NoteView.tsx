import React, { PureComponent } from 'react'
import { Note, AnyString } from '../model/models'
import { Card } from '../Ux/Card'
import { css } from 'emotion'
import { colors } from '../Ux/colors'
import { NoteFretboard } from './NoteFretboard'
import { getNormalizedNote } from '../model/Notes'

const colorMap = {
  [Note.C]: colors.red,
  [Note.CSharp]: colors.green,
  [Note.D]: colors.blue,
  [Note.DSharp]: colors.orange,

  [Note.E]: colors.darkRed,
  [Note.F]: colors.darkBlue,
  [Note.FSharp]: colors.darkPurple,
  [Note.G]: colors.veryDarkRed,
  [Note.GSharp]: colors.purple,
  [Note.A]: colors.darkGreen,
  [Note.ASharp]: colors.buttonDarkGray,
  [Note.B]: colors.brown,
}

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
    return <div className={noteStyle(colorMap[getNormalizedNote(note)])}>{note}</div>
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
