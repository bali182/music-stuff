import React from 'react'
import { render } from 'react-dom'
import { Fretboard } from './Fretboard/Fretboard'
import { Frets } from './Fretboard/Frets'
import { InstrumentStrings } from './Fretboard/InstrumentStrings'
import { FrettedNotes } from './Fretboard/FrettedNotes'
import { FrettedNote } from './Fretboard/FrettedNote'
import { GuitarStrings, GuitarString } from './model/GuitarString'

render(
  <Fretboard firstVisibleFret={0} lastVisibleFret={13} strings={GuitarStrings} dots={false}>
    <Frets />
    <InstrumentStrings />
    <FrettedNotes>
      <FrettedNote label="R" string={GuitarString.E1} fret={7}></FrettedNote>
      <FrettedNote label="5" color="gray" string={GuitarString.B} fret={7}></FrettedNote>
      <FrettedNote label="3" color="gray" string={GuitarString.G} fret={8}></FrettedNote>
      <FrettedNote label="R" string={GuitarString.D} fret={9}></FrettedNote>
      <FrettedNote label="5" color="gray" string={GuitarString.A} fret={9}></FrettedNote>
      <FrettedNote label="R" string={GuitarString.E6} fret={7}></FrettedNote>
    </FrettedNotes>
  </Fretboard>,
  document.getElementById('root')
)
