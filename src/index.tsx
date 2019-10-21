import React, { ReactNode } from 'react'
import { render } from 'react-dom'
import { CagedChord } from './Chords/CagedChord'
import { cShape } from './model/majorCagedChords'
import { css } from 'emotion'
import { Note } from './model/models'

const WithMargins = ({ children }: { children: ReactNode }) => (
  <div className={css({ margin: '20px auto 20px auto' })}>{children}</div>
)

render(
  <div>
    <WithMargins>
      <CagedChord shape={cShape} root={Note.C} />
    </WithMargins>
    <WithMargins>
      <CagedChord shape={cShape} root={Note.E} />
    </WithMargins>
  </div>,
  document.getElementById('root')
)

/*
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
*/
