import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { getFrettedNoteSize, getFrettedNoteTop, getFrettedNoteLeft } from './utils'
import { AnyString } from '../model/models'

export const DefaultColors = {
  red: '#ca3433',
  gray: '#808080',
}

export type NoteMarkerProps = {
  label: string
  string: AnyString
  fret: number
  color?: string
}

export class NoteMarker extends PureComponent<NoteMarkerProps> {
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
    const top = getFrettedNoteTop(context)(string)
    const left = getFrettedNoteLeft(context)(fret)
    const size = getFrettedNoteSize(context)
    return css({
      label: 'note-marker',
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
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size}px`,
      backgroundColor: color,
    })
  }

  static defaultProps: Partial<NoteMarkerProps> = {
    color: DefaultColors.red,
  }
}