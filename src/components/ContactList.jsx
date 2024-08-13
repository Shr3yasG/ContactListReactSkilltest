import React from 'react';
import ContactItem from './ContactItem';
import './contactlist.css';

const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <div className="list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} editContact={editContact} />
      ))}
    </div>
  );
};

export default ContactList;
