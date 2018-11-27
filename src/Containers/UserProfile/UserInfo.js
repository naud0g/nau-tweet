import React from 'react'

import Avatar from '../../Components/Avatar'
import Button from '../../Components/Button'

import './UserInfo.css'
import photo from '../../Assets/Img/avatar.jpg'

const UserInfo = props => {

  // TODO: Hacer el resto de la información del usuario, BIEN.
  // TODO_2: Hacer componente para los TWEETS.

  return (
    <div className='user-info-container'>
      <Avatar src={photo} width={150} />

      <Button variation='flat' color='red'>Follow</Button>
    </div>
  )
}

export default UserInfo