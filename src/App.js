import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCommentDots, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import Card from './Components/Card'
import UserProfile from './Containers/UserProfile'

library.add(faHeart, faCommentDots, faTwitter, faEllipsisH)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <UserProfile />
        </Card>
      </div>
    );
  }
}

export default App;
