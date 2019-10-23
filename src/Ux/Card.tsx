import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardStyle = css({
  label: 'card',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0px 13px 10px -7px rgba(0, 0, 0,0.1)',
  ':hover': {
    boxShadow: '0px 30px 18px -8px rgba(0, 0, 0,0.1)',
    // transform: 'scale(1.03, 1.03)',
  },
  minHeight: '100%',
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
