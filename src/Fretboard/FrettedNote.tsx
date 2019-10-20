import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFrettedNotePosition } from './utils'

export const Size = 16

export const DefaultColors = {
  red: '#ca3433',
}

export type FrettedNoteProps = {
  label: string
  stringNumber: number
  fretNumber: number
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
    const { color, fretNumber, stringNumber } = this.props
    const [top, left] = getFrettedNotePosition(context)(stringNumber, fretNumber)
    return css({
      label: 'fretted-note',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
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
