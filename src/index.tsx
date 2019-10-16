import React from 'react'
import { render } from 'react-dom'
import { RandomNote } from './RandomNote/RandomNote'

render(<RandomNote timer={10000} />, document.getElementById('root'))
