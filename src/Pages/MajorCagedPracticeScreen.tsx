import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMajorCagedProgression } from '../model/progressions'
import { colors } from '../Ux/colors'

export class MajorCagedPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getMajorCagedProgression} color={colors.green} />
  }
}
