import React from 'react'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'


class Index extends React.Component {


  render() {
    const currentUser =this.props.currentUser
    return (
      <div id="header-container">
      <div id="header-title-container">
        <a id="header-title" href="index.html">Recipe Finder</a>
        </div>
        <div id="header-btn-container">
        {
          currentUser.username!=='none'
            ? 
            <p id="header-message">Hi, {currentUser.username}</p>
            : null
        }
        {
          currentUser.username=='none'
            ? 
            <Register  currentUser={this.props.currentUser} register={this.props.register}/>
            
            : null
        }
        {
          currentUser.username=='none'
            ? 
            <Login  currentUser={this.props.currentUser} login={this.props.login}/>
            
            : null
        }
        {
          currentUser.username!=='none'
            ? 
            <Logout logout={this.props.logout}/>
            : null
        }</div>
      </div>

    )
  }
}

export default Index;