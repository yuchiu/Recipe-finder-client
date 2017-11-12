import React from "react";
import Modal from 'react-modal';
import { FormControl } from 'react-bootstrap';
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      loginInfo: {
        username: '',
        password: ''
      }
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange(nameOrPass, e) {
    let loginInfo = this.state.loginInfo
    loginInfo[nameOrPass] = e.target.value
    this.setState({ loginInfo: loginInfo })
  }


  handleClick(e) {
    e.preventDefault()
    this.props.login(this.state.loginInfo)
    this.setState({
      loginInfo: {
        username: '',
        password: ''
      }
    })
    this.closeModal()
  }

  render() {

    return (
      <div>
        <button id="login-btn" className="header-btn" onClick={this.openModal.bind(this)}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel='Sign Up'
          style={styles}>
          <h2>Log In</h2>

          <input 
            placeholder="username"
            value={this.state.loginInfo.username}
            onChange={this
              .handleChange
              .bind(this, 'username')} />

          <input 
            placeholder="password"
            value={this.state.loginInfo.password}
            onChange={this
              .handleChange
              .bind(this, 'password')} />

          <button onClick={this
            .handleClick
            .bind(this)}>Log In</button>

        </Modal>
      </div>
    )
  }
}

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: 600,
    transform: 'translate(-50%, -50%)'
  }
}

export default Login;