import React, { useState  } from 'react'
import PropTypes from 'prop-types'
// import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {

  const [connected, setConnected] = useState(contact)

  return (
    <div>
      
      <h2>Full name: { contact.surname }, { contact.name }</h2>
      <p>Email: <em>{ contact.email }</em></p>
      <p>State: { connected  === false ? 'Offline' : 'Online' }</p>

      <button onClick={() => setConnected(!connected)}>
        { connected === false ? 'Connect' : 'Close session'}
      </button>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.bool,
}

export default ContactComponent;
