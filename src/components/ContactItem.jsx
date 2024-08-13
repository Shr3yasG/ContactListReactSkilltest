import React from 'react';
import './contactitem.css'; 

const ContactItem = ({ contact, deleteContact, editContact }) => {
  return (
    <div className="contactItem">
      <div className="contactInfo">
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <button className="button" onClick={() => editContact(contact)}>Edit</button>
        <button className="button deleteButton" onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;
