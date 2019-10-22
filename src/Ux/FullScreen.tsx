import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { colors } from './colors'

const fullScreenStyle = css({
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  background: colors.lightYellowGreen,
})

export type FullScreenProps = {
  children: ReactNode
}

export class FullScreen extends PureComponent<FullScreenProps> {
  render() {
    const { children } = this.props
    return <div className={fullScreenStyle}>{children}</div>
  }
}
