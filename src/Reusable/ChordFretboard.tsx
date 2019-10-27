import React, { PureComponent } from 'react'
import { Fretboard } from '../Fretboard/Fretboard'
import { min, max } from '../utils'
import { FrettedNote, DefaultColors } from '../Fretboard/FrettedNote'
import { ChordShape, ScaleDegree, GuitarStrings, AnyString } from '../model/models'

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
      .map((note) => (
        <FrettedNote
          key={`${note.string}-${note.fret}`}
          color={note.scaleDegree === ScaleDegree.Root ? DefaultColors.red : DefaultColors.gray}
          fret={showLocation ? note.fret : note.fret + 12}
          label={showLocation ? note.note.toString() : note.scaleDegree.toString()}
          string={note.string}
        />
      ))
  }
}
