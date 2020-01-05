import React, { Component } from 'react'
import { Note, AnyString } from '../model/models'
import { FullScreen } from '../ux/FullScreen'
import { Container } from '../ux/Container'
import { Headline } from '../ux/Headline'
import { NoteView } from '../reusable/NoteView'
import { Button } from '../ux/Button'
import { css } from 'emotion'
import { getExtendedRandomNote, getAllNotes } from '../model/Notes'
import sample from 'lodash/sample'

export type RandomNotePracticeScreenState = {
  note: Note
  fretboardVisible: boolean
  notes: Note[]
}

export type RandomNotePracticeScreenProps = {
  strings: AnyString[]
}

const buttonContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  width: '500px',
  justifySelf: 'center',
  alignSelf: 'center',
})

const buttonStyle = css({
  margin: '10px',
})

export class RandomNotePracticeScreen extends Component<RandomNotePracticeScreenProps, RandomNotePracticeScreenState> {
  state: RandomNotePracticeScreenState = this.getNextState(getAllNotes())

  private getNextState(notes: Note[]): RandomNotePracticeScreenState {
    const nextNote = sample(notes)
    const withoutNextNote = notes.filter((note) => note !== nextNote)
    const nextNotes = withoutNextNote.length === 0 ? getAllNotes() : withoutNextNote
    return {
      note: nextNote,
      notes: nextNotes,
      fretboardVisible: false,
    }
  }

  private updateNote = () => this.setState(this.getNextState(this.state.notes))

  private toggleFretboard = () => {
    const { fretboardVisible } = this.state
    this.setState({ fretboardVisible: !fretboardVisible })
  }

  render() {
    const { note, fretboardVisible } = this.state
    const { strings } = this.props
    return (
      <FullScreen>
        <Container>
          <Headline text="Random notes practice" alignment="center" />
          <NoteView note={note} strings={strings} fretboard={fretboardVisible} />
          <div className={buttonContainerStyle}>
            <Button onClick={this.toggleFretboard} className={buttonStyle}>
              {fretboardVisible ? 'Hide fretboard' : 'View on Fretboard'}
            </Button>
            <Button onClick={this.updateNote} className={buttonStyle}>
              Next Note
            </Button>
          </div>
        </Container>
      </FullScreen>
    )
  }
}
