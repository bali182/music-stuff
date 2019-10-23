import React, { Component } from 'react'
import { FullScreen } from '../Ux/FullScreen'
import { CardRow } from '../Ux/CardRow'
import { Card } from '../Ux/Card'
import { colors } from '../Ux/colors'
import { CardTitle } from '../Ux/CardTitle'
import { CardSubTitle } from '../Ux/CardSubTitle'
import { CardHeader } from '../Ux/CardHeader'
import { CardContent } from '../Ux/CardContent'
import { CagedChord } from '../Chords/CagedChord'
import { EAD } from '../model/minorTriads'
import { Note } from '../model/models'
import { Button } from '../Ux/Button'

export class MainScreen extends Component {
  render() {
    return (
      <FullScreen>
        <CardRow itemsPerRow={4}>
          <Card>
            <CardHeader color={colors.red}>
              <CardTitle>CAGED</CardTitle>
              <CardSubTitle>Major chords practice</CardSubTitle>
            </CardHeader>
            <CardContent>
              Practice the CAGED shapes along the neck. Get better at finding root notes, and visualising the
              relationships between CAGED chords.
            </CardContent>
            <CardContent>
              <Button>Start practicing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader color={colors.red}>
              <CardTitle>CAGED</CardTitle>
              <CardSubTitle>Minor chords practice</CardSubTitle>
            </CardHeader>
            <CardContent>
              Practice the CAGED shapes along the neck. Get better at finding root notes, and visualising the
              relationships between CAGED chords.
            </CardContent>
            <CardContent>
              <Button>Start practicing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader color={colors.red}>
              <CardTitle>CAGED</CardTitle>
              <CardSubTitle>Major &amp; minor practice</CardSubTitle>
            </CardHeader>
            <CardContent>
              Practice the CAGED shapes along the neck. Get better at finding root notes, and visualising the
              relationships between CAGED chords.
            </CardContent>
            <CardContent>
              <Button>Start practicing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader color={colors.orange}>
              <CardTitle>D Major</CardTitle>
              <CardSubTitle>First inversion triad</CardSubTitle>
            </CardHeader>
            <CardContent>
              <CagedChord shape={EAD.firstInversion} root={Note.D} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader color={colors.green}>
              <CardTitle>D Major</CardTitle>
              <CardSubTitle>First inversion triad</CardSubTitle>
            </CardHeader>
            <CardContent>
              <CagedChord shape={EAD.secondInversion} root={Note.D} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader color={colors.blue}>
              <CardTitle>D Major</CardTitle>
              <CardSubTitle>First inversion triad</CardSubTitle>
            </CardHeader>
            <CardContent>
              <CagedChord shape={EAD.rootPosition} root={Note.D} />
            </CardContent>
          </Card>
        </CardRow>
      </FullScreen>
    )
  }
}
