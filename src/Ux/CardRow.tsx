import React, { PureComponent, ReactNode, Children } from 'react'
import { css } from 'emotion'

const cardRowStyle = css({
  label: 'card-row',
  margin: '0px 10vw',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  alignContent: 'center',
})

type CardRowProps = {
  children: ReactNode
  itemsPerRow: number
}

export class CardRow extends PureComponent<CardRowProps> {
  render() {
    return <div className={cardRowStyle}>{this.renderChildren()}</div>
  }

  private renderChildren() {
    const { children } = this.props
    const cards = Children.toArray(children)
    return cards.map((card, index) => (
      <div className={this.getCardWrapperStyle()} key={index}>
        {card}
      </div>
    ))
  }

  private getCardWrapperStyle() {
    const { itemsPerRow } = this.props
    const width = (1 / (itemsPerRow + 1)) * 100
    return css({
      label: 'card-wrapper',
      flex: `1 0 ${width}%`,
      margin: '10px',
    })
  }
}
