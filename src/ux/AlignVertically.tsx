import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { AlignItemsProperty } from 'csstype'

type LocType = 'top' | 'center' | 'bottom'

export type AlignVerticallyProps = {
  label: 'align-vertical'
  children: ReactNode
  location: LocType
}

const alignerStyle = (location: AlignItemsProperty) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: location,
  })

export class AlignVertically extends PureComponent<AlignVerticallyProps> {
  render() {
    return <div className={alignerStyle(this.locTypeToCss())}></div>
  }

  locTypeToCss(): AlignItemsProperty {
    switch (this.props.location) {
      case 'top':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'bottom':
        return 'flex-end'
    }
  }
}
