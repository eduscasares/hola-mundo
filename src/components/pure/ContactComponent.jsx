import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {
  return (
    <div>
      
      <h2>Full name: { contact.surname }, { contact.name }</h2>
      <p>Email: <em>{ contact.email }</em></p>
      <p>State: { contact.connected ? 'Online' : 'Offline' }</p>

    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent;
