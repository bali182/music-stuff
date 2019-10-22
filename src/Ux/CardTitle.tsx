import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardTitleStyle = css({
  label: 'card-title',
  display: 'block',
  fontSize: '26px',
  fontWeight: 'bold',
  color: '#fff',
  opacity: 1,
  margin: '14px 14px 8px 14px',
})

type CardTitleProps = {
  children: ReactNode
}

export class CardTitle extends PureComponent<CardTitleProps> {
  render() {
    const { children } = this.props
    return <div className={cardTitleStyle}>{children}</div>
  }
}
