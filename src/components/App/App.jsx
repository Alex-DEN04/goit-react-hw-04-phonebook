import React from 'react';

import { ContactForm } from '../Phonebook/Phonebook';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Title from '../Title/Title';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  removeContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  formSubmitHandler = data => {
    for (const contact of this.state.contacts) {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        return alert(`${data.name} is already in contacts`);
      }
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
    return (
      <>
        <div>
          <Title title={'Phonebook'}></Title>
          <ContactForm
            onFormSubmitHandler={this.formSubmitHandler}
          ></ContactForm>
          <Title title={'Contacts'}></Title>
          <Filter value={filter} onChange={this.changeFilter}></Filter>
          <ContactList
            items={filteredContacts}
            onDeleteContact={this.removeContact}
          ></ContactList>
        </div>
      </>
    );
  }
}

export default App;
