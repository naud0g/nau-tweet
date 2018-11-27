import React from 'react'

import UserInfo from './UserInfo'

class UserProfile extends React.Component {
  render () {
    return (
      <div className='user-profile-container'>
        <UserInfo />
      </div>
    )
  }
}

export default UserProfile