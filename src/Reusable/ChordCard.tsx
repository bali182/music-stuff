import React, { PureComponent } from 'react'
import { ChordShape, AnyString } from '../model/models'
import { Card } from '../Ux/Card'
import { CardHeader } from '../Ux/CardHeader'
import { CardTitle } from '../Ux/CardTitle'
import { CardSubTitle } from '../Ux/CardSubTitle'
import { CardContent } from '../Ux/CardContent'
import { ChordFretboard } from './ChordFretboard'
import { Button } from '../Ux/Button'
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
