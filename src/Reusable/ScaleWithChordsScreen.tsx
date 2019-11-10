import React, { Component } from 'react'
import { ChordsView } from './ChordsView'
import { ChordShapeSequence, AnyString, ScaleShape, ChordShape, ScaleWithChords } from '../model/models'
import { FullScreen } from '../Ux/FullScreen'
import { Container } from '../Ux/Container'
import { Button } from '../Ux/Button'
import isNil from 'lodash/isNil'
import { css } from 'emotion'
import { ScaleFretboard } from './ScaleFretboard'

const nextButtonContainer = css({
  alignSelf: 'center',
  maxWidth: '400px',
  marginTop: '40px',
})

export type ScaleWithChordsScreenProps = {
  getScaleWithChords: () => ScaleWithChords
  strings: AnyString[]
  color: string
}

export type ScaleWithChordsScreenState = {
  data: ScaleWithChords
}

export class ScaleWithChordsScreen extends Component<ScaleWithChordsScreenProps, ScaleWithChordsScreenState> {
  state: ScaleWithChordsScreenState = {
    data: null,
  }

  private nextProgresson = () => {
    const data = this.props.getScaleWithChords()
    this.setState({ data })
  }

  componentDidMount() {
    this.nextProgresson()
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

  renderScale() {
    const { data } = this.state
    const { strings } = this.props
    if (isNil(data)) {
      return null
    }
    return <ScaleFretboard scale={data.scale} strings={strings} />
  }

  renderProgression() {
    const { data } = this.state
    const { color, strings } = this.props
    if (isNil(data)) {
      return null
    }
    return <ChordsView strings={strings} chords={data.chords} color={color} title={data.description} />
  }
}
