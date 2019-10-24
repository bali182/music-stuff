import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMinorTriadSequence } from '../model/chordSequences'
import { colors } from '../Ux/colors'

export class MinorTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getMinorTriadSequence} color={colors.orange} />
  }
}
