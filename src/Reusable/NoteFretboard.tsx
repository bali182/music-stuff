import React, { PureComponent } from 'react'
import { Fretboard } from '../Fretboard/Fretboard'
import { Note, AnyString } from '../model/models'
import { FrettedNote, DefaultColors } from '../Fretboard/FrettedNote'
import { getStringRootNote } from '../model/getStringRootNote'
import { getNormalizedNote } from '../model/getNormalizedNote'
import { getChromaticScale } from '../model/getChromaticScale'

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
        <FrettedNote
          key={`${string}-${note}-${fret}`}
          color={DefaultColors.red}
          fret={fret}
          label={note}
          string={string}
        />
      )
    })
  }
}
