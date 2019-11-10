import React, { PureComponent } from 'react'
import { ChordShape, AnyString } from '../model/models'
import { CardSection } from '../Ux/CardSection'
import { Card } from '../Ux/Card'
import { CardHeader } from '../Ux/CardHeader'
import { CardTitle } from '../Ux/CardTitle'
import { CardSubTitle } from '../Ux/CardSubTitle'
import { CardContent } from '../Ux/CardContent'
import { ChordFretboard } from './ChordFretboard'
import { Button } from '../Ux/Button'
import { getChordKeyName } from '../model/Chords'
import isNil from 'lodash/isNil'

export type ChordsViewProps = {
  chords: ChordShape[]
  title: string
  color: string
  strings: AnyString[]
}

export type ChordsViewState = {
  showLocationsMap: Map<ChordShape, boolean>
}

export class ChordsView extends PureComponent<ChordsViewProps, ChordsViewState> {
  state: ChordsViewState = {
    showLocationsMap: new Map(),
  }

  render() {
    const { title } = this.props
    return (
      <CardSection title={title} itemsPerRow={4}>
        {this.renderChordCards()}
      </CardSection>
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
    const { chords, color, strings } = this.props
    return chords.map((chord, i) => {
      const showFretPos = this.isShowingLocations(chord)
      return (
        <Card key={`${chord.key.root}-${chord.key.type}-${i}`}>
          <CardHeader color={color}>
            <CardTitle>{getChordKeyName(chord.key)}</CardTitle>
            <CardSubTitle>{chord.description}</CardSubTitle>
          </CardHeader>
          <CardContent>
            <ChordFretboard chord={chord} showLocation={showFretPos} strings={strings} />
          </CardContent>
          <CardContent>
            <Button onClick={this.toggleChordState(chord)}>{showFretPos ? 'Hide positions' : 'Show positions'}</Button>
          </CardContent>
        </Card>
      )
    })
  }
}
