import React from 'react'
import range from 'lodash/range'
import { render } from 'react-dom'
import { Fretboard } from './Fretboard/Fretboard'
import { Frets } from './Fretboard/Frets'
import { Fret } from './Fretboard/Fret'
import { InstrumentStrings } from './Fretboard/InstrumentStrings'
import { InstrumentString } from './Fretboard/InstrumentString'
import { FrettedNotes } from './Fretboard/FrettedNotes'
import { FrettedNote } from './Fretboard/FrettedNote'

render(
  <Fretboard lastVisibleFret={13}>
    <Frets>
      {range(0, 13).map((fret) => (
        <Fret fretNumber={fret} key={fret} />
      ))}
    </Frets>
    <InstrumentStrings>
      <InstrumentString thickness={1} />
      <InstrumentString thickness={1} />
      <InstrumentString thickness={2} />
      <InstrumentString thickness={3} />
      <InstrumentString thickness={3} />
      <InstrumentString thickness={4} />
    </InstrumentStrings>
    <FrettedNotes>
      <FrettedNote label="R" stringNumber={0} fretNumber={7}></FrettedNote>
      <FrettedNote label="5" stringNumber={1} fretNumber={7}></FrettedNote>
      <FrettedNote label="3" stringNumber={2} fretNumber={8}></FrettedNote>
      <FrettedNote label="R" stringNumber={3} fretNumber={9}></FrettedNote>
      <FrettedNote label="5" stringNumber={4} fretNumber={9}></FrettedNote>
      <FrettedNote label="R" stringNumber={5} fretNumber={7}></FrettedNote>
    </FrettedNotes>
  </Fretboard>,
  document.getElementById('root')
)
