import React, { Component } from 'react'
import { ChordsView } from './ChordsView'
import { ChordProgression } from '../model/models'
import { FullScreen } from '../Ux/FullScreen'
import { Container } from '../Ux/Container'
import { Button } from '../Ux/Button'
import isNil from 'lodash/isNil'
import { css } from 'emotion'

const nextButtonContainer = css({
  alignSelf: 'center',
  maxWidth: '400px',
  marginTop: '40px',
})

export type ChordPracticeScreenProps = {
  getProgression: () => ChordProgression
  color: string
}

export type ChordPracticeScreenState = {
  progression: ChordProgression
}

export class ChordPracticeScreen extends Component<ChordPracticeScreenProps, ChordPracticeScreenState> {
  state: ChordPracticeScreenState = {
    progression: null,
  }

  private nextProgresson = () => {
    const progression = this.props.getProgression()
    this.setState({ progression })
  }

  componentDidMount() {
    this.nextProgresson()
  }

  render() {
    return (
      <FullScreen>
        <Container>
          {this.renderProgression()}
          <div className={nextButtonContainer}>
            <Button onClick={this.nextProgresson}>Next progression</Button>
          </div>
        </Container>
      </FullScreen>
    )
  }

  renderProgression() {
    const { progression } = this.state
    const { color } = this.props
    if (isNil(progression)) {
      return null
    }
    return <ChordsView chords={progression.chords} color={color} title={progression.description} />
  }
}
