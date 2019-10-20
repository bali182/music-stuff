import React from 'react'
import { render } from 'react-dom'
import { Fretboard } from './Fretboard/Fretboard'
import { FrettedNote } from './Fretboard/FrettedNote'
import { GuitarStrings, GuitarString } from './model/GuitarString'
import { CagedChord } from './Chords/CagedChord'
import { OpenCShape, OpenAShape, OpenGShape, OpenEShape, OpenDShape } from './model/cagedChords'
import { Note } from './model/Note'

render(
  <div>
    <Fretboard firstVisibleFret={0} lastVisibleFret={13} strings={GuitarStrings} stringSpacing={20} dots={false}>
      <FrettedNote label="R" string={GuitarString.E1} fret={7}></FrettedNote>
      <FrettedNote label="5" color="gray" string={GuitarString.B} fret={7}></FrettedNote>
      <FrettedNote label="3" color="gray" string={GuitarString.G} fret={8}></FrettedNote>
      <FrettedNote label="R" string={GuitarString.D} fret={9}></FrettedNote>
      <FrettedNote label="5" color="gray" string={GuitarString.A} fret={9}></FrettedNote>
      <FrettedNote label="R" string={GuitarString.E6} fret={7}></FrettedNote>
    </Fretboard>
    <CagedChord shape={OpenCShape} root={Note.C} />
    <CagedChord shape={OpenAShape} root={Note.A} />
    <CagedChord shape={OpenGShape} root={Note.G} />
    <CagedChord shape={OpenEShape} root={Note.E} />
    <CagedChord shape={OpenDShape} root={Note.D} />
  </div>,
  document.getElementById('root')
)
