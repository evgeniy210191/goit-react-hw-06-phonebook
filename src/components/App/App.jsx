import { Container } from './App.styled';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, deleteontact, filtered } from 'redux/reducer';
import { nanoid } from '@reduxjs/toolkit';

function App() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const deleteContact = contactsId => {
    return dispatch(deleteontact(contactsId));
  };

  const onSubmitContact = item => {
    const { name, number } = item;
    if (contacts.find(namePhonsbooks => namePhonsbooks.name === name)) {
      alert('Sory, your phonebook have same name yet');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    return dispatch(addNewContact(newContact));
  };

  const hendleChange = event => {
    dispatch(filtered(event.target.value));
  };

  const filterContactsByName = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContactsByName();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmitContact={onSubmitContact} />
      <h2>Contacts</h2>
      <Filter hendleChange={hendleChange} value={filter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
}

export default App;
