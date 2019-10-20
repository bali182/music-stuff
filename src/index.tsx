import React, { ReactNode } from 'react'
import { render } from 'react-dom'
import { Fretboard } from './Fretboard/Fretboard'
import { FrettedNote } from './Fretboard/FrettedNote'
import { CagedChord } from './Chords/CagedChord'
import { OpenCShape, OpenAShape, OpenGShape, OpenEShape, OpenDShape } from './model/cagedMajorChords'
import { css } from 'emotion'
import { Note, GuitarString, GuitarStrings } from './model/models'

const WithMargins = ({ children }: { children: ReactNode }) => (
  <div className={css({ margin: '20px auto 20px auto' })}>{children}</div>
)

render(
  <div>
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
