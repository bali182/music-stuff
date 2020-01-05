import React, { PureComponent } from 'react'
import { Fretboard } from '../fretboard/Fretboard'
import { Note, AnyString } from '../model/models'
import { NoteMarker, NoteMarkerColors } from '../fretboard/NoteMarker'
import { getChromaticScale } from '../model/Scales'
import { getNormalizedNote } from '../model/Notes'
import { getStringRootNote } from '../model/Strings'

export type NoteFretboardProps = {
  note: Note
  strings: AnyString[]
}

export class NoteFretboard extends PureComponent<NoteFretboardProps> {
  render() {
    const { strings } = this.props
    return (
      <Fretboard firstVisibleFret={0} lastVisibleFret={13} strings={strings} dots={true} positionMarkers={false}>
        {this.renderNotes()}
      </Fretboard>
    )
  }

  private renderNotes() {
    const { strings, note } = this.props
    return strings.map((string: AnyString) => {
      const root = getStringRootNote(string)
      const scale = getChromaticScale(root)
      const fret = scale.indexOf(getNormalizedNote(note))
      return (
        <NoteMarker
          key={`${string}-${note}-${fret}`}
          color={NoteMarkerColors.important}
          fret={fret}
          label={note}
          string={string}
        />
      )
    })
  }
}
