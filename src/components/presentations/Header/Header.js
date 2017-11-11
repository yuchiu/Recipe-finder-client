import React from 'react'

import Signup from './Signup'
import Login from './Login'
class Recipe extends React.Component {


  render() {

    return (
      <div id="header-container">
        <a id="header-title" href="#">Recipe Finder</a>
        <div id="header-btn-container">
          <Signup />
          <Login />
        </div>
      </div>

    )
  }
}

export default Recipe;
