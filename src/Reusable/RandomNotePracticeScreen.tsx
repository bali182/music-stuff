import React, { Component } from 'react'
import { Note, AnyString } from '../model/models'
import { FullScreen } from '../Ux/FullScreen'
import { Container } from '../Ux/Container'
import { Headline } from '../Ux/Headline'
import { NoteView } from '../Reusable/NoteView'
import { Button } from '../Ux/Button'
import { css } from 'emotion'
import { getExtendedRandomNote } from '../model/Notes'

export type RandomNotePracticeScreenState = {
  note: Note
  fretboardVisible: boolean
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
  state: RandomNotePracticeScreenState = {
    note: getExtendedRandomNote(),
    fretboardVisible: false,
  }
  private updateNote = () => {
    this.setState({ note: getExtendedRandomNote(), fretboardVisible: false })
  }

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
