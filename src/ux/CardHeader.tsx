import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'

const cardHeaderStyle = (color: string) =>
  css({
    label: 'card-header',
    width: '100%',
    background: color,
    color: '#fff',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 13px 10px -7px rgba(0, 0, 0,0.1)',
  })

type CardHeaderProps = {
  color: string
  children: ReactNode
}

export class CardHeader extends PureComponent<CardHeaderProps> {
  render() {
    const { children, color } = this.props
    return <div className={cardHeaderStyle(color)}>{children}</div>
  }
}
