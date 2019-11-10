import React, { PureComponent } from 'react'
import { ChordShape, AnyString } from '../model/models'
import { CardSection } from '../Ux/CardSection'
import { ChordCard } from './ChordCard'

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
        <ChordCard
          key={`${chord.key.root}-${chord.key.type}-${i}`}
          chord={chord}
          strings={strings}
          color={color}
          showPositions={showFretPos}
          onButtonClick={this.toggleChordState(chord)}
          buttonLabel={showFretPos ? 'Hide positions' : 'Show positions'}
        />
      )
    })
  }
}
