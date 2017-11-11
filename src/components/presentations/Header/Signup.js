import React from "react";
import Modal from 'react-modal';
import { FormControl } from 'react-bootstrap';
import axios from 'axios'
import authService from './services/authService'
class Signup extends React.Component {
  constructor(props) {
    super(props);

    const recipe = props.recipe;
    this.state = {
      modalIsOpen: false,
      signupInfo: {
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
    let signupInfo = this.state.signupInfo
    signupInfo[nameOrPass] = e.target.value
    this.setState({ signupInfo: signupInfo })
    console.log('username: ' + this.state.signupInfo.username + ' password: ' + this.state.signupInfo.password)
  }


  async handleClick(e) {
    e.preventDefault()

    const response = await authService.register({
      username :this.state.signupInfo.username,
      password: this.state.signupInfo.password
  })
  console.log(response.data)

    this.setState({
      signupInfo: {
        username: '',
        password: ''
      }
    })
  }

  render() {

    return (
      <div>
        <button id="signup-btn" className="header-btn" onClick={this.openModal.bind(this)}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel='Sign Up'
          style={styles}>
          <h2>Sign Up</h2>

          <input 
            placeholder="username"
            value={this.state.signupInfo.username}
            onChange={this
              .handleChange
              .bind(this, 'username')} />

          <input 
            placeholder="password"
            value={this.state.signupInfo.password}
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

export default Signup;