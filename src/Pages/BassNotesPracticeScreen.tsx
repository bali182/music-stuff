import React, { Component } from 'react'
import { RandomNotePracticeScreen } from '../Reusable/RandomNotePracticeScreen'
import { BassStrings } from '../model/models'

export class BassNotesPracticeScreen extends Component {
  render() {
    return <RandomNotePracticeScreen strings={BassStrings} />
  }
}
