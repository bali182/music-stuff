import React from 'react'
import { render } from 'react-dom'
import { Scale } from 'tonal'
import { triads, chords } from 'tonal-key'
import Fretboard from 'react-fretboard'
import { names } from 'tonal-chord'

render(
  <div style={{ fontFamily: 'sans-serif' }}>
    <Fretboard
      skinType="strings"
      noteType="pc"
      showNotes={true}
      showSelectionLabels={true}
      nrOfFrets={22}
      selectedNotes={Scale.notes('G', 'mixolydian')}
    />
  </div>,
  document.getElementById('root')
)

console.log(Scale.notes('G', 'mixolydian pentatonic'))
console.log(Scale.names())
