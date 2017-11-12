import React from 'react'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'


class Index extends React.Component {


  render() {
    const currentUser =this.props.currentUser
    console.log(currentUser)
    return (
      <div id="header-container">
        <a id="header-title" href="#">Recipe Finder</a>
        <div id="header-btn-container">
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