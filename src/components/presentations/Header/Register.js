import React from "react";
import Modal from 'react-modal';
import { FormControl } from 'react-bootstrap';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      registerInfo: {
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
    let registerInfo = this.state.registerInfo
    registerInfo[nameOrPass] = e.target.value
    this.setState({ registerInfo: registerInfo })
  }


  handleClick(e) {
    e.preventDefault()
    this.props.register(this.state.registerInfo)
    this.setState({
      registerInfo: {
        username: '',
        password: ''
      }
    })
    this.closeModal()
  }

  render() {

    return (
      <div>
        <button id="register-btn" className="header-btn" onClick={this.openModal.bind(this)}>Register</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel='Sign Up'
          style={styles}>
          <h2>Register</h2>

          <input 
            placeholder="username"
            value={this.state.registerInfo.username}
            onChange={this
              .handleChange
              .bind(this, 'username')} />

          <input 
            placeholder="password"
            value={this.state.registerInfo.password}
            onChange={this
              .handleChange
              .bind(this, 'password')} />

          <button onClick={this
            .handleClick
            .bind(this)}>Register</button>

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

export default Register;