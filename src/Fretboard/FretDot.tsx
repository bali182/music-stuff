import React,{ PureComponent } from 'react'



export type FretDotProps = {
  fretNumber: number
}

export class FretDot extends PureComponent<FretDotProps> {
  render() {
    const { fretNumber } = this.props
    return <div></div>
  }
}
