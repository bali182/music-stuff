import React from 'react'
import { render } from 'react-dom'
import { CagedChord } from './Chords/CagedChord'
import { css } from 'emotion'
import { Note } from './model/models'
import { Card } from './Ux/Card'
import { EAD } from './model/majorTriads'
import { CardHeader } from './Ux/CardHeader'
import { CardTitle } from './Ux/CardTitle'
import { CardSubTitle } from './Ux/CardSubTitle'
import { CardContent } from './Ux/CardContent'
import { CardRow } from './Ux/CardRow'

// 7AC74F green
// A1CF6B light green
// D5D887 very light green
// E0C879 orange
// E87461 red
// 00BFB3 blue/green
// 08B2E3 blue

render(
  <div className={css({ background: '#D5D887', padding: '40px' })}>
    <CardRow>
      <Card>
        <CardHeader color="#E87461">
          <CardTitle>D Major</CardTitle>
          <CardSubTitle>First inversion triad</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CagedChord shape={EAD.rootPosition} root={Note.D} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader color="#E87461">
          <CardTitle>D Major</CardTitle>
          <CardSubTitle>First inversion triad</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CagedChord shape={EAD.firstInversion} root={Note.D} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader color="#E87461">
          <CardTitle>D Major</CardTitle>
          <CardSubTitle>First inversion triad</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CagedChord shape={EAD.secondInversion} root={Note.D} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader color="#E87461">
          <CardTitle>D Major</CardTitle>
          <CardSubTitle>First inversion triad</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CagedChord shape={EAD.rootPosition} root={Note.D} />
        </CardContent>
      </Card>
    </CardRow>
  </div>,
  document.getElementById('root')
)
