import React from 'react'

import './index.css'

const Button = ({ variation, children, color }) => {
  if (variation === 'flat') {
    return (
      <button className='nt-button--flat' style={{ borderColor: color, color }}>
        {children}
      </button>
    )
  }

  if (variation === 'raised') {
    return (
      <button className='nt-button--raised' style={{ backgroundColor: color, borderColor: color }}>
        {children}
      </button>
    )
  }

  return (
    <button className='nt-button'>
      {children}
    </button>
  )
}

export default Button