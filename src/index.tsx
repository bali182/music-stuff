import React, { ReactNode } from 'react'
import { render } from 'react-dom'
import { Fretboard } from './Fretboard/Fretboard'
import { FrettedNote } from './Fretboard/FrettedNote'
import { GuitarStrings, GuitarString } from './model/GuitarString'
import { CagedChord } from './Chords/CagedChord'
import { OpenCShape, OpenAShape, OpenGShape, OpenEShape, OpenDShape } from './model/cagedChords'
import { Note } from './model/Note'
import { css } from 'emotion'

const WithMargins = ({ children }: { children: ReactNode }) => (
  <div className={css({ margin: '20px auto 20px auto' })}>{children}</div>
)

render(
  <div>
    <WithMargins>
      <Fretboard firstVisibleFret={0} lastVisibleFret={13} strings={GuitarStrings} stringSpacing={20} dots={false}>
        <FrettedNote label="R" string={GuitarString.E1} fret={7}></FrettedNote>
        <FrettedNote label="5" color="gray" string={GuitarString.B} fret={7}></FrettedNote>
        <FrettedNote label="3" color="gray" string={GuitarString.G} fret={8}></FrettedNote>
        <FrettedNote label="R" string={GuitarString.D} fret={9}></FrettedNote>
        <FrettedNote label="5" color="gray" string={GuitarString.A} fret={9}></FrettedNote>
        <FrettedNote label="R" string={GuitarString.E6} fret={7}></FrettedNote>
      </Fretboard>
    </WithMargins>
    <WithMargins>
      <CagedChord shape={OpenCShape} root={Note.C} />
    </WithMargins>
    <WithMargins>
      <CagedChord shape={OpenAShape} root={Note.A} />
    </WithMargins>
    <WithMargins>
      <CagedChord shape={OpenGShape} root={Note.G} />
    </WithMargins>
    <WithMargins>
      <CagedChord shape={OpenEShape} root={Note.E} />
    </WithMargins>
    <WithMargins>
      <CagedChord shape={OpenDShape} root={Note.D} />
    </WithMargins>
  </div>,
  document.getElementById('root')
)
