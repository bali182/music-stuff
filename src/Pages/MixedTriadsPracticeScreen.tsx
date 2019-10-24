import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMixedTriadSequence } from '../model/chordSequences'
import { colors } from '../Ux/colors'

export class MixedTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getMixedTriadSequence} color={colors.red} />
  }
}
