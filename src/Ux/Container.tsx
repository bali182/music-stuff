import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

export type ContainerProps = {
  children: ReactNode
}

const containerStyle = css({
  label: 'container',
  margin: '0px 10vw',
})

export class Container extends PureComponent<ContainerProps> {
  render() {
    const { children } = this.props
    return <div className={containerStyle}>{children}</div>
  }
}
