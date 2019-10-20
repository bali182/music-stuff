import React, { PureComponent } from 'react'
import values from 'lodash/values'
import { Fretboard } from '../Fretboard/Fretboard'
import { ChordShape, ChordTone } from '../model/ChordShape'
import { Note } from '../model/Note'
import { moveChordRoot } from '../model/moveChordRoot'
import { min, max } from '../utils'
import { GuitarStrings } from '../model/GuitarString'
import { FrettedNote, DefaultColors } from '../Fretboard/FrettedNote'

export type CagedChordProps = {
  shape: ChordShape
  root: Note
}

export class CagedChord extends PureComponent<CagedChordProps> {
  render() {
    const { root, shape } = this.props
    const chord = moveChordRoot(shape, root)
    const firstVisibleFret = max(chord.notes.map((note) => note.fret).reduce(min) - 1, 0)
    const lastVisibleFret = min(chord.notes.map((note) => note.fret).reduce(max) + 1, 22)
    return (
      <Fretboard firstVisibleFret={firstVisibleFret} lastVisibleFret={lastVisibleFret} strings={GuitarStrings}>
        {chord.notes.map((note) => (
          <FrettedNote
            key={`${note.string}-${note.fret}`}
            color={note.tone === ChordTone.Root ? DefaultColors.red : DefaultColors.gray}
            fret={note.fret}
            label={note.tone}
            string={note.string}
          />
        ))}
      </Fretboard>
    )
  }
}
