import React, { PureComponent } from 'react'
import { ChordShape, Note } from '../model/models'
import { css } from 'emotion'
import { Card } from '../ux/Card'
import { noteColors } from './noteColors'
import { getNormalizedNote } from '../model/Notes'
import { CardHeader } from '../ux/CardHeader'
import { CardTitle } from '../ux/CardTitle'
import { CardSubTitle } from '../ux/CardSubTitle'
import { colors } from '../ux/colors'
import { getChordTypeName } from '../model/Keys'

const noteCardStyle = css({
  marginBottom: '20px',
  width: '480px',
  alignSelf: 'center',
})

const noteStyle = css({
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '100px',
  color: colors.white,
  margin: '20px 10px',
})

const descriptionStyle = css({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '80px',
  color: colors.white,
  margin: '20px 10px',
})

type CagedChordViewProps = {
  chord: ChordShape
  root: Note
}

export class CagedChordView extends PureComponent<CagedChordViewProps> {
  render() {
    const { chord, root } = this.props
    if (!chord || !root) {
      return null
    }
    return (
      <Card className={noteCardStyle}>
        <CardHeader color={noteColors[getNormalizedNote(chord.key.root)]}>
          <CardTitle>
            <div className={noteStyle}>
              {root} {getChordTypeName(chord.key.type)}
            </div>
          </CardTitle>
          <CardSubTitle>
            <div className={descriptionStyle}>{chord.description}</div>
          </CardSubTitle>
        </CardHeader>
      </Card>
    )
  }
}
