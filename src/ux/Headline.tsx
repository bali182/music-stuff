import React, { PureComponent } from 'react'
import { css } from 'emotion'
import { TextAlignProperty } from 'csstype'

const headlineStyle = (alignment: TextAlignProperty) =>
  css({
    fontSize: '40px',
    fontWeight: 'bold',
    margin: '30px 10px',
    textAlign: alignment,
  })

type HeadlineProps = {
  text: string
  alignment: TextAlignProperty
}

export class Headline extends PureComponent<HeadlineProps> {
  render() {
    const { text, alignment } = this.props
    return <h1 className={headlineStyle(alignment)}>{text}</h1>
  }
}
