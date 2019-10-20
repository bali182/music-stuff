import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFrettedNotePosition } from './utils'
import { GuitarString } from '../model/GuitarString'
import { BassString } from '../model/BassString'

export const Size = 17

export const DefaultColors = {
  red: '#ca3433',
}

export type FrettedNoteProps = {
  label: string
  string: GuitarString | BassString
  fret: number
  color?: string
}

export class FrettedNote extends PureComponent<FrettedNoteProps> {
  render() {
    const { label } = this.props
    return (
      <FretboardContext.Consumer>
        {(context) => <div className={this.noteStyle(context)}>{label}</div>}
      </FretboardContext.Consumer>
    )
  }

  noteStyle(context: FretboardContexType) {
    const { color, fret, string } = this.props
    const [top, left] = getFrettedNotePosition(context)(string, fret)
    return css({
      label: 'fretted-note',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      userSelect: 'none',
      color: '#fff',
      opacity: 0.6,
      ':hover': {
        opacity: 1,
      },

      top: `${top}px`,
      left: `${left}px`,
      width: `${Size}px`,
      height: `${Size}px`,
      borderRadius: `${Size}px`,
      backgroundColor: color,
    })
  }

  static defaultProps: Partial<FrettedNoteProps> = {
    color: DefaultColors.red,
  }
}
