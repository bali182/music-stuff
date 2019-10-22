import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardContentStyle = css({
  label: 'card-content',
  margin: '18px 0px',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
})

type CardContentProps = {
  children: ReactNode
}

export class CardContent extends PureComponent<CardContentProps> {
  render() {
    const { children } = this.props
    return <div className={cardContentStyle}>{children}</div>
  }
}
