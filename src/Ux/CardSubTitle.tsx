import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardSubTitleStyle = css({
  label: 'card-sub-title',
  display: 'block',
  fontSize: '18px',
  color: '#fff',
  opacity: 1,
  padding: '4px 14px',
  background: 'rgba(255, 255, 255, 0.2);',
})

type CardSubTitleProps = {
  children: ReactNode
}

export class CardSubTitle extends PureComponent<CardSubTitleProps> {
  render() {
    const { children } = this.props
    return <div className={cardSubTitleStyle}>{children}</div>
  }
}
