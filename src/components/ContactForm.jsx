import React, { useState, useEffect } from 'react';
import './contactform.css'; 

const ContactForm = ({ addContact, selectedContact, updateContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedContact) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" name="name" placeholder="Name" value={contact.name} onChange={handleChange} required />
      <input className="input" type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} required />
      <input className="input" type="tel" name="phone" placeholder="Phone" value={contact.phone} onChange={handleChange} required />
      <button className="button" type="submit">{selectedContact ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default ContactForm;
