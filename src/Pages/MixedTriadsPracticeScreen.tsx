import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMixedTriads } from '../model/progressions'
import { colors } from '../Ux/colors'

export class MixedTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getMixedTriads} color={colors.red} />
  }
}
