// Write your code here
import {Component} from 'react'
import './index.css'

const registerStatus = {
  close: 'REGISTRATIONS_CLOSED',
  register: 'REGISTERED',
  open: 'YET_TO_REGISTER',
  initial: 'INITIAL',
}

class ActiveEventRegistration extends Component {
  renderClose = () => (
    <div className="main">
      <div className="register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="img"
        />
        <h1 className="status">Registrations Are Closed Now!</h1>
        <p className="description">Stay tuned. We will reopen</p>
      </div>
    </div>
  )

  renderOpen = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="img"
      />
      <p className="status">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  renderRegistered = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="img"
      />
      <h1 className="status">You have already registered for the event</h1>
    </div>
  )

  renderNo = () => (
    <p className="description">
      Click on an event, to view its registration details
    </p>
  )

  render() {
    const {status} = this.props
    switch (status) {
      case registerStatus.close:
        return this.renderClose()
      case registerStatus.open:
        return this.renderOpen()
      case registerStatus.register:
        return this.renderRegistered()
      default:
        return this.renderNo()
    }
  }
}

export default ActiveEventRegistration
