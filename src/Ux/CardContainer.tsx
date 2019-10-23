import React, { PureComponent, ReactNode, Children } from 'react'
import { css } from 'emotion'

const cardContainerStyle = css({
  label: 'card-container',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  alignContent: 'center',
})

type CardContainerProps = {
  children: ReactNode
  itemsPerRow: number
}

export class CardContainer extends PureComponent<CardContainerProps> {
  render() {
    return <div className={cardContainerStyle}>{this.renderChildren()}</div>
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
    const percentage = (1 / itemsPerRow) * 100
    const width = `calc(${percentage}% - 20px)`
    return css({
      label: 'card-wrapper',
      minWidth: '250px',
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: width,
      margin: '10px',
    })
  }
}
