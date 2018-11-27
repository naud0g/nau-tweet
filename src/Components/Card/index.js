import React from 'react'

import './index.css'

const Card = ({ children }) => {
  return (
    <div className='nt-card'>
      {children}
    </div>
  )
}

export default Card