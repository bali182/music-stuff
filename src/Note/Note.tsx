import React, { PureComponent, CSSProperties } from 'react'
import { Note as NoteValue } from '../model/Note'

const noteColorMap = {
  [NoteValue.A]: '#FE5D26',
  [NoteValue.ASharp]: '#406641',
  [NoteValue.BFlat]: '#283AA6',
  [NoteValue.B]: '#A10A27',
  [NoteValue.C]: '#0081AF',
  [NoteValue.CSharp]: '#9000FF',
  [NoteValue.DFlat]: '#382633',
  [NoteValue.D]: '#353A47',
  [NoteValue.DSharp]: '#79565F',
  [NoteValue.EFlat]: '#EF3E36',
  [NoteValue.E]: '#17BEBB',
  [NoteValue.F]: '#2E282A',
  [NoteValue.FSharp]: '#DC9E82',
  [NoteValue.GFlat]: '#151E3F',
  [NoteValue.G]: '#554348',
  [NoteValue.GSharp]: '#3590F3',
  [NoteValue.AFlat]: '#5F5B6B',
}

const containerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  justifyItems: 'center',
}

const noteStyle: CSSProperties = {
  fontFamily: 'sans-serif',
  fontSize: '500px',
  lineHeight: '500px',
  textShadow: '2px 2px 2px #949494',
}

export type NoteProps = {
  value: NoteValue
}

export class Note extends PureComponent<NoteProps> {
  render() {
    const { value } = this.props
    const color = noteColorMap[value] || '#000'
    return (
      <div style={containerStyle}>
        <span style={{ ...noteStyle, color }}>{value}</span>
      </div>
    )
  }
}
