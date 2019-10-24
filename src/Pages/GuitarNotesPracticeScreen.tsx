import React, { Component } from 'react'
import { RandomNotePracticeScreen } from '../Reusable/RandomNotePracticeScreen'
import { GuitarStrings } from '../model/models'

export class GuitarNotesPracticeScreen extends Component {
  render() {
    return <RandomNotePracticeScreen strings={GuitarStrings} />
  }
}
