import React, { PureComponent } from 'react'
import { FretboardContext, FretboardContexType } from './FretboardContext'
import { css } from 'emotion'
import { getFretboardLeftSpacing } from './utils'

export class Nut extends PureComponent {
  render() {
    return (
      <FretboardContext.Consumer>
        {(context) => <div className={this.getNutStyle(context)} />}
      </FretboardContext.Consumer>
    )
  }
  getNutStyle(context: FretboardContexType) {
    return css({
      label: 'nut',
      height: '100%',
      width: '8px',
      backgroundColor: '#e3dac9',
      borderRadius: '3px',
      marginLeft: `${getFretboardLeftSpacing(context)}px`,
    })
  }
}
