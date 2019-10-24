import React, { Component } from 'react'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import { getMajorCagedSequence } from '../model/chordSequences'
import { colors } from '../Ux/colors'

export class MajorCagedPracticeScreen extends Component {
  render() {
    return <ChordPracticeScreen getSequence={getMajorCagedSequence} color={colors.green} />
  }
}
