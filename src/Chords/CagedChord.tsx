import React, { PureComponent } from 'react'
import { Fretboard } from '../Fretboard/Fretboard'
import { moveChordShape } from '../model/moveChordShape'
import { min, max } from '../utils'
import { FrettedNote, DefaultColors } from '../Fretboard/FrettedNote'
import { ChordShape, Note, ChordTone, GuitarStrings } from '../model/models'

export type CagedChordProps = {
  shape: ChordShape
  root: Note
}

export class CagedChord extends PureComponent<CagedChordProps> {
  render() {
    const { root, shape } = this.props
    const chord = moveChordShape(shape, root)
    const firstVisibleFret = chord.notes.map((note) => note.fret).reduce(min)
    const lastVisibleFret = chord.notes.map((note) => note.fret).reduce(max)
    return (
      <Fretboard
        firstVisibleFret={max(firstVisibleFret - 1, 0)}
        lastVisibleFret={lastVisibleFret}
        strings={GuitarStrings}>
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
