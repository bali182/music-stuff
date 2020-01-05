import React, { Component } from 'react'
import { ChordShape, KeyType, MusicalKey, Note } from '../model/models'
import { FullScreen } from '../ux/FullScreen'
import { Container } from '../ux/Container'
import { Headline } from '../ux/Headline'
import { Button } from '../ux/Button'
import { css } from 'emotion'
import sample from 'lodash/sample'
import { CagedChordView } from './CagedChordView'
import { minorCagedChords } from '../data/minorCagedChords'
import { majorCagedChords } from '../data/majorCagedChords'
import { moveChordShape } from '../model/ChordShapes'
import { getAllNotes, getNormalizedNote } from '../model/Notes'

export type RandomCagedChordPracticeScreenState = {
  chord: ChordShape
  root: Note
}

export type RandomCagedChordPracticeScreenProps = {}

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

export class RandomCagedChordPracticeScreen extends Component<
  RandomCagedChordPracticeScreenProps,
  RandomCagedChordPracticeScreenState
> {
  state: RandomCagedChordPracticeScreenState = this.getNextState()

  private getNextState(): RandomCagedChordPracticeScreenState {
    const originalRoot = sample(getAllNotes())
    const key: MusicalKey = {
      root: getNormalizedNote(originalRoot),
      type: sample([KeyType.Aeolian, KeyType.Ionian]),
    }
    const shape = sample(key.type === KeyType.Aeolian ? minorCagedChords : majorCagedChords)
    const chord = moveChordShape(shape, key.root, true)
    return { chord, root: originalRoot }
  }

  private updateNote = () => this.setState(this.getNextState())

  render() {
    const { chord, root } = this.state
    return (
      <FullScreen>
        <Container>
          <Headline text="Random notes practice" alignment="center" />
          <CagedChordView chord={chord} root={root} />
          <div className={buttonContainerStyle}>
            <Button onClick={this.updateNote} className={buttonStyle}>
              Next Note
            </Button>
          </div>
        </Container>
      </FullScreen>
    )
  }
}
