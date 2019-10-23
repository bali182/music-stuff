import React, { PureComponent } from 'react'
import { ChordShape } from '../model/models'
import { FullScreen } from '../Ux/FullScreen'
import { Container } from '../Ux/Container'
import { CardSection } from '../Ux/CardSection'
import { Card } from '../Ux/Card'
import { CardHeader } from '../Ux/CardHeader'
import { CardTitle } from '../Ux/CardTitle'
import { CardSubTitle } from '../Ux/CardSubTitle'
import { CardContent } from '../Ux/CardContent'
import { ChordFretboard } from './ChordFretboard'
import { Button } from '../Ux/Button'

export type ChordsScreenProps = {
  chords: ChordShape[]
  title: string
  color: string
}

export type ChordsScreenState = {
  showLocationsMap: Map<ChordShape, boolean>
}

export class ChordsScreen extends PureComponent<ChordsScreenProps, ChordsScreenState> {
  state: ChordsScreenState = {
    showLocationsMap: new Map(),
  }

  render() {
    const { title } = this.props
    return (
      <FullScreen>
        <Container>
          <CardSection title={title} itemsPerRow={4}>
            {this.renderChordCards()}
          </CardSection>
        </Container>
      </FullScreen>
    )
  }

  private toggleChordState = (chord: ChordShape) => () => {
    const { showLocationsMap } = this.state
    const newMap = new Map(showLocationsMap).set(chord, !this.isShowingLocations(chord))
    this.setState({ showLocationsMap: newMap })
  }

  private isShowingLocations(chord: ChordShape): boolean {
    return Boolean(this.state.showLocationsMap.get(chord))
  }

  private renderChordCards() {
    const { chords, color } = this.props
    return chords.map((chord) => {
      const showFretPos = this.isShowingLocations(chord)
      return (
        <Card>
          <CardHeader color={color}>
            <CardTitle>
              {chord.root} {chord.type}
            </CardTitle>
            <CardSubTitle>{chord.description}</CardSubTitle>
          </CardHeader>
          <CardContent>
            <ChordFretboard chord={chord} showLocation={showFretPos} />
          </CardContent>
          <CardContent>
            <Button onClick={this.toggleChordState(chord)}>{showFretPos ? 'Hide positions' : 'Show positions'}</Button>
          </CardContent>
        </Card>
      )
    })
  }
}
