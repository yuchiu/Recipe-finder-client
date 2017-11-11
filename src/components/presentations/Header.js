import React from 'react'


class Recipe extends React.Component {

  
  render() {
      
    return (
      <div id="header-container">
      <a id="header-title" href="#">Recipe Finder</a>
      <div id="header-btn-container">
        <button id="login-btn" className="header-btn">Login</button>
      <button id="register-btn" className="header-btn">Register</button>
      </div>
      </div>

    )
  }
}

export default Recipe;
