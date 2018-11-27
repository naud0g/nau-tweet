import React from 'react'

const Avatar = ({ src, width, shape }) => {
  return (
    <div className='avatar-container'>
      <img src={src} alt='avatar' style={{ width, borderRadius: shape ? 5 : '50%' }} />
    </div>
  )
}

export default Avatar