import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMajorTriads } from '../model/progressions'
import { colors } from '../Ux/colors'

export class MajorTriadsPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getProgression={getMajorTriads} color={colors.red} />
  }
}
