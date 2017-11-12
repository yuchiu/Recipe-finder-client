import React from "react";
class Logout extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {

    return (
      <div>
        <button id="logout-btn" className="header-btn" onClick={this.handleClick.bind(this)}>Log Out</button>
        
      </div>
    )
  }
}


export default Logout;