import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardContentStyle = css({
  label: 'card-content',
  margin: '18px 14px 0px 14px',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  justifyItems: 'center',
  flexShrink: 0,
  ':last-child': {
    marginBottom: '18px',
  },
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
