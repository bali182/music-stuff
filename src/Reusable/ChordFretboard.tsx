import React, { PureComponent } from 'react'
import { Fretboard } from '../Fretboard/Fretboard'
import { min, max } from '../utils'
import { NoteMarker, DefaultColors } from '../Fretboard/NoteMarker'
import { ChordShape, AnyString } from '../model/models'
import { getScaleDegree, isRootScaleDegree, getScaleDegreeName } from '../model/Keys'
import { getNoteOnString } from '../model/Strings'

export type ChordFretboardProps = {
  chord: ChordShape
  showLocation: boolean
  strings: AnyString[]
}

export class ChordFretboard extends PureComponent<ChordFretboardProps> {
  render() {
    const { chord, showLocation, strings } = this.props
    const firstVisibleFret = chord.notes.map((note) => note.fret).reduce(min)
    const lastVisibleFret = chord.notes.map((note) => note.fret).reduce(max)
    const dots = showLocation
    const positionMarkers = showLocation
    return (
      <Fretboard
        firstVisibleFret={max((showLocation ? firstVisibleFret : firstVisibleFret + 12) - 1, 0)}
        lastVisibleFret={showLocation ? lastVisibleFret : lastVisibleFret + 12}
        strings={strings}
        firstFretWidth={50}
        lastFretWidth={50}
        dots={dots}
        positionMarkers={positionMarkers}>
        {this.renderChord()}
      </Fretboard>
    )
  }

  private renderChord() {
    const { chord, showLocation, strings } = this.props
    return chord.notes
      .filter((note) => strings.indexOf(note.string) >= 0)
      .map((frettedNote) => {
        const note = getNoteOnString(frettedNote)
        const degree = getScaleDegree(chord.key, note)
        return (
          <NoteMarker
            key={`${frettedNote.string}-${frettedNote.fret}`}
            color={isRootScaleDegree(degree) ? DefaultColors.red : DefaultColors.gray}
            fret={showLocation ? frettedNote.fret : frettedNote.fret + 12}
            label={showLocation ? note.toString() : getScaleDegreeName(degree)}
            string={frettedNote.string}
          />
        )
      })
  }
}
