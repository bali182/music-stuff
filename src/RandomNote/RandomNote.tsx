import sample from 'lodash/sample'
import values from 'lodash/values'
import React, { Component } from 'react'
import { Note } from '../Note/Note'
import { Note as NoteValue, Notes } from '../model/Note'

type RandomNoteState = {
  note: NoteValue
}

type RandomNoteProps = {
  timer: number
}

const AllNoteValues: NoteValue[] = values(NoteValue) as NoteValue[]

export class RandomNote extends Component<RandomNoteProps, RandomNoteState> {
  private timerHandle: number = null

  state = {
    note: null,
  }

  startTimer = () => {
    this.timerHandle = setTimeout(this.startTimer, this.props.timer)
    this.setState({ note: sample(Notes) })
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearTimeout(this.timerHandle)
  }

  render() {
    const { note } = this.state
    return note ? <Note value={note} /> : null
  }
}
