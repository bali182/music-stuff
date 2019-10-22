import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardStyle = css({
  label: 'card',
  flex: '1 1 1px',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0px 13px 10px -7px rgba(0, 0, 0,0.1)',
  marginRight: '2vw',
  ':last-child': {
    marginRight: '0px',
  },
  ':hover': {
    boxShadow: '0px 30px 18px -8px rgba(0, 0, 0,0.1)',
    transform: 'scale(1.10, 1.10)',
  },
})

type CardProps = {
  children: ReactNode
}

export class Card extends PureComponent<CardProps> {
  render() {
    const { children } = this.props
    return <div className={cardStyle}>{children}</div>
  }
}
