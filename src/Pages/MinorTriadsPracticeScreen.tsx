import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMinorTriads } from '../model/progressions'
import { colors } from '../Ux/colors'

export class MinorTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getProgression={getMinorTriads} color={colors.orange} />
  }
}
