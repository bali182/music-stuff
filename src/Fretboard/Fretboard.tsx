import React, { PureComponent } from 'react'
import { GuitarString } from '../model/GuitarString'
import { FretCount } from '../model/FretCount'

export type FretboardProps = {
  strings: GuitarString[]
  frets: FretCount
}

export class Fretboard extends PureComponent<FretboardProps> {
  render() {
    return <div>hi</div>
  }
}
