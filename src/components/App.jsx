import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;
    const check = checkIfContactExist(name);
    if (!check) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
      Notiflix.Notify.success('New contact succesfully added!');
      form.reset();
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
    }
  };

  const checkIfContactExist = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const findContacts = evt => {
    setFilter(evt.target.value);
  };

  const handleDelete = id => {
    const deleteContact = contacts.find(contact => contact.id === id);
    if (deleteContact) {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== id)
      );
      Notiflix.Notify.success(`${deleteContact.name} has been removed`);
    }
  };

  const filterSearch = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#000000',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={findContacts} filter={filter} />
      <ContactList onClick={handleDelete} contacts={filterSearch} />
    </div>
  );
}
