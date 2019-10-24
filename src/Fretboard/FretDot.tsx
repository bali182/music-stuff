import React, { PureComponent } from 'react'
import { css } from 'emotion'

const dotContainerStyle = css({
  label: 'fret-dot-container',
  display: 'flex',
  flex: '1 0 1px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  marginTop: '-4px',
})

const dotStyle = css({
  label: 'fret-dot',
  width: '8px',
  height: '8px',
  borderRadius: '8px',
  backgroundColor: '#000',
  margin: '3px 3px 0px 3px',
  opacity: 0.2,
})

export type FretDotProps = {
  fret: number
}

export class FretDot extends PureComponent<FretDotProps> {
  render() {
    const { fret } = this.props
    const mod12 = (fret + 1) % 12
    if (fret !== 0 && mod12 === 0) {
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
