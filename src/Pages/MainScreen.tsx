import React, { Component } from 'react'
import { FullScreen } from '../Ux/FullScreen'
import { Card } from '../Ux/Card'
import { colors } from '../Ux/colors'
import { CardTitle } from '../Ux/CardTitle'
import { CardSubTitle } from '../Ux/CardSubTitle'
import { CardHeader } from '../Ux/CardHeader'
import { CardContent } from '../Ux/CardContent'
import { Button } from '../Ux/Button'
import { CardSection } from '../Ux/CardSection'
import { Container } from '../Ux/Container'
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'

const linkStyle = css({
  width: '100%',
  display: 'block',
})

const cardExtraStyle = css({
  height: '100%',
})

export class MainScreen extends Component {
  render() {
    return (
      <FullScreen>
        <Container>
          <CardSection title="Random notes" itemsPerRow={4}>
            <Card>
              <CardHeader color={colors.blue}>
                <CardTitle>Guitar notes</CardTitle>
                <CardSubTitle>Find random notes</CardSubTitle>
              </CardHeader>
              <CardContent>
                Find random notes on the neck as prompted, get help when needed by displaying the notes on the guitar
                neck
              </CardContent>
              <CardContent>
                <NavLink to="/guitar-random-notes" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card>
              <CardHeader color={colors.blue}>
                <CardTitle>Bass notes</CardTitle>
                <CardSubTitle>Find random notes</CardSubTitle>
              </CardHeader>
              <CardContent>
                Find random notes on the neck as prompted, get help when needed by displaying the notes on the bass
                neck.
              </CardContent>
              <CardContent>
                <NavLink to="/bass-random-notes" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
          </CardSection>

          <CardSection title="Triads on the guitar" itemsPerRow={4}>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Major triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice triads shapes with inversions using common major-key progressions.</CardContent>
              <CardContent>
                <NavLink to="/major-triads" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Minor triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice triads shapes with inversions using common minor-key progressions.</CardContent>
              <CardContent>
                <NavLink to="/minor-triads" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Major &amp; minor triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>
                Practice triads shapes with inversions using common major or minor progressions.
              </CardContent>
              <CardContent>
                <NavLink to="/mixed-triads" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.green}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Random triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>
                <span>
                  Practice triads shapes with inversions using random pogressions. <b>Warning:</b> Might not sound
                  pleasant!
                </span>
              </CardContent>
              <CardContent>
                <NavLink to="/random-triads" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
          </CardSection>

          <CardSection title="Triads on the bass" itemsPerRow={4}>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.purple}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Major triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice triads shapes with inversions using common major-key progressions.</CardContent>
              <CardContent>
                <NavLink to="/major-triads-bass" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.purple}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Minor triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>Practice triads shapes with inversions using common minor-key progressions.</CardContent>
              <CardContent>
                <NavLink to="/minor-triads-bass" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.purple}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Major &amp; minor triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>
                Practice triads shapes with inversions using common major or minor progressions.
              </CardContent>
              <CardContent>
                <NavLink to="/mixed-triads-bass" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card className={cardExtraStyle}>
              <CardHeader color={colors.purple}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Random triads practice</CardSubTitle>
              </CardHeader>
              <CardContent>
                <span>
                  Practice triads shapes with inversions using random pogressions. <b>Warning:</b> Might not sound
                  pleasant!
                </span>
              </CardContent>
              <CardContent>
                <NavLink to="/random-triads-bass" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
          </CardSection>

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
                <NavLink to="/major-caged" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
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
                <NavLink to="/minor-caged" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
          </CardSection>

          <CardSection title="Chords &amp; Pentatonic scales" itemsPerRow={4}>
            <Card>
              <CardHeader color={colors.orange}>
                <CardTitle>CAGED</CardTitle>
                <CardSubTitle>CAGED &amp; Pentatonic</CardSubTitle>
              </CardHeader>
              <CardContent>Practice CAGED chord shapes in relation with the pentatonic scale shapes</CardContent>
              <CardContent>
                <NavLink to="/pentatonics-with-caged" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card>
              <CardHeader color={colors.orange}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Triads &amp; Pentatonic</CardSubTitle>
              </CardHeader>
              <CardContent>Practice random triad shapes and their relation to a single pentatonic shape.</CardContent>
              <CardContent>
                <NavLink to="/pentatonic-with-triads" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
            <Card>
              <CardHeader color={colors.orange}>
                <CardTitle>Triads</CardTitle>
                <CardSubTitle>Triads &amp; Pentatonic</CardSubTitle>
              </CardHeader>
              <CardContent>Practice random triad shapes and their relation to two pentatonic shapes.</CardContent>
              <CardContent>
                <NavLink to="/pentatonics-with-triads" className={linkStyle}>
                  <Button>Start practicing</Button>
                </NavLink>
              </CardContent>
            </Card>
          </CardSection>
        </Container>
      </FullScreen>
    )
  }
}
