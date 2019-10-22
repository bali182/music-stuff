import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardRowStyle = css({
  label: 'card-row',
  margin: '0px 10vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
})

type CardRowProps = {
  children: ReactNode
}

export class CardRow extends PureComponent<CardRowProps> {
  render() {
    const { children } = this.props
    return <div className={cardRowStyle}>{children}</div>
  }
}
