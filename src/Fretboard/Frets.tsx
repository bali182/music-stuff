import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const fretsStyle = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  position: 'absolute',
  top: '4px',
  left: '0px',
  bottom: '4px',
  right: '0px',
  label: 'frets'
})

export type FretsProps = {
  children: ReactNode
}

export class Frets extends PureComponent<FretsProps> {
  render() {
    const { children } = this.props
    return <div className={fretsStyle}>{children}</div>
  }
}
