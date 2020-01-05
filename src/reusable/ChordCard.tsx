import React, { PureComponent } from 'react'
import { ChordShape, AnyString } from '../model/models'
import { Card } from '../ux/Card'
import { CardHeader } from '../ux/CardHeader'
import { CardTitle } from '../ux/CardTitle'
import { CardSubTitle } from '../ux/CardSubTitle'
import { CardContent } from '../ux/CardContent'
import { ChordFretboard } from './ChordFretboard'
import { Button } from '../ux/Button'
import { getChordKeyName } from '../model/Chords'

export type ChordCardProps = {
  chord: ChordShape
  strings: AnyString[]
  color: string
  showPositions: boolean
  buttonLabel: string
  onButtonClick: () => void
}

export class ChordCard extends PureComponent<ChordCardProps> {
  render() {
    return this.renderChordCards()
  }

  private onClick = () => this.props.onButtonClick()

  private renderChordCards() {
    const { chord, strings, color, buttonLabel, showPositions } = this.props
    return (
      <Card>
        <CardHeader color={color}>
          <CardTitle>{getChordKeyName(chord.key)}</CardTitle>
          <CardSubTitle>{chord.description}</CardSubTitle>
        </CardHeader>
        <CardContent>
          <ChordFretboard chord={chord} showLocation={showPositions} strings={strings} />
        </CardContent>
        <CardContent>
          <Button onClick={this.onClick}>{buttonLabel}</Button>
        </CardContent>
      </Card>
    )
  }
}
