import React, { PureComponent } from 'react'
import { Fretboard } from '../Fretboard/Fretboard'
import { min, max } from '../utils'
import { NoteMarker, NoteMarkerColors } from '../Fretboard/NoteMarker'
import { AnyString, ScaleShape, ChordShape, FrettedNote } from '../model/models'
import { getScaleDegree, isRootScaleDegree, getScaleDegreeName, getKeyName } from '../model/Keys'
import { getNoteOnString, notesEqual } from '../model/Strings'
import isNil from 'lodash/isNil'

export type ScaleFretboardProps = {
  scale: ScaleShape
  strings: AnyString[]
  chord?: ChordShape
  showPositions: boolean
}

export class ScaleWithChordFretboard extends PureComponent<ScaleFretboardProps> {
  render() {
    const { scale, strings, showPositions } = this.props
    const minFret = scale.notes.map((note) => note.fret).reduce(min)
    const maxFret = scale.notes.map((note) => note.fret).reduce(max)
    const firstVisibleFret = max((showPositions ? minFret : minFret + 12) - 2, 0)
    const lastVisibleFret = (showPositions ? maxFret : maxFret + 12) + 1
    return (
      <Fretboard
        firstVisibleFret={firstVisibleFret}
        lastVisibleFret={lastVisibleFret}
        strings={strings}
        firstFretWidth={50}
        lastFretWidth={50}
        dots={showPositions}
        positionMarkers={showPositions}>
        {this.renderScaleNotes()}
        {this.renderChordNotes()}
      </Fretboard>
    )
  }

  private renderChordNotes() {
    const { strings, chord, showPositions } = this.props
    if (isNil(chord)) {
      return null
    }
    return chord.notes
      .filter((note) => strings.indexOf(note.string) >= 0)
      .filter((note) => (isNil(chord) ? true : chord.notes.some((chordNote) => !notesEqual(note, chordNote))))
      .map((frettedNote) => {
        const note = getNoteOnString(frettedNote)
        const degree = getScaleDegree(chord.key, note)
        const fret = showPositions ? frettedNote.fret : frettedNote.fret + 12
        const label = showPositions ? note.toString() : getScaleDegreeName(degree)
        return (
          <NoteMarker
            key={`${frettedNote.string}-${frettedNote.fret}`}
            color={NoteMarkerColors.highlight}
            fret={fret}
            label={label}
            string={frettedNote.string}
          />
        )
      })
  }

  private renderScaleNotes() {
    const { scale, strings, chord, showPositions } = this.props
    return scale.notes
      .filter((note) => strings.indexOf(note.string) >= 0)
      .filter((note) => (isNil(chord) ? true : chord.notes.some((chordNote) => !notesEqual(note, chordNote))))
      .map((frettedNote) => {
        const note = getNoteOnString(frettedNote)
        const degree = getScaleDegree(scale.key, note)
        const fret = showPositions ? frettedNote.fret : frettedNote.fret + 12
        const label = showPositions ? note.toString() : getScaleDegreeName(degree)
        const color = isRootScaleDegree(degree) ? NoteMarkerColors.important : NoteMarkerColors.default
        return (
          <NoteMarker
            key={`${frettedNote.string}-${frettedNote.fret}`}
            color={color}
            fret={fret}
            label={label}
            string={frettedNote.string}
          />
        )
      })
  }
}
