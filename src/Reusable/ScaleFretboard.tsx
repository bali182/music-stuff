import React, { PureComponent } from 'react'
import { Fretboard } from '../Fretboard/Fretboard'
import { min, max } from '../utils'
import { NoteMarker, DefaultColors } from '../Fretboard/NoteMarker'
import { AnyString, ScaleShape } from '../model/models'
import { getScaleDegree, isRootScaleDegree, getScaleDegreeName } from '../model/Keys'
import { getNoteOnString } from '../model/Strings'

export type ScaleFretboardProps = {
  scale: ScaleShape
  strings: AnyString[]
}

export class ScaleFretboard extends PureComponent<ScaleFretboardProps> {
  render() {
    const { scale, strings } = this.props
    const firstVisibleFret = scale.notes.map((note) => note.fret).reduce(min)
    const lastVisibleFret = scale.notes.map((note) => note.fret).reduce(max)
    return (
      <Fretboard
        firstVisibleFret={firstVisibleFret + 12 - 1}
        lastVisibleFret={lastVisibleFret + 12}
        strings={strings}
        firstFretWidth={50}
        lastFretWidth={50}
        dots={false}
        positionMarkers={false}>
        {this.renderNotes()}
      </Fretboard>
    )
  }

  private renderNotes() {
    const { scale, strings } = this.props
    return scale.notes
      .filter((note) => strings.indexOf(note.string) >= 0)
      .map((frettedNote) => {
        const note = getNoteOnString(frettedNote)
        const degree = getScaleDegree(scale.key, note)
        return (
          <NoteMarker
            key={`${frettedNote.string}-${frettedNote.fret}`}
            color={isRootScaleDegree(degree) ? DefaultColors.red : DefaultColors.gray}
            fret={frettedNote.fret + 12}
            label={getScaleDegreeName(degree)}
            string={frettedNote.string}
          />
        )
      })
  }
}
