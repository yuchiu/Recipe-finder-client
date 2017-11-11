import React from "react";
import Modal from 'react-modal';
import { FormControl } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);

    const recipe = props.recipe;
    this.state = {
      modalIsOpen: false,

    }
    this.openModal = this
      .openModal
      .bind(this);
    this.closeModal = this
      .closeModal
      .bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }



  render() {

    return (
      <div>
        <button id="login-btn" className="header-btn" onClick={this.openModal}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='Sign Up'
          style={styles}>
          <h2
            className='modal-header'>Log In</h2>
            <input />
            <input />
            <button>Log In</button>

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