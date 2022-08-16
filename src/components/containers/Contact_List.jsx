import React from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/ContactComponent';


const ContactList = () => {

    const defaultContact = new Contact('Name', 'Surname', 'email@email.com', true)

    return (
        <div>
            <ContactComponent contact={ defaultContact }  />
        </div>
    );
};


ContactList.propTypes = {

};


export default ContactList;
