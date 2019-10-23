import React, { PureComponent, ReactNode } from 'react'
import { css } from 'emotion'
import { colors } from './colors'

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

const buttonStyle = css({
  label: 'button',
  background: colors.darkGray,
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '28px',
  border: 'none',
  cursor: 'pointer',
  color: '#ffffff',
  padding: '16px 31px',
  textDecoration: 'none',
  outline: 'none',
  width: '100%',
  whiteSpace: 'nowrap',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  ':hover': {
    transform: 'scale(1.1, 1.1)',
  },
  ':disabled': {
    background: colors.lightGray,
    transform: 'none',
  },
})

export class Button extends PureComponent<ButtonProps> {
  render() {
    const { children, disabled, onClick } = this.props
    return (
      <button disabled={Boolean(disabled)} className={buttonStyle} onClick={onClick}>
        {children}
      </button>
    )
  }
}
