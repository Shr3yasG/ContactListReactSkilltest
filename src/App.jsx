import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css'; // Import the regular CSS file

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setContacts(data);
  };

  const addContact = async (contact) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    const newContact = await response.json();
    setContacts([...contacts, newContact]);
  };

  const updateContact = async (contact) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    const updatedContact = await response.json();
    setContacts(contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c)));
    setSelectedContact(null);
  };

  const deleteContact = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'DELETE' });
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="app">
      <h1>Contact List</h1>
      <ContactForm addContact={addContact} selectedContact={selectedContact} updateContact={updateContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    </div>
  );
};

export default App;
