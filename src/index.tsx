import React from 'react'
import range from 'lodash/range'
import { render } from 'react-dom'
import { Fretboard } from './Fretboard/Fretboard'
import { Frets } from './Fretboard/Frets'
import { Fret } from './Fretboard/Fret'
import { InstrumentStrings } from './Fretboard/InstrumentStrings'
import { InstrumentString } from './Fretboard/InstrumentString'

render(
  <Fretboard>
    <Frets>
      {range(0, 22).map((fret) => (
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
  </Fretboard>,
  document.getElementById('root')
)
