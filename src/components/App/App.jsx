import { useState, useEffect } from 'react';

import { ContactForm } from '../Phonebook/Phonebook';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Title from '../Title/Title';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts'));
  });
  const [filtered, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = event => {
    setContacts(contacts.filter(contact => contact.id !== event));
  };

  const formSubmitHandler = data => {
    console.log(data);
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        return alert(`${data.name} is already in contacts`);
      }
    }
    setContacts([data, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normolizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  );
  
  return (
    <>
      <div>
        <Title title={'Phonebook'}></Title>
        <ContactForm onFormSubmitHandler={formSubmitHandler}></ContactForm>
        <Title title={'Contacts'}></Title>
        <Filter value={filtered} onChange={changeFilter}></Filter>
        <ContactList
          items={filteredContacts}
          onDeleteContact={removeContact}
        ></ContactList>
      </div>
    </>
  );
}