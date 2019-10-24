import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import classNames from 'classnames'

const cardStyle = css({
  label: 'card',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0px 13px 10px -7px rgba(0, 0, 0,0.1)',
  ':hover': {
    boxShadow: '0px 30px 18px -8px rgba(0, 0, 0,0.1)',
    // transform: 'scale(1.03, 1.03)',
  },
})

type CardProps = {
  children: ReactNode
  className?: string
}

export class Card extends PureComponent<CardProps> {
  render() {
    const { children, className } = this.props
    return <div className={classNames(cardStyle, className)}>{children}</div>
  }
}
