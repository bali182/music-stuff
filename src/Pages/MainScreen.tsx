import React, { Component } from 'react'
import { FullScreen } from '../Ux/FullScreen'
import { CardContainer } from '../Ux/CardContainer'
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
import { CardSection } from '../Ux/CardSection'
import { Container } from '../Ux/Container'

export class MainScreen extends Component {
  render() {
    return (
      <FullScreen>
        <Container>
          <CardSection title="CAGED Chords" itemsPerRow={4}>
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
                <Button disabled={true}>Coming soon...</Button>
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
                <Button disabled={true}>Coming soon...</Button>
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
                <Button disabled={true}>Coming soon...</Button>
              </CardContent>
            </Card>
          </CardSection>
          <CardSection title="Triads" itemsPerRow={4}>
            <Card>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Major triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice the essential triads shapes and inversions.</CardContent>
              <CardContent>
                <Button disabled={true}>Coming soon...</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Minor triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice the essential triads shapes and inversions.</CardContent>
              <CardContent>
                <Button disabled={true}>Coming soon...</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Diminished triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice the essential triads shapes and inversions.</CardContent>
              <CardContent>
                <Button disabled={true}>Coming soon...</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Mixed triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice the essential triads shapes and inversions.</CardContent>
              <CardContent>
                <Button disabled={true}>Coming soon...</Button>
              </CardContent>
            </Card>
          </CardSection>
        </Container>
      </FullScreen>
    )
  }
}
