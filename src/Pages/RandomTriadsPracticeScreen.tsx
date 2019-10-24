import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getRandomMajorTriadSequence } from '../model/chordSequences'
import { colors } from '../Ux/colors'

export class RandomTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getRandomMajorTriadSequence} color={colors.red} />
  }
}
