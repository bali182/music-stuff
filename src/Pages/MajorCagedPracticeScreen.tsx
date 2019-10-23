import React, { Component } from 'react'
import { ChordsScreen } from '../Reusable/ChordsScreen'
import { colors } from '../Ux/colors'
import { cShape, dShape, eShape, gShape } from '../model/majorCagedChords'

export class MajorCagedPracticeScreen extends Component {
  render() {
    const chords = [cShape, dShape, eShape, gShape]
    return <ChordsScreen chords={chords} color={colors.green} title="Major CAGED Chords" />
  }
}
