import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMajorTriadSequence } from '../model/chordSequences'
import { colors } from '../Ux/colors'

export class MajorTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getMajorTriadSequence} color={colors.red} />
  }
}
