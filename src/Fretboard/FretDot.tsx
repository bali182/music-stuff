import React, { PureComponent } from 'react'
import { css } from 'emotion'

const dotContainerStyle = css({
  label: 'fret-dot-container',
  alignSelf: 'flex-start',
  display: 'flex',
  flex: '1 1 1px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  padding: '0px',
  margin: '0px',
})

const dotStyle = css({
  label: 'fret-dot',
  width: '8px',
  height: '4px',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  backgroundColor: '#000',
  margin: '0px 3px 0px 3px',
})

export type FretDotProps = {
  fretNumber: number
}

export class FretDot extends PureComponent<FretDotProps> {
  render() {
    const { fretNumber } = this.props
    const mod12 = (fretNumber + 1) % 12
    if (fretNumber !== 0 && mod12 === 0) {
      return (
        <div className={dotContainerStyle}>
          <div className={dotStyle} />
          <div className={dotStyle} />
        </div>
      )
    } else if (mod12 === 3 || mod12 === 5 || mod12 === 7 || mod12 === 9) {
      return (
        <div className={dotContainerStyle}>
          <div className={dotStyle} />
        </div>
      )
    }
    return null
  }
}
