import React, { Component } from 'react'
import isNil from 'lodash/isNil'
import { AnyString, ChordShape, ScaleWithChords } from '../model/models'
import { FullScreen } from '../ux/FullScreen'
import { Container } from '../ux/Container'
import { Button } from '../ux/Button'
import { css } from 'emotion'
import { ScaleWithChordFretboard } from './ScaleFretboard'
import { ChordCard } from './ChordCard'
import { CardContainer } from '../ux/CardContainer'
import { CardSection } from '../ux/CardSection'
import { getKeyName } from '../model/Keys'
import { Card } from '../ux/Card'
import { CardHeader } from '../ux/CardHeader'
import { CardTitle } from '../ux/CardTitle'
import { colors } from '../ux/colors'
import { CardContent } from '../ux/CardContent'

const nextButtonContainer = css({
  alignSelf: 'center',
  maxWidth: '400px',
  marginTop: '40px',
})

const toggleButtonProps = css({
  alignSelf: 'center',
  maxWidth: '200px',
})

export type ScaleWithChordsScreenProps = {
  getScaleWithChords: () => ScaleWithChords
  strings: AnyString[]
  color: string
}

export type ScaleWithChordsScreenState = {
  data: ScaleWithChords
  selectedChord: ChordShape
  showPositions: boolean
}

export class ScaleWithChordsScreen extends Component<ScaleWithChordsScreenProps, ScaleWithChordsScreenState> {
  state: ScaleWithChordsScreenState = {
    data: null,
    selectedChord: null,
    showPositions: false,
  }

  private nextProgresson = () => {
    const data = this.props.getScaleWithChords()
    this.setState({ data, selectedChord: null, showPositions: false })
  }

  private onChordToggled = (chord: ChordShape) => () => {
    this.setState({ selectedChord: this.isChordSelected(chord) ? null : chord })
  }

  private isChordSelected(chord: ChordShape) {
    return this.state.selectedChord === chord
  }

  componentDidMount() {
    this.nextProgresson()
  }

  private toggleShowPositions = () => {
    this.setState({ showPositions: !this.state.showPositions })
  }

  renderScale() {
    const { data, selectedChord, showPositions } = this.state
    const { strings } = this.props
    if (isNil(data)) {
      return null
    }
    return (
      <CardSection itemsPerRow={4} title={`Pentatonic scale with ${data.description} progression`}>
        <Card>
          <CardHeader color={colors.red}>
            <CardTitle>{getKeyName(data.scale.key)} Pentatonic Scale</CardTitle>
          </CardHeader>
          <CardContent>
            <ScaleWithChordFretboard
              scale={data.scale}
              strings={strings}
              chord={selectedChord}
              showPositions={showPositions}
            />
          </CardContent>
          <CardContent>
            <Button className={toggleButtonProps} onClick={this.toggleShowPositions}>
              {showPositions ? 'Hide positions' : 'Show positions'}
            </Button>
          </CardContent>
        </Card>
      </CardSection>
    )
  }

  renderProgression() {
    const { data } = this.state
    const { color, strings } = this.props
    if (isNil(data)) {
      return null
    }
    return (
      <CardContainer itemsPerRow={4}>
        {data.chords.map((chord, i) => {
          return (
            <ChordCard
              key={`${chord.key.root}-${chord.key.type}-${i}`}
              chord={chord}
              strings={strings}
              color={color}
              showPositions={false}
              onButtonClick={this.onChordToggled(chord)}
              buttonLabel={this.isChordSelected(chord) ? 'Hide on scale' : 'Show on scale'}
            />
          )
        })}
      </CardContainer>
    )
  }

  render() {
    return (
      <FullScreen>
        <Container>{this.renderScale()}</Container>
        <Container>
          {this.renderProgression()}
          <div className={nextButtonContainer}>
            <Button onClick={this.nextProgresson}>Next progression</Button>
          </div>
        </Container>
      </FullScreen>
    )
  }
}
